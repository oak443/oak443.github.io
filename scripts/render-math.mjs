// Gemini 3 生成
import { readFileSync, writeFileSync } from 'fs';
import { globby } from 'globby';
import katex from 'katex';

// 渲染函数：将公式转为 HTML
const renderMath = (formula, displayMode) => {
  try {
    return katex.renderToString(formula, {
      displayMode,
      throwOnError: false
    });
  } catch (err) {
    console.error("KaTeX error:", err);
    return formula;
  }
};

async function processHtml() {
  const paths = await globby(['public/**/*.html']);

  for (const path of paths) {
    let html = readFileSync(path, 'utf-8');
    let originalHtml = html;

    // 1. 处理块级公式 $$...$$
    html = html.replace(/\$\$(.+?)\$\$/gs, (_, formula) => {
      return renderMath(formula, true);
    });

    // 2. 处理行内公式 $...$
    // 注意：这里使用了一个简单的正则，它会避开已经是 HTML 标签内部的情况
    html = html.replace(/(?<!\\)\$((?!\s).+?)(?<!\s)\$/g, (_, formula) => {
      return renderMath(formula, false);
    });

    if (html !== originalHtml) {
      writeFileSync(path, html);
      console.log(`✅ 已成功预渲染: ${path}`);
    }
  }
}

processHtml().catch(console.error);

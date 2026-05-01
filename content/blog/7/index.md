+++
title = "[f44] 配置 Fcitx5 输入法"
date = 2026-05-01T19:02+08:00
[extra]
updated = 2026-05-01T19:02+08:00
+++

主要使用了 Flatpak Fcitx5。在开始之前，建议先 [配置 Flatpak 的镜像源](https://oak.md/blog/6/) 。
### 1. 从 Flathub 安装 Fcitx5
首先安装 Fcitx5 本体。
```bash
flatpak install flathub org.fcitx.Fcitx5
```
然后安装需要的扩展，因为我要输入中文，所以应该安装 `Chinese Addons` 和 `Rime for Fcitx 5` 。
```bash
flatpak install flathub org.fcitx.Fcitx5.Addon.ChineseAddons
flatpak install flathub org.fcitx.Fcitx5.Addon.Rime
```
所有的扩展都可以在 [Flathub](https://flathub.org/en/apps/org.fcitx.Fcitx5) 找到。
### 2. 安装 GNOME 扩展（对于 GNOME 桌面环境）
启动 Fcitx 5，会弹出一个通知，建议你安装 [Input Method Panel](https://extensions.gnome.org/extension/261/kimpanel/)。听他的，安装。
### 2. 设置全局环境变量（对于 COSMIC 桌面环境）
在 COSMIC 下，即使是 Flatpak 的 Fcitx5，也需要配置环境变量才能工作，我也不知道这是为什么，但是这似乎是被提倡的。即使这样，在一些应用，尤其是非 Flatpak 应用中，输入法仍然无法工作，我的建议是切换到 GNOME 桌面环境，解决 100% 的问题。上述问题在 2026 年 4 月存在。
```bash
# 写入环境变量到 bash_profile
cat << 'EOF' >> ~/.bash_profile

# Fcitx5 Flatpak 环境变量
export XMODIFIERS=@im=fcitx
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export SDL_IM_MODULE=fcitx
export GLFW_IM_MODULE=ibus
EOF
```
这样效果不错，并不会把文件弄乱。
### 3. 设置 Rime
在 Fcitx5 的设置中，把 中州韻（Rime）从 可用的输入法 列表移动到 当前的输入法 列表。
![向 可用的输入法 列表中添加 Rime 。](1.avif)
这样就可以 Ctrl + Space 切到 Rime ，打出中文！

+++
title = "Hello Zola! Hello oak.md!!"
date = 2026-04-18
description = "qingshuruwenben"

[taxonomies]
+++

我的博客上线了！这是一个测试页面。

### 数学公式
这里的公式 $a^2 + b^2 = c^2$ 会在行内显示。
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

### 图片

![透明背景的测试图片](20260414_092805.jpg.webp "这是一张透明背景的彩色图片，显示一个人类，并标注了一行中文。")

### 代码块
C++14 code:
```c++
#include <bits/stdc++.h>
#define ll long long
using namespace std;

char mat[110][110];
ll R, C, K;

int main()
{
    scanf("%lld %lld %lld", &R, &C, &K);
    ll tot = 0;
    for (ll i = 0; i < R; i++)
        for (ll j = 0; j < C; j++)
            cin >> mat[i][j];
    tot = R * (C - K + 1) + (R - K + 1) * C;
    // subtask1
    for (ll i = 0; i < R; i++)
        for (ll j = 0; j <= C - K; j++)
            for (ll pos = j; pos < j + K; pos++)
                if (mat[i][pos] != '.')
                {
                    tot--;
                    break;
                }
    // subtask2
    for (ll i = 0; i <= R - K; i++)
        for (ll j = 0; j < C; j++)
            for (ll pos = i; pos < i + K; pos++)
                if (mat[pos][j] != '.')
                {
                    tot--;
                    break;
                }
    if (K == 1)
        return printf("%lld \n", tot / 2), 0;
    printf("%lld \n", tot);
    return 0;
}
```
Java17 code:
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int N = input.nextInt();
        int size = N + 1;
        int[][] mp = new int[size][size];
        int[][][] dp = new int[size + N][size][size];

        while (true) {
            int x = input.nextInt(), y = input.nextInt(), v = input.nextInt();
            if (x == 0 && y == 0 && v == 0) break;
            mp[x][y] = v;
        }

        for (int i = 2; i <= N * 2; i ++) {
            for (int j = 1; j <= N; j ++) {
                for (int k = 1; k <= N; k ++) {
                    int j1 = i - j, j2 = i - k;
                    if (j1 >= 1 && j1 <= N && j2 >= 1 && j2 <= N) {
                        int t = mp[j][j1];
                        if (j != k) t += mp[k][j2];
                        dp[i][j][k] = Math.max(dp[i - 1][j - 1][k - 1] + t, Math.max(dp[i - 1][j - 1][k] + t,
                                Math.max(dp[i - 1][j][k - 1] + t, dp[i - 1][j][k] + t)));
                    }
                }
            }
        }

        System.out.println(dp[N + N][N][N]);
    }
}
```
Rust code:
```rust
use super::User;

#[derive(Debug, Clone)]
pub struct AuthUser {
    phpsessid: String,
    id: String,
}
impl AuthUser {
    pub fn new(phpsessid: &str) -> anyhow::Result<Self> {
        Ok(Self {
            phpsessid: phpsessid.to_owned(),
            id: if let Some((id, _)) = phpsessid.split_once('_') {
                id.to_owned()
            } else {
                panic!("invalid phpsessid");
            },
        })
    }
    pub fn phpsessid(&self) -> &str {
        &self.phpsessid
    }
}
impl User for AuthUser {
    fn id(&self) -> &str {
        &self.id
    }
}
```

![The night F43 Wallpaper](https://fedoraproject.org/w/uploads/b/b8/F43-DAY_final_night_%28small%29.png "The Challenger spaceship lifting off into the night sky, with purple and blue colors gradiented in the sky. ")

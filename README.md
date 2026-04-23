# miho.22light — LP納品物

## ファイル構成

```
03_output-html/
├ index.html          ← LP本体
├ assets/
│  ├ css/style.css   ← 全スタイル（CSS変数 + モバイルファースト）
│  └ js/main.js      ← フェードイン・ハンバーガー・FAQ・スムーススクロール
└ README.md
```

## 納品前に必ず差し替える箇所

| 箇所 | 現在の値 | 差し替え内容 |
|------|---------|------------|
| FV画像 `src` | Unsplash URL | mihoのプロフィール写真（推奨: 480×600px以上） |
| Story画像 `src` | Unsplash URL | mihoのプロフィール写真（推奨: 360×420px以上） |
| CTAボタン `href` | `#` | GoogleフォームまたはカレンダーURL |
| フッターメール `href` | `info@example.com` | 実際のメールアドレス |
| Instagram URL | `/miho.22light` | 実際のInstagramプロフィールURL |

## ローカル確認方法

```bash
# VS Code Live Server 推奨
# または
npx http-server . -p 3000
# → http://localhost:3000 で確認
```

## デプロイ (Vercel)

```bash
# プロジェクトルートで
npx vercel --prod
```

## カラーパレット

| 変数名 | HEX | 用途 |
|--------|-----|------|
| `--color-main`  | #F2B8C0 | ボタン・アクセント |
| `--color-pale`  | #FDE8EC | 背景セクション |
| `--color-dusty` | #D4909A | 見出し・強調 |
| `--color-base`  | #FDF8F8 | ベース背景 |
| `--color-text`  | #3D2C2C | 本文テキスト |
| `--color-sub`   | #8C6B6B | サブテキスト |

## フォント (Google Fonts)

- **日本語**: Noto Serif JP（300/400/500/600）
- **英字**: Cormorant Garamond（300/400/500 + italic）

# 9qu1.github.io — トップページ

独自ドメイン `9qu1.com` のトップページ(静的HTML1枚)。

## 役割

このリポジトリはGitHubの**ユーザーサイト**なので、ここに `CNAME`(= `9qu1.com`)を置くと、
**同じアカウントの全プロジェクトサイトが自動的に同ドメイン配下**に入る。

| URL | 中身 |
|---|---|
| https://9qu1.com/ | このリポジトリ(トップページ) |
| https://9qu1.com/ai-news-daily/ | [ai-news-daily](https://github.com/9qu1/ai-news-daily) — AIデイリー |
| https://9qu1.com/invest-daily/ | [invest-daily](https://github.com/9qu1/invest-daily) — 投資デイリー |

各サイトのリポジトリ側は変更不要(相対リンク設計のため)。

## DNS設定(お名前.com)

Aレコード4本(GitHub Pages) + `www` のCNAME。

| 種別 | ホスト名 | 値 |
|---|---|---|
| A | (空欄) | 185.199.108.153 |
| A | (空欄) | 185.199.109.153 |
| A | (空欄) | 185.199.110.153 |
| A | (空欄) | 185.199.111.153 |
| CNAME | www | 9qu1.github.io. |

## AdSense

- 審査用スクリプトは `index.html` の `<!-- AdSense: ... -->` コメント位置に貼る(各サイト側は `config/site.json` の `adsenseClient` にIDを入れると全ページの `<head>` に自動挿入される)。
- `ads.txt` はドメイン直下(= このリポジトリのルート)に置く必要がある。合格後にパブリッシャーIDを記載して追加する。

## 編集方法

`index.html` を直接編集してpushするだけ(ビルド不要)。

/* ============================================
   アプリデータ
   ここを編集するだけでカードを追加・変更できます。

   ■ 並び順  … 新しく作ったものが上。追加するときは配列の先頭に足す
   ■ カード幅 … 全カード1ブロックで統一。
                特定のアプリだけ目立たせたいときは size: "wide" で2ブロックにできる
   ■ category … "service" | "game" | "shindan" | "tool" | "blog" | "video" | "discord" | "extension"
   ■ status   … "R-18" | "開発中" | "限定公開" | "公開中止中"(省略可)
   ■ note     … 補足の一文(省略可)
   ■ slowStart… true でRender無料枠の起動待ちの注意書きを表示
   ■ icon     … 絵文字の代わりに出すアイコン画像(img/icons/ の中・省略可。無ければ emoji)
                 そのサイトのファビコン（ブラウザのタブに出る絵）を 96px の正方形にしたもの。
                 読めなかったときは emoji に戻るので、emoji もファビコンに近い字にしておく
   ■ iconShape… アイコンの形(省略可)。省略 = 四角い地のある絵（タイルいっぱいに出す）
                 "glyph" = 透明な地に形だけの絵（タイルの地の上に一回り小さく置く。絵文字と同じ見せ方）
                 "round" = 丸い絵（YouTube のチャンネルのアイコンなど）
   ■ bg       … カードの右側に敷く背景の画像(省略可)。サイトの画面は img/bg/○○.webp(横960px)
   ■ bgTone   … 背景の画面の明るさ "light" | "dark"(bg があるときは書く)。
                 ダークモードでは "light" の画面だけを沈め（"dark" は沈めない）、
                 ライトモードでは "dark" の画面に白い覆いをかけすぎず、灰色に濁らせない。
                 目安は画像の平均の明るさが半分より上なら "light"（いまの画像は 180 以上か 50 以下に分かれる）
   ■ bgPos    … 背景のどこを見せるか(CSS の object-position・省略時は上の中央。SVG の絵は右寄せ)
   ■ bgZoom   … 背景の寄せ(1.5 なら1.5倍。bgPos の位置を中心に拡大・省略可)
                 画面の題字がカードの名前とぶつかるときに、題字のない所へ寄せる
   ※ 説明文・補足・タグは既定で隠れ、「くわしく」か「説明を表示」で出る
   ============================================ */
const APPS = [
  /* ---------- いちばん上に固定（size: "featured" = 件数のタイルより上・横いっぱい・枠に色。style.css の最後） ---------- */
  {
    name: "くぁくぁの予定",
    category: "tool",
    emoji: "🗓️",
    icon: "img/icons/schedule.webp",
    size: "featured",
    description:
      "くぁくぁのこれからの予定を、一覧・月・週で見られる予定表。予定を押すと時間や説明も見られる。",
    tags: ["React", "Firebase", "予定表"],
    links: [{ label: "予定を見る", url: "https://9qu1.com/schedule/" }],
  },

  /* ---------- 2026年10月 ---------- */
  {
    name: "アマヤドリ",
    category: "service",
    emoji: "🌧️",
    icon: "img/icons/amayadori.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/amayadori.webp",
    bgTone: "dark",
    description:
      "雨・焚き火・タイピング・ノートと鉛筆の音を流しながら、ポモドーロタイマーで集中できる部屋。窓の雨や湯気、暖炉の火が少しずつ動く夜の部屋の絵つき。登録なしで無料。",
    tags: ["JavaScript", "環境音", "ポモドーロ"],
    links: [{ label: "使ってみる", url: "https://9qu1.com/amayadori/" }],
  },
  {
    name: "YouTubeダウンローダー",
    category: "extension",
    emoji: "📥",
    icon: "img/icons/ytsaver.webp",
    size: "",
    bg: "img/youtube-downloader.svg",
    status: "公開中止中",
    description:
      "YouTubeのプレーヤーにマウスを乗せると出る「保存」ボタンから、動画や音声をワンクリックで保存できるChrome拡張。画質は5種類から選べて、進み具合の表示と終わったときの通知つき。PCのyt-dlpと連携して動く。",
    note: "各サービスの利用規約との兼ね合いから、個人利用にとどめています。",
    tags: ["Chrome拡張", "JavaScript", "Node.js"],
    links: [],
  },

  /* ---------- 2026年9月 ---------- */
  {
    name: "ナカミド",
    category: "service",
    emoji: "🪞",
    icon: "img/icons/nakamido.webp",
    size: "",
    bg: "img/bg/nakamido.webp",
    bgTone: "light",
    description:
      "ひとつの角度では測れない「あなたの中身」を、いくつもの診断で測るポータル。ひとりで答える診断のほか、友達に答えてもらう診断や、反応の速さを見るテストもある。登録なしで無料。",
    tags: ["Cloudflare Workers", "D1", "診断"],
    links: [{ label: "診断してみる", url: "https://nakamido.com/" }],
  },
  {
    name: "トクマス",
    category: "service",
    emoji: "📅",
    icon: "img/icons/tokumasu.webp",
    size: "",
    bg: "img/bg/tokumasu.webp",
    bgTone: "light",
    description:
      "ナンプレ・クロスワード・ノノグラムが毎日1問ずつ届く、日めくりのパズルサイト。解くとポイントが貯まり、完成した絵は図鑑に残る。数字ぬりえ・カラーノノグラム・ライトアップ・リンクブリッジの問題集や印刷用の問題もある。登録なしで無料。",
    tags: ["JavaScript", "パズル", "毎日更新"],
    links: [{ label: "遊んでみる", url: "https://tokumasu.net/" }],
  },
  {
    name: "スキャナン",
    category: "game",
    emoji: "🔍",
    icon: "img/icons/scanan.webp",
    size: "",
    bg: "img/bg/scanan.webp",
    bgTone: "light",
    description:
      "むしめがねをかざすと、みんなの頭の上に数字が浮かぶオンラインパーティーゲーム。数字の持ち主当て・自己申告とのズレ・ピタリ予想・数字だけでお題を当てる親当ての4モード。お題は全年齢とちょい下世話の2パック。スマホで3〜12人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://scanan-wzbe.onrender.com" }],
  },

  /* ---------- 2026年8月 ---------- */
  {
    name: "100ピタッ‼︎",
    category: "game",
    emoji: "💯",
    icon: "img/icons/pita100.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/pita100.webp",
    bgTone: "light",
    description:
      "チームごとに「数字で答えられるお題」を出し、全員の回答の合計をゴール（最初は100）にピタッと近づけたチームが勝つ。お題を考える人は毎回ランダム、巡の数とゴールはロビーで変えられる。「0」や「20以上」の回答が集まるとペナルティ+20。2〜4チーム×2〜6人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://one00pita.onrender.com" }],
  },
  {
    name: "コトバト",
    category: "game",
    emoji: "🥊",
    icon: "img/icons/kotobato.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/kotobato.webp",
    bgTone: "dark",
    description:
      "親だけが知る「ヒミツのキジュン」をめぐるワードバトル大喜利。子が自由にワードを出し、親が軍配を上げて王者を決める。勝敗のクセからキジュンを見抜き、決戦で優勝ワードを出した人の勝ち。お題125問・3〜16人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://kotobato.onrender.com" }],
  },
  {
    name: "探索者メーカー",
    category: "tool",
    emoji: "🎲",
    size: "",
    bg: "img/bg/cocmaker.webp",
    bgTone: "dark",
    bgPos: "center bottom",
    bgZoom: 1.6,
    description:
      "12の2択に答えて9つのダイスを振るだけで、クトゥルフ神話TRPG（7版）の探索者が完成。職業・能力値・技能まで自動で配分し、カード画像の保存とココフォリアの駒の出力に対応。非公式のファンツール。",
    tags: ["JavaScript", "Canvas", "TRPG"],
    links: [{ label: "つくってみる", url: "https://coc-maker.onrender.com/" }],
  },
  {
    name: "みんなでTier表",
    category: "game",
    emoji: "🏆",
    size: "",
    bg: "img/bg/gametier.webp",
    bgTone: "dark",
    description:
      "「どっちが上？」の2択投票をみんなで集めて、S〜DのTier表を自動で作る集合知アプリ。知らない人は「わからない」で飛ばせて、順位はイロレーティングで計算。お題ごとにTier表を作ってURLで共有できる。",
    tags: ["Node.js", "Firestore", "投票"],
    slowStart: true,
    links: [{ label: "投票してみる", url: "https://game-tier-fn4u.onrender.com/" }],
  },
  {
    name: "リカイド",
    category: "service",
    emoji: "🐱",
    icon: "img/icons/rikaido.webp",
    size: "",
    bg: "img/bg/rikaido.webp",
    bgTone: "light",
    description:
      "2択のじぶんクイズを作って友達にシェア。「本人ならどっち？」を予想して正解数でランキング。ジャンル別の理解度、答えのクセから出す16タイプ診断、毎日の全国投票「きょうの2択」つき。英語・韓国語・繁体字版もある。",
    tags: ["Firestore", "クイズ", "ランキング"],
    links: [{ label: "つくってみる", url: "https://rikaido.me/" }],
  },
  {
    name: "ヨミベット",
    category: "game",
    emoji: "🎰",
    icon: "img/icons/yomibet.webp",
    size: "",
    bg: "img/bg/yomibet.webp",
    bgTone: "dark",
    description:
      "回答者が5問の二択に答えると、コマがピラミッドを1段ずつ落ちていく。全員が「どのマスを通るか」にチップを賭ける価値観ベッティング。経路が合流するので真ん中は堅く、端まで読み切れば最高8倍。回答者も「自分を当ててくる人」を指名して賭ける。お題は恋愛・友情・仕事・日常・究極の選択・R18の6ジャンル350問から毎回ランダムに配置される。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://yomibet.onrender.com" }],
  },
  {
    name: "ずんだ雑学ラボ",
    category: "blog",
    emoji: "🧪",
    icon: "img/icons/zatsugaku.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/zatsugaku.webp",
    bgTone: "light",
    description:
      "行列に並んでしまう、布団から出られない——日常のふしぎを、心理学や行動経済学の実験をたどってほどく雑学ノート。YouTubeの雑学動画の記事版で、記事の中で動画も見られる。",
    tags: ["Node.js", "GitHub Pages", "心理学"],
    links: [{ label: "読んでみる", url: "https://9qu1.com/zatsugaku-lab/" }],
  },
  {
    name: "情緒婚活",
    category: "shindan",
    emoji: "📋",
    icon: "img/icons/jocho.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/jocho.webp",
    bgTone: "light",
    description:
      "32問で「婚活プロフィールカード」と「取扱説明書」を発行する診断サイト。情緒年収やメンタル貯金などの架空スペックつき。気になる人に送れば二人の相性証明書、友達に送れば他己診断の結果が出る。画像で保存可能。",
    tags: ["Node.js", "Canvas", "診断"],
    links: [{ label: "診断してみる", url: "https://jocho-konkatsu.onrender.com" }],
  },

  /* ---------- 2026年7月 ---------- */
  {
    name: "ダイスダービー",
    category: "game",
    emoji: "🏇",
    size: "",
    bg: "img/bg/dicederby.webp",
    bgTone: "dark",
    bgPos: "center 70%",
    bgZoom: 1.5,
    description:
      "サイコロの出目で9頭の馬が走る、リアルタイム競馬ベッティング。走っている最中に賭けるのがルールで、3頭が締切ラインを越えたら受付終了。毎レース選ぶ能力カード10種、一騎打ちのマッチレース、勝率のライブ表示つき。最大8人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://dice-derby.onrender.com" }],
  },
  {
    name: "ウラヘキ16",
    category: "shindan",
    emoji: "🎭",
    icon: "img/icons/uraheki.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/uraheki.webp",
    bgTone: "dark",
    status: "R-18",
    description:
      "40問の質問に答えて、隠れた性癖を16タイプに判定する診断サイト。回答はサーバーに送らず全部ブラウザ内で処理するプライバシー設計。タイプ別の解説と相性診断つき、全機能無料。",
    tags: ["Node.js", "Firestore", "診断"],
    links: [{ label: "診断してみる", url: "https://uraheki.onrender.com" }],
  },
  {
    name: "ずんだ雑学ラボ（YouTube）",
    category: "video",
    emoji: "🎬",
    icon: "img/icons/ytzunda.webp",
    iconShape: "round",
    size: "",
    bg: "img/bg/ytzunda.webp",
    bgTone: "dark",
    bgPos: "right bottom",
    bgZoom: 2.6,
    description:
      "日常の「なぜ」を心理学や行動経済学でほどく雑学チャンネル。ずんだもんが解説するショートと長めの回を毎日公開している。台本づくりから書き出し・投稿まで自動で回している。",
    tags: ["Remotion", "VOICEVOX", "動画の自動生成"],
    links: [{ label: "チャンネルを見る", url: "https://www.youtube.com/@zundamonn_zatsugaku" }],
  },
  {
    name: "リカイド公式チャンネル",
    category: "video",
    emoji: "📺",
    icon: "img/icons/ytrikaido.webp",
    iconShape: "round",
    size: "",
    bg: "img/bg/ytrikaido.webp",
    bgTone: "light",
    bgPos: "right bottom",
    bgZoom: 2.6,
    description:
      "理解度チェック「リカイド」の公式チャンネル。遊び方や仕組みを説明する動画を、日本語・英語・韓国語・繁体字の音声つきで公開している。",
    tags: ["Remotion", "多言語の音声"],
    links: [{ label: "チャンネルを見る", url: "https://www.youtube.com/@rikaido_official" }],
  },
  {
    name: "AIデイリー",
    category: "blog",
    emoji: "🤖",
    icon: "img/icons/ainews.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/ainews.webp",
    bgTone: "light",
    description:
      "毎朝自動で記事が生成・公開されるAIニュースサイト。記事作成からビルド・公開・SNS投稿まで全自動で運用中。",
    tags: ["Node.js", "GitHub Actions", "GitHub Pages"],
    links: [{ label: "読んでみる", url: "https://9qu1.com/ai-news-daily/" }],
  },
  {
    name: "投資デイリー",
    category: "blog",
    emoji: "📈",
    icon: "img/icons/invest.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/invest.webp",
    bgTone: "light",
    description:
      "朝・大引け・夜の1日3回自動更新される株式市況サイト。AIデイリーの姉妹サイト。",
    tags: ["Node.js", "GitHub Actions"],
    links: [{ label: "読んでみる", url: "https://9qu1.com/invest-daily/" }],
  },
  {
    name: "中学学力テストバトル",
    category: "game",
    emoji: "📝",
    size: "",
    bg: "img/bg/exam.webp",
    bgTone: "dark",
    bgPos: "center bottom",
    bgZoom: 1.5,
    description:
      "友達とリアルタイムで競う5教科クイズ。ルームコードで参加して制限時間内に回答、最下位から発表されるランキング演出つき。全500問収録。",
    tags: ["React", "tRPC", "SQLite"],
    slowStart: true,
    links: [{ label: "挑戦してみる", url: "https://exam-platform-ufa8.onrender.com" }],
  },
  {
    name: "DBDキラー遭遇カウンター",
    category: "tool",
    emoji: "🔪",
    icon: "img/icons/dbdcounter.webp",
    iconShape: "glyph",
    size: "",
    bg: "img/bg/dbdcounter.webp",
    bgTone: "dark",
    description:
      "Dead by Daylightで遭遇したキラーと勝敗を記録する非公式ファンツール。全43キラー対応、脱出率も自動集計。データはブラウザ内に保存。",
    tags: ["JavaScript", "localStorage"],
    links: [{ label: "使ってみる", url: "https://dbd-killer-counter.onrender.com" }],
  },
  {
    name: "発表順番ジェネレーター",
    category: "tool",
    emoji: "🎤",
    size: "",
    bg: "img/bg/presenter.webp",
    bgTone: "light",
    description:
      "発表の順番をランダムに決めるジェネレーター。2〜100人対応、シャッフルアニメーションつき。",
    tags: ["React", "framer-motion"],
    links: [{ label: "使ってみる", url: "https://random-presenter.onrender.com" }],
  },
  {
    name: "くあぼっと",
    category: "discord",
    emoji: "🤖",
    icon: "img/icons/qaqabot.webp",
    size: "",
    bg: "img/bg/qaqabot.webp",
    bgTone: "dark",
    bgPos: "right bottom",
    bgZoom: 1.8,
    description:
      "Discordサーバーを盛り上げる無料の多機能Bot。ゲーム募集の管理、VC滞在時間の記録、サーバーログ、AIへの質問応答までこなす。24時間稼働中で、誰でも自分のサーバーに導入できる。",
    tags: ["Node.js", "discord.js", "PostgreSQL", "Claude API"],
    links: [{ label: "公式サイト", url: "https://qaqa-ih4o.onrender.com" }],
  },
  {
    name: "チーム分けツール",
    category: "tool",
    emoji: "👥",
    size: "",
    bg: "img/bg/teamsplit.webp",
    bgTone: "light",
    description:
      "メンバーを一括入力して2〜8チームにランダム分け。再シャッフルも結果コピーもワンクリック。",
    tags: ["React", "Tailwind"],
    links: [{ label: "使ってみる", url: "https://team-splitter-gjao.onrender.com" }],
  },
  {
    name: "2048 ADRENALINE",
    category: "game",
    emoji: "🔢",
    size: "",
    bg: "img/bg/game2048.webp",
    bgTone: "dark",
    description:
      "定番パズル「2048」にオンラインランキング(全期間/週間/日間)を搭載。スコア登録は名前だけでOK、世界中のプレイヤーと競える。",
    tags: ["React", "tRPC", "Firestore"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://two048-adrenaline.onrender.com" }],
  },
  {
    name: "ランダム文字抽選",
    category: "tool",
    emoji: "🔤",
    size: "",
    bg: "img/bg/randletter.webp",
    bgTone: "light",
    description:
      "アルファベットや数字を範囲指定してランダムに1つ抽選するアプリ。ブルータリズムデザインが目印。",
    tags: ["React", "Vite"],
    links: [{ label: "使ってみる", url: "https://random-letter-ukq5.onrender.com" }],
  },
  {
    name: "席替えアプリ",
    category: "tool",
    emoji: "🪑",
    size: "",
    bg: "img/bg/seatshuffle.webp",
    bgTone: "light",
    description:
      "クラスや職場の席替えをランダムに決めるアプリ。座席レイアウトを作ってメンバーを流し込むだけ。",
    tags: ["React", "Vite", "Tailwind"],
    links: [{ label: "使ってみる", url: "https://seat-shuffle-b0gb.onrender.com" }],
  },
  {
    name: "イントロドンカルタ",
    category: "game",
    emoji: "🎵",
    size: "",
    bg: "img/bg/introdon.webp",
    bgTone: "dark",
    description:
      "YouTubeの曲イントロを流して、正しい札を早い者勝ちでタップするオンラインカルタ。問題セットはURLを貼るだけで作れて、出題数を選ぶと毎回ちがう曲が抽選されるので同じセットで何度でも遊べる。スマホからQRコードで参加。",
    tags: ["Node.js", "Socket.IO", "YouTube API"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://intro-don-karuta.onrender.com" }],
  },
  {
    name: "王への請願 オンライン対戦",
    category: "game",
    emoji: "🎲",
    size: "",
    bg: "img/bg/dicebattle.webp",
    bgTone: "dark",
    description:
      "ボードゲーム「王への請願(To Court the King)」をブラウザでオンライン対戦できるようにしたWebアプリ。友達が別々の端末からリアルタイムに対戦できる。",
    tags: ["Node.js", "Socket.IO"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://dice-battle-g25r.onrender.com" }],
  },

  /* ---------- 2026年6月 ---------- */
  {
    name: "サンレンタン",
    category: "game",
    emoji: "🎯",
    size: "",
    bg: "img/bg/sanrentan.webp",
    bgTone: "light",
    description:
      "お題に対する相手の答えのランキングを予想して当てる、リアルタイム価値観当てパーティゲーム。競馬の三連単がモチーフで、部屋コードを共有するだけで全員スマホから参加OK。ボードスキン切替やお題120問以上を収録。",
    tags: ["React", "Socket.IO", "Firebase", "Render"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://sanrentan-l25f.onrender.com" }],
  },
  {
    name: "アイデアジェネレーター",
    category: "tool",
    emoji: "💡",
    size: "",
    status: "公開中止中",
    description:
      "質問に答えていくだけで思考が枝分かれして広がる、質問形式のマインドマップ作成ツール。",
    note: "思うような使い心地にならなかったため公開を見送っています。",
    tags: ["HTML", "JavaScript"],
    links: [],
  },
  {
    name: "Among Us AI探偵Bot",
    category: "discord",
    emoji: "🕵️",
    size: "",
    status: "限定公開",
    description:
      "DiscordのVCで行われるAmong Usの議論をAIが聞き取り、誰がインポスターかを推理して発表するBot。音声録音→文字起こし→AI推理まで全部ローカルPCで完結。",
    note: "処理が重く常時稼働できないため、一般公開はしていません。使いたいときは「くぁくぁ」を呼び出してください。",
    tags: ["Python", "py-cord", "faster-whisper", "Claude API"],
    links: [],
  },
  {
    name: "Among Us 盤面メモ オーバーレイ",
    category: "tool",
    emoji: "📋",
    size: "",
    status: "公開中止中",
    description:
      "プレイ中の画面の上に常時表示できる手動入力式の盤面整理ツール。メモリ読み取りなしの「メモ帳の進化版」なので規約面でも安全。",
    note: "PCで動かす実行ファイルのため一般公開はしていません。使いたい方は個別にご連絡ください。",
    tags: ["Node.js", "オーバーレイ"],
    links: [],
  },
  {
    name: "Twitterダウンローダー",
    category: "extension",
    emoji: "💾",
    size: "",
    bg: "img/twitter-downloader.svg",
    status: "公開中止中",
    description:
      "X(Twitter)のTLに流れてきたツイートを自動保存し、画像・動画もワンクリックで保存できるChrome拡張。広告ツイートの自動非表示機能つき。",
    note: "各サービスの利用規約との兼ね合いから、個人利用にとどめています。",
    tags: ["Chrome拡張", "JavaScript"],
    links: [],
  },
  {
    name: "DbD タイマーオーバーレイ",
    category: "tool",
    emoji: "⏱️",
    size: "",
    status: "公開中止中",
    description:
      "Dead by Daylightのプレイ中に画面上へ表示できるタイマーツール。スキルのクールダウン管理に。",
    note: "PCで動かす実行ファイルのため一般公開はしていません。使いたい方は個別にご連絡ください。",
    tags: ["Python"],
    links: [],
  },
];

/* ステータスチップの色調 */
const STATUS_TONES = {
  "R-18": "r18",
  開発中: "wip",
  限定公開: "muted",
  公開中止中: "muted",
};

/* APPS の iconShape・bgTone に書ける値 */
const ICON_SHAPES = ["glyph", "round"];
const BG_TONES = ["light", "dark"];

const CATEGORY_LABELS = {
  service: "SERVICE",
  game: "GAME",
  shindan: "診断",
  blog: "BLOG",
  video: "YOUTUBE",
  discord: "DISCORD BOT",
  tool: "TOOL",
  extension: "Chrome拡張機能",
};

/* ============================================
   カード描画
   ============================================ */
const grid = document.getElementById("bentoGrid");

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// 属性の値に入れる文字（" も逃がす）
function escAttr(s) {
  return esc(s).replace(/"/g, "&quot;");
}

// 説明を出すかどうか（保存した設定。読めない環境では出さない）
const DESC_KEY = "showDesc";
let showDesc = false;
try {
  showDesc = localStorage.getItem(DESC_KEY) === "1";
} catch (e) {
  showDesc = false;
}

// 「くわしく」の矢印
const CHEVRON =
  '<svg class="card-more-chev" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function render() {
  const techSet = new Set(APPS.flatMap((a) => a.tags));
  const catSet = new Set(APPS.map((a) => a.category));

  let html = "";

  // 統計タイル
  html += `
    <article class="card card--stats" data-category="all">
      <div class="stats-row">
        <div><div class="stat-num" data-count="${APPS.length}">0</div><div class="stat-label">APPS</div></div>
        <div><div class="stat-num" data-count="${catSet.size}">0</div><div class="stat-label">CATEGORIES</div></div>
        <div><div class="stat-num" data-count="${techSet.size}">0</div><div class="stat-label">TECHNOLOGIES</div></div>
      </div>
    </article>`;

  // アプリカード（既定はコンパクト: アイコン・札・名前・リンクだけ。説明は .card-more に隠す）
  APPS.forEach((app, i) => {
    const cls = ["card"];
    if (app.size) cls.push(`card--${app.size}`);
    if (app.bg) cls.push("card--bg");
    if (app.bg && BG_TONES.includes(app.bgTone)) cls.push(`card--bg-${app.bgTone}`);
    if (showDesc) cls.push("is-open");
    const moreId = `card-more-${i}`;
    const icon = app.icon
      ? `<img class="card-icon-img" src="${escAttr(app.icon)}" alt="" width="48" height="48" loading="lazy" decoding="async" data-emoji="${escAttr(app.emoji || "")}">`
      : app.emoji;
    const iconCls = ["card-icon"];
    if (app.icon) {
      iconCls.push("card-icon--img");
      if (ICON_SHAPES.includes(app.iconShape)) iconCls.push(`card-icon--${app.iconShape}`);
    }
    // 背景は data-src に置き、見えそうになってから読む（下の loadBgWhenNear）
    const bgStyle = [];
    if (app.bgPos) bgStyle.push(`object-position: ${app.bgPos}`);
    if (app.bgZoom) bgStyle.push(`transform: scale(${Number(app.bgZoom)})`, `transform-origin: ${app.bgPos || "center top"}`);
    const bg = app.bg
      ? `<div class="card-bg${/\.svg$/i.test(app.bg) ? " card-bg--art" : ""}" aria-hidden="true"><img class="card-bg-img" data-src="${escAttr(app.bg)}" alt="" decoding="async"${bgStyle.length ? ` style="${escAttr(bgStyle.join("; "))}"` : ""}></div>`
      : "";
    const status = app.status
      ? `<span class="card-status card-status--${STATUS_TONES[app.status] || "info"}">${esc(app.status)}</span>`
      : "";
    const links = (app.links || [])
      .map(
        (l, j) =>
          `<a class="card-link${j > 0 ? " card-link--ghost" : ""}" href="${escAttr(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
      )
      .join("");
    html += `
      <article class="${cls.join(" ")}" data-category="${app.category}">
        ${bg}
        <div class="card-head">
          <div class="${iconCls.join(" ")}">${icon}</div>
          <div class="card-head-text">
            <div class="card-chips"><span class="card-badge badge-${app.category}">${CATEGORY_LABELS[app.category]}</span>${status}</div>
            <h2 class="card-title">${esc(app.name)}</h2>
          </div>
        </div>
        <div class="card-more" id="${moreId}">
          <div class="card-more-inner">
            <p class="card-desc">${esc(app.description)}</p>
            ${app.note ? `<p class="card-note">${esc(app.note)}</p>` : ""}
            <div class="card-tags">${(app.tags || []).map((t) => `<span class="card-tag">${esc(t)}</span>`).join("")}</div>
          </div>
        </div>
        <div class="card-foot">
          ${app.slowStart ? `<p class="card-wake">開くまで1分ほどかかる場合があります</p>` : ""}
          <div class="card-actions">
            ${links}
            <button type="button" class="card-more-btn" aria-expanded="${showDesc}" aria-controls="${moreId}">くわしく${CHEVRON}</button>
          </div>
        </div>
      </article>`;
  });

  grid.innerHTML = html;
}

render();

/* ============================================
   スクロールで順番にフェードイン (IntersectionObserver)
   ============================================ */
function observeCards() {
  const cards = grid.querySelectorAll(".card:not(.is-visible)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          setTimeout(() => el.classList.add("is-visible"), (i % 6) * 80);
          io.unobserve(el);
          if (el.classList.contains("card--stats")) startCountUp(el);
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((c) => io.observe(c));
}

observeCards();

/* ============================================
   カウントアップアニメーション
   ============================================ */
function startCountUp(scope) {
  scope.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ============================================
   カテゴリフィルター
   ============================================ */
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;

  document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
  btn.classList.add("is-active");

  const filter = btn.dataset.filter;
  grid.querySelectorAll(".card").forEach((card) => {
    const cat = card.dataset.category;
    const show = filter === "all" || cat === filter || cat === "all";
    card.classList.toggle("is-hidden", !show);
    if (show) card.classList.add("is-visible");
  });
});

/* ============================================
   説明の表示（全体の「説明を表示」とカードごとの「くわしく」）
   ============================================ */
const descToggle = document.getElementById("descToggle");

function setCardOpen(card, open) {
  card.classList.toggle("is-open", open);
  const btn = card.querySelector(".card-more-btn");
  if (btn) btn.setAttribute("aria-expanded", String(open));
}

if (descToggle) {
  descToggle.setAttribute("aria-checked", String(showDesc));
  descToggle.addEventListener("click", () => {
    showDesc = !showDesc;
    descToggle.setAttribute("aria-checked", String(showDesc));
    // 全体を切り替えたら、カードごとに開け閉めした分もそろえる
    grid.querySelectorAll(".card-more-btn").forEach((btn) => setCardOpen(btn.closest(".card"), showDesc));
    try {
      localStorage.setItem(DESC_KEY, showDesc ? "1" : "0");
    } catch (e) {
      /* 保存できない環境では今の表示だけ切り替える */
    }
  });
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-more-btn");
  if (!btn) return;
  const card = btn.closest(".card");
  setCardOpen(card, !card.classList.contains("is-open"));
});

/* 背景とアイコンの画像: 読めたらふわっと出す。読めなければ外す */
function markBgLoaded(img) {
  img.parentElement.classList.add("is-loaded");
}

grid.addEventListener(
  "load",
  (e) => {
    if (e.target.classList && e.target.classList.contains("card-bg-img")) markBgLoaded(e.target);
  },
  true
);

grid.addEventListener(
  "error",
  (e) => {
    const img = e.target;
    if (!img.classList) return;
    if (img.classList.contains("card-bg-img")) {
      img.closest(".card").classList.remove("card--bg");
      img.parentElement.remove();
    } else if (img.classList.contains("card-icon-img")) {
      // 形や地の指定も外して、絵文字のタイルに戻す
      const box = img.parentElement;
      box.className = "card-icon";
      box.textContent = img.dataset.emoji || "";
    }
  },
  true
);

// 背景の画像は、カードが画面の近く（上下 300px 以内）に来てから読む。最初に全部は取りに行かない
function loadBg(box) {
  const img = box.querySelector(".card-bg-img[data-src]");
  if (!img) return;
  img.src = img.dataset.src;
  img.removeAttribute("data-src");
  if (img.complete && img.naturalWidth) markBgLoaded(img);
}

(function loadBgWhenNear() {
  const boxes = grid.querySelectorAll(".card-bg");
  if (!("IntersectionObserver" in window)) {
    boxes.forEach(loadBg);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadBg(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "300px 0px" }
  );
  boxes.forEach((box) => io.observe(box));
})();

/* ============================================
   ダークモード切り替え (localStorage保存)
   ============================================ */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-toggle-icon");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

/* ============================================
   読了プログレスバー & トップへ戻る
   ============================================ */
const progressBar = document.getElementById("progressBar");
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  toTop.classList.toggle("is-shown", window.scrollY > 600);
});

toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

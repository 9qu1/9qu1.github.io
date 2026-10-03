/* ============================================
   アプリデータ
   ここを編集するだけでカードを追加・変更できます。

   ■ 並び順  … 新しく作ったものが上。追加するときは配列の先頭に足す
   ■ カード幅 … 全カード1ブロックで統一。
                特定のアプリだけ目立たせたいときは size: "wide" で2ブロックにできる
   ■ category … "web" | "discord" | "tool" | "extension" | "mobile"
   ■ status   … "R-18" | "開発中" | "限定公開" | "公開中止中"(省略可)
   ■ note     … 補足の一文(省略可)
   ■ slowStart… true でRender無料枠の起動待ちの注意書きを表示
   ■ bg       … カードの背景に薄く敷く絵(img/ の中・省略可)
   ============================================ */
const APPS = [
  /* ---------- 2026年10月 ---------- */
  {
    name: "YouTubeダウンローダー",
    category: "extension",
    emoji: "📥",
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
    name: "トクマス",
    category: "web",
    emoji: "📅",
    size: "",
    description:
      "ナンプレ・クロスワード・ノノグラムが毎日1問ずつ届く、日めくりのパズルサイト。解くとポイントが貯まり、完成した絵は図鑑に残る。数字ぬりえ・カラーノノグラム・ライトアップ・リンクブリッジの問題集や印刷用の問題もある。登録なしで無料。",
    tags: ["JavaScript", "パズル", "毎日更新"],
    links: [{ label: "遊んでみる", url: "https://tokumasu.net/" }],
  },
  {
    name: "スキャナン",
    category: "web",
    emoji: "🔍",
    size: "",
    description:
      "むしめがねをかざすと、みんなの頭の上に数字が浮かぶオンラインパーティーゲーム。数字の持ち主当て・自己申告とのズレ・ピタリ予想・数字だけでお題を当てる親当ての4モード。お題は全年齢とちょい下世話の2パック。スマホで3〜12人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://scanan-wzbe.onrender.com" }],
  },

  /* ---------- 2026年8月 ---------- */
  {
    name: "100ピタッ‼︎",
    category: "web",
    emoji: "💯",
    size: "",
    description:
      "チームごとに「数字で答えられるお題」を出し、全員の回答の合計をゴール（最初は100）にピタッと近づけたチームが勝つ。お題を考える人は毎回ランダム、巡の数とゴールはロビーで変えられる。「0」や「20以上」の回答が集まるとペナルティ+20。2〜4チーム×2〜6人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://one00pita.onrender.com" }],
  },
  {
    name: "コトバト",
    category: "web",
    emoji: "🥊",
    size: "",
    description:
      "親だけが知る「ヒミツのキジュン」をめぐるワードバトル大喜利。子が自由にワードを出し、親が軍配を上げて王者を決める。勝敗のクセからキジュンを見抜き、決戦で優勝ワードを出した人の勝ち。お題125問・3〜16人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://kotobato.onrender.com" }],
  },
  {
    name: "探索者メーカー",
    category: "web",
    emoji: "🎲",
    size: "",
    description:
      "12の2択に答えて9つのダイスを振るだけで、クトゥルフ神話TRPG（7版）の探索者が完成。職業・能力値・技能まで自動で配分し、カード画像の保存とココフォリアの駒の出力に対応。非公式のファンツール。",
    tags: ["JavaScript", "Canvas", "TRPG"],
    links: [{ label: "つくってみる", url: "https://coc-maker.onrender.com/" }],
  },
  {
    name: "みんなでTier表",
    category: "web",
    emoji: "🏆",
    size: "",
    description:
      "「どっちが上？」の2択投票をみんなで集めて、S〜DのTier表を自動で作る集合知アプリ。知らない人は「わからない」で飛ばせて、順位はイロレーティングで計算。お題ごとにTier表を作ってURLで共有できる。",
    tags: ["Node.js", "Firestore", "投票"],
    slowStart: true,
    links: [{ label: "投票してみる", url: "https://game-tier-fn4u.onrender.com/" }],
  },
  {
    name: "リカイド",
    category: "web",
    emoji: "🐱",
    size: "",
    description:
      "2択のじぶんクイズを作って友達にシェア。「本人ならどっち？」を予想して正解数でランキング。ジャンル別の理解度、答えのクセから出す16タイプ診断、毎日の全国投票「きょうの2択」つき。英語・韓国語・繁体字版もある。",
    tags: ["Firestore", "クイズ", "ランキング"],
    links: [{ label: "つくってみる", url: "https://rikaido.me/" }],
  },
  {
    name: "ヨミベット",
    category: "web",
    emoji: "🎰",
    size: "",
    description:
      "回答者が5問の二択に答えると、コマがピラミッドを1段ずつ落ちていく。全員が「どのマスを通るか」にチップを賭ける価値観ベッティング。経路が合流するので真ん中は堅く、端まで読み切れば最高8倍。回答者も「自分を当ててくる人」を指名して賭ける。お題は恋愛・友情・仕事・日常・究極の選択・R18の6ジャンル350問から毎回ランダムに配置される。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://yomibet.onrender.com" }],
  },
  {
    name: "ずんだ雑学ラボ",
    category: "web",
    emoji: "🧪",
    size: "",
    description:
      "行列に並んでしまう、布団から出られない——日常のふしぎを、心理学や行動経済学の実験をたどってほどく雑学ノート。YouTubeの雑学動画の記事版で、記事の中で動画も見られる。",
    tags: ["Node.js", "GitHub Pages", "心理学"],
    links: [{ label: "読んでみる", url: "https://9qu1.com/zatsugaku-lab/" }],
  },
  {
    name: "情緒婚活",
    category: "web",
    emoji: "📋",
    size: "",
    description:
      "32問で「婚活プロフィールカード」と「取扱説明書」を発行する診断サイト。情緒年収やメンタル貯金などの架空スペックつき。気になる人に送れば二人の相性証明書、友達に送れば他己診断の結果が出る。画像で保存可能。",
    tags: ["Node.js", "Canvas", "診断"],
    links: [{ label: "診断してみる", url: "https://jocho-konkatsu.onrender.com" }],
  },

  /* ---------- 2026年7月 ---------- */
  {
    name: "ダイスダービー",
    category: "web",
    emoji: "🏇",
    size: "",
    description:
      "サイコロの出目で9頭の馬が走る、リアルタイム競馬ベッティング。走っている最中に賭けるのがルールで、3頭が締切ラインを越えたら受付終了。毎レース選ぶ能力カード10種、一騎打ちのマッチレース、勝率のライブ表示つき。最大8人。",
    tags: ["Node.js", "Socket.IO", "オンライン対戦"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://dice-derby.onrender.com" }],
  },
  {
    name: "ウラヘキ16",
    category: "web",
    emoji: "🔮",
    size: "",
    status: "R-18",
    description:
      "40問の質問に答えて、隠れた性癖を16タイプに判定する診断サイト。回答はサーバーに送らず全部ブラウザ内で処理するプライバシー設計。タイプ別の解説と相性診断つき、全機能無料。",
    tags: ["Node.js", "Firestore", "診断"],
    links: [{ label: "診断してみる", url: "https://uraheki.onrender.com" }],
  },
  {
    name: "ペット日和",
    category: "mobile",
    emoji: "🐾",
    size: "",
    status: "開発中",
    description:
      "ペットの写真を投稿して交流するSNSアプリ。ペット登録(年齢自動計算)、タグ検索、いいね・なでなで機能つき。iOS/Android両対応でストア公開準備中。",
    tags: ["Expo", "React Native", "Firebase"],
    links: [],
  },
  {
    name: "AIデイリー",
    category: "web",
    emoji: "📰",
    size: "",
    description:
      "毎朝自動で記事が生成・公開されるAIニュースサイト。記事作成からビルド・公開・SNS投稿まで全自動で運用中。",
    tags: ["Node.js", "GitHub Actions", "GitHub Pages"],
    links: [{ label: "読んでみる", url: "https://9qu1.com/ai-news-daily/" }],
  },
  {
    name: "投資デイリー",
    category: "web",
    emoji: "📈",
    size: "",
    description:
      "朝・大引け・夜の1日3回自動更新される株式市況サイト。AIデイリーの姉妹サイト。",
    tags: ["Node.js", "GitHub Actions"],
    links: [{ label: "読んでみる", url: "https://9qu1.com/invest-daily/" }],
  },
  {
    name: "体重共有アプリ",
    category: "mobile",
    emoji: "⚖️",
    size: "",
    status: "開発中",
    description:
      "グループで体重の「変化量」だけを共有できるダイエット応援アプリ。実際の体重は本人にしか見えないから安心。日本語/英語対応。",
    tags: ["Expo", "React Native", "tRPC"],
    links: [],
  },
  {
    name: "中学学力テストバトル",
    category: "web",
    emoji: "📝",
    size: "",
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
    size: "",
    description:
      "Dead by Daylightで遭遇したキラーと勝敗を記録する非公式ファンツール。全43キラー対応、脱出率も自動集計。データはブラウザ内に保存。",
    tags: ["JavaScript", "localStorage"],
    links: [{ label: "使ってみる", url: "https://dbd-killer-counter.onrender.com" }],
  },
  {
    name: "公開スケジュール",
    category: "web",
    emoji: "📅",
    size: "",
    status: "公開中止中",
    description:
      "ログイン不要でみんなの予定を共有できる公開カレンダー。カレンダーごとのパスワードだけで運用できる手軽さが売り。",
    note: "運用コストが見合わないため公開を見送っています。",
    tags: ["React", "tRPC", "MySQL"],
    links: [],
  },
  {
    name: "発表順番ジェネレーター",
    category: "web",
    emoji: "🎤",
    size: "",
    description:
      "発表の順番をランダムに決めるジェネレーター。2〜100人対応、シャッフルアニメーションつき。",
    tags: ["React", "framer-motion"],
    links: [{ label: "使ってみる", url: "https://random-presenter.onrender.com" }],
  },
  {
    name: "くあぼっと",
    category: "discord",
    emoji: "🤖",
    size: "",
    description:
      "Discordサーバーを盛り上げる無料の多機能Bot。ゲーム募集の管理、VC滞在時間の記録、サーバーログ、AIへの質問応答までこなす。24時間稼働中で、誰でも自分のサーバーに導入できる。",
    tags: ["Node.js", "discord.js", "PostgreSQL", "Claude API"],
    links: [{ label: "公式サイト", url: "https://qaqa-ih4o.onrender.com" }],
  },
  {
    name: "チーム分けツール",
    category: "web",
    emoji: "👥",
    size: "",
    description:
      "メンバーを一括入力して2〜8チームにランダム分け。再シャッフルも結果コピーもワンクリック。",
    tags: ["React", "Tailwind"],
    links: [{ label: "使ってみる", url: "https://team-splitter-gjao.onrender.com" }],
  },
  {
    name: "2048 ADRENALINE",
    category: "web",
    emoji: "🔢",
    size: "",
    description:
      "定番パズル「2048」にオンラインランキング(全期間/週間/日間)を搭載。スコア登録は名前だけでOK、世界中のプレイヤーと競える。",
    tags: ["React", "tRPC", "Firestore"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://two048-adrenaline.onrender.com" }],
  },
  {
    name: "ランダム文字抽選",
    category: "web",
    emoji: "🔤",
    size: "",
    description:
      "アルファベットや数字を範囲指定してランダムに1つ抽選するアプリ。ブルータリズムデザインが目印。",
    tags: ["React", "Vite"],
    links: [{ label: "使ってみる", url: "https://random-letter-ukq5.onrender.com" }],
  },
  {
    name: "席替えアプリ",
    category: "web",
    emoji: "🪑",
    size: "",
    description:
      "クラスや職場の席替えをランダムに決めるアプリ。座席レイアウトを作ってメンバーを流し込むだけ。",
    tags: ["React", "Vite", "Tailwind"],
    links: [{ label: "使ってみる", url: "https://seat-shuffle.onrender.com" }],
  },
  {
    name: "イントロドンカルタ",
    category: "web",
    emoji: "🎵",
    size: "",
    description:
      "YouTubeの曲イントロを流して、正しい札を早い者勝ちでタップするオンラインカルタ。問題セットはURLを貼るだけで作れて、出題数を選ぶと毎回ちがう曲が抽選されるので同じセットで何度でも遊べる。スマホからQRコードで参加。",
    tags: ["Node.js", "Socket.IO", "YouTube API"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://intro-don-karuta.onrender.com" }],
  },
  {
    name: "王への請願 オンライン対戦",
    category: "web",
    emoji: "🎲",
    size: "",
    description:
      "ボードゲーム「王への請願(To Court the King)」をブラウザでオンライン対戦できるようにしたWebアプリ。友達が別々の端末からリアルタイムに対戦できる。",
    tags: ["Node.js", "Socket.IO"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://dice-battle-g25r.onrender.com" }],
  },

  /* ---------- 2026年6月 ---------- */
  {
    name: "サンレンタン",
    category: "web",
    emoji: "🎯",
    size: "",
    description:
      "お題に対する相手の答えのランキングを予想して当てる、リアルタイム価値観当てパーティゲーム。競馬の三連単がモチーフで、部屋コードを共有するだけで全員スマホから参加OK。ボードスキン切替やお題120問以上を収録。",
    tags: ["React", "Socket.IO", "Firebase", "Render"],
    slowStart: true,
    links: [{ label: "遊んでみる", url: "https://sanrentan-l25f.onrender.com" }],
  },
  {
    name: "アイデアジェネレーター",
    category: "web",
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

const CATEGORY_LABELS = {
  web: "WEB APP",
  discord: "DISCORD BOT",
  tool: "TOOL",
  extension: "Chrome拡張機能",
  mobile: "MOBILE",
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

  // アプリカード
  for (const app of APPS) {
    const sizeClass = (app.size ? ` card--${app.size}` : "") + (app.bg ? " card--bg" : "");
    const bgStyle = app.bg ? ` style="--card-bg: url('${esc(app.bg)}')"` : "";
    const links = (app.links || [])
      .map(
        (l, i) =>
          `<a class="card-link${i > 0 ? " card-link--ghost" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
      )
      .join("");
    html += `
      <article class="card${sizeClass}" data-category="${app.category}"${bgStyle}>
        <div class="card-head">
          <div class="card-icon">${app.emoji}</div>
          <div>
            <span class="card-badge badge-${app.category}">${CATEGORY_LABELS[app.category]}</span>${app.status ? `<span class="card-status card-status--${STATUS_TONES[app.status] || "info"}">${esc(app.status)}</span>` : ""}
            <h2 class="card-title">${esc(app.name)}</h2>
          </div>
        </div>
        <p class="card-desc">${esc(app.description)}</p>
        ${app.note ? `<p class="card-note">${esc(app.note)}</p>` : ""}
        <div class="card-tags">${app.tags.map((t) => `<span class="card-tag">${esc(t)}</span>`).join("")}</div>
        ${app.slowStart ? `<p class="card-wake">無料サーバーのため、開くまで1分ほどかかる場合があります</p>` : ""}
        ${links ? `<div class="card-links">${links}</div>` : ""}
      </article>`;
  }

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

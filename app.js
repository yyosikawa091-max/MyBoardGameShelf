const games = [
  ["カルカソンヌ", "2–5人", "戦略", "タイルを置いて土地を作り、道や都市を完成させていくゲーム。"],
  ["DOMINION", "2–4人", "カード", "自分のデッキを作りながら、もっとも多くの勝利点を集める。"],
  ["クリプティッド", "3–5人", "推理", "プレイヤーのヒントを探り合い、未確認生物の場所を推理する。"],
  ["ポンジスキーム", "3–5人", "戦略", "実際の詐欺がテーマ。金を自転車操業で集め続ける。"],
  ["ペイント・ザ・ローズ", "2–5人", "協力 / 推理", "赤の女王から逃げながら、タイルと暗号で正解を伝える。", "プレイヤーは自分のカードにある組み合わせを、タイルの配置で仲間へ伝える。協力して推理しながら道を作り、女王に追いつかれる前に逃げ切る。"],
  ["it's a wonderful world", "1–5人", "戦略", "4ターンの中でカードを集め、コンボを作って得点を競う。", "カードを集めて建設し、資源を生み出す仕組みを作る。4ターンの間にカードを選び、5枚ずつのカードを使って得点になる組み合わせを作る。"],
  ["DIXIT", "3–6人", "パーティー", "ゲームマスターが選んだカードを、絵のイメージから当てる。", "親役が手札から1枚選び、その絵を表す言葉を出す。他のプレイヤーも手札から近い絵を出し、全員のカードを混ぜる。親のカードを当てつつ、全員に当てられすぎないヒントを出す。"],
  ["探偵ゲーム", "5人", "パーティー", "お題に合う絵を2枚出し、お題を聞いていないプレイヤーを当てる。", "お題を聞いたプレイヤーは、それに合う絵を2枚出す。お題を知らないプレイヤーの絵を見抜き、誰が聞いていなかったかを当てる。"],
  ["アンドールの伝説", "1–4人", "協力 / 冒険", "勇者として城を守りながら、章ごとの伝説とミッションを進める。", "勇者になって伝説をプレイする協力ゲーム。1から6までの章があり、城を守りながら各章のミッションを遂行する。"],
  ["ハコオンナ", "3–5人", "ホラー", "箱女の隠れている場所を避け、脱出やお祓いを目指す。", "箱女の居場所を警戒しながら建物を探索する。箱女に見つからずに脱出するか、条件を満たしてお祓いすることを目指す。"],
  ["アドベンチャーゲーム", "1–4人", "冒険", "探索、アイテムの組み合わせ、使う場所を選んでダンジョンを攻略。", "手番では、場所を探索する、アイテムを組み合わせる、その場所でアイテムを使う、のいずれかを選ぶ。選んだ数字のアドベンチャーガイドを確認して進める。"],
  ["バトルライン", "2人", "カード", "9つの駒をめぐって、3枚のカードで簡易ポーカーをする。", "9つの駒それぞれにカードを3枚ずつ並べ、役の強さを競う。先に5個の駒を取るか、3つ並んだ駒を取ったプレイヤーが勝つ。"],
  ["ナナ", "2–5人", "推理", "3枚の神経衰弱。数字の大小と場のカードからペアを作る。", "場のカードをめくるか、相手の手札の一番大きい数字または一番小さい数字を指定する。ペアを作って取り、3ペアを3セット集めるか、7の3ペアを集めたら勝ち。"],
  ["POTETOMAN", "3–5人", "カード", "出した色が使えなくなる中、最高点のカードを出して競う。", "4色のカードを手札に持ち、各ターンに場へカードを出す。そのターンに他のプレイヤーが出した色は出せない。最も高い点数のカードを出した人が勝ち、場の点数カードを獲得する。次のターンは勝者から始める。"],
  ["ラミィキューブ", "2–4人", "アブストラクト", "3枚以上の役を作り、場のタイルも組み替えて手札をなくす。", "手札14枚から開始し、3枚以上の組み合わせを場に出す。他の人のタイルも組み合わせてよい。最初は合計30以上の組み合わせを出す必要があり、出せなければ山札から1枚引く。"],
  ["ナナトリドリ", "3–6人", "カード", "手札の並びを崩さず、強い組み合わせを出して脱落を避ける。", "手札は配られた順のまま、1から7の数字カードを出す。枚数が多い組み合わせほど強いが、手札で隣り合っているカードしか出せない。出されたカードは受け取るか捨てるかを選び、最初に2回負けた人が脱落する。"],
  ["タイムボム", "2–8人", "正体隠匿", "警察、ボマー、狂人に分かれて爆弾をめぐる騙し合い。", "警察側は4つの爆弾解除を目指し、ボマー側は爆弾の起動を狙う。狂人は4ターン、どちらの陣営の試みも阻止する。正体を隠しながら解除するカードを選ぶ。"],
  ["厄介なゲストたち", "1–8人", "推理", "証拠から犯人、動機、凶器を論理的に特定する推理ゲーム。", "プレイヤーに配られた証拠を照合し、犯人・動機・凶器の組み合わせを推理する。証拠の矛盾やつながりを整理して事件の答えを当てる。"],
  ["王宮のささやき", "3–5人", "カード", "7体のキャラクターを場に出し、効果の連鎖を使いこなす。", "7体のキャラクターを場に重複なく出す。キャラクターごとの効果を使いながら、誰をどの順番で出すかを考える。"],
  ["それは俺の牧場だ", "2–4人", "エリア支配", "自分のフィールドに羊のタワーを重ねて牧場を広げる。"],
  ["ストライク", "2–5人", "ダイス", "ステージにダイスを投げ、ゾロ目を回収。自分のダイスがなくなったら負け。", "自分のターンにダイスをステージへ投げ、ゾロ目が出たダイスを回収する。バツ印が出たダイスは破棄。自分のターン前にステージのダイスがすべて回収されていたらオールインできる。自分のダイスがすべてなくなったら負け。"],
  ["ゴッドファイブ", "2–5人", "推理", "相手の前に並んだ石の数字、色、ドットから自分の石を当てる。", "1から60の数字、5色、1から3個のドットが割り振られた石を使う。各自が相手向きに5色の石を並べ、数字の小さい順に整列する。場から石をめくり、選んだ石が自分の列のどの位置に来るか、またはドット数が同じかを質問して、自分の石を推理する。"],
  ["キングダム", "2–4人", "タイル配置", "カードと城を5×6の盤面に置き、列の得点に城の強さを掛ける。", "3ラウンドの合計得点を競う。5×6の盤面にプラスカード、マイナスカード、特殊カード、自分の城を配置する。縦か横の列が埋まったらカードを合計し、特殊効果を適用してから城の強さを掛けて得点する。"],
  ["TICKET TO RIDE", "2–5人", "路線", "アメリカの街を車両でつなぎ、自分のルートを完成させる。"],
  ["ダブルセブン", "2–6人", "カード", "動物の群れを集め、7匹の群れやカード効果で得点を伸ばす。", "8種類の動物から群れを作る。同じ枚数の群れなら交換でき、場に何にでもなる牌があれば対応する動物と交換する。同じ種類で7匹の群れを作るごとに1点、2回作るとさらに2点を得る。"],
  ["ピニャ・コラーダイス", "2–4人", "ダイス", "5個のダイスを振って条件を満たし、盤面の得点を取り合う。", "4×4の盤面に書かれたダイス条件を確認し、5個のダイスを最大2回まで振り直す。条件がそろったらカードに駒を置く。置ける人数には上限があり、誰かの駒が縦・横・斜めにそろうと即勝利。得点が20に達した後、全員のターンをそろえて最終得点を比べる。"],
  ["ニムト", "2–10人", "カード", "列の最後にカードを置き、6枚目になった人がマイナス点を回収する。", "1から104のカードを各自10枚持ち、場に4枚を小さい順で4列に並べる。手札から1枚ずつ出し、数字が大きくなる一番近い列へ置く。6枚目を置いた人はその列の5枚を回収する。どの列にも置けないカードは列を選んで回収し、マイナス点が少ない人を目指す。"],
  ["TOY BATTLE", "2人", "対戦", "8体のキャラの特性を使い、城から敵の城へ道をつなぐ。", "先攻は3体、後攻は4体から開始する。自分の城からつながった道から枝分かれするようにキャラクターを配置する。相手の駒の上には、より強い数字のキャラなら置ける。自分の駒を別の駒へ更新しながら、敵の城まで道をつなげれば勝ち。"],
  ["ラストダンジョンダイス", "1人", "ダイス", "姫を救いにくる勇者を、ボス側として倒すソロゲーム。"],
  ["怪盗ゲーム", "4人", "心理戦", "相手の思考を読みながら、お宝を奪い合う心理ゲーム。"],
  ["can't stop", "2–4人", "ダイス", "4つのダイスで進む列を選び、誰より先にゴールを目指す。", "4つのダイスを振り、2個ずつの組み合わせで進める列を決める。さらに振るか、そこで止めるかを選び、欲張りすぎて進めなくなる前にゴールを目指す。"],
  ["NONAGA", "2人", "アブストラクト", "盤面を変化させながら、自分の色を3つ並べる。", "自分の色の駒を盤上の突き当たりまで動かす。さらに自分の手番では盤上のパーツ自体を移動させ、次の移動可能な道を変えられる。自分の色を3つ並べたら勝ち。"],
  ["LASTLIGHT", "2人", "SF / 対戦", "宇宙船を操り、惑星をめぐって争うゲーム。"],
  ["Hits&outs", "2–4人", "カード", "メモに残されたルールをもとに遊ぶ、プレイ済みゲーム。"],
  ["レーベンヘルツ", "2–4人", "エリア支配", "領土を広げ、交渉と配置で勢力を競うゲーム。"],
  ["BRUFFIT", "2–6人", "カード", "1から10のカードを使って競うゲーム。"],
  ["メトロポリス", "2–4人", "都市開発", "都市を作り、配置と価値を競うゲーム。"],
  ["fixer", "2–3人", "カード対戦", "カードを戦わせてポイントを稼ぐゲーム。"],
  ["迷子", "3–4人", "ホラー", "迷子にならないようにカードを出していくホラーゲーム。"],
  ["花火", "1–2人", "謎解き", "一度きりの体験を楽しむ謎解き系ボードゲーム。"],
  ["サラウアバク", "2人", "心理戦", "怪盗と探偵に分かれて宝を盗むゲーム。"],
  ["面白いUNO", "3–6人", "カード", "いつものUNOにひと味加えた、みんなで遊べるカードゲーム。"],
  ["ウルト", "2–6人", "カード", "手札と読み合いを楽しむカードゲーム。"],
  ["合体クロスボードゲーム", "2–4人", "対戦 / 冒険", "モンスターを合体させて攻撃し、ドラゴンを避けながらゴールを目指す。", "モンスターを合体させて戦力を高め、相手を攻撃する。ドラゴンの襲来を避けながら、自分の駒をゴールまで進める。"],
  ["ホットストリーク", "2–9人", "予想", "4体の徒競走の結果を予想し、カードで展開にも介入する。", "進ませるカードや妨害カードを最初に公開し、それを見て4体のレース結果を予想する。予想開始前に各プレイヤーがカードを1枚ずつ仕込むため、公開情報と読み合いで順位を当てる。"],
  ["クルーバージュ", "1–4人", "推理", "場所のカードから手がかりを得て、犯人の場所を早い者勝ちで当てる。", "それぞれの場所のカードをめくり、そこから得られるヒントを整理して犯人がいる場所を確定する。答えがわかったプレイヤーは、早い者勝ちでその場所にトークンを置く。"],
  ["32LDK", "2–4人", "カード", "場のカードより大きな数字を出し続け、小さい時は交換する。", "場のカードより大きな数字を出し続ける。小さいカードしか出せない場合は場のカードと交換するか、裏向きに並べたカードを引いて、そのカードでプレイする。"],
  ["クラッシュオクトパス", "2–4人", "アクション", "旗で荷物を船にぶつけ、5個積めたら勝ち。", "旗を使って自分の船へ荷物をぶつけ、荷物を5個積めば勝ち。イカリを弾いて船を移動でき、クラーケンが現れたときは頭にダイスをぶつけて相手の船を沈没させられる。"],
  ["ネメシス", "1–5人", "SF / 協力", "映画『エイリアン』のような宇宙船の危機を体験する。"],
  ["エクリプス", "2–6人", "SF / 戦略", "探査・拡大・開発・戦争をすべて体感する。"],
  ["ブラス バーミンガム", "2–4人", "経済", "産業革命時代に自分の事業を組み立てる。"],
  ["ロイヤルターフ", "2–6人", "予想", "競走馬の動きを読み、競馬の結果を予想する。"],
  ["シャークインパクト", "3–6人", "正体隠匿", "サメ映画と『犯人は踊る』の面白さを組み合わせたゲーム。"],
  ["クアント", "1人", "パズル", "ひとりでじっくり遊ぶ専用ゲーム。"],
  ["妖怪1504", "2人", "カード対戦", "TCGの面白さを詰め込んだ2人用ゲーム。"],
  ["おとぎドラフト", "2–6人", "ドラフト", "場に出したカードの効果とコンボで宝石を集める。"],
  ["トーネードスプラッシュ", "2–5人", "レース", "水しぶきの軌跡を置きながら競うボートレースゲーム。"],
  ["クトゥルフの呼び声", "2–4人", "協力 / ホラー", "クトゥルフが出る前に4つのゲートを閉じ、街を救う。", "クトゥルフが出現する前に街の4つのゲートを閉じる。各プレイヤーはキャラクター固有の行動を使い、1ターンに4回アクションを行う。ゲートと同じ色のカードを5枚集めて使い、敵陣営が3人集まる前に倒して召喚の儀式を阻止する。"],
  ["クルード", "3–6人", "推理", "犯人、凶器、場所を推理する定番ゲーム。"],
  ["パンダスピン", "2–5人", "カード", "負けたカードが裏返り、強いカードになって手札に戻る。"],
  ["ジャストワン", "3–7人", "協力 / 言葉", "答えのヒントを出すが、被ったヒントは消えてしまう。"],
  ["アリスの時間迷宮", "1人", "デッキ構築", "タイムリープを使って4体のラスボスを倒すソロゲーム。", "デッキを強化しながら4体のラスボスを倒す。2回だけタイムリープでき、時間を戻すと敵は最初からになるが、自分の手札やデッキの強化は残る。拡張版では2人用のTCGとしても遊べる。"],
  ["精霊回路ドライブ", "1人", "ソロ", "ひとりで挑戦するゲーム。"],
  ["頼りない魔法使い", "1人", "ソロ", "ひとりで攻略を目指す魔法使いのゲーム。"],
  ["キューマス", "2人", "アブストラクト", "盤上にカードを配置し、カードを取り合う将棋のようなゲーム。"]
];

const grid = document.querySelector('#gameGrid');
const searchInput = document.querySelector('#searchInput');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const heroCount = document.querySelector('#heroCount');
const builtInCount = games.length;
const overrides = JSON.parse(localStorage.getItem('boardGameOverrides') || '{}');
const imageSearchCache = JSON.parse(localStorage.getItem('boardGameImageSearch') || '{}');
games.forEach((game, index) => {
  if (overrides[index]) games[index] = overrides[index];
  if (!games[index][2]) games[index][2] = 'その他';
});
const trashLifetime = 30 * 24 * 60 * 60 * 1000;
const storedTrash = JSON.parse(localStorage.getItem('boardGameTrash') || '[]');
const now = Date.now();
let trash = storedTrash.filter((entry) => entry.item && now - entry.deletedAt < trashLifetime);
const expiredNames = new Set(storedTrash.filter((entry) => !entry.item || now - entry.deletedAt >= trashLifetime).map((entry) => entry.item?.[0]));
localStorage.setItem('boardGameTrash', JSON.stringify(trash));
const saved = JSON.parse(localStorage.getItem('boardGameShelf') || '[]').filter((item) => !expiredNames.has(item[0]));
localStorage.setItem('boardGameShelf', JSON.stringify(saved));
saved.forEach((item) => games.push(item));
let activePlayer = 'all';
let editingIndex = null;
let activeColumns = localStorage.getItem('boardGameColumns') === '2' ? '2' : '1';
let activeSort = localStorage.getItem('boardGameSort') || 'added';

function toKatakana(value) {
  return String(value || '').replace(/[\u3041-\u3096]/g, (character) => String.fromCharCode(character.charCodeAt(0) + 0x60));
}

const readingByTitle = {
  DOMINION: 'ドミニオン',
  "it's a wonderful world": 'イッツアワンダフルワールド',
  DIXIT: 'ディクシット',
  '探偵ゲーム': 'たんていゲーム',
  POTETOMAN: 'ポテトマン',
  タイムボム: '',
  '厄介なゲストたち': 'やっかいなゲストたち',
  '王宮のささやき': 'おうきゅうのささやき',
  'TICKET TO RIDE': 'チケットトゥーライド',
  'TOY BATTLE': 'トイバトル',
  '怪盗ゲーム': 'かいとうゲーム',
  "can't stop": 'キャントストップ',
  NONAGA: 'ノナガ',
  LASTLIGHT: 'ラストライト',
  'Hits&outs': 'ヒットアンドアウト',
  BRUFFIT: 'ブラフィット',
  fixer: 'フィクサー',
  迷子: 'まいご',
  花火: 'はなび',
  合体クロスボードゲーム: 'がったいクロスボードゲーム',
  '32LDK': 'さんじゅうにエルディーケー',
  妖怪1504: 'ようかい1504',
  精霊回路ドライブ: 'せいれいかいろドライブ',
  頼りない魔法使い: 'たよりないまほうつかい'
};

function gameReading(game) {
  return game[6] || readingByTitle[game[0]] || '';
}

const durationByTitle = {
  'カルカソンヌ': '35〜45分', DOMINION: '30分', 'クリプティッド': '30〜50分', 'ポンジスキーム': '60〜90分',
  'ペイント・ザ・ローズ': '45〜60分', "it's a wonderful world": '45分', DIXIT: '30分', '探偵ゲーム': '20〜30分',
  'アンドールの伝説': '60〜90分', 'ハコオンナ': '60〜90分', 'アドベンチャーゲーム': '60〜120分', 'バトルライン': '30分',
  'ナナ': '15〜30分', POTETOMAN: '20〜30分', 'ラミィキューブ': '45〜60分', 'ナナトリドリ': '20〜30分',
  'タイムボム': '15〜30分', '厄介なゲストたち': '60〜120分', '王宮のささやき': '30分', 'それは俺の牧場だ': '30〜45分',
  'ストライク': '15〜30分', 'ゴッドファイブ': '30〜45分', 'キングダム': '45〜60分', 'TICKET TO RIDE': '45〜60分',
  'ダブルセブン': '30分', 'ピニャ・コラーダイス': '30〜45分', 'ニムト': '30分', 'TOY BATTLE': '30〜45分',
  'ラストダンジョンダイス': '20〜40分', '怪盗ゲーム': '20〜30分', "can't stop": '30〜45分', NONAGA: '20分', LASTLIGHT: '45〜60分',
  'レーベンヘルツ': '60〜90分', BRUFFIT: '20〜30分', メトロポリス: '30〜45分', fixer: '20〜30分', 迷子: '30〜45分',
  花火: '30分', サラウアバク: '20〜30分', '面白いUNO': '20〜30分', ウルト: '20〜30分', '合体クロスボードゲーム': '30〜45分',
  'ホットストリーク': '30〜45分', クルーバージュ: '30〜45分', '32LDK': '20〜30分', 'クラッシュオクトパス': '20〜30分',
  ネメシス: '90〜180分', エクリプス: '60〜120分', 'ブラス バーミンガム': '90〜120分', ロイヤルターフ: '30〜45分',
  シャークインパクト: '20〜30分', クアント: '15〜30分', 妖怪1504: '30〜45分', おとぎドラフト: '30〜45分',
  トーネードスプラッシュ: '30〜45分', 'クトゥルフの呼び声': '90〜120分', クルード: '45分', パンダスピン: '20〜30分',
  ジャストワン: '20分', アリスの時間迷宮: '30〜60分', 精霊回路ドライブ: '30〜45分', 頼りない魔法使い: '20〜40分', キューマス: '20〜30分'
};

function gameDuration(game) {
  return game[7] || durationByTitle[game[0]] || '要確認';
}

function remoteGameImage(game) {
  const query = encodeURIComponent(`${game[0]} ボードゲーム プレイ 盤面`);
  return `https://tse1.mm.bing.net/th?q=${query}&w=960&h=640&c=7&rs=1&p=0`;
}

function imageCacheKey(name) {
  return String(name || '').trim().toLocaleLowerCase('ja');
}

function cachedGameImage(name) {
  const cached = imageSearchCache[imageCacheKey(name)];
  if (!cached || !Number.isFinite(Number(cached.searchedAt))
    || Date.now() - Number(cached.searchedAt) >= 90 * 24 * 60 * 60 * 1000) return null;
  const result = cached.result;
  if (!result) return null;
  const thumbnailUrl = safeCommonsUrl(result.thumbnailUrl, ['upload.wikimedia.org', 'thumb.wikimedia.org']);
  const descriptionUrl = safeCommonsUrl(result.descriptionUrl, ['commons.wikimedia.org']);
  return thumbnailUrl && descriptionUrl ? { ...result, thumbnailUrl, descriptionUrl } : null;
}

function gameImage(game) {
  return game[5] || cachedGameImage(game[0])?.thumbnailUrl || remoteGameImage(game);
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function safeCommonsUrl(value, hosts) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && hosts.includes(url.hostname) ? url.href : '';
  } catch {
    return '';
  }
}

function imageCreditMarkup(name) {
  const result = cachedGameImage(name);
  if (!result || !result.descriptionUrl) return '';
  const credit = result.artist || 'Wikimedia Commons';
  const license = result.license ? ` · ${result.license}` : '';
  return `<a class="photo-credit" href="${escapeHtml(result.descriptionUrl)}" target="_blank" rel="noreferrer">画像: ${escapeHtml(credit)}${escapeHtml(license)}</a>`;
}

function plainTextFromHtml(value) {
  const documentFragment = new DOMParser().parseFromString(String(value || ''), 'text/html');
  return documentFragment.body.textContent.trim();
}

async function searchCommonsImage(name) {
  const queries = [`${name} board game`, `${name} ボードゲーム`];
  for (const query of queries) {
    const params = new URLSearchParams({
      action: 'query',
      generator: 'search',
      gsrsearch: query,
      gsrnamespace: '6',
      gsrlimit: '10',
      prop: 'imageinfo',
      iiprop: 'url|extmetadata',
      iiurlwidth: '960',
      format: 'json',
      origin: '*'
    });
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
    if (!response.ok) throw new Error(`Wikimedia Commons returned ${response.status}`);
    const data = await response.json();
    const pages = Object.values(data.query?.pages || {}).sort((first, second) => first.index - second.index);
    for (const page of pages) {
      const image = page.imageinfo?.[0];
      const thumbnailUrl = safeCommonsUrl(image?.thumburl, ['upload.wikimedia.org', 'thumb.wikimedia.org'])
        || safeCommonsUrl(image?.url, ['upload.wikimedia.org']);
      const descriptionUrl = safeCommonsUrl(image?.descriptionurl, ['commons.wikimedia.org']);
      if (!thumbnailUrl || !descriptionUrl) continue;
      return {
        thumbnailUrl,
        descriptionUrl,
        artist: plainTextFromHtml(image.extmetadata?.Artist?.value) || page.title,
        license: plainTextFromHtml(image.extmetadata?.LicenseShortName?.value)
      };
    }
  }
  return null;
}

const imageSearchRequests = new Map();

async function loadGameImage(name) {
  const key = imageCacheKey(name);
  if (!key) return null;
  const cached = imageSearchCache[key];
  const cacheAge = cached ? Date.now() - Number(cached.searchedAt) : Infinity;
  if (cached && Number.isFinite(cacheAge)
    && cacheAge < (cached.failed ? 5 * 60 * 1000 : 90 * 24 * 60 * 60 * 1000)) {
    return cachedGameImage(name);
  }
  if (imageSearchRequests.has(key)) return imageSearchRequests.get(key);
  const request = searchCommonsImage(name)
    .then((result) => {
      imageSearchCache[key] = { searchedAt: Date.now(), result, failed: false };
      localStorage.setItem('boardGameImageSearch', JSON.stringify(imageSearchCache));
      return result;
    })
    .catch((error) => {
      console.error(`画像検索に失敗しました: ${name}`, error);
      imageSearchCache[key] = { searchedAt: Date.now(), result: null, failed: true };
      localStorage.setItem('boardGameImageSearch', JSON.stringify(imageSearchCache));
      return null;
    })
    .finally(() => imageSearchRequests.delete(key));
  imageSearchRequests.set(key, request);
  return request;
}

function applyImageCredit(image, name) {
  const previousCredit = image.nextElementSibling;
  if (previousCredit?.classList.contains('photo-credit')) previousCredit.remove();
  const result = cachedGameImage(name);
  if (!result || !result.descriptionUrl) return;
  const credit = document.createElement('a');
  credit.className = 'photo-credit';
  credit.href = result.descriptionUrl;
  credit.target = '_blank';
  credit.rel = 'noreferrer';
  credit.textContent = `画像: ${result.artist || 'Wikimedia Commons'}${result.license ? ` · ${result.license}` : ''}`;
  image.after(credit);
}

const imageSearchObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    const image = entry.target;
    const name = image.dataset.imageSearch;
    if (!name || games.some((game) => game[0] === name && game[5])) return;
    loadGameImage(name).then((result) => {
      if (!result) return;
      document.querySelectorAll('[data-image-search]').forEach((currentImage) => {
        if (currentImage.dataset.imageSearch !== name || games.some((game) => game[0] === name && game[5])) return;
        currentImage.src = result.thumbnailUrl;
        applyImageCredit(currentImage, name);
      });
    });
  });
});

function observeGameImages() {
  document.querySelectorAll('[data-image-search]').forEach((image) => {
    const name = image.dataset.imageSearch;
    if (!name || games.some((game) => game[0] === name && game[5])) return;
    const result = cachedGameImage(name);
    if (result) {
      image.src = result.thumbnailUrl;
      applyImageCredit(image, name);
    } else {
      imageSearchObserver.observe(image);
    }
  });
}

function playerMatches(range, filter) {
  if (filter === 'all') return true;
  const numbers = range.match(/\d+/g)?.map(Number) || [];
  const min = numbers[0];
  const max = numbers[numbers.length - 1];
  if (filter === '10+') return max >= 10;
  const playerCount = Number(filter);
  return Number.isFinite(playerCount) && min <= playerCount && max >= playerCount;
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const result = games.map((game, index) => ({ game, index })).filter(({ game }) =>
    !trash.some((entry) => entry.item[0] === game[0]) && (!query || game.join(' ').toLowerCase().includes(query)) && playerMatches(game[1], activePlayer)
  );
  if (activeSort === 'name') {
    result.sort(({ game: first }, { game: second }) => toKatakana(gameReading(first) || first[0]).localeCompare(toKatakana(gameReading(second) || second[0]), 'ja', { numeric: true, sensitivity: 'base' }));
  }
  grid.innerHTML = result.map(({ game, index }) => `<article class="game-card" style="animation-delay:${Math.min(index * .025, .35)}s"><div><img class="card-photo" data-image-search="${escapeHtml(game[0])}" src="${gameImage(game)}" alt="${escapeHtml(game[0])}のプレイ時の盤面写真" loading="lazy" onerror="this.onerror=null;this.src='https://tse1.mm.bing.net/th?q=board+game+play&w=960&h=640&c=7&rs=1&p=0'" />${imageCreditMarkup(game[0])}<div class="card-top"><span class="genre">${(game[2] || 'その他').toUpperCase()}</span><span class="player-badge">${game[1]}</span></div>${gameReading(game) ? `<p class="game-reading">${gameReading(game)}</p>` : ''}<h3>${game[0]}</h3><p class="game-duration">${gameDuration(game)}</p><p>${game[3]}</p></div><div class="card-bottom"><button class="detail-link" data-detail="${index}" type="button">メモを見る →</button><button class="edit-link" data-edit="${index}" type="button">編集</button><button class="remove-link" data-remove="${index}" type="button">削除</button></div></article>`).join('');
  observeGameImages();
  grid.dataset.columns = activeColumns;
  resultCount.textContent = `${result.length} TITLES`;
  emptyState.hidden = result.length > 0;
  heroCount.textContent = games.length;
  updateTrashList();
}

document.querySelector('#playerFilters').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  activePlayer = button.dataset.player;
  document.querySelectorAll('.filter-chip').forEach((item) => item.classList.toggle('active', item === button));
  render();
});
searchInput.addEventListener('input', render);
document.querySelector('#sortSelect').value = activeSort;
document.querySelector('#sortSelect').addEventListener('change', (event) => {
  activeSort = event.target.value;
  localStorage.setItem('boardGameSort', activeSort);
  render();
});
document.querySelector('#viewSwitcher').addEventListener('click', (event) => {
  const button = event.target.closest('.view-button');
  if (!button) return;
  activeColumns = button.dataset.columns;
  localStorage.setItem('boardGameColumns', activeColumns);
  document.querySelectorAll('.view-button').forEach((item) => item.classList.toggle('active', item === button));
  grid.dataset.columns = activeColumns;
});
document.querySelector(`[data-columns="${activeColumns}"]`).classList.add('active');
const trashBackdrop = document.querySelector('#trashBackdrop');
const confirmBackdrop = document.querySelector('#confirmBackdrop');
let pendingDeleteIndex = null;
let pendingDeleteSource = null;
document.querySelector('#openTrash').addEventListener('click', () => { updateTrashList(); trashBackdrop.hidden = false; });
document.querySelector('#closeTrash').addEventListener('click', () => { trashBackdrop.hidden = true; });
trashBackdrop.addEventListener('click', (event) => { if (event.target === trashBackdrop) trashBackdrop.hidden = true; });
document.querySelector('#closeConfirm').addEventListener('click', closeDeleteConfirmation);
document.querySelector('#cancelConfirm').addEventListener('click', closeDeleteConfirmation);
confirmBackdrop.addEventListener('click', (event) => { if (event.target === confirmBackdrop) closeDeleteConfirmation(); });
document.querySelector('#confirmDelete').addEventListener('click', () => {
  if (pendingDeleteIndex === null) return;
  moveToTrash(pendingDeleteIndex, pendingDeleteSource);
  closeDeleteConfirmation();
});

const backdrop = document.querySelector('#modalBackdrop');
const detailBackdrop = document.querySelector('#detailBackdrop');
const updateVisibleViewport = () => {
  const viewport = window.visualViewport;
  if (!viewport) return;
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('--visible-viewport-width', `${viewport.width}px`);
  rootStyle.setProperty('--visible-viewport-height', `${viewport.height}px`);
  rootStyle.setProperty('--visible-viewport-offset-left', `${viewport.offsetLeft}px`);
  rootStyle.setProperty('--visible-viewport-offset-top', `${viewport.offsetTop}px`);
};
updateVisibleViewport();
window.addEventListener('resize', updateVisibleViewport);
window.visualViewport?.addEventListener('resize', updateVisibleViewport);
window.visualViewport?.addEventListener('scroll', updateVisibleViewport);
const openModal = () => {
  editingIndex = null;
  document.querySelector('#modalEyebrow').textContent = 'NEW ENTRY';
  document.querySelector('#modalTitle').textContent = 'ゲームを棚に追加';
  document.querySelector('#submitGame').firstChild.textContent = '棚に追加する ';
  document.querySelector('#deleteFromEdit').hidden = true;
  document.querySelector('#gameForm').reset();
  backdrop.hidden = false;
  if (!window.matchMedia('(max-width: 600px)').matches) {
    document.querySelector('[name="name"]').focus();
  }
};
document.querySelectorAll('#openAddTop,#openAddBottom').forEach((button) => button.addEventListener('click', openModal));
document.querySelector('#closeModal').addEventListener('click', () => { backdrop.hidden = true; });
backdrop.addEventListener('click', (event) => { if (event.target === backdrop) backdrop.hidden = true; });
document.querySelector('#deleteFromEdit').addEventListener('click', () => {
  if (editingIndex === null) return;
  const game = games[editingIndex];
  openDeleteConfirmation(editingIndex, 'edit', game[0]);
});
document.querySelector('#closeDetail').addEventListener('click', () => { detailBackdrop.hidden = true; });
detailBackdrop.addEventListener('click', (event) => { if (event.target === detailBackdrop) detailBackdrop.hidden = true; });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    backdrop.hidden = true;
    detailBackdrop.hidden = true;
    trashBackdrop.hidden = true;
    closeDeleteConfirmation();
  }
});

document.querySelector('#gameForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = String(data.get('name') || '').trim();
  const duplicate = games.some((game, index) => index !== editingIndex && String(game[0]).trim().toLowerCase() === name.toLowerCase());
  if (duplicate) {
    showToast('同じ名前のゲームがあります');
    return;
  }
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  const imageFile = data.get('image');
  const image = imageFile?.size ? await readImage(imageFile) : editingIndex !== null ? games[editingIndex][5] || '' : '';
  const item = [name, `${data.get('min')}–${data.get('max')}人`, data.get('genre'), data.get('description'), data.get('rules'), image, String(data.get('reading') || '').trim(), String(data.get('duration') || '').trim()];
  if (editingIndex === null) {
    games.push(item);
    saved.push(item);
    localStorage.setItem('boardGameShelf', JSON.stringify(saved));
  } else {
    games[editingIndex] = item;
    if (editingIndex < builtInCount) {
      overrides[editingIndex] = item;
      localStorage.setItem('boardGameOverrides', JSON.stringify(overrides));
    } else {
      saved[editingIndex - builtInCount] = item;
      localStorage.setItem('boardGameShelf', JSON.stringify(saved));
    }
  }
  event.target.reset();
  backdrop.hidden = true;
  render();
  showToast(editingIndex === null ? '棚に追加しました' : 'ゲーム情報を更新しました');
  editingIndex = null;
});

grid.addEventListener('click', (event) => {
  const detail = event.target.closest('[data-detail]');
  const edit = event.target.closest('[data-edit]');
  const remove = event.target.closest('[data-remove]');
  if (detail) {
    const game = games[Number(detail.dataset.detail)];
    const detailPhoto = document.querySelector('#detailPhoto');
    const detailPhotoWrap = document.querySelector('#detailPhotoWrap');
    detailPhotoWrap.hidden = false;
    detailPhoto.dataset.imageSearch = game[0];
    detailPhoto.src = gameImage(game);
    applyImageCredit(detailPhoto, game[0]);
    detailPhoto.onerror = () => { detailPhoto.onerror = null; detailPhoto.src = 'https://tse1.mm.bing.net/th?q=board+game+play&w=960&h=640&c=7&rs=1&p=0'; };
    document.querySelector('#detailTitle').textContent = game[0];
    document.querySelector('#detailGenre').textContent = (game[2] || 'その他').toUpperCase();
    document.querySelector('#detailReading').textContent = gameReading(game);
    document.querySelector('#detailPlayers').textContent = game[1];
    document.querySelector('#detailDuration').textContent = gameDuration(game);
    document.querySelector('#detailDescription').textContent = game[3];
    document.querySelector('#detailRules').textContent = game[4] || '詳しいルールはまだ登録されていません。';
    detailBackdrop.hidden = false;
  }
  if (edit) {
    editingIndex = Number(edit.dataset.edit);
    const game = games[editingIndex];
    const form = document.querySelector('#gameForm');
    document.querySelector('#modalEyebrow').textContent = 'EDIT ENTRY';
    document.querySelector('#modalTitle').textContent = 'ゲーム情報を編集';
    document.querySelector('#submitGame').firstChild.textContent = '変更を保存する ';
    document.querySelector('#deleteFromEdit').hidden = false;
    form.elements.name.value = game[0];
    form.elements.reading.value = gameReading(game);
    form.elements.duration.value = game[7] || durationByTitle[game[0]] || '';
    form.elements.min.value = game[1].match(/\d+/)?.[0] || 1;
    form.elements.max.value = game[1].match(/\d+/g)?.at(-1) || 1;
    form.elements.description.value = game[3] || '';
    form.elements.rules.value = game[4] || '';
    if (game[2] && !Array.from(form.elements.genre.options).some((option) => option.value === game[2])) {
      form.elements.genre.add(new Option(game[2], game[2]));
    }
    form.elements.genre.value = game[2] || 'その他';
    backdrop.hidden = false;
    if (!window.matchMedia('(max-width: 600px)').matches) {
      form.elements.name.focus();
    }
  }
  if (remove) {
    const index = Number(remove.dataset.remove);
    const game = games[index];
    openDeleteConfirmation(index, 'card', game[0]);
  }
});

function openDeleteConfirmation(index, source, name) {
  pendingDeleteIndex = index;
  pendingDeleteSource = source;
  document.querySelector('#confirmMessage').textContent = `「${name}」を削除済みに移動しますか？`;
  confirmBackdrop.hidden = false;
}

function closeDeleteConfirmation() {
  confirmBackdrop.hidden = true;
  pendingDeleteIndex = null;
  pendingDeleteSource = null;
}

function moveToTrash(index, source) {
  const game = games[index];
  if (!game) return;
  trash.push({ item: game, deletedAt: Date.now() });
  localStorage.setItem('boardGameTrash', JSON.stringify(trash));
  if (source === 'edit') {
    editingIndex = null;
    backdrop.hidden = true;
  }
  render();
  showToast('削除済みに移動しました');
}

function updateTrashList() {
  const list = document.querySelector('#trashList');
  document.querySelector('#trashCount').textContent = trash.length;
  if (!trash.length) {
    list.innerHTML = '<p class="trash-empty">削除済みのゲームはありません。</p>';
    return;
  }
  list.innerHTML = trash.map((entry, index) => `<div class="trash-item"><div><strong>${entry.item[0]}</strong><small>あと${Math.max(1, Math.ceil((trashLifetime - (Date.now() - entry.deletedAt)) / (24 * 60 * 60 * 1000)))}日</small></div><button class="restore-button" data-restore="${index}" type="button">戻す</button></div>`).join('');
}

document.querySelector('#trashList').addEventListener('click', (event) => {
  const button = event.target.closest('[data-restore]');
  if (!button) return;
  const index = Number(button.dataset.restore);
  const entry = trash[index];
  if (!entry) return;
  trash.splice(index, 1);
  localStorage.setItem('boardGameTrash', JSON.stringify(trash));
  render();
  showToast(`「${entry.item[0]}」を棚に戻しました`);
});

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function readImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);
    reader.readAsDataURL(file);
  });
}

render();
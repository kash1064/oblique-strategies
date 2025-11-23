const card = document.querySelector('.card__inner');

const input = document.querySelector('.input');

const footer = document.querySelector('footer a');

const head = document.querySelector('.head');

const strategies = [

    "Abandon normal instruments\nいつもの道具にこだわらず、慣れた環境から抜け出す。",
    "Accept advice\n助言を受け入れ、自分の盲点を認める。",
    "Accretion\n微細な積み重ねが作品をつくる。",
    "A line has two sides\nひとつの作品にも複数の側面があることを忘れない。",
    "Allow an easement (an easement is the abandonment of a stricture)\n制約を緩め、創造性を呼び込む余白をつくる。",
    "Are there sections? Consider transitions\n構成の“つなぎ”を重視する。",
    "Ask people to work against their better judgement\n自分の“正しさ”をあえて疑う。",
    "Ask your body\n身体の感覚を創作の一部として扱う。",
    "Assemble some of the instruments in a group and treat the group\n個ではなく“群れ”として要素を捉える。",
    "Balance the consistency principle with the inconsistency principle\n一貫性と不一致のバランスをとる。",
    "Be dirty\n完璧さより、少しの“雑味”を受け入れる。",
    "Breathe more deeply\n呼吸を整え、創作のリズムを正す。",
    "Bridges -build -burn\n新しい橋を架けるか、過去を断ち切る。",
    "Cascades\n流れを意識して作品を動かす。",
    "Change instrument roles\n要素の役割を入れ替え、固定観念を壊す。",
    "Change nothing and continue with immaculate consistency\n変化なしで続けるという実験も行う。",
    "Children's voices -speaking -singing\n子どものような自由さと無垢を取り戻す。",
    "Cluster analysis\n要素の“塊”を分析し構造を理解する。",
    "Consider different fading systems\n始まり方と終わり方という“境界”を研究する。",
    "Consult other sources -promising -unpromising\n成果が出そうなものも出なさそうなものも参考にする。",
    "Convert a melodic element into a rhythmic element\n形式を変換し、思考の固定化を避ける。",
    "Courage!\n創作に必要なのは何より勇気。",
    "Cut a vital connection\nあえて重要な依存を断つ。",
    "Decorate, decorate\n装飾を恐れず、意図的に加える。",
    "Define an area as 'safe' and use it as an anchor\n安全地帯をひとつ持ち、そこから冒険する。",
    "Destroy -nothing -the most important thing\n破壊の価値を理解し、時に核心すら壊す。",
    "Discard an axiom\n“当たり前”を疑う姿勢を持つ。",
    "Disconnect from desire\n欲望と創作を切り離す。",
    "Discover the recipes you are using and abandon them\n自分のテンプレを見つけ、それを捨てる。",
    "Distorting time\n時間感覚を操作する。",
    "Do nothing for as long as possible\n何もしない時間を意図的に組み入れる。",
    "Don't be afraid of things because they're easy to do\n簡単なことを侮らない。",
    "Don't be frightened of cliches\nクリシェ（定番）を恐れず使う。",
    "Don't be frightened to display your talents\n才能を隠さず堂々と示す。",
    "Don't break the silence\n沈黙の力を理解する。",
    "Don't stress one thing more than another\n過度な偏りを避け、全体を整える。",
    "Do something boring\n退屈な作業の中に創造の芽がある。",
    "Do the washing up\n日常行為が発想を促す。",
    "Do the words need changing?\n言葉（概念）を変えると作品も変わる。",
    "Do we need holes?\n余白の価値を知る。",
    "Emphasise differences\n差異を強調し、輪郭を描く。",
    "Emphasise repetitions\n反復がもたらす変化を信じる。",
    "Emphasise the flaws\n欠点を個性として前面に押し出す。",
    "Faced with a choice, do both\n選べないなら両方やる。",
    "Feedback recordings into an acoustic situation\n環境を変えて作品を見直す。",
    "Fill every beat with something\n過密表現の実験も恐れない。",
    "Get your neck massaged\n身体のメンテナンスも創作の一部。",
    "Ghost echoes\n微細な影や残響を意識する。",
    "Give the game away\n隠し事をやめる。透明な創作へ進む。",
    "Give way to your worst impulse\n禁じた衝動にあえて従う。",
    "Go slowly all the way round the outside\n周縁から中心を理解する。",
    "Honor thy error as a hidden intention\nミスを意図として扱う。",
    "How would you have done it?\n“自分ならどうするか”を問う。",
    "Humanise something free of error\n完璧さをほぐし人間味を与える。",
    "Imagine the music as a moving chain or caterpillar\n連鎖的な構造として作品を捉える。",
    "Imagine the music as a set of disconnected events\n断片の集合として作品を扱う。",
    "Infinitesimal gradations\n極小の差異を扱う。",
    "Intentions -credibility of -nobility of -humility of\n意図の質を問い続ける（信頼性・高潔さ・謙虚さ）。",
    "Into the impossible\n不可能に飛び込む。",
    "Is it finished?\n完成の基準を自分で決める。",
    "Is there something missing?\n足りないものを探す。",
    "Is the tuning appropriate?\n前提条件（基準）を確認する。",
    "Just carry on\nとにかく続ける。",
    "Left channel, right channel, centre channel\n視点・距離・位置を操作する。",
    "Listen in total darkness, or in a very large room, very quietly\n感覚を変えて作品を受け取る。",
    "Listen to the quiet voice\n微細な違和感に耳を澄ます。",
    "Look at a very small object, look at its centre\n小さな焦点に集中する。",
    "Look at the order in which you do things\n手順を見直す。",
    "Look closely at the most embarrassing details and amplify them\n最も恥ずかしい部分をあえて拡大する。",
    "Lowest common denominator check -single beat -single note -single riff\n最小単位に分解して検証する。",
    "Make a blank valuable by putting it in an exquisite frame\n空白に価値を与える。",
    "Make an exhaustive list of everything you might do and do the last thing on the list\n全アイデアを書き出し、最後の案を実行する。",
    "Make a sudden, destructive unpredictable action; incorporate\n予測不能な破壊的行動を創作に取り込む。",
    "Mechanicalise something idiosyncratic\n個性をあえて“機械化”する。",
    "Mute and continue\n抑制したまま続けるという選択もする。",
    "Only one element of each kind\n各種類ひとつだけに絞って構成する。",
    "(Organic) machinery\n“生きた機械”のように一貫して動かす。",
    "Overtly resist change\nあえて変化を拒み同じ表現を続ける。",
    "Put in earplugs\n感覚を制限し別の知覚を働かせる。",
    "Remember those quiet evenings\n静かな時間の感覚を思い出す。",
    "Remove ambiguities and convert to specifics\n曖昧さを減らし具体的にする。",
    "Remove specifics and convert to ambiguities\n逆に具体を曖昧にしてみる。",
    "Repetition is a form of change\n反復は変化の一形態。",
    "Reverse\n逆にしてみる（順序・構造の反転）。",
    "Shut the door and listen from outside\n外側から自分の作品を客観視する。",
    "Simple subtraction\n引き算の表現を使う。",
    "Spectrum analysis\n細部の質・色・響きを観察する。",
    "Take a break\n休憩する。",
    "Take away the elements in order of apparent non-importance\n重要でなさそうな順に削る。",
    "Tape your mouth\n言葉を封じ、作品自体に語らせる。",
    "The inconsistency principle\n不一致を意図的に扱う。",
    "The tape is now the music\n記録されたものこそ作品として扱う。",
    "Think of the radio\n注意を散らしながら受け取る視点を試す。",
    "Tidy up\n整理する（思考・構造・表現）。",
    "Trust in the you of now\n“今の自分”を信じる。",
    "Turn it upside down\n逆さにしてみる（構造の転覆）。",
    "Twist the spine\n身体を整え創作の構えを正す。",
    "Use an old idea\n古いアイデアを再利用する。",
    "Use an unacceptable colour\nあえて“変な色・音”を使う。",
    "Use fewer notes\n要素を減らす。",
    "Use filters\n選択基準や視点を変える。",
    "Use 'unqualified' people\n“素人”の視点を取り入れる。",
    "Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)\n意図と結果がズレる状況を創作に応用する。",
    "Water\n水のように流れる表現を作る。",
    "What are you really thinking about just now? Incorporate\n今考えていることを作品に取り入れる。",
    "What is the reality of the situation?\n現状の“リアル”を見つめる。",
    "What mistakes did you make last time?\n前回の失敗を思い出す。",
    "What would your closest friend do?\n親しい友人ならどうするかを想像する。",
    "What wouldn't you do?\nあなたが“絶対やらないこと”を探す。",
    "Work at a different speed\nいつもと違うスピードで作る。",
    "You are an engineer\nあなたは作品を設計するエンジニアである。",
    "You can only make one dot at a time\n一度にひとつの点（要素）しか扱えないと知る。",
    "You don't have to be ashamed of using your own ideas\n自分のアイデアを使うことを恥じない。"
];

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

const randomStrat = () => {
  const strat = strategies[Math.floor(Math.random() * strategies.length)];
  input.innerText = strat;
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);


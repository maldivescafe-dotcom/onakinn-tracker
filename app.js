'use strict';

// ========== LANG ==========

let lang = localStorage.getItem('onakinn_lang') || 'ja';

const T = {
  ja: {
    appTitle: 'オナ禁トラッカー',
    setupDescHtml: '禁欲の継続日数・効果・一言メッセージを<br>毎日確認できます。',
    startDateLabel: '開始日を選択',
    btnStart: 'スタートする',
    headerTitle: 'オナ禁トラッカー',
    streakLabel: '現在の記録',
    streakUnit: '日達成中',
    streakSub: '今日も続けています',
    startedPrefix: '開始日：',
    messageLabel: '今日の一言',
    effectLabel: '現在の想定効果',
    milestonesLabel: 'マイルストーン達成度',
    milestoneCheck: '✓',
    emergencyBtn: '今すぐしたくなった…',
    recommendLabel: 'おすすめリンク',
    recommendRandom: (type) => `起動するたびにランダム表示 ／ ${type}`,
    btnReset: 'リセット',
    btnShare: 'シェア',
    footer: '毎日の積み重ねが、あなたを変える。',
    emergencyModalTitle: '今すぐ試して',
    btnPrev: '‹ 前へ',
    btnNext: '次へ ›',
    resetTitle: '記録をリセットしますか？',
    resetBodyHtml: '現在の記録がすべて消えます。<br>本当にリセットしますか？',
    btnCancel: 'キャンセル',
    btnConfirm: 'リセットする',
    shareText: (days) => `オナ禁${days}日達成中！💪 自分を鍛え続けています。`,
    formatDate: (date) => `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
    alertNoDate: '開始日を選択してください',
    alertInvalidDate: '日付が正しくありません',
    alertFutureDate: '未来の日付は設定できません',
    shareTitle: 'オナ禁トラッカー',
    clipboardMsg: 'クリップボードにコピーしました',
    langBtn: 'EN'
  },
  en: {
    appTitle: 'NoFap Tracker',
    setupDescHtml: 'Track your daily streak, benefits,<br>and messages for staying strong.',
    startDateLabel: 'Start Date',
    btnStart: 'Start',
    headerTitle: 'NoFap Tracker',
    streakLabel: 'Current Record',
    streakUnit: ' days',
    streakSub: 'Keep going today!',
    startedPrefix: 'Started: ',
    messageLabel: "Today's Message",
    effectLabel: 'Current Expected Benefits',
    milestonesLabel: 'Milestones',
    milestoneCheck: '✓',
    emergencyBtn: 'I want to do it...',
    recommendLabel: 'Recommended',
    recommendRandom: (type) => `Random pick each visit ／ ${type}`,
    btnReset: 'Reset',
    btnShare: 'Share',
    footer: 'Every day counts. You are changing.',
    emergencyModalTitle: 'Try This Now',
    btnPrev: '‹ Prev',
    btnNext: 'Next ›',
    resetTitle: 'Reset your record?',
    resetBodyHtml: 'All data will be deleted.<br>Are you sure?',
    btnCancel: 'Cancel',
    btnConfirm: 'Reset',
    shareText: (days) => `${days} days NoFap! 💪 Staying disciplined every day.`,
    formatDate: (date) => `${date.getFullYear()}/${String(date.getMonth()+1).padStart(2,'0')}/${String(date.getDate()).padStart(2,'0')}`,
    alertNoDate: 'Please select your start date.',
    alertInvalidDate: 'Invalid date.',
    alertFutureDate: 'Future dates cannot be selected.',
    shareTitle: 'NoFap Tracker',
    clipboardMsg: 'Copied to clipboard',
    langBtn: 'JP'
  }
};

function tr() { return T[lang]; }

// ========== DATA ==========

const EFFECTS = [
  {
    minDay: 1, maxDay: 3,
    period: '1〜3日目',
    title: '嵐の前の静けさ',
    items: [
      'テストステロンが一時的に上昇',
      '強い禁断症状・欲求との格闘',
      '神経系がリセットを開始',
      'ここが最初の関門。耐えれば変化が始まる'
    ]
  },
  {
    minDay: 4, maxDay: 7,
    period: '4〜7日目',
    title: 'エネルギーの覚醒',
    items: [
      '集中力・注意力が回復し始める',
      '身体的なエネルギーが増加',
      '睡眠の質が改善される',
      'ドーパミン受容体の修復が開始'
    ]
  },
  {
    minDay: 8, maxDay: 14,
    period: '8〜14日目',
    title: '自信の芽生え',
    items: [
      '自己肯定感・自信が向上',
      '社交性・コミュニケーション力が改善',
      '目の輝きが戻り、表情が明るくなる',
      'テストステロンがピーク付近に達する（7日前後）'
    ]
  },
  {
    minDay: 15, maxDay: 30,
    period: '15〜30日目',
    title: 'ドーパミンの正常化',
    items: [
      'ドーパミン感受性が正常に近づく',
      '日常の小さな喜びを感じやすくなる',
      'モチベーション・意欲が持続するようになる',
      '肌の状態・髪のコシが改善し始める'
    ]
  },
  {
    minDay: 31, maxDay: 90,
    period: '1〜3ヶ月',
    title: 'メンタルの安定',
    items: [
      'メンタルが安定し、感情の波が減る',
      '生産性・仕事・勉強の質が向上',
      '習慣として定着し始める',
      '意志力・自己制御能力が強化される'
    ]
  },
  {
    minDay: 91, maxDay: 180,
    period: '3〜6ヶ月',
    title: '人生の優先順位の変化',
    items: [
      '時間・エネルギーの使い方が変わる',
      '目標達成能力・継続力が大幅に向上',
      '人間関係の質が改善される',
      '以前は気にならなかった夢や目標に気づく'
    ]
  },
  {
    minDay: 181, maxDay: 365,
    period: '6ヶ月〜1年',
    title: 'アイデンティティの変容',
    items: [
      '「自分は変われる」という確信が生まれる',
      '他の悪習慣も断ちやすくなる（波及効果）',
      'ホルモンバランスが長期的に安定',
      '外見・声・雰囲気に変化が現れる人も多い'
    ]
  },
  {
    minDay: 366, maxDay: 730,
    period: '1〜2年',
    title: '新しい自分の確立',
    items: [
      '誘惑に対する免疫力が格段に上がる',
      '自己コントロール能力が人生全般に波及',
      '精神的な成熟度・落ち着きが増す',
      '過去の自分との差異をはっきりと実感できる'
    ]
  },
  {
    minDay: 731, maxDay: 1824,
    period: '2〜5年',
    title: '完全なる習慣化',
    items: [
      '欲求そのものが生活の一部として管理できている',
      '長期的な目標設定・達成が自然にできるようになる',
      '精神的・肉体的なピークパフォーマンスを維持',
      'この習慣があなたの人格の一部になっている'
    ]
  },
  {
    minDay: 1825, maxDay: Infinity,
    period: '5年以上',
    title: '人生の再設計',
    items: [
      '自己制御が完全に内面化され、意識せず維持できる',
      'キャリア・人間関係・健康すべてに好循環が定着',
      '過去の自分との差が大きすぎて比較にならない',
      'この習慣が他者へのインスピレーションになっている'
    ]
  }
];

const EFFECTS_EN = [
  { minDay: 1, maxDay: 3, period: 'Day 1–3', title: 'The Storm Before the Calm',
    items: ['Testosterone temporarily rises', 'Strong withdrawal urges to overcome', 'Nervous system begins to reset', 'This is the first gate. Endure and change begins.'] },
  { minDay: 4, maxDay: 7, period: 'Day 4–7', title: 'Energy Awakening',
    items: ['Focus and attention start to recover', 'Physical energy increases', 'Sleep quality improves', 'Dopamine receptor repair begins'] },
  { minDay: 8, maxDay: 14, period: 'Day 8–14', title: 'Growing Confidence',
    items: ['Self-esteem and confidence improve', 'Social skills and communication improve', 'Eyes look brighter, expressions become livelier', 'Testosterone peaks around day 7'] },
  { minDay: 15, maxDay: 30, period: 'Day 15–30', title: 'Dopamine Normalization',
    items: ['Dopamine sensitivity approaches normal', 'Easier to feel joy in small daily things', 'Motivation and drive become more sustained', 'Skin and hair condition begin to improve'] },
  { minDay: 31, maxDay: 90, period: '1–3 Months', title: 'Mental Stability',
    items: ['Mental state stabilizes, emotional swings reduce', 'Productivity, work, and study quality improve', 'Habit starts to solidify', 'Willpower and self-control are strengthened'] },
  { minDay: 91, maxDay: 180, period: '3–6 Months', title: 'Shifting Life Priorities',
    items: ['How you spend time and energy changes', 'Goal-achieving ability and persistence greatly improve', 'Quality of relationships improves', 'You notice dreams and goals you previously ignored'] },
  { minDay: 181, maxDay: 365, period: '6 Months–1 Year', title: 'Identity Transformation',
    items: ['"I can change" becomes a deep conviction', 'Other bad habits become easier to break (ripple effect)', 'Hormonal balance stabilizes long-term', 'Many notice changes in appearance, voice, and presence'] },
  { minDay: 366, maxDay: 730, period: '1–2 Years', title: 'Establishing a New Self',
    items: ['Resistance to temptation is greatly strengthened', 'Self-control ability ripples into all areas of life', 'Psychological maturity and calmness increase', 'The difference from your old self is clearly felt'] },
  { minDay: 731, maxDay: 1824, period: '2–5 Years', title: 'Full Habit Integration',
    items: ['Urges are manageable as part of daily life', 'Setting and achieving long-term goals feels natural', 'Maintaining peak mental and physical performance', 'This habit has become part of your character'] },
  { minDay: 1825, maxDay: Infinity, period: '5 Years+', title: 'Life Redesign',
    items: ['Self-control is fully internalized, maintained effortlessly', 'Positive cycles established in career, relationships, and health', 'The gap from your old self is too vast to compare', 'This habit inspires others around you'] }
];

const MESSAGES = [
  '今日も耐えた自分を誇れ。昨日の自分より強い。',
  '衝動は波のようなもの。乗り越えれば必ず引く。',
  '快楽は一瞬、後悔は長い。だが誇りはもっと長い。',
  '自分との約束を守る人間が、他人との約束も守れる。',
  '欲求に勝つたびに、意志力という筋肉が鍛えられる。',
  '今この瞬間の選択が、未来の自分を作っている。',
  '弱さを知っている人間だけが、本当に強くなれる。',
  '誘惑は扉の前に来る。開けるかどうかはお前が決める。',
  'この苦しさは成長の証。痛みの先に変化がある。',
  '最も偉大な征服は、自分自身を征服することだ。',
  '今日一日だけ耐えればいい。それを繰り返すだけ。',
  '後で「あのとき踏ん張って良かった」と必ず思う日が来る。',
  '衝動に従うのは簡単だ。だからこそ抵抗する価値がある。',
  '集中力はエネルギーの向け先で決まる。今日も正しく向けろ。',
  'お前の最大の敵はお前自身だ。今日もその敵に勝っている。',
  '変化は見えない場所で静かに起きている。信じて続けろ。',
  '本物の自由は、欲求に従うことではなく、選べることだ。',
  '困難な道を選ぶ者だけが、たどり着けない場所がある。',
  '今日の我慢が、明日の自信になる。',
  '何かを手放すことで、もっと大切なものが手に入る。'
];

const MESSAGES_EN = [
  'Be proud of yourself for enduring today. You are stronger than yesterday.',
  'Urges are like waves. Ride them out and they always pass.',
  'Pleasure is fleeting, regret is long. But pride lasts even longer.',
  'Those who keep promises to themselves can keep promises to others.',
  'Every time you overcome an urge, your willpower muscle grows stronger.',
  'Your choices in this moment are shaping your future self.',
  'Only those who know their weakness can become truly strong.',
  'Temptation knocks at the door. Whether you open it is up to you.',
  'This struggle is proof of growth. Change lies beyond the pain.',
  'The greatest conquest is the conquest of oneself.',
  'Just endure today. That is all. Then repeat.',
  'A day will come when you say "I am glad I held on back then."',
  'Giving in to impulse is easy. That is exactly why resisting has value.',
  'Focus is determined by where you direct your energy. Direct it well today.',
  'Your greatest enemy is yourself. Today, you are winning that battle.',
  'Change is happening quietly in places you cannot see. Trust and continue.',
  'True freedom is not following desire, but having the power to choose.',
  'Only those who choose the harder path reach places others cannot.',
  'Today\'s patience becomes tomorrow\'s confidence.',
  'By letting go of something, you gain something far more valuable.'
];

const EMERGENCY_TIPS = [
  {
    icon: '🧊',
    title: '冷水を顔にかける',
    body: '今すぐ洗面所へ行き、冷たい水で顔を洗おう。\n冷刺激が交感神経をリセットし、衝動の波が急速に引く。10秒でできる最速の応急処置。'
  },
  {
    icon: '💪',
    title: '腕立て伏せ20回',
    body: '今すぐその場で腕立て伏せを20回やれ。\n筋肉を使うと性的エネルギーが運動エネルギーに転換される。終わったとき、衝動は半分以下になっている。'
  },
  {
    icon: '🌬️',
    title: '4-7-8呼吸法',
    body: '鼻から4秒吸う → 7秒止める → 口から8秒吐く。\nこれを3回繰り返す。副交感神経が活性化し、脳の興奮状態が鎮まる。今すぐ始めろ。'
  },
  {
    icon: '🚶',
    title: '外に出る',
    body: '靴を履いて外へ出ろ。5分でいい。\n環境を変えることで脳の回路が切り替わる。衝動は「今いる場所」と強く結びついている。外の空気が引き戻してくれる。'
  },
  {
    icon: '🧠',
    title: '「波乗り」テクニック',
    body: '衝動を消そうとするな。ただ観察しろ。\n「今自分は衝動を感じている」と心の中で実況する。衝動は波と同じで、乗り越えれば必ず引く。平均で10〜20分しか続かない。'
  },
  {
    icon: '🚿',
    title: '冷水シャワーを浴びる',
    body: '冷たいシャワーを1〜2分浴びろ。\nテストステロンは保たれ、ドーパミンが正常にリセットされる。世界中のアスリートが使う最強の衝動制御法だ。'
  },
  {
    icon: '📝',
    title: '「なぜやめたか」を書く',
    body: 'メモアプリを開いて、オナ禁を始めた理由を今すぐ書け。\n文字にすることで前頭前皮質（理性の脳）が再び働き始める。感情ではなく、目的に意識が戻る。'
  },
  {
    icon: '🎵',
    title: 'テンションの上がる曲をかける',
    body: '好きな音楽を大音量でかけて体を動かせ。\n音楽はドーパミン回路を別の方向に向ける力がある。衝動と音楽は同じ回路を使うため、音楽が上書きする。'
  },
  {
    icon: '💧',
    title: '冷水をゆっくり飲む',
    body: 'コップ1杯の冷水をゆっくり飲め。\n口・喉・胃への感覚刺激が「今この瞬間」に意識を引き戻す。マインドフルネスの最もシンプルな実践法だ。'
  },
  {
    icon: '📵',
    title: '今すぐスマホを置く',
    body: 'スマホを別の部屋に置いて、5分間離れろ。\n衝動の90%はスクリーンへの接触から始まる。物理的な距離を作るだけで、脳への刺激が急激に減る。'
  }
];

const EMERGENCY_TIPS_EN = [
  { icon: '🧊', title: 'Splash Cold Water on Your Face', body: 'Go to the sink right now and wash your face with cold water.\nThe cold stimulus resets your sympathetic nervous system, quickly calming the urge. The fastest first aid — takes 10 seconds.' },
  { icon: '💪', title: '20 Push-ups Right Now', body: 'Drop and do 20 push-ups where you stand.\nUsing your muscles converts sexual energy into physical energy. When you\'re done, the urge will be less than half as strong.' },
  { icon: '🌬️', title: '4-7-8 Breathing', body: 'Inhale through nose for 4 seconds → Hold for 7 seconds → Exhale through mouth for 8 seconds.\nRepeat 3 times. This activates the parasympathetic nervous system and calms brain excitement. Start now.' },
  { icon: '🚶', title: 'Go Outside', body: 'Put on your shoes and step outside. 5 minutes is enough.\nChanging your environment switches your brain\'s circuits. Urges are strongly tied to your current location. Fresh air will bring you back.' },
  { icon: '🧠', title: 'The "Urge Surfing" Technique', body: 'Don\'t try to destroy the urge. Just observe it.\nSay to yourself: "I am feeling an urge right now." Urges are like waves — they always pass. They last an average of 10–20 minutes.' },
  { icon: '🚿', title: 'Take a Cold Shower', body: 'Take a cold shower for 1–2 minutes.\nTestosterone is preserved, dopamine resets normally. Used by athletes worldwide — one of the most powerful impulse control methods.' },
  { icon: '📝', title: 'Write Down "Why You Started"', body: 'Open your notes app and write your reasons for starting NoFap right now.\nPutting it in words re-engages your prefrontal cortex (rational brain). Consciousness returns to purpose, not emotion.' },
  { icon: '🎵', title: 'Play Energizing Music', body: 'Put on your favorite music at full volume and move your body.\nMusic has the power to redirect dopamine circuits. Urges and music use the same circuit — music can override the urge.' },
  { icon: '💧', title: 'Drink Cold Water Slowly', body: 'Slowly drink a full glass of cold water.\nThe sensory stimulation of mouth, throat, and stomach brings consciousness back to the present moment. The simplest mindfulness practice.' },
  { icon: '📵', title: 'Put Down Your Phone Now', body: 'Place your phone in another room and step away for 5 minutes.\n90% of urges begin with screen contact. Simply creating physical distance rapidly reduces brain stimulation.' }
];

const EMERGENCY_AFFIRMATIONS = [
  'この衝動に勝てば、また強くなれる。お前はもうそれを知っている。',
  '今日ここで耐えることが、未来の自分への最大の贈り物だ。',
  'この瞬間を乗り越えた回数だけ、お前は本物になっていく。',
  '衝動の向こう側に、本当に手に入れたいものがある。',
  '10分後の自分が、今の選択に感謝している。'
];

const EMERGENCY_AFFIRMATIONS_EN = [
  'Winning this urge makes you stronger. You already know that.',
  'Enduring this moment is the greatest gift you can give your future self.',
  'Every time you get through this, you become more real.',
  'There is something you truly want on the other side of this urge.',
  'Your future self, 10 minutes from now, is grateful for your choice today.'
];

const RECOMMEND_LINKS = [
  {
    type: 'YouTube',
    icon: '▶️',
    title: 'Better Than Yesterday',
    desc: '自己改善・禁欲・習慣化をテーマにした英語チャンネル。科学的根拠に基づく解説が人気。',
    url: 'https://www.youtube.com/@BetterThanYesterday'
  },
  {
    type: 'YouTube',
    icon: '▶️',
    title: 'Improvement Pill',
    desc: 'NoFap・自己鍛錬・メンタル強化をアニメーション解説。初心者にわかりやすい。',
    url: 'https://www.youtube.com/@ImprovementPill'
  },
  {
    type: 'YouTube',
    icon: '▶️',
    title: 'RedFrost Motivation',
    desc: '禁欲・自己規律・モチベーション動画を多数公開。継続の後押しに最適。',
    url: 'https://www.youtube.com/@RedFrostMotivation'
  },
  {
    type: 'YouTube',
    icon: '▶️',
    title: 'Hamza Ahmed',
    desc: 'NoFap・筋トレ・自己改善を組み合わせた実践的なアドバイスが人気。',
    url: 'https://www.youtube.com/@HamzaAhmed'
  },
  {
    type: 'コミュニティ',
    icon: '💬',
    title: 'Reddit r/NoFap',
    desc: '世界最大の禁欲コミュニティ。体験談・アドバイス・励ましが日々投稿される。',
    url: 'https://www.reddit.com/r/NoFap/'
  },
  {
    type: 'コミュニティ',
    icon: '💬',
    title: 'Reddit r/pornfree',
    desc: 'ポルノ依存からの解放に特化したコミュニティ。回復の記録や体験談が豊富。',
    url: 'https://www.reddit.com/r/pornfree/'
  },
  {
    type: 'ブログ・記事',
    icon: '📖',
    title: 'Your Brain on Porn',
    desc: 'ポルノが脳に与える影響を科学的に解説したサイト。研究論文も多数掲載。',
    url: 'https://www.yourbrainonporn.com'
  },
  {
    type: 'ブログ・記事',
    icon: '📖',
    title: 'NoFap公式サイト',
    desc: '禁欲の科学・よくある質問・回復プログラムなど体系的な情報が揃う。',
    url: 'https://nofap.com'
  },
  {
    type: 'ツール',
    icon: '🛠️',
    title: 'Brainbuddy（アプリ）',
    desc: 'NoFap専用のトラッカーアプリ。コーチング機能・誘惑ブロックも搭載。',
    url: 'https://www.brainbuddyapp.com'
  },
  {
    type: 'ツール',
    icon: '🛠️',
    title: 'Cold Turkey Blocker',
    desc: 'ポルノサイトをPC・スマホで完全ブロックできるアプリ。意志力を補助する。',
    url: 'https://getcoldturkey.com'
  },
  {
    type: '🇯🇵 YouTube',
    icon: '▶️',
    title: 'マコなり社長',
    desc: '自己規律・習慣化・メンタル強化を日本語で解説。禁欲に通じる意志力の鍛え方が人気。',
    url: 'https://www.youtube.com/@makonari'
  },
  {
    type: '🇯🇵 YouTube',
    icon: '▶️',
    title: 'メンタリストDaiGo',
    desc: '依存症・自己制御・ドーパミン管理を科学的に解説。禁欲の理解に役立つ動画多数。',
    url: 'https://www.youtube.com/@mentalistdaigo'
  },
  {
    type: '🇯🇵 YouTube',
    icon: '▶️',
    title: 'YouTube「オナ禁 効果」検索',
    desc: '日本語のオナ禁体験談・効果解説動画を一覧で確認できる。様々な視点から学べる。',
    url: 'https://www.youtube.com/results?search_query=%E3%82%AA%E3%83%8A%E7%A6%81+%E5%8A%B9%E6%9E%9C'
  },
  {
    type: '🇯🇵 ブログ',
    icon: '📖',
    title: 'Note「オナ禁」記事一覧',
    desc: '日本人ユーザーによるオナ禁の体験談・効果・継続のコツをまとめた記事が多数掲載。',
    url: 'https://note.com/search?q=%E3%82%AA%E3%83%8A%E7%A6%81'
  },
  {
    type: '🇯🇵 まとめ',
    icon: '💬',
    title: 'Googleで「オナ禁 体験談」を検索',
    desc: '日本語の最新体験談・効果報告・継続のコツが豊富に見つかる。',
    url: 'https://www.google.com/search?q=%E3%82%AA%E3%83%8A%E7%A6%81+%E4%BD%93%E9%A8%93%E8%AB%87'
  }
];

const RECOMMEND_LINKS_EN = [
  { type: 'YouTube', icon: '▶️', title: 'Better Than Yesterday', desc: 'Self-improvement, NoFap & habit science. Research-based English channel.', url: 'https://www.youtube.com/@BetterThanYesterday' },
  { type: 'YouTube', icon: '▶️', title: 'Improvement Pill', desc: 'Animated explanations of NoFap, discipline & mental training.', url: 'https://www.youtube.com/@ImprovementPill' },
  { type: 'YouTube', icon: '▶️', title: 'RedFrost Motivation', desc: 'NoFap, discipline & motivation videos. Great for keeping momentum.', url: 'https://www.youtube.com/@RedFrostMotivation' },
  { type: 'YouTube', icon: '▶️', title: 'Hamza Ahmed', desc: 'Practical advice combining NoFap, fitness & self-improvement.', url: 'https://www.youtube.com/@HamzaAhmed' },
  { type: 'Community', icon: '💬', title: 'Reddit r/NoFap', desc: "The world's largest NoFap community. Stories, advice & encouragement posted daily.", url: 'https://www.reddit.com/r/NoFap/' },
  { type: 'Community', icon: '💬', title: 'Reddit r/pornfree', desc: 'Community focused on freedom from porn addiction. Rich recovery stories.', url: 'https://www.reddit.com/r/pornfree/' },
  { type: 'Article', icon: '📖', title: 'Your Brain on Porn', desc: 'Science-based site explaining how porn affects the brain. Many research papers cited.', url: 'https://www.yourbrainonporn.com' },
  { type: 'Article', icon: '📖', title: 'NoFap Official Site', desc: 'Science of abstinence, FAQs, and recovery programs — systematic information.', url: 'https://nofap.com' },
  { type: 'Tool', icon: '🛠️', title: 'Brainbuddy (App)', desc: 'Dedicated NoFap tracker app with coaching and temptation-blocking features.', url: 'https://www.brainbuddyapp.com' },
  { type: 'Tool', icon: '🛠️', title: 'Cold Turkey Blocker', desc: 'Completely block adult sites on PC and mobile. Supports your willpower.', url: 'https://getcoldturkey.com' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'Makonari (JP)', desc: 'Japanese channel on discipline, habits & mental strength. (Japanese)', url: 'https://www.youtube.com/@makonari' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'Mentalist DaiGo (JP)', desc: 'Science-based explanations of addiction & self-control. (Japanese)', url: 'https://www.youtube.com/@mentalistdaigo' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'NoFap Videos (JP)', desc: 'Japanese NoFap experience & benefit videos. Various perspectives. (Japanese)', url: 'https://www.youtube.com/results?search_query=%E3%82%AA%E3%83%8A%E7%A6%81+%E5%8A%B9%E6%9E%9C' },
  { type: '🇯🇵 Blog', icon: '📖', title: 'Note "オナ禁" Articles (JP)', desc: 'Japanese user experiences, effects & tips for NoFap. (Japanese)', url: 'https://note.com/search?q=%E3%82%AA%E3%83%8A%E7%A6%81' },
  { type: '🇯🇵 Search', icon: '💬', title: 'Google "オナ禁 体験談" (JP)', desc: 'Latest Japanese experiences and success stories. (Japanese)', url: 'https://www.google.com/search?q=%E3%82%AA%E3%83%8A%E3%83%BB%E4%BD%93%E9%A8%93%E8%AB%87' }
];

const MILESTONES = [
  { label: '1週間', days: 7 },
  { label: '1ヶ月', days: 30 },
  { label: '3ヶ月', days: 90 },
  { label: '1年', days: 365 },
  { label: '5年', days: 1825 }
];

const MILESTONES_EN = [
  { label: '1 Week', days: 7 },
  { label: '1 Month', days: 30 },
  { label: '3 Months', days: 90 },
  { label: '1 Year', days: 365 },
  { label: '5 Years', days: 1825 }
];

// ========== LANG HELPERS ==========

function getEffects() { return lang === 'en' ? EFFECTS_EN : EFFECTS; }
function getMessages() { return lang === 'en' ? MESSAGES_EN : MESSAGES; }
function getTips() { return lang === 'en' ? EMERGENCY_TIPS_EN : EMERGENCY_TIPS; }
function getAffirmations() { return lang === 'en' ? EMERGENCY_AFFIRMATIONS_EN : EMERGENCY_AFFIRMATIONS; }
function getMilestones() { return lang === 'en' ? MILESTONES_EN : MILESTONES; }
function getLinks() { return lang === 'en' ? RECOMMEND_LINKS_EN : RECOMMEND_LINKS; }

function applyLang() {
  document.documentElement.lang = lang;
  localStorage.setItem('onakinn_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });

  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.textContent = T[lang].langBtn;
  });
}

function toggleLang() {
  lang = lang === 'ja' ? 'en' : 'ja';
  applyLang();
  if (startDate) { render(); renderRecommend(); }
  if (document.getElementById('emergency-modal').classList.contains('open')) renderTip();
}

// ========== STATE ==========

let startDate = null;

function loadState() {
  const saved = localStorage.getItem('onakinn_start');
  if (saved) startDate = new Date(saved);
}

function saveState(date) {
  localStorage.setItem('onakinn_start', date.toISOString());
  startDate = date;
}

function clearState() {
  localStorage.removeItem('onakinn_start');
  startDate = null;
}

// ========== CALCULATIONS ==========

function getDays() {
  if (!startDate) return 0;
  const now = new Date();
  const diff = now - startDate;
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

function getEffect(days) {
  const effects = getEffects();
  return effects.find(e => days >= e.minDay && days <= e.maxDay) || effects[0];
}

function getDailyMessage(days) {
  const messages = getMessages();
  const index = days % messages.length;
  return messages[index];
}

// ========== RENDER ==========

function render() {
  const days = getDays();
  const effect = getEffect(days);
  const message = getDailyMessage(days);
  const t = tr();

  // days counter
  document.getElementById('streak-days').textContent = days;

  // start date
  if (startDate) {
    document.getElementById('streak-start').textContent = `${t.startedPrefix}${t.formatDate(startDate)}`;
  }

  // message
  document.getElementById('message-text').textContent = message;

  // effect
  document.getElementById('effect-period').textContent = effect.period;
  document.getElementById('effect-title').textContent = effect.title;
  const ul = document.getElementById('effect-list');
  ul.innerHTML = '';
  effect.items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  // milestones
  const milestones = getMilestones();
  const container = document.getElementById('milestones');
  container.innerHTML = '';
  milestones.forEach(m => {
    const pct = Math.min(100, Math.round((days / m.days) * 100));
    const done = days >= m.days;
    const row = document.createElement('div');
    row.className = `milestone${done ? ' done' : ''}`;
    row.innerHTML = `
      <span class="milestone-name">${m.label}</span>
      <div class="milestone-bar-bg">
        <div class="milestone-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="milestone-pct">${done ? t.milestoneCheck : pct + '%'}</span>
    `;
    container.appendChild(row);
  });
}

// ========== SCREENS ==========

function showMain() {
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  render();
  applyBg();
  renderRecommend();
}

function showSetup() {
  document.getElementById('main-screen').classList.add('hidden');
  document.getElementById('setup-screen').classList.remove('hidden');

  // set default date to today
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById('start-date-input').value = `${yyyy}-${mm}-${dd}`;
}

// ========== EVENTS ==========

function onStart() {
  const t = tr();
  const val = document.getElementById('start-date-input').value;
  if (!val) { alert(t.alertNoDate); return; }
  const date = new Date(val + 'T00:00:00');
  if (isNaN(date)) { alert(t.alertInvalidDate); return; }
  const now = new Date();
  now.setHours(23, 59, 59, 999);
  if (date > now) { alert(t.alertFutureDate); return; }
  saveState(date);
  showMain();
}

function onReset() {
  document.getElementById('reset-modal').classList.add('open');
}

function onResetCancel() {
  document.getElementById('reset-modal').classList.remove('open');
}

function onResetConfirm() {
  document.getElementById('reset-modal').classList.remove('open');
  clearState();
  showSetup();
}

function onShare() {
  const t = tr();
  const days = getDays();
  const text = t.shareText(days);
  if (navigator.share) {
    navigator.share({ title: t.shareTitle, text }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(text).then(() => alert(t.clipboardMsg))
      .catch(() => alert(text));
  }
}

// ========== BACKGROUND TOGGLE ==========

const BG_STYLES = [
  'linear-gradient(135deg, rgba(30,27,75,0.45), rgba(49,46,129,0.35)), url(\'./bg-hero.png\') center right/cover no-repeat',
  'linear-gradient(135deg, rgba(30,27,75,0.45), rgba(49,46,129,0.35)), url(\'./bg-hero-male.jpg\') center right/cover no-repeat',
  'linear-gradient(135deg, #1e1b4b, #312e81)'
];
let bgIndex = parseInt(localStorage.getItem('onakinn_bg') || '0');

function applyBg() {
  document.querySelector('.streak-card').style.background = BG_STYLES[bgIndex];
}

function toggleBg() {
  bgIndex = (bgIndex + 1) % BG_STYLES.length;
  localStorage.setItem('onakinn_bg', bgIndex);
  applyBg();
}

// ========== RECOMMEND LINKS ==========

function renderRecommend() {
  const links = getLinks();
  const item = links[Math.floor(Math.random() * links.length)];
  document.getElementById('recommend-sub').textContent = tr().recommendRandom(item.type);
  document.getElementById('recommend-icon').textContent = item.icon;
  document.getElementById('recommend-title').textContent = item.title;
  document.getElementById('recommend-desc').textContent = item.desc;
  document.getElementById('recommend-link').href = item.url;
}

// ========== EMERGENCY ==========

let currentTipIndex = 0;

function openEmergency() {
  const tips = getTips();
  currentTipIndex = Math.floor(Math.random() * tips.length);
  renderTip();
  document.getElementById('emergency-modal').classList.add('open');
}

function closeEmergency() {
  document.getElementById('emergency-modal').classList.remove('open');
}

function renderTip() {
  const tips = getTips();
  const affirmations = getAffirmations();
  const tip = tips[currentTipIndex];
  const total = tips.length;

  document.getElementById('tip-number').textContent = `TIP ${currentTipIndex + 1} / ${total}`;
  document.getElementById('tip-icon').textContent = tip.icon;
  document.getElementById('tip-title').textContent = tip.title;
  document.getElementById('tip-body').textContent = tip.body;

  // affirmation (cycles independently)
  const aff = affirmations[currentTipIndex % affirmations.length];
  document.getElementById('emergency-affirmation').textContent = aff;

  // dots
  const dotsEl = document.getElementById('tip-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = `tip-dot${i === currentTipIndex ? ' active' : ''}`;
    dotsEl.appendChild(d);
  }
}

function onTipNext() {
  const tips = getTips();
  currentTipIndex = (currentTipIndex + 1) % tips.length;
  renderTip();
}

function onTipPrev() {
  const tips = getTips();
  currentTipIndex = (currentTipIndex - 1 + tips.length) % tips.length;
  renderTip();
}

// ========== INIT ==========

document.addEventListener('DOMContentLoaded', () => {
  loadState();

  document.getElementById('btn-bg-toggle').addEventListener('click', toggleBg);
  document.getElementById('btn-start').addEventListener('click', onStart);
  document.getElementById('btn-reset').addEventListener('click', onReset);
  document.getElementById('btn-share').addEventListener('click', onShare);
  document.getElementById('btn-cancel').addEventListener('click', onResetCancel);
  document.getElementById('btn-confirm').addEventListener('click', onResetConfirm);
  document.getElementById('btn-emergency').addEventListener('click', openEmergency);
  document.getElementById('btn-emergency-close').addEventListener('click', closeEmergency);
  document.getElementById('btn-tip-next').addEventListener('click', onTipNext);
  document.getElementById('btn-tip-prev').addEventListener('click', onTipPrev);

  // close modals on backdrop tap
  document.getElementById('reset-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) onResetCancel();
  });
  document.getElementById('emergency-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeEmergency();
  });

  document.querySelectorAll('.btn-lang').forEach(btn => btn.addEventListener('click', toggleLang));
  applyLang();

  if (startDate) {
    showMain();
    applyBg();
    renderRecommend();
  } else {
    showSetup();
  }

  // register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

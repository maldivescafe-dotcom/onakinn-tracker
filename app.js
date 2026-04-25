'use strict';

// ========== LANG ==========

let lang = localStorage.getItem('energy_lang') || 'ja';

const T = {
  ja: {
    appTitle: 'Energy Tracker',
    genderDesc: 'あなたのモードを選んでください',
    genderNote: '後から設定で変更できます',
    genderMale: '男性モード',
    genderFemale: '女性モード',
    setupDesc: 'エネルギーを積み上げ、自分を進化させよう。',
    startDateLabel: '開始日を選択',
    btnStart: 'スタートする',
    headerTitle: '⚡ Energy Tracker',
    activityBtnText: '活動を記録する',
    activityModalTitle: '活動を記録する',
    activityModalDesc: '今日行ったことをタップしてください',
    alreadyDone: '記録済み ✓',
    messageLabel: '今日のメッセージ',
    milestonesLabel: 'マイルストーン',
    milestoneCheck: '✓',
    emergencyBtn: '今すぐしたくなった…',
    penaltyLabel: '悪習慣を記録',
    penaltyModalTitle: '悪習慣を記録',
    penaltyModalDesc: '記録する行動を選んでください',
    btnBack: '戻る',
    btnConfirmPenalty: '記録する',
    recommendLabel: 'おすすめリンク',
    recommendRandom: (type) => `起動するたびにランダム表示 ／ ${type}`,
    btnShare: 'シェア',
    footer: '毎日の積み重ねが、あなたを変える。',
    emergencyModalTitle: '今すぐ試して',
    btnPrev: '‹ 前へ',
    btnNext: '次へ ›',
    resetTitle: '全データをリセットしますか？',
    resetBodyHtml: 'ポイント・記録がすべて消えます。<br>本当にリセットしますか？',
    btnCancel: 'キャンセル',
    btnConfirm: 'リセットする',
    settingsTitle: '設定',
    settingsModeLabel: 'モードを変更',
    settingsFemaleLimit: '「適度」の上限（回/週）',
    btnResetAll: '全データをリセット',
    shareTitle: 'Energy Tracker',
    clipboardMsg: 'クリップボードにコピーしました',
    langBtn: 'EN',
    startedPrefix: '開始日：',
    daysUnit: '日継続中',
    todayGain: (n) => n >= 0 ? `今日 +${n}pt` : `今日 ${n}pt`,
    shareText: (pts, days) => `Energy Tracker ${days}日継続中！⚡ 累計 ${pts.toLocaleString()} pt 達成！`,
    formatDate: (d) => `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`,
    alertNoDate: '開始日を選択してください',
    alertInvalidDate: '日付が正しくありません',
    alertFutureDate: '未来の日付は設定できません',
    currentMode: (m) => m === 'female' ? '現在：女性モード' : '現在：男性モード',
    penaltyConfirmTitle: '本当に記録しますか？',
    penaltyConfirmBody: (label, pct) => `「${label}」を記録します\nポイントが ${pct}% 減少（最低100pt保証）`,
    penaltyResultTitle: '記録しました',
    penaltyResultBody: (lost, remaining) => `−${lost}pt\n残り ${remaining.toLocaleString()} pt`,
    riseUp: 'また立ち上がれる。次の行動を起こそう！',
    recoveryTip: '⚡ 48時間以内に運動＋瞑想で +15% 回復チャンス！',
    junkRecoveryTip: '🥦 明日、運動か野菜多めで回復チャンスあり！',
    recoveryBonusMsg: '🎉 回復ボーナス +15%！',
    junkRecoveryMsg: '🥦 ジャンク回復ボーナス！',
    junkFreeWeekMsg: '🎊 7日間ジャンクゼロ達成！ +200pt',
    pointAdded: (n) => `+${n}pt 獲得！`,
    selfCareUnlocked: '✨ セルフケアボーナス解放中！',
    femaleLimitReached: '今週の上限に達しています（設定で変更可）',
    femaleSelfCareNote: '適度範囲内 — セルフケアボーナスが明日解放されます！',
    bonusApplied: 'ボーナス適用！',
  },
  en: {
    appTitle: 'Energy Tracker',
    genderDesc: 'Choose your mode',
    genderNote: 'You can change this later in Settings',
    genderMale: 'Male Mode',
    genderFemale: 'Female Mode',
    setupDesc: 'Build your energy and evolve every day.',
    startDateLabel: 'Start Date',
    btnStart: 'Start',
    headerTitle: '⚡ Energy Tracker',
    activityBtnText: 'Log Activity',
    activityModalTitle: 'Log Activity',
    activityModalDesc: 'Tap what you did today',
    alreadyDone: 'Done ✓',
    messageLabel: "Today's Message",
    milestonesLabel: 'Milestones',
    milestoneCheck: '✓',
    emergencyBtn: 'I want to do it...',
    penaltyLabel: 'Log a Setback',
    penaltyModalTitle: 'Log a Setback',
    penaltyModalDesc: 'Select what happened',
    btnBack: 'Back',
    btnConfirmPenalty: 'Log it',
    recommendLabel: 'Recommended',
    recommendRandom: (type) => `Random pick each visit ／ ${type}`,
    btnShare: 'Share',
    footer: 'Every day counts. You are changing.',
    emergencyModalTitle: 'Try This Now',
    btnPrev: '‹ Prev',
    btnNext: 'Next ›',
    resetTitle: 'Reset all data?',
    resetBodyHtml: 'All points and records will be deleted.<br>Are you sure?',
    btnCancel: 'Cancel',
    btnConfirm: 'Reset',
    settingsTitle: 'Settings',
    settingsModeLabel: 'Change Mode',
    settingsFemaleLimit: '"Moderate" limit (times/week)',
    btnResetAll: 'Reset All Data',
    shareTitle: 'Energy Tracker',
    clipboardMsg: 'Copied to clipboard',
    langBtn: 'JP',
    startedPrefix: 'Started: ',
    daysUnit: ' days streak',
    todayGain: (n) => n >= 0 ? `Today +${n}pt` : `Today ${n}pt`,
    shareText: (pts, days) => `Energy Tracker — Day ${days}! ⚡ ${pts.toLocaleString()} pts total!`,
    formatDate: (d) => `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`,
    alertNoDate: 'Please select your start date.',
    alertInvalidDate: 'Invalid date.',
    alertFutureDate: 'Future dates cannot be selected.',
    currentMode: (m) => m === 'female' ? 'Current: Female Mode' : 'Current: Male Mode',
    penaltyConfirmTitle: 'Are you sure?',
    penaltyConfirmBody: (label, pct) => `Log "${label}"?\nPoints will decrease by ${pct}% (min 100pt guaranteed)`,
    penaltyResultTitle: 'Logged',
    penaltyResultBody: (lost, remaining) => `−${lost}pt\nRemaining: ${remaining.toLocaleString()} pt`,
    riseUp: 'You can rise again. Take your next action!',
    recoveryTip: '⚡ Exercise + Meditate within 48h for +15% recovery!',
    junkRecoveryTip: '🥦 Exercise or eat healthy tomorrow for a recovery bonus!',
    recoveryBonusMsg: '🎉 Recovery Bonus +15%!',
    junkRecoveryMsg: '🥦 Junk Recovery Bonus!',
    junkFreeWeekMsg: '🎊 7-Day Junk-Free! +200pt',
    pointAdded: (n) => `+${n}pt earned!`,
    selfCareUnlocked: '✨ Self-care bonus unlocked!',
    femaleLimitReached: 'Weekly limit reached (change in Settings)',
    femaleSelfCareNote: 'Within moderate range — self-care bonus unlocked tomorrow!',
    bonusApplied: 'Bonus applied!',
  }
};

function tr() { return T[lang]; }

// ========== DATA: ACTIVITIES ==========

const ACTIVITIES = [
  { key: 'exercise',    icon: '🏋️', ja: '運動 30min',    en: 'Exercise 30min',   points: 30, isRecovery: true, isJunkRecovery: false },
  { key: 'meditation',  icon: '🧘', ja: '瞑想',           en: 'Meditation',       points: 25, isRecovery: true, isJunkRecovery: false },
  { key: 'cold_shower', icon: '🚿', ja: '冷水シャワー',   en: 'Cold Shower',      points: 20, isRecovery: false, isJunkRecovery: false },
  { key: 'reading',     icon: '📚', ja: '読書 30min',    en: 'Reading 30min',    points: 15, isRecovery: false, isJunkRecovery: false },
  { key: 'junk_free',   icon: '🥗', ja: 'ジャンクゼロ',  en: 'Junk-Free Day',    points: 20, isRecovery: false, isJunkRecovery: false },
  { key: 'creative',    icon: '🎨', ja: '創作活動',       en: 'Creative Work',    points: 15, isRecovery: false, isJunkRecovery: false },
  { key: 'good_sleep',  icon: '😴', ja: '良質な睡眠',    en: 'Good Sleep',       points: 10, isRecovery: false, isJunkRecovery: false },
  { key: 'healthy_meal',icon: '🥦', ja: '野菜多め',       en: 'Healthy Meal',     points: 10, isRecovery: false, isJunkRecovery: true  },
];

// ========== DATA: PENALTIES ==========

const PENALTY_CONFIGS = {
  male: [
    { key: 'porn_solo', icon: '⛔', ja: 'ポルノ＋自慰',      en: 'Porn + Solo',       rate: 0.65, isEjac: true,  isFemaleB: false },
    { key: 'solo',      icon: '⚠️', ja: '自慰（ポルノなし）',en: 'Solo (no porn)',    rate: 0.45, isEjac: true,  isFemaleB: false },
    { key: 'sex',       icon: '💛', ja: 'セックス',           en: 'Sex',               rate: 0.20, isEjac: true,  isFemaleB: false },
    { key: 'junk',      icon: '🍔', ja: 'ジャンクフード',     en: 'Junk Food',         rate: 0.25, isEjac: false, isFemaleB: false },
  ],
  female: [
    { key: 'porn_solo', icon: '⛔', ja: 'ポルノ＋自慰',      en: 'Porn + Solo',       rate: 0.45, isEjac: true,  isFemaleB: false },
    { key: 'solo',      icon: '💜', ja: '自慰（ポルノなし）',en: 'Self-care Solo',    rate: 0.15, isEjac: true,  isFemaleB: true  },
    { key: 'sex',       icon: '💛', ja: 'セックス',           en: 'Sex',               rate: 0.10, isEjac: true,  isFemaleB: false },
    { key: 'junk',      icon: '🍔', ja: 'ジャンクフード',     en: 'Junk Food',         rate: 0.25, isEjac: false, isFemaleB: false },
  ]
};

// ========== DATA: LEVELS ==========

const LEVELS = [
  { min: 0,     ja: 'Lv.1 スターター',        en: 'Lv.1 Starter'      },
  { min: 150,   ja: 'Lv.2 チャレンジャー',    en: 'Lv.2 Challenger'   },
  { min: 400,   ja: 'Lv.3 ライジング',        en: 'Lv.3 Rising'       },
  { min: 750,   ja: 'Lv.4 ファイター',        en: 'Lv.4 Fighter'      },
  { min: 1200,  ja: 'Lv.5 ウォリアー',        en: 'Lv.5 Warrior'      },
  { min: 1800,  ja: 'Lv.6 ストライカー',      en: 'Lv.6 Striker'      },
  { min: 2700,  ja: 'Lv.7 チャンピオン',      en: 'Lv.7 Champion'     },
  { min: 3800,  ja: 'Lv.8 エリート',          en: 'Lv.8 Elite'        },
  { min: 5200,  ja: 'Lv.9 マスター',          en: 'Lv.9 Master'       },
  { min: 7000,  ja: 'Lv.10 グランドマスター', en: 'Lv.10 Grandmaster' },
  { min: 10000, ja: 'Lv.15 エリートⅡ',       en: 'Lv.15 Elite II'    },
  { min: 15000, ja: 'Lv.20 伝説の存在',       en: 'Lv.20 Legend'      },
];

// ========== DATA: MILESTONES ==========

const MILESTONES = [
  { ja: 'ルーキー', en: 'Rookie',      points: 100   },
  { ja: 'ウォリアー',en: 'Warrior',    points: 500   },
  { ja: 'チャンピオン',en: 'Champion', points: 1500  },
  { ja: 'マスター',  en: 'Master',     points: 5000  },
  { ja: 'レジェンド',en: 'Legend',     points: 15000 },
];

// ========== DATA: MESSAGES ==========

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
  '困難な道を選ぶ者だけが、たどり着ける場所がある。',
  '今日の我慢が、明日の自信になる。',
  '何かを手放すことで、もっと大切なものが手に入る。',
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
  "Today's patience becomes tomorrow's confidence.",
  'By letting go of something, you gain something far more valuable.',
];

// ========== DATA: EMERGENCY ==========

const EMERGENCY_TIPS = [
  { icon: '🧊', title: '冷水を顔にかける', body: '今すぐ洗面所へ行き、冷たい水で顔を洗おう。\n冷刺激が交感神経をリセットし、衝動の波が急速に引く。10秒でできる最速の応急処置。' },
  { icon: '💪', title: '腕立て伏せ20回', body: '今すぐその場で腕立て伏せを20回やれ。\n筋肉を使うと性的エネルギーが運動エネルギーに転換される。終わったとき、衝動は半分以下になっている。' },
  { icon: '🌬️', title: '4-7-8呼吸法', body: '鼻から4秒吸う → 7秒止める → 口から8秒吐く。\nこれを3回繰り返す。副交感神経が活性化し、脳の興奮状態が鎮まる。今すぐ始めろ。' },
  { icon: '🚶', title: '外に出る', body: '靴を履いて外へ出ろ。5分でいい。\n環境を変えることで脳の回路が切り替わる。外の空気が引き戻してくれる。' },
  { icon: '🧠', title: '「波乗り」テクニック', body: '衝動を消そうとするな。ただ観察しろ。\n「今自分は衝動を感じている」と心の中で実況する。衝動は平均で10〜20分しか続かない。' },
  { icon: '🚿', title: '冷水シャワーを浴びる', body: '冷たいシャワーを1〜2分浴びろ。\nテストステロンは保たれ、ドーパミンが正常にリセットされる。世界中のアスリートが使う最強の衝動制御法だ。' },
  { icon: '📝', title: '「なぜやめたか」を書く', body: 'メモアプリを開いて、始めた理由を今すぐ書け。\n文字にすることで前頭前皮質（理性の脳）が再び働き始める。' },
  { icon: '🎵', title: 'テンションの上がる曲をかける', body: '好きな音楽を大音量でかけて体を動かせ。\n音楽はドーパミン回路を別の方向に向ける力がある。' },
  { icon: '💧', title: '冷水をゆっくり飲む', body: 'コップ1杯の冷水をゆっくり飲め。\n口・喉・胃への感覚刺激が「今この瞬間」に意識を引き戻す。' },
  { icon: '📵', title: '今すぐスマホを置く', body: 'スマホを別の部屋に置いて、5分間離れろ。\n衝動の90%はスクリーンへの接触から始まる。' },
];

const EMERGENCY_TIPS_EN = [
  { icon: '🧊', title: 'Splash Cold Water on Your Face', body: 'Go to the sink right now and wash your face with cold water.\nThe cold stimulus resets your sympathetic nervous system. Takes 10 seconds.' },
  { icon: '💪', title: '20 Push-ups Right Now', body: 'Drop and do 20 push-ups where you stand.\nUsing your muscles converts sexual energy into physical energy.' },
  { icon: '🌬️', title: '4-7-8 Breathing', body: 'Inhale for 4 seconds → Hold for 7 seconds → Exhale for 8 seconds.\nRepeat 3 times. This activates the parasympathetic nervous system. Start now.' },
  { icon: '🚶', title: 'Go Outside', body: 'Put on your shoes and step outside. 5 minutes is enough.\nChanging your environment switches your brain\'s circuits.' },
  { icon: '🧠', title: 'The "Urge Surfing" Technique', body: 'Don\'t try to destroy the urge. Just observe it.\nSay: "I am feeling an urge right now." Urges last an average of 10–20 minutes.' },
  { icon: '🚿', title: 'Take a Cold Shower', body: 'Take a cold shower for 1–2 minutes.\nTestosterone is preserved, dopamine resets. Used by athletes worldwide.' },
  { icon: '📝', title: 'Write Down "Why You Started"', body: 'Open your notes app and write your reasons right now.\nPutting it in words re-engages your prefrontal cortex (rational brain).' },
  { icon: '🎵', title: 'Play Energizing Music', body: 'Put on your favorite music at full volume and move your body.\nMusic redirects dopamine circuits — it can override the urge.' },
  { icon: '💧', title: 'Drink Cold Water Slowly', body: 'Slowly drink a full glass of cold water.\nSensory stimulation brings consciousness back to the present moment.' },
  { icon: '📵', title: 'Put Down Your Phone Now', body: 'Place your phone in another room and step away for 5 minutes.\n90% of urges begin with screen contact.' },
];

const EMERGENCY_AFFIRMATIONS = [
  'この衝動に勝てば、また強くなれる。お前はもうそれを知っている。',
  '今日ここで耐えることが、未来の自分への最大の贈り物だ。',
  'この瞬間を乗り越えた回数だけ、お前は本物になっていく。',
  '衝動の向こう側に、本当に手に入れたいものがある。',
  '10分後の自分が、今の選択に感謝している。',
];

const EMERGENCY_AFFIRMATIONS_EN = [
  'Winning this urge makes you stronger. You already know that.',
  'Enduring this moment is the greatest gift you can give your future self.',
  'Every time you get through this, you become more real.',
  'There is something you truly want on the other side of this urge.',
  'Your future self, 10 minutes from now, is grateful for your choice today.',
];

const RECOMMEND_LINKS = [
  { type: 'YouTube', icon: '▶️', title: 'Better Than Yesterday', desc: '自己改善・禁欲・習慣化をテーマにした英語チャンネル。科学的根拠に基づく解説が人気。', url: 'https://www.youtube.com/@BetterThanYesterday' },
  { type: 'YouTube', icon: '▶️', title: 'Improvement Pill', desc: 'NoFap・自己鍛錬・メンタル強化をアニメーション解説。初心者にわかりやすい。', url: 'https://www.youtube.com/@ImprovementPill' },
  { type: 'YouTube', icon: '▶️', title: 'RedFrost Motivation', desc: '禁欲・自己規律・モチベーション動画を多数公開。継続の後押しに最適。', url: 'https://www.youtube.com/@RedFrostMotivation' },
  { type: 'YouTube', icon: '▶️', title: 'Hamza Ahmed', desc: 'NoFap・筋トレ・自己改善を組み合わせた実践的なアドバイスが人気。', url: 'https://www.youtube.com/@HamzaAhmed' },
  { type: 'コミュニティ', icon: '💬', title: 'Reddit r/NoFap', desc: '世界最大の禁欲コミュニティ。体験談・アドバイス・励ましが日々投稿される。', url: 'https://www.reddit.com/r/NoFap/' },
  { type: 'コミュニティ', icon: '💬', title: 'Reddit r/pornfree', desc: 'ポルノ依存からの解放に特化したコミュニティ。', url: 'https://www.reddit.com/r/pornfree/' },
  { type: 'ブログ', icon: '📖', title: 'Your Brain on Porn', desc: 'ポルノが脳に与える影響を科学的に解説したサイト。', url: 'https://www.yourbrainonporn.com' },
  { type: 'ブログ', icon: '📖', title: 'NoFap公式サイト', desc: '禁欲の科学・よくある質問・回復プログラムなど体系的な情報が揃う。', url: 'https://nofap.com' },
  { type: 'ツール', icon: '🛠️', title: 'Brainbuddy（アプリ）', desc: 'NoFap専用のトラッカーアプリ。コーチング機能・誘惑ブロックも搭載。', url: 'https://www.brainbuddyapp.com' },
  { type: 'ツール', icon: '🛠️', title: 'Cold Turkey Blocker', desc: 'ポルノサイトをPC・スマホで完全ブロックできるアプリ。意志力を補助する。', url: 'https://getcoldturkey.com' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'マコなり社長', desc: '自己規律・習慣化・メンタル強化を日本語で解説。', url: 'https://www.youtube.com/@makonari' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'メンタリストDaiGo', desc: '依存症・自己制御・ドーパミン管理を科学的に解説。', url: 'https://www.youtube.com/@mentalistdaigo' },
  { type: '🇯🇵 まとめ', icon: '💬', title: 'Note「エネルギー管理」記事一覧', desc: '日本人ユーザーによる体験談・コツをまとめた記事が多数掲載。', url: 'https://note.com/search?q=%E3%82%A8%E3%83%8D%E3%83%AB%E3%82%AE%E3%83%BC+%E7%AE%A1%E7%90%86' },
];

const RECOMMEND_LINKS_EN = [
  { type: 'YouTube', icon: '▶️', title: 'Better Than Yesterday', desc: 'Self-improvement, NoFap & habit science. Research-based.', url: 'https://www.youtube.com/@BetterThanYesterday' },
  { type: 'YouTube', icon: '▶️', title: 'Improvement Pill', desc: 'Animated explanations of NoFap, discipline & mental training.', url: 'https://www.youtube.com/@ImprovementPill' },
  { type: 'YouTube', icon: '▶️', title: 'RedFrost Motivation', desc: 'NoFap, discipline & motivation videos.', url: 'https://www.youtube.com/@RedFrostMotivation' },
  { type: 'YouTube', icon: '▶️', title: 'Hamza Ahmed', desc: 'Practical advice combining NoFap, fitness & self-improvement.', url: 'https://www.youtube.com/@HamzaAhmed' },
  { type: 'Community', icon: '💬', title: 'Reddit r/NoFap', desc: "The world's largest NoFap community.", url: 'https://www.reddit.com/r/NoFap/' },
  { type: 'Community', icon: '💬', title: 'Reddit r/pornfree', desc: 'Community focused on freedom from porn addiction.', url: 'https://www.reddit.com/r/pornfree/' },
  { type: 'Article', icon: '📖', title: 'Your Brain on Porn', desc: 'Science-based site explaining how porn affects the brain.', url: 'https://www.yourbrainonporn.com' },
  { type: 'Article', icon: '📖', title: 'NoFap Official Site', desc: 'Science of abstinence, FAQs, and recovery programs.', url: 'https://nofap.com' },
  { type: 'Tool', icon: '🛠️', title: 'Brainbuddy (App)', desc: 'Dedicated tracker app with coaching and blocking features.', url: 'https://www.brainbuddyapp.com' },
  { type: 'Tool', icon: '🛠️', title: 'Cold Turkey Blocker', desc: 'Block adult sites on PC and mobile. Supports your willpower.', url: 'https://getcoldturkey.com' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'Makonari (JP)', desc: 'Japanese channel on discipline, habits & mental strength.', url: 'https://www.youtube.com/@makonari' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'Mentalist DaiGo (JP)', desc: 'Science-based explanations of addiction & self-control. (Japanese)', url: 'https://www.youtube.com/@mentalistdaigo' },
];

// ========== HELPERS ==========

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function dateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getMessages() { return lang === 'en' ? MESSAGES_EN : MESSAGES; }
function getTips()     { return lang === 'en' ? EMERGENCY_TIPS_EN : EMERGENCY_TIPS; }
function getAffirmations() { return lang === 'en' ? EMERGENCY_AFFIRMATIONS_EN : EMERGENCY_AFFIRMATIONS; }
function getLinks()    { return lang === 'en' ? RECOMMEND_LINKS_EN : RECOMMEND_LINKS; }

function getLevel(pts) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (pts >= l.min) current = l;
    else break;
  }
  return lang === 'en' ? current.en : current.ja;
}

function getDailyBasePoints(day) {
  if (day <= 3) return 50;
  return Math.round(80 * Math.exp(-0.015 * (day - 3)) + 25);
}

function getStreakMultiplier(days) {
  if (days >= 90) return 1.6;
  if (days >= 30) return 1.4;
  if (days >= 7)  return 1.2;
  return 1.0;
}

function applyPenaltyCalc(currentPts, rate) {
  const MIN_POINTS = 100;
  return Math.max(MIN_POINTS, Math.round(currentPts * (1 - rate)));
}

function getWeekKey() {
  const d = new Date();
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${String(week).padStart(2, '0')}`;
}

function getPenalties() {
  return PENALTY_CONFIGS[gender] || PENALTY_CONFIGS.male;
}

// ========== STATE ==========

let points   = 0;
let startDate = null;
let gender   = 'male';
let bgIndex  = 0;

function loadState() {
  const sp = localStorage.getItem('energy_points');
  points    = sp !== null ? parseFloat(sp) : 0;
  const ss  = localStorage.getItem('energy_start');
  startDate = ss ? new Date(ss) : null;
  gender    = localStorage.getItem('energy_gender') || null;
  lang      = localStorage.getItem('energy_lang') || 'ja';
  bgIndex   = parseInt(localStorage.getItem('energy_bg') || '0');
}

function savePoints() {
  localStorage.setItem('energy_points', points.toString());
}

function saveState(date) {
  localStorage.setItem('energy_start', date.toISOString());
  startDate = date;
}

function setGender(g) {
  gender = g;
  localStorage.setItem('energy_gender', g);
}

function clearAllData() {
  const keysToRemove = [
    'energy_points', 'energy_start', 'energy_last_daily',
    'energy_today_change', 'energy_today_activities',
    'energy_ejac_recovery', 'energy_junk_recovery_date',
    'energy_junk_penalty_amt', 'energy_last_junk_date',
    'energy_junk_bonus_awarded', 'energy_female_week_count',
  ];
  keysToRemove.forEach(k => localStorage.removeItem(k));
  points = 0;
  startDate = null;
}

// ========== DAY CALCULATION ==========

function getDays() {
  if (!startDate) return 0;
  const diff = new Date() - startDate;
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

// ========== TODAY CHANGE TRACKING ==========

function getTodayChange() {
  const saved = localStorage.getItem('energy_today_change');
  if (!saved) return 0;
  const data = JSON.parse(saved);
  if (data.date !== todayStr()) return 0;
  return data.amount || 0;
}

function addToTodayChange(amount) {
  const today = todayStr();
  const saved = localStorage.getItem('energy_today_change');
  let data = saved ? JSON.parse(saved) : { date: today, amount: 0 };
  if (data.date !== today) data = { date: today, amount: 0 };
  data.amount += amount;
  localStorage.setItem('energy_today_change', JSON.stringify(data));
}

// ========== POINTS ==========

function addPoints(amount) {
  points = Math.max(0, points + amount);
  savePoints();
  addToTodayChange(amount);
}

function subtractPoints(newValue, lost) {
  points = newValue;
  savePoints();
  addToTodayChange(-lost);
}

// ========== DAILY BASE POINTS ==========

function checkAndAwardDailyPoints() {
  if (!startDate) return;
  const today = todayStr();
  const lastDaily = localStorage.getItem('energy_last_daily') || '';
  if (lastDaily === today) return;

  const days = getDays();
  if (days === 0) {
    localStorage.setItem('energy_last_daily', today);
    return;
  }

  // How many days to catch up (max 7)
  let daysToAward = 1;
  if (lastDaily) {
    const lastDate = new Date(lastDaily + 'T00:00:00');
    const todayDate = new Date(today + 'T00:00:00');
    const diff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
    daysToAward = Math.min(Math.max(diff, 1), 7);
  }

  const mult = getStreakMultiplier(days);
  let total = 0;
  for (let i = 0; i < daysToAward; i++) {
    const dayNum = Math.max(1, days - daysToAward + 1 + i);
    total += Math.round(getDailyBasePoints(dayNum) * mult);
  }

  addPoints(total);
  localStorage.setItem('energy_last_daily', today);

  // Check 7-day junk-free bonus
  checkJunkFreeWeekBonus();
}

// ========== TODAY ACTIVITIES ==========

function getTodayActivities() {
  const saved = localStorage.getItem('energy_today_activities');
  if (!saved) return [];
  const data = JSON.parse(saved);
  if (data.date !== todayStr()) return [];
  return data.done || [];
}

function markActivityDone(key) {
  const done = getTodayActivities();
  if (!done.includes(key)) done.push(key);
  localStorage.setItem('energy_today_activities', JSON.stringify({ date: todayStr(), done }));
}

function isActivityDone(key) {
  return getTodayActivities().includes(key);
}

// ========== EJAC RECOVERY ==========

function getEjacRecovery() {
  const s = localStorage.getItem('energy_ejac_recovery');
  if (!s) return null;
  const data = JSON.parse(s);
  if (data.expires < Date.now()) {
    localStorage.removeItem('energy_ejac_recovery');
    return null;
  }
  return data;
}

function setEjacRecovery() {
  localStorage.setItem('energy_ejac_recovery', JSON.stringify({
    expires: Date.now() + 48 * 3600 * 1000,
    done: []
  }));
}

// ========== JUNK BONUS ==========

function checkJunkFreeWeekBonus() {
  const today = todayStr();
  const bonusAwarded = localStorage.getItem('energy_junk_bonus_awarded');
  if (bonusAwarded === getWeekKey()) return null;

  const lastJunk = localStorage.getItem('energy_last_junk_date');
  let daysSinceJunk = Infinity;
  if (lastJunk) {
    daysSinceJunk = Math.floor((new Date(today) - new Date(lastJunk)) / (1000 * 60 * 60 * 24));
  } else if (startDate) {
    daysSinceJunk = getDays();
  }

  if (daysSinceJunk >= 7) {
    addPoints(200);
    localStorage.setItem('energy_junk_bonus_awarded', getWeekKey());
    return tr().junkFreeWeekMsg;
  }
  return null;
}

// ========== FEMALE WEEKLY COUNT ==========

function getFemaleWeekCount() {
  const s = localStorage.getItem('energy_female_week_count');
  if (!s) return 0;
  const d = JSON.parse(s);
  if (d.week !== getWeekKey()) return 0;
  return d.count || 0;
}

function incrementFemaleWeekCount() {
  const week = getWeekKey();
  const s = localStorage.getItem('energy_female_week_count');
  let d = s ? JSON.parse(s) : { week, count: 0 };
  if (d.week !== week) d = { week, count: 0 };
  d.count++;
  localStorage.setItem('energy_female_week_count', JSON.stringify(d));
}

function getFemaleLimit() {
  return parseInt(localStorage.getItem('energy_female_limit') || '3');
}

// ========== RECORD ACTIVITY ==========

// Returns { earned, bonusMsg } or null if already done
function recordActivity(actKey) {
  const activity = ACTIVITIES.find(a => a.key === actKey);
  if (!activity) return null;
  if (isActivityDone(actKey)) return null;

  markActivityDone(actKey);
  addPoints(activity.points);
  let earned = activity.points;
  let bonusMsg = '';

  // Ejac recovery bonus: need both exercise AND meditation done within 48h window
  const ejacRec = getEjacRecovery();
  if (ejacRec && activity.isRecovery) {
    const done = ejacRec.done || [];
    if (!done.includes(actKey)) {
      done.push(actKey);
      ejacRec.done = done;
      localStorage.setItem('energy_ejac_recovery', JSON.stringify(ejacRec));
    }
    if (done.includes('exercise') && done.includes('meditation')) {
      const bonus = Math.round(points * 0.15);
      addPoints(bonus);
      earned += bonus;
      localStorage.removeItem('energy_ejac_recovery');
      bonusMsg = tr().recoveryBonusMsg;
    }
  }

  // Junk food recovery bonus (next day after junk)
  const junkRecovDate = localStorage.getItem('energy_junk_recovery_date');
  if (junkRecovDate === todayStr() && (activity.isJunkRecovery || actKey === 'exercise')) {
    const junkPenAmt = parseInt(localStorage.getItem('energy_junk_penalty_amt') || '0');
    const recovAmt = Math.round(junkPenAmt * 0.5);
    if (recovAmt > 0) {
      addPoints(recovAmt);
      earned += recovAmt;
      localStorage.removeItem('energy_junk_recovery_date');
      localStorage.removeItem('energy_junk_penalty_amt');
      if (!bonusMsg) bonusMsg = tr().junkRecoveryMsg;
    }
  }

  // Female self-care: after Type B within limit, "self_care" activity becomes available
  // (handled by showing a special chip — actual bonus is just the activity points)

  return { earned, bonusMsg };
}

// ========== RECORD PENALTY ==========

function recordPenalty(penaltyKey) {
  const penalties = getPenalties();
  const penalty = penalties.find(p => p.key === penaltyKey);
  if (!penalty) return null;

  const oldPoints = points;
  const newPoints = applyPenaltyCalc(points, penalty.rate);
  const lost = oldPoints - newPoints;
  subtractPoints(newPoints, lost);

  let extraMsg = '';

  if (penalty.isEjac) {
    setEjacRecovery();
    extraMsg = tr().recoveryTip;
  }

  if (penalty.key === 'junk') {
    // Set junk recovery for tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem('energy_junk_recovery_date', dateStr(tomorrow));
    localStorage.setItem('energy_junk_penalty_amt', lost.toString());
    localStorage.setItem('energy_last_junk_date', todayStr());
    extraMsg = tr().junkRecoveryTip;
  }

  // Female Type B: track weekly count, check limit
  if (gender === 'female' && penalty.isFemaleB) {
    incrementFemaleWeekCount();
    const count = getFemaleWeekCount();
    const limit = getFemaleLimit();
    if (count <= limit) {
      extraMsg = tr().femaleSelfCareNote;
    }
  }

  return { lost, remaining: newPoints, extraMsg };
}

// ========== RENDER ==========

function render() {
  if (!startDate) return;
  const days = getDays();
  const t = tr();

  // Points card
  document.getElementById('points-display').textContent = Math.round(points).toLocaleString();
  document.getElementById('level-label').textContent = getLevel(points);

  const todayChange = getTodayChange();
  document.getElementById('today-gain-display').textContent = t.todayGain(todayChange);

  if (startDate) {
    document.getElementById('streak-start').textContent =
      `${t.startedPrefix}${t.formatDate(startDate)} ／ ${days}${t.daysUnit}`;
  }

  // Message
  const messages = getMessages();
  document.getElementById('message-text').textContent = messages[days % messages.length];

  // Milestones
  const container = document.getElementById('milestones');
  container.innerHTML = '';
  MILESTONES.forEach(m => {
    const label = lang === 'en' ? m.en : m.ja;
    const pct = Math.min(100, Math.round((Math.round(points) / m.points) * 100));
    const done = Math.round(points) >= m.points;
    const row = document.createElement('div');
    row.className = `milestone${done ? ' done' : ''}`;
    row.innerHTML = `
      <span class="milestone-name">${label}</span>
      <div class="milestone-bar-bg">
        <div class="milestone-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="milestone-pct">${done ? t.milestoneCheck : pct + '%'}</span>
    `;
    container.appendChild(row);
  });

  // Penalty buttons
  renderPenaltyButtons();

  // Today's activities row
  renderTodayActivityRow();
}

function renderPenaltyButtons() {
  const penalties = getPenalties();
  const container = document.getElementById('penalty-buttons');
  container.innerHTML = '';
  penalties.forEach(p => {
    const label = lang === 'en' ? p.en : p.ja;
    const pct = Math.round(p.rate * 100);
    const btn = document.createElement('button');
    btn.className = 'btn-penalty-inline';
    btn.dataset.key = p.key;
    btn.innerHTML = `<span class="penalty-btn-icon">${p.icon}</span><span class="penalty-btn-label">${label}</span><span class="penalty-btn-rate">−${pct}%</span>`;
    btn.addEventListener('click', () => openPenaltyConfirm(p.key));
    container.appendChild(btn);
  });
}

function renderTodayActivityRow() {
  const done = getTodayActivities();
  const row = document.getElementById('activity-today-row');
  row.innerHTML = '';
  if (done.length === 0) {
    const hint = document.createElement('span');
    hint.className = 'activity-hint';
    hint.textContent = lang === 'en' ? 'No activities logged today' : '今日の記録なし';
    row.appendChild(hint);
    return;
  }
  done.forEach(key => {
    const a = ACTIVITIES.find(x => x.key === key);
    if (!a) return;
    const chip = document.createElement('span');
    chip.className = 'activity-done-chip';
    chip.textContent = `${a.icon} ${lang === 'en' ? a.en : a.ja}`;
    row.appendChild(chip);
  });
}

// ========== ACTIVITY MODAL ==========

function openActivityModal() {
  renderActivityModal();
  document.getElementById('activity-modal').classList.add('open');
}

function closeActivityModal() {
  document.getElementById('activity-modal').classList.remove('open');
  document.getElementById('activity-feedback').textContent = '';
}

function renderActivityModal() {
  const grid = document.getElementById('activity-modal-grid');
  grid.innerHTML = '';
  const t = tr();
  // Female: check if self-care bonus unlock day
  const junkRecovDate = localStorage.getItem('energy_junk_recovery_date');

  ACTIVITIES.forEach(a => {
    const done = isActivityDone(a.key);
    const label = lang === 'en' ? a.en : a.ja;
    const btn = document.createElement('button');
    btn.className = `btn-activity-item${done ? ' done' : ''}`;
    btn.dataset.key = a.key;

    // Junk recovery indicator
    const isJunkRecovDay = junkRecovDate === todayStr() && (a.isJunkRecovery || a.key === 'exercise');
    const recovTag = isJunkRecovDay && !done ? ' ★' : '';

    btn.innerHTML = `
      <span class="act-icon">${a.icon}</span>
      <span class="act-label">${label}${recovTag}</span>
      <span class="act-pts">${done ? t.alreadyDone : '+' + a.points + 'pt'}</span>
    `;
    if (!done) {
      btn.addEventListener('click', () => onActivityTap(a.key, btn));
    }
    grid.appendChild(btn);
  });
}

function onActivityTap(key, btn) {
  const result = recordActivity(key);
  if (!result) return;

  // Update button to done state
  btn.classList.add('done');
  const ptsEl = btn.querySelector('.act-pts');
  ptsEl.textContent = tr().alreadyDone;
  btn.removeEventListener('click', () => {});

  // Show feedback
  const feedbackEl = document.getElementById('activity-feedback');
  let msg = tr().pointAdded(result.earned);
  if (result.bonusMsg) msg += '  ' + result.bonusMsg;
  feedbackEl.textContent = msg;
  feedbackEl.className = 'activity-feedback show';
  setTimeout(() => feedbackEl.classList.remove('show'), 2500);

  // Update main screen
  render();
  renderRecommend();
}

// ========== PENALTY MODAL ==========

let selectedPenaltyKey = null;

function openPenaltyModal() {
  renderPenaltyModalList();
  showPenaltyStep(1);
  document.getElementById('penalty-modal').classList.add('open');
}

function closePenaltyModal() {
  document.getElementById('penalty-modal').classList.remove('open');
  selectedPenaltyKey = null;
}

function showPenaltyStep(n) {
  document.getElementById('penalty-step1').classList.toggle('hidden', n !== 1);
  document.getElementById('penalty-step2').classList.toggle('hidden', n !== 2);
  document.getElementById('penalty-step3').classList.toggle('hidden', n !== 3);
}

function renderPenaltyModalList() {
  const list = document.getElementById('penalty-modal-list');
  list.innerHTML = '';
  getPenalties().forEach(p => {
    const label = lang === 'en' ? p.en : p.ja;
    const pct = Math.round(p.rate * 100);
    const btn = document.createElement('button');
    btn.className = 'btn-penalty-modal-item';
    btn.dataset.key = p.key;
    btn.innerHTML = `
      <span class="penalty-item-icon">${p.icon}</span>
      <span class="penalty-item-label">${label}</span>
      <span class="penalty-item-rate">−${pct}%</span>
    `;
    btn.addEventListener('click', () => openPenaltyConfirm(p.key));
    list.appendChild(btn);
  });
}

function openPenaltyConfirm(key) {
  selectedPenaltyKey = key;
  const penalties = getPenalties();
  const p = penalties.find(x => x.key === key);
  if (!p) return;
  const label = lang === 'en' ? p.en : p.ja;
  const pct = Math.round(p.rate * 100);
  const t = tr();

  const box = document.getElementById('penalty-confirm-box');
  box.innerHTML = `
    <div class="confirm-icon">${p.icon}</div>
    <div class="confirm-title">${t.penaltyConfirmTitle}</div>
    <div class="confirm-body">${t.penaltyConfirmBody(label, pct)}</div>
    <div class="confirm-pts-preview">${Math.round(points).toLocaleString()} pt → ${applyPenaltyCalc(points, p.rate).toLocaleString()} pt</div>
  `;

  // If penalty modal is not open (called from main screen buttons), open it
  const modal = document.getElementById('penalty-modal');
  if (!modal.classList.contains('open')) {
    renderPenaltyModalList();
    modal.classList.add('open');
  }
  showPenaltyStep(2);
}

function onPenaltyBack() {
  showPenaltyStep(1);
  selectedPenaltyKey = null;
}

function onPenaltyConfirm() {
  if (!selectedPenaltyKey) return;
  const result = recordPenalty(selectedPenaltyKey);
  if (!result) return;

  const t = tr();
  const box = document.getElementById('penalty-result-box');
  box.innerHTML = `
    <div class="result-title">${t.penaltyResultTitle}</div>
    <div class="result-pts">−${result.lost}pt</div>
    <div class="result-remaining">${t.penaltyResultBody(result.lost, result.remaining)}</div>
    <div class="result-riseup">${t.riseUp}</div>
    ${result.extraMsg ? `<div class="result-tip">${result.extraMsg}</div>` : ''}
  `;
  showPenaltyStep(3);

  render();

  setTimeout(() => {
    closePenaltyModal();
    showPenaltyStep(1);
    selectedPenaltyKey = null;
  }, 3500);
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
  const affs = getAffirmations();
  const tip = tips[currentTipIndex];
  document.getElementById('tip-number').textContent = `TIP ${currentTipIndex + 1} / ${tips.length}`;
  document.getElementById('tip-icon').textContent = tip.icon;
  document.getElementById('tip-title').textContent = tip.title;
  document.getElementById('tip-body').textContent = tip.body;
  document.getElementById('emergency-affirmation').textContent = affs[currentTipIndex % affs.length];
  const dotsEl = document.getElementById('tip-dots');
  dotsEl.innerHTML = '';
  tips.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = `tip-dot${i === currentTipIndex ? ' active' : ''}`;
    dotsEl.appendChild(d);
  });
}

function onTipNext() {
  currentTipIndex = (currentTipIndex + 1) % getTips().length;
  renderTip();
}

function onTipPrev() {
  currentTipIndex = (currentTipIndex - 1 + getTips().length) % getTips().length;
  renderTip();
}

// ========== BACKGROUND TOGGLE ==========

const BG_STYLES = [
  'linear-gradient(135deg, rgba(20,30,10,0.6), rgba(40,60,10,0.5)), url(\'./bg-hero.png\') center right/cover no-repeat',
  'linear-gradient(135deg, rgba(20,30,10,0.6), rgba(40,60,10,0.5)), url(\'./bg-hero-male.jpg\') center right/cover no-repeat',
  'linear-gradient(135deg, #1a2e0a, #2d4a10)',
];

function applyBg() {
  document.getElementById('streak-card').style.background = BG_STYLES[bgIndex];
}

function toggleBg() {
  bgIndex = (bgIndex + 1) % BG_STYLES.length;
  localStorage.setItem('energy_bg', bgIndex);
  applyBg();
}

// ========== LANG ==========

function applyLang() {
  document.documentElement.lang = lang;
  localStorage.setItem('energy_lang', lang);

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
  updateSettingsModeDisplay();
}

// ========== SCREENS ==========

function showScreen(id) {
  ['gender-screen','setup-screen','main-screen'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

function showMain() {
  showScreen('main-screen');
  checkAndAwardDailyPoints();
  render();
  applyBg();
  renderRecommend();
}

function showSetup() {
  showScreen('setup-screen');
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById('start-date-input').value = `${yyyy}-${mm}-${dd}`;
}

function showGenderScreen() {
  showScreen('gender-screen');
}

// ========== SETTINGS MODAL ==========

function openSettings() {
  updateSettingsModeDisplay();
  const femaleSection = document.getElementById('female-limit-section');
  femaleSection.style.display = gender === 'female' ? 'block' : 'none';
  document.getElementById('limit-display').textContent = getFemaleLimit();
  document.getElementById('settings-modal').classList.add('open');
}

function closeSettings() {
  document.getElementById('settings-modal').classList.remove('open');
}

function updateSettingsModeDisplay() {
  const el = document.getElementById('current-mode-info');
  if (el) el.textContent = tr().currentMode(gender);
}

// ========== EVENTS ==========

function onGenderSelect(g) {
  setGender(g);
  showSetup();
}

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

function onShare() {
  const t = tr();
  const text = t.shareText(Math.round(points), getDays());
  if (navigator.share) {
    navigator.share({ title: t.shareTitle, text }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(text).then(() => alert(t.clipboardMsg)).catch(() => alert(text));
  }
}

function onResetAll() {
  document.getElementById('settings-modal').classList.remove('open');
  document.getElementById('reset-modal').classList.add('open');
}

function onResetCancel() {
  document.getElementById('reset-modal').classList.remove('open');
  document.getElementById('settings-modal').classList.add('open');
}

function onResetConfirm() {
  document.getElementById('reset-modal').classList.remove('open');
  clearAllData();
  showSetup();
}

// ========== INIT ==========

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyLang();

  // Gender screen buttons
  document.querySelectorAll('.btn-gender').forEach(btn => {
    btn.addEventListener('click', () => onGenderSelect(btn.dataset.gender));
  });

  // Setup
  document.getElementById('btn-start').addEventListener('click', onStart);

  // Main screen
  document.getElementById('btn-bg-toggle').addEventListener('click', toggleBg);
  document.getElementById('btn-settings').addEventListener('click', openSettings);
  document.getElementById('btn-open-activity').addEventListener('click', openActivityModal);
  document.getElementById('btn-emergency').addEventListener('click', openEmergency);
  document.getElementById('btn-share').addEventListener('click', onShare);

  // Activity modal
  document.getElementById('btn-activity-close').addEventListener('click', closeActivityModal);
  document.getElementById('activity-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeActivityModal();
  });

  // Penalty modal
  document.getElementById('btn-penalty-close').addEventListener('click', closePenaltyModal);
  document.getElementById('btn-penalty-back').addEventListener('click', onPenaltyBack);
  document.getElementById('btn-penalty-confirm').addEventListener('click', onPenaltyConfirm);
  document.getElementById('penalty-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closePenaltyModal();
  });

  // Settings modal
  document.getElementById('btn-settings-close').addEventListener('click', closeSettings);
  document.querySelectorAll('.btn-gender-sm').forEach(btn => {
    btn.addEventListener('click', () => {
      setGender(btn.dataset.gender);
      const femaleSection = document.getElementById('female-limit-section');
      femaleSection.style.display = gender === 'female' ? 'block' : 'none';
      updateSettingsModeDisplay();
      if (startDate) render();
    });
  });
  document.getElementById('btn-limit-minus').addEventListener('click', () => {
    const current = getFemaleLimit();
    if (current > 1) {
      localStorage.setItem('energy_female_limit', current - 1);
      document.getElementById('limit-display').textContent = current - 1;
    }
  });
  document.getElementById('btn-limit-plus').addEventListener('click', () => {
    const current = getFemaleLimit();
    if (current < 7) {
      localStorage.setItem('energy_female_limit', current + 1);
      document.getElementById('limit-display').textContent = current + 1;
    }
  });
  document.getElementById('btn-reset-all').addEventListener('click', onResetAll);
  document.getElementById('settings-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeSettings();
  });

  // Reset confirm modal
  document.getElementById('btn-cancel').addEventListener('click', onResetCancel);
  document.getElementById('btn-confirm').addEventListener('click', onResetConfirm);
  document.getElementById('reset-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) onResetCancel();
  });

  // Emergency modal
  document.getElementById('btn-emergency-close').addEventListener('click', closeEmergency);
  document.getElementById('btn-tip-next').addEventListener('click', onTipNext);
  document.getElementById('btn-tip-prev').addEventListener('click', onTipPrev);
  document.getElementById('emergency-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeEmergency();
  });

  // Lang toggles
  document.querySelectorAll('.btn-lang').forEach(btn => btn.addEventListener('click', toggleLang));

  // Routing
  if (!gender) {
    showGenderScreen();
  } else if (!startDate) {
    showSetup();
  } else {
    showMain();
  }

  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

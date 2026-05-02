'use strict';

// ========== LANG ==========

let lang = localStorage.getItem('energy_lang') || 'ja';

const T = {
  ja: {
    appTitle: 'Energy Tracker',
    genderDesc: 'あなたのモードを選んでください',
    genderNote: '後から設定で変更できます',
    ageNote: '※ 本アプリは18歳以上を対象としています',
    genderMale: '男性モード',
    genderFemale: '女性モード',
    setupDesc: 'エネルギーを積み上げ、自分を進化させよう。',
    startDateLabel: '開始日を選択',
    btnStart: 'スタートする',
    setupPeriodLabel: '最終生理開始日（任意）',
    setupPeriodHint: '入力すると生理周期に合わせたメッセージが表示されます',
    headerTitle: '⚡ Energy Tracker',
    activityBtnText: '活動を記録する',
    activityModalTitle: '活動を記録する',
    activityModalDesc: '今日行ったことをタップしてください',
    alreadyDone: '記録済み ✓',
    messageLabel: '今日のメッセージ',
    womensTipsLabel: '💗 女性からの視点',
    feminineTipsLabel: '✨ フェミニンエネルギーの変化',
    milestonesLabel: 'レベル一覧',
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
    btnSettingsDone: '✓ 完了',
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
    workoutStreak3: '💪 3日連続筋トレ達成！ +100pt',
    workoutStreak7: '🏆 7日連続筋トレ達成！ +300pt',
    pointAdded: (n) => `+${n}pt 獲得！`,
    selfCareUnlocked: '✨ セルフケアボーナス解放中！',
    femaleLimitReached: '今週の上限に達しています（設定で変更可）',
    femaleSelfCareNote: '適度範囲内 — セルフケアボーナスが明日解放されます！',
    bonusApplied: 'ボーナス適用！',
    welcomeTitle: '初期設定のご確認',
    welcomeIntro: 'このアプリの初期設定です。あなたに合わせて自由に変更できます。',
    welcomePenaltyLabel: 'ペナルティ設定',
    welcomeRecoveryLabel: 'インターバル回復システム',
    welcomeIntervalDesc: '前回の行為からの経過日数でペナルティが変わります',
    welcomeInterval1: '3日未満　→　通常ペナルティ',
    welcomeInterval2: '3〜6日後　→　ペナルティ半減 ✓',
    welcomeInterval3: '7日以上後　→　ペナルティ無効 🎉',
    welcomeInterval4: '14日以上後　→　ボーナス +100pt 🌟',
    welcomeForgivenessNote: (n) => `※ ${n}日間継続でも蓄積ペナルティが自動回復（設定で変更可）`,
    welcomeSettingsNote: '⚙️ 右上の設定ボタンからいつでも変更できます',
    welcomeBtn: 'はじめる →',
    welcomeSexLimitDesc: (n, r) => `週${n}回まで免除、以降 −${r}%`,
    welcomeForgivenessDesc: (n) => `${n}日間継続でペナルティが自動回復`,
    sexWithinLimitNote: '今週の免除内 ✓ ペナルティなし',
    intervalHalfPenalty: '3〜6日経過 — ペナルティ半減 ✓',
    intervalNoPenalty: '7日以上経過 — ペナルティ無効 🎉',
    intervalBonus: (n) => `14日以上の制御！ ボーナス +${n}pt 🌟`,
    settingsSexLabel: 'セックスの設定',
    settingsSexEjacRate: '射精あり 減産率',
    settingsSexNoEjacLabel: '射精なし をカウント',
    settingsSexWeeklyLimit: 'セックス 週免除回数',
    settingsForgivenessLabel: '継続回復システム',
    settingsForgivenessHint: 'X日間継続でペナルティを自動回復',
    settingsVideoLabel: 'ご褒美動画',
    videoOn: 'ON（表示する）',
    videoOff: 'OFF（表示しない）',
    settingsPeriodLabel: '月のサイクル（女性）',
    settingsPeriodHint: '最終生理開始日を入力',
    moonPhaseNames: ['🔴 生理期', '🌱 卵胞期', '✨ 排卵期', '🌘 黄体期'],
    moonPhaseDescs: ['ペナルティ20%軽減', '通常', 'ボーナス活動+10%', 'ペナルティ10%軽減'],
    moonPhaseDayLabel: (d) => `${d}日目`,
    sexNoEjacOff: 'しない（推奨）',
    sexNoEjacOn: 'する（−5%）',
    forgivenessMsg: (n) => `🎉 +${n.toLocaleString()}pt 継続回復！`,
    penaltyLogOnly: '記録のみ（ペナルティなし）',
    penaltyWithinLimit: '記録のみ — 週免除内 ✓',
    noChange: '変化なし',
    nextLevel: (pt, name) => `次のレベルまで ${pt.toLocaleString()} pt → ${name}`,
    maxLevel: '🏆 最高レベル達成！',
    effectsLabel: '想定される効果',
    effectsSubSolo: (d) => `禁欲（ポルノ・自慰なし）${d}日目`,
    effectsSubStart: (d) => `開始から${d}日目`,
    effectsNote: '※ セックスでは効果はリセットされません',
    effectsLocked: 'まだ未到達',
    effectsNextUnlock: (dayTarget, text, daysLeft) => `🔒 次：${dayTarget}日目で解放 — ${text}（あと ${daysLeft}日）`,
    effectsAllUnlocked: '🏆 全効果を解放済み！',
  },
  en: {
    appTitle: 'Energy Tracker',
    genderDesc: 'Choose your mode',
    genderNote: 'You can change this later in Settings',
    ageNote: '* This app is intended for users 18 and older.',
    genderMale: 'Male Mode',
    genderFemale: 'Female Mode',
    setupDesc: 'Build your energy and evolve every day.',
    startDateLabel: 'Start Date',
    btnStart: 'Start',
    setupPeriodLabel: 'Last period start date (optional)',
    setupPeriodHint: 'Enables cycle-matched messages when entered',
    headerTitle: '⚡ Energy Tracker',
    activityBtnText: 'Log Activity',
    activityModalTitle: 'Log Activity',
    activityModalDesc: 'Tap what you did today',
    alreadyDone: 'Done ✓',
    messageLabel: "Today's Message",
    womensTipsLabel: "💗 Women's View",
    feminineTipsLabel: '✨ Feminine Energy',
    milestonesLabel: 'Level List',
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
    btnSettingsDone: '✓ Done',
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
    workoutStreak3: '💪 3-Day Workout Streak! +100pt',
    workoutStreak7: '🏆 7-Day Workout Streak! +300pt',
    pointAdded: (n) => `+${n}pt earned!`,
    selfCareUnlocked: '✨ Self-care bonus unlocked!',
    femaleLimitReached: 'Weekly limit reached (change in Settings)',
    femaleSelfCareNote: 'Within moderate range — self-care bonus unlocked tomorrow!',
    bonusApplied: 'Bonus applied!',
    welcomeTitle: 'Default Settings',
    welcomeIntro: 'Here are your starting settings. You can adjust them anytime.',
    welcomePenaltyLabel: 'Penalty Settings',
    welcomeRecoveryLabel: 'Interval Recovery System',
    welcomeIntervalDesc: 'Penalty changes based on days since last act',
    welcomeInterval1: 'Under 3 days　→　Full penalty',
    welcomeInterval2: '3–6 days　→　Penalty halved ✓',
    welcomeInterval3: '7+ days　→　Penalty nullified 🎉',
    welcomeInterval4: '14+ days　→　Bonus +100pt 🌟',
    welcomeForgivenessNote: (n) => `※ Accumulated penalties also auto-restore after ${n} clean days`,
    welcomeSettingsNote: '⚙️ Tap the Settings button anytime to adjust',
    welcomeBtn: 'Get Started →',
    welcomeSexLimitDesc: (n, r) => `first ${n}/wk free, then −${r}%`,
    welcomeForgivenessDesc: (n) => `Points restored after ${n} clean days`,
    sexWithinLimitNote: 'Within weekly limit ✓ No penalty',
    intervalHalfPenalty: '3–6 days since last act — Penalty halved ✓',
    intervalNoPenalty: '7+ days since last act — Penalty nullified 🎉',
    intervalBonus: (n) => `14+ days of control! Bonus +${n}pt 🌟`,
    settingsSexLabel: 'Sex Settings',
    settingsSexEjacRate: 'Ejaculation penalty rate',
    settingsSexNoEjacLabel: 'Count sex w/o ejaculation',
    settingsSexWeeklyLimit: 'Weekly free quota (sex)',
    settingsForgivenessLabel: 'Recovery System',
    settingsForgivenessHint: 'Penalty restored after X clean days',
    settingsVideoLabel: 'Reward Videos',
    videoOn: 'ON (show)',
    videoOff: 'OFF (hide)',
    settingsPeriodLabel: 'Moon Cycle (Female)',
    settingsPeriodHint: 'Enter last period start date',
    moonPhaseNames: ['🔴 Menstrual', '🌱 Follicular', '✨ Ovulation', '🌘 Luteal'],
    moonPhaseDescs: ['Penalty −20%', 'Normal', 'Activity bonus +10%', 'Penalty −10%'],
    moonPhaseDayLabel: (d) => `Day ${d}`,
    sexNoEjacOff: 'Off (recommended)',
    sexNoEjacOn: 'On (−5%)',
    forgivenessMsg: (n) => `🎉 +${n.toLocaleString()}pt streak recovery!`,
    penaltyLogOnly: 'Log only (no penalty)',
    penaltyWithinLimit: 'Log only — within weekly limit ✓',
    noChange: 'no change',
    nextLevel: (pt, name) => `${pt.toLocaleString()} pt to ${name}`,
    maxLevel: '🏆 Max level reached!',
    effectsLabel: 'Expected Effects',
    effectsSubSolo: (d) => `Day ${d} without solo ejaculation`,
    effectsSubStart: (d) => `Day ${d} from start`,
    effectsNote: '* Sex with a partner does not reset your effects',
    effectsLocked: 'Not yet reached',
    effectsNextUnlock: (dayTarget, text, daysLeft) => `🔒 Next: Day ${dayTarget} — ${text} (in ${daysLeft} days)`,
    effectsAllUnlocked: '🏆 All effects unlocked!',
  }
};

function tr() { return T[lang]; }

// ========== DATA: ACTIVITIES ==========

const ACTIVITIES = [
  { key: 'workout',    icon: '💪', img: './act-workout.jpg',   ja: '筋トレ・有酸素運動',     en: 'Exercise',                  points: 40, isRecovery: true,  isJunkRecovery: false, isWorkout: true,  hint: '体を動かすほど、エネルギーが上がる',           hintEn: 'Move more, raise your energy',                videoGroup: ['./videos/workout/act-workout.mp4'] },
  { key: 'cold_shower',icon: '🚿', img: './act-shower.jpg',    ja: '冷水シャワー',           en: 'Cold Shower',               points: 30, isRecovery: false, isJunkRecovery: false, hint: '冷たさが意志力とエネルギーを鍛える',           hintEn: 'Cold water forges willpower and energy',       videoGroup: ['./videos/cold_shower/act-shower.mp4'] },
  { key: 'yoga',       icon: '🧘', img: './act-yoga.jpg',      ja: 'ヨガ',                   en: 'Yoga',                      points: 35, isRecovery: true,  isJunkRecovery: false, hint: '呼吸と動きでエネルギーを巡らせる',             hintEn: 'Breathe, move, and let energy flow',           videoGroup: ['./videos/yoga/act-yoga.mp4'] },
  { key: 'meditation', icon: '🌬️',img: './act-meditation.jpg',ja: '瞑想・呼吸法',           en: 'Meditation / Breathwork',   points: 35, isRecovery: true,  isJunkRecovery: false, hint: 'ただ観るだけで、心が整う',                     hintEn: 'Just observe — and find stillness',            videoGroup: ['./videos/meditation/act-meditation.mp4'] },
  { key: 'tantra',     icon: '💚', img: './act-tantra.jpg',    ja: 'タントラ風の親密な時間', en: 'Tantric Intimacy', jaFemale: 'タントラ風の親密な時間', enFemale: 'Tantric Intimacy', points: 40, isRecovery: false, isJunkRecovery: false, hint: 'パートナーと意識的に行う、射精を伴わない親密な時間。エネルギーを循環させる新しい発見があるかも。', hintEn: 'Conscious intimacy — no ejaculation. Discover a new flow of energy together.', videoGroup: ['./videos/tantra/act-tantra.mp4', './videos/tantra/act-tantra1.mp4', './videos/tantra/act-tantra2.mp4'] },
  { key: 'cleaning',   icon: '🧹', img: './act-cleaning.jpg',  ja: '清掃・片付け',           en: 'Clean & Tidy',              points: 30, isRecovery: false, isJunkRecovery: false, hint: '外を整えると内も整う',                         hintEn: 'A tidy space brings a clear mind',             videoGroup: ['./videos/cleaning/act-cleaning.mp4'] },
  { key: 'toilet',     icon: '🚽', img: './act-toilet.jpg',    ja: 'トイレ掃除',             en: 'Clean the Toilet',          points: 25, isRecovery: false, isJunkRecovery: false, hint: '良い流れを引き寄せる',                         hintEn: 'Invite good flow into your life',              videoGroup: ['./videos/toilet/act-toilet.mp4'] },
  { key: 'early_rise', icon: '🌅', img: './act-earlyrise.jpg', ja: '早起き',                 en: 'Early Rise',                points: 25, isRecovery: false, isJunkRecovery: false, hint: '朝の静けさが、自分のエネルギーを最大化する',   hintEn: 'Morning stillness maximizes your energy',      videoGroup: ['./videos/early_rise/act-earlyrise.mp4'] },
  { key: 'gratitude',  icon: '📝', img: './act-gratitude.jpg', ja: '感謝日記',               en: 'Gratitude Journal',         points: 25, isRecovery: false, isJunkRecovery: false, hint: '感謝を書くほど、良いエネルギーが集まる',       hintEn: 'Gratitude attracts more good energy',          videoGroup: ['./videos/gratitude/act-gratitude.mp4'] },
  { key: 'smile',      icon: '😊', img: './act-smile.jpg',     ja: '笑顔を作る',             en: 'Practice Smiling',          points: 20, isRecovery: false, isJunkRecovery: false, hint: '笑顔が良いエネルギーを呼び込む',               hintEn: 'A smile invites good energy in',               videoGroup: ['./videos/smile/act-smile.mp4'] },
  { key: 'veggies',    icon: '🥦', img: './act-veggies.jpg',   ja: '野菜中心の食事',         en: 'Veggie-Rich Meal',          points: 30, isRecovery: false, isJunkRecovery: true,  hint: '体に良いものを入れて、エネルギーを安定させる', hintEn: 'Nourish your body, stabilize your energy',     videoGroup: ['./videos/veggies/act-veggies.mp4'] },
  { key: 'sowaka',     icon: '✨', img: './act-sowaka.jpg',    ja: '掃除＋笑顔＋感謝',       en: 'Clean + Smile + Gratitude', points: 60, isRecovery: false, isJunkRecovery: false, hint: '今日の最強コンボ（そ・わ・か）', hintEn: 'The ultimate daily combo — so·wa·ka',          videoGroup: ['./videos/sowaka/act-sowaka.mp4'] },
];

// ========== DATA: PENALTIES (dynamic — built in getPenalties()) ==========

// ========== DATA: LEVELS ==========

const LEVELS = [
  { min: 0,     ja: 'Lv.1 スターター',   en: 'Lv.1 Starter',    img: './img/level1.jpg',  imgF: './img/level1f.jpg'  },
  { min: 100,   ja: 'Lv.2 ルーキー',    en: 'Lv.2 Rookie',     img: './img/level2.jpg',  imgF: './img/level2f.jpg'  },
  { min: 300,   ja: 'Lv.3 ベテラン',    en: 'Lv.3 Veteran',    img: './img/level3.jpg',  imgF: './img/level3f.jpg'  },
  { min: 600,   ja: 'Lv.4 ライジング',  en: 'Lv.4 Rising',     img: './img/level4.jpg',  imgF: './img/level4f.jpg'  },
  { min: 1000,  ja: 'Lv.5 ファイター',  en: 'Lv.5 Fighter',    img: './img/level5.jpg',  imgF: './img/level5f.jpg'  },
  { min: 1500,  ja: 'Lv.6 エース',      en: 'Lv.6 Ace',        img: './img/level6.jpg',  imgF: './img/level6f.jpg'  },
  { min: 2500,  ja: 'Lv.7 ヒーロー',    en: 'Lv.7 Hero',       img: './img/level7.jpg',  imgF: './img/level7f.jpg'  },
  { min: 3800,  ja: 'Lv.8 チャンピオン',en: 'Lv.8 Champion',   img: './img/level8.jpg',  imgF: './img/level8f.jpg'  },
  { min: 5500,  ja: 'Lv.9 エリート',    en: 'Lv.9 Elite',      img: './img/level9.jpg',  imgF: './img/level9f.jpg'  },
  { min: 7500,  ja: 'Lv.10 マスター',   en: 'Lv.10 Master',    img: './img/level10.jpg', imgF: './img/level10f.jpg' },
  { min: 11000, ja: 'Lv.11 アイコン',   en: 'Lv.11 Icon',      img: './img/level11.jpg', imgF: './img/level11f.jpg' },
  { min: 16000, ja: 'Lv.12 レジェンド', en: 'Lv.12 Legendary', img: './img/level12.jpg', imgF: './img/level12f.jpg' },
];

// ========== DATA: WOMEN'S PERSPECTIVE TIPS (male mode only) ==========

const WOMENS_TIPS = [
  { maxDays: 2,   ja: 'まだ始まったばかり。でも、自分を変えようとしている男性は、そうでない人とは目が違う。その一歩が、あなたをもう少し魅力的にしている。' },
  { maxDays: 6,   ja: '目の奥が少し落ち着いてきた感じ。ギラついていない視線って、実はすごく安心感がある。話しかけやすくなったと感じる女性は多いはず。' },
  { maxDays: 13,  ja: '1週間が過ぎた頃から、話し方に余裕が出てくる。焦らず聞いてくれる男性って、今どき珍しい。それだけで「一緒にいたい」と思わせる力がある。' },
  { maxDays: 20,  ja: '声のトーンが安定してきた気がする。低くて穏やかな声は、それだけで女性をドキッとさせる。落ち着いた男性のそばにいると、こちらも自然と笑顔になれる。' },
  { maxDays: 29,  ja: '3週間。自分の軸を持っている人だと感じ始める頃。ブレない男性って、なんだか守られている感じがして、無意識に近くにいたくなってしまう。' },
  { maxDays: 44,  ja: '1ヶ月達成。肌のツヤが変わってくる頃。清潔感のある男性は、それだけで女性の好感度が上がる。「この人、ちゃんとしてるな」という印象は大切にしてほしい。' },
  { maxDays: 59,  ja: '視線が真っ直ぐになってきた。目を逸らさないのに、圧迫感がない。そのバランスが心地よくて、自然と目が合う回数が増えてしまう。' },
  { maxDays: 89,  ja: '2ヶ月。一緒にいると落ち着く、という感覚が生まれる頃。安心できる人のそばにいたい──女性がそう感じるのは、このくらいの変化が蓄積したときだと思う。' },
  { maxDays: 119, ja: '3ヶ月。この人は本物だと感じる。継続できる人は、約束を守れる人でもある。信頼できる男性というのは、それだけで唯一無二の存在になれる。' },
  { maxDays: 179, ja: '4ヶ月が過ぎた。オーラが違う。言葉では説明できないけれど、存在感が増している。そばにいると「この人、なんか特別だな」と思わせる何かがある。' },
  { maxDays: 364, ja: '半年。本当に自分を大切にしている男性だと伝わる。それって、相手のことも大切にできる人だということ。そういう人を、女性はずっと探している。' },
  { maxDays: Infinity, ja: '1年以上。人としての深みが違う。自分の内側を磨いてきた人は、外見では測れない魅力がある。そんな男性と一緒にいられたら、と思う女性は必ずいる。' },
];

const WOMENS_TIPS_EN = [
  { maxDays: 2,   en: "You've just started — but the fact that you did already sets you apart. A man who chooses to change himself has something different in his eyes." },
  { maxDays: 6,   en: "There's a calm settling behind your eyes. A gaze that isn't restless feels surprisingly safe. Many women find it easier to approach you now." },
  { maxDays: 13,  en: "After the first week, there's a new ease in how you carry yourself. A man who listens without rushing is rare these days — and genuinely attractive." },
  { maxDays: 20,  en: "Your voice sounds steadier now. A calm, low voice can make a woman's heart skip a beat. Being near someone grounded makes her smile without thinking." },
  { maxDays: 29,  en: "Three weeks in. You're starting to feel like someone with a clear centre. A man who doesn't waver makes a woman feel protected — and drawn to stay close." },
  { maxDays: 44,  en: "One month. Your skin is beginning to glow. A man who looks clean and vital earns quiet admiration. That 'he takes care of himself' impression really does matter." },
  { maxDays: 59,  en: "Your gaze has become direct but never heavy. That balance is rare and genuinely appealing — without even trying, she finds herself looking back more often." },
  { maxDays: 89,  en: "Two months. A sense of calm settles around you. Women are drawn to people who make them feel at ease. That feeling builds from exactly this kind of quiet change." },
  { maxDays: 119, en: "Three months. You feel like the real thing. A man who follows through is a man who can be trusted — and that makes you one of a kind." },
  { maxDays: 179, en: "Past four months. Your presence is different now. Hard to put into words, but there's a weight to you — a quiet 'something' that makes her think you're special." },
  { maxDays: 364, en: "Half a year. It shows that you genuinely care for yourself. That means you can care for others too. Women have been looking for exactly that." },
  { maxDays: Infinity, en: "Over a year. There's a depth to you that can't be faked. A man who has polished his inner self has a pull that goes beyond appearance. Someone is out there looking for exactly you." },
];

// ========== DATA: FEMININE ENERGY TIPS (female mode only) ==========

const FEMININE_TIPS = [
  { maxDays: 3,   ja: '自分を大切にしようと決めた、その瞬間から輝きは始まっている。まだ変化は見えなくても、あなたの内側では何かが静かに動き始めた。' },
  { maxDays: 7,   ja: '肌が少しずつ整い始める頃。エネルギーを内側に向けると、身体は正直に応えてくれる。鏡を見るのが、少しだけ楽しくなっているかもしれない。' },
  { maxDays: 13,  ja: '感情の波が穏やかになってきた気がしない？イライラや不安が少し和らぐのは、ホルモンバランスが整い始めているサイン。心が軽くなってくる頃。' },
  { maxDays: 20,  ja: '自分の軸が少しずつ固まってくる時期。「なんとなく流される」感覚が減って、自分が何を望んでいるかが、以前より見えやすくなっているはず。' },
  { maxDays: 29,  ja: '3週間。周りの人があなたの変化に気づき始める頃。「最近なんか雰囲気変わった？」そう言われたら、それはあなたのフェミニンエネルギーが外に滲み出ている証拠。' },
  { maxDays: 44,  ja: '1ヶ月達成。肌のツヤ、目の輝き、声のトーン──細かい部分から変わっていく。自分を大切にした時間は、すべてあなたの美しさとして蓄積されている。' },
  { maxDays: 59,  ja: '視線が澄んできた。媚びない目力は、何より強い魅力になる。自分の価値を知っている女性の目は、人を引き寄せる不思議な力を持っている。' },
  { maxDays: 89,  ja: '2ヶ月。一緒にいると安心できると言われるようになる頃。自分が安定しているから、相手にも安心を与えられる。それが本当のフェミニンな強さ。' },
  { maxDays: 119, ja: '3ヶ月。自分への信頼が積み重なってきた。「私はできる」という感覚は、毎日の小さな選択から生まれる。あなたはそれを3ヶ月、続けてきた。' },
  { maxDays: 179, ja: '4ヶ月以上。オーラが変わっている。言葉では説明できないけれど、あなたのそばにいると心地よいと感じる人が増えているはず。それがフェミニンオーラの本質。' },
  { maxDays: 364, ja: '半年。自分を愛することと、人を愛することが、同じ根っこから来ていると実感できる頃。自分を大切にしてきたあなたは、大切にされる関係を自然と引き寄せていく。' },
  { maxDays: Infinity, ja: '1年以上。内側から溢れる輝きは、どんな化粧品にも作れない。あなたが磨いてきたのは外側ではなく、魂そのもの。その美しさは、年を重ねるほど深まっていく。' },
];

const FEMININE_TIPS_EN = [
  { maxDays: 3,   en: "The moment you decided to honour yourself, your glow began. You may not see the change yet — but something inside you has quietly started to shift." },
  { maxDays: 7,   en: "Your skin is beginning to settle. When you direct your energy inward, your body responds honestly. Looking in the mirror might feel just a little brighter today." },
  { maxDays: 13,  en: "Notice how the emotional waves feel gentler? Less irritability, less anxiety — that's your hormones starting to rebalance. Your mind is getting lighter." },
  { maxDays: 20,  en: "Your inner centre is slowly taking shape. That feeling of 'just going along with things' is fading. What you actually want is becoming clearer than before." },
  { maxDays: 29,  en: "Three weeks. The people around you are starting to notice. 'Have you changed somehow lately?' — if you hear that, it means your feminine energy is beginning to show." },
  { maxDays: 44,  en: "One month. Your skin's glow, the light in your eyes, the tone of your voice — the details are shifting. Every moment of self-care is adding up as beauty." },
  { maxDays: 59,  en: "Your gaze has cleared. Eyes that don't seek approval become the strongest kind of attractive. A woman who knows her own worth draws people in without trying." },
  { maxDays: 89,  en: "Two months. People feel at ease around you now. Because you're grounded in yourself, you can offer that calm to others. That's what true feminine strength looks like." },
  { maxDays: 119, en: "Three months. Trust in yourself has been building. That quiet sense of 'I can do this' is born from small choices made every single day — and you've made them for three months." },
  { maxDays: 179, en: "Past four months. Your aura has changed. Hard to put into words, but more people are finding your presence comforting. That's the essence of feminine energy." },
  { maxDays: 364, en: "Half a year. You're starting to feel that loving yourself and loving others come from the same root. A woman who honours herself naturally draws relationships that honour her back." },
  { maxDays: Infinity, en: "Over a year. The radiance flowing from within is something no cosmetic can create. What you've been polishing isn't your surface — it's your soul. That beauty only deepens with time." },
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
  // ── スピリチュアル・エネルギー系メッセージ ──
  'シャクティは静寂の中で燃える。欲望に向けた炎を内へ向けるとき、それは神聖な光となる。',
  'オージャス（生命精気）とは内なる輝きだ。それを守るとき、意識は清澄になり、本物の力が宿る。',
  '「神はあなたの中に、あなたとして宿っている。」—バーバー・ムクタナンダ',
  'ヨーガ・スートラ（II-38）：「禁欲を確立することで、活力が得られる。」—パタンジャリ',
  '禁欲を実践する者に獅子のような力が宿る。エネルギーが内側で熟成するからだ。—ヴィヴェーカーナンダの教えより',
  'クンダリニーは脊柱の底に眠る。欲求を制するたびに、その火は少しずつ上昇していく。',
  '性的エネルギーと宇宙の創造力は同じ源から来る。どちらに向けるかで、人生の質が決まる。',
  'タオの教え：精（ジン）を守ることは命の木に水をやることだ。流せば散り、守れば根が深まる。',
  '「欲望を満たすことで欲望は消えない。炎に油を注ぐようなものだ。」—古代インドの知恵',
  'エネルギーは消えない。形を変えるだけだ。今日の自制が、明日の創造力・集中力・輝きとなる。',
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
  // ── Spiritual / Energy messages ──
  'Shakti burns in silence. When you turn the flame of desire inward, it becomes divine light.',
  'Ojas — the vital essence — becomes luminosity within. Preserve it, and consciousness grows clear and powerful.',
  '"God dwells within you, as you." — Baba Muktananda',
  'Yoga Sutra II.38: "From the establishment of brahmacharya, vigor is gained." — Patanjali',
  'One who practices restraint attains the strength of a lion — energy undissipated matures into inner power. (After Vivekananda)',
  'Kundalini sleeps at the base of the spine. Each time you master desire, that fire rises a little higher.',
  'Sexual energy and cosmic creative force share the same source. Where you direct it determines the quality of your life.',
  'Taoist teaching: To guard one\'s jing is to water the tree of life. What flows out scatters; what is held deepens the roots.',
  '"Satisfying desire does not quench it — it is like pouring oil on fire." — Ancient Indian wisdom',
  'Energy is never destroyed. It only changes form. Today\'s restraint becomes tomorrow\'s creativity, focus, and radiance.',
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

// ========== DATA: PHASE MESSAGES (female) ==========

const MESSAGES_PHASE = [
  // Phase 0: 生理期
  [
    '今日は無理しなくていい。休むことも、立派な選択だ。',
    '体が休息を求めている。それに従うことは弱さではなく、知性だ。',
    'この痛みや重さの中でも、続けているあなたはすごい。',
    '今は内側に向かう時間。自分を責めず、ただ存在していい。',
    '嵐の中でも根は張り続けている。あなたもそうだ。',
    '体のリズムを無視しない。今日の休息が、明日の力になる。',
    '自分の体を大切にすることが、最高のセルフケアだ。',
    '今日できることだけで十分。それ以上を求めなくていい。',
    '月が満ち欠けするように、あなたのエネルギーも循環している。',
    '今日の自分に優しくすることが、習慣を守ることと同じくらい大切だ。',
  ],
  // Phase 1: 卵胞期
  [
    'エネルギーが静かに満ちてきている。この波に乗ろう。',
    '今週は新しいことを始めるのに最高のタイミング。',
    '体が軽くなってきた感覚を大切に、前へ進もう。',
    '春の芽吹きのように、内側でも新しい何かが育っている。',
    '行動を起こすなら今。エネルギーはあなたの味方だ。',
    '昨日より今日、今日より明日。着実に上昇中だ。',
    'クリアな頭で物事を見られる時期。大切な決断をするならいま。',
    '種を蒔く季節。今日の行動が、未来の自分を育てる。',
    '活力が戻ってくるこの感覚を、思い切り使い切ろう。',
    '今の自分は、何でもできる準備ができている。',
  ],
  // Phase 2: 排卵期
  [
    '今、あなたは最も輝いている。その魅力を自分のために使おう。',
    'エネルギーも自信も最高潮。今日の自分を信じて行動しよう。',
    '人とのつながりが深まりやすい時期。笑顔を惜しまないで。',
    'あなたが放つエネルギーは、周りの人を動かす力がある。',
    'この輝きは、毎日続けてきたあなたが手に入れたものだ。',
    '自信がみなぎっているとき、恐れていたことも小さく見える。',
    '今がピーク。この感覚を全力で生きよう。',
    '内側から溢れるエネルギーを、創造と成長に向けよう。',
    '自分の魅力に気づいているか？それはあなたの努力の結晶だ。',
    '今日の選択は、最高の自分から生まれている。',
  ],
  // Phase 3: 黄体期
  [
    '感情の波を感じても大丈夫。それはあなたの感受性の証だ。',
    '今は内省の時間。自分の本当の気持ちに耳を傾けて。',
    '感情が揺れるのは、あなたが人間だから。それでいい。',
    '今の気分に正直でいること。無理に「元気なふり」しなくていい。',
    '小さなことに気づける今の繊細さは、特別な才能だ。',
    '嵐が来てもあなたの根は深い。流されることはない。',
    '今週乗り越えたら、また新しいサイクルが始まる。あともう少し。',
    '疲れを感じたら、それはサインだ。立ち止まる勇気を持って。',
    '感情と上手に付き合えるようになることが、本当の強さだ。',
    '今日も自分を責めなかった。それだけで十分、よくやった。',
  ],
];

const MESSAGES_PHASE_EN = [
  // Phase 0: Menstrual
  [
    "You don't have to push today. Rest is a valid, powerful choice.",
    "Your body is asking for rest. Listening to it is wisdom, not weakness.",
    "Even through pain and fatigue, the fact that you're still here is remarkable.",
    "This is a time to turn inward. You don't have to do anything. Just be.",
    "Even in the storm, roots keep growing. So do yours.",
    "Respecting your body's rhythm today builds tomorrow's strength.",
    "Taking care of yourself is the highest form of self-care.",
    "What you can do today is enough. Nothing more is required.",
    "Just as the moon waxes and wanes, your energy moves in cycles. Trust it.",
    "Being kind to yourself today matters just as much as keeping your streak.",
  ],
  // Phase 1: Follicular
  [
    "Energy is quietly rising within you. Ride this wave.",
    "This week is the perfect time to start something new.",
    "Your body feels lighter. Carry that feeling forward.",
    "Like spring buds, something new is growing inside you.",
    "If there's something to start, now is the time. Energy is on your side.",
    "Yesterday, today, tomorrow — you are steadily rising.",
    "Your mind is clear. If there's an important decision, now is the moment.",
    "Plant seeds today. Your actions now will grow your future self.",
    "Drink in this returning vitality and use it fully.",
    "The version of you right now is ready for anything.",
  ],
  // Phase 2: Ovulation
  [
    "Right now, you are at your brightest. Use that light for yourself.",
    "Energy and confidence are at their peak. Trust yourself and act.",
    "This is a time when connections deepen easily. Don't hold back your smile.",
    "The energy you radiate has the power to move the people around you.",
    "This radiance is something you earned through daily effort.",
    "When confidence flows, even the things you feared look small.",
    "This is your peak. Live it with everything you have.",
    "Channel the energy overflowing from within into creation and growth.",
    "Do you see your own brilliance? It is the result of everything you've built.",
    "The choices you make today come from your best self.",
  ],
  // Phase 3: Luteal
  [
    "It's okay to feel the emotional waves. They are proof of your sensitivity.",
    "This is a time for reflection. Listen to what you truly feel.",
    "Emotions shifting is part of being human. That's perfectly fine.",
    "Be honest about how you feel. You don't have to pretend to be okay.",
    "The sensitivity you feel right now — the ability to notice small things — is a rare gift.",
    "Even when storms come, your roots run deep. You won't be swept away.",
    "Once you get through this week, a new cycle begins. You're almost there.",
    "If you feel tired, it's a signal. Have the courage to pause.",
    "Learning to work with your emotions is true strength.",
    "You didn't blame yourself today. That alone is enough. Well done.",
  ],
];

// ========== DATA: EFFECTS ==========

const EFFECTS_MALE = [
  { days: 1,  icon: '⚡', ja: '自制心と意識が高まる',                       en: 'Willpower and awareness increase' },
  { days: 3,  icon: '💪', ja: 'エネルギーが増し、気力が回復し始める',       en: 'Energy rises, vitality begins recovering' },
  { days: 7,  icon: '📈', ja: 'テストステロンが最大+45%上昇（研究データ）', en: 'Testosterone peaks up to +45% (research)' },
  { days: 14, icon: '🧠', ja: '集中力・記憶力が向上する',                   en: 'Focus and memory sharpen significantly' },
  { days: 21, icon: '😌', ja: 'ドーパミン感受性が改善し始める',             en: 'Dopamine sensitivity begins to normalize' },
  { days: 30, icon: '🌟', ja: '社会的自信が増す・肌ツヤが改善する',         en: 'Social confidence grows, skin improves' },
  { days: 60, icon: '🔥', ja: '脳の報酬回路が大幅に回復する',               en: 'Brain reward circuit significantly heals' },
  { days: 90, icon: '🦁', ja: 'エネルギーが安定・創造性と活力が最大化する', en: 'Energy stabilizes, creativity and vitality peak' },
];

const EFFECTS_FEMALE = [
  { days: 1,  icon: '⚡', ja: '自分との向き合い方が変わり始める',                 en: 'Your relationship with yourself begins shifting' },
  { days: 3,  icon: '😌', ja: 'ストレス反応が穏やかになる',                       en: 'Stress response becomes calmer' },
  { days: 7,  icon: '🧠', ja: '感情の波が安定し始める',                           en: 'Emotional waves start to stabilize' },
  { days: 14, icon: '💆', ja: '集中力と自己効力感が向上する',                     en: 'Focus and self-efficacy improve' },
  { days: 21, icon: '🌸', ja: 'セルフイメージが改善・内的な充実感が増す',         en: 'Self-image improves, inner fulfillment grows' },
  { days: 30, icon: '🌟', ja: '創造性・感受性が豊かになる',                       en: 'Creativity and sensitivity flourish' },
  { days: 60, icon: '🔥', ja: 'エネルギーが安定し、本来の活力を取り戻す',         en: 'Energy stabilizes, natural vitality returns' },
  { days: 90, icon: '🦁', ja: '内なる強さと充実した自己感覚が確立される',         en: 'Inner strength and authentic self-sense established' },
];

const RECOMMEND_LINKS = [
  { type: 'YouTube', icon: '▶️', title: 'Better Than Yesterday', desc: '自己改善・禁欲・習慣化をテーマにした英語チャンネル。科学的根拠に基づく解説が人気。', url: 'https://www.youtube.com/@BetterThanYesterday' },
  { type: 'YouTube', icon: '▶️', title: 'Improvement Pill', desc: 'NoFap・自己鍛錬・メンタル強化をアニメーション解説。初心者にわかりやすい。', url: 'https://www.youtube.com/@ImprovementPill' },
  { type: 'YouTube', icon: '▶️', title: 'RedFrost Motivation', desc: '禁欲・自己規律・モチベーション動画を多数公開。継続の後押しに最適。', url: 'https://www.youtube.com/@RedFrostMotivation' },
  { type: 'YouTube 💚', icon: '▶️', title: 'Layla Martin', desc: 'タントラ・聖なる性愛を専門とする世界的教師。意識的なセックスとエネルギー管理を実践的に解説。', url: 'https://www.youtube.com/@laylamartintv' },
  { type: 'YouTube 💚', icon: '▶️', title: 'Mantak Chia', desc: '道教の性エネルギー管理・射精なしセックス（マルチオーガズム）の第一人者。タントラの実践理論の源流。', url: 'https://www.youtube.com/@MantakChiaOfficial' },
  { type: 'YouTube 🌿', icon: '▶️', title: 'Yoga With Adriene', desc: 'ヨガ・呼吸・マインドフルネスで心身のエネルギーを整える。男女問わず人気の世界最大級ヨガチャンネル。', url: 'https://www.youtube.com/@yogawithadriene' },
  { type: 'YouTube ✨', icon: '▶️', title: 'Sadhguru', desc: 'クンダリニー・プラーナ・エネルギー管理をスピリチュアルな視点で解説。世界的グル。', url: 'https://www.youtube.com/@SadhguruJV' },
  { type: 'YouTube 🌸', icon: '▶️', title: 'Lavendaire', desc: '女性向け自己成長・ライフスタイルデザイン・フェミニンエネルギーの活かし方を発信。', url: 'https://www.youtube.com/@Lavendaire' },
  { type: 'コミュニティ', icon: '💬', title: 'Reddit r/NoFap', desc: '世界最大の禁欲コミュニティ。体験談・アドバイス・励ましが日々投稿される。', url: 'https://www.reddit.com/r/NoFap/' },
  { type: 'コミュニティ', icon: '💬', title: 'Reddit r/pornfree', desc: 'ポルノ依存からの解放に特化したコミュニティ。', url: 'https://www.reddit.com/r/pornfree/' },
  { type: 'ブログ', icon: '📖', title: 'Your Brain on Porn', desc: 'ポルノが脳に与える影響を科学的に解説したサイト。', url: 'https://www.yourbrainonporn.com' },
  { type: 'ブログ', icon: '📖', title: 'NoFap公式サイト', desc: '禁欲の科学・よくある質問・回復プログラムなど体系的な情報が揃う。', url: 'https://nofap.com' },
  { type: 'ツール', icon: '🛠️', title: 'Brainbuddy（アプリ）', desc: 'NoFap専用のトラッカーアプリ。コーチング機能・誘惑ブロックも搭載。', url: 'https://www.brainbuddyapp.com' },
  { type: 'ツール', icon: '🛠️', title: 'Cold Turkey Blocker', desc: 'ポルノサイトをPC・スマホで完全ブロックできるアプリ。意志力を補助する。', url: 'https://getcoldturkey.com' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'メンタリストDaiGo', desc: '依存症・自己制御・ドーパミン管理を科学的に解説。', url: 'https://www.youtube.com/@mentalistdaigo' },
  { type: '🇯🇵 YouTube ✨', icon: '▶️', title: 'Sadhguru日本語', desc: 'サドゥグルの動画を日本語字幕・吹き替えで届けるチャンネル。エネルギー・瞑想・内なる変容。', url: 'https://www.youtube.com/@SadhguruJapanese' },
  { type: '🇯🇵 まとめ', icon: '💬', title: 'Note「エネルギー管理」記事一覧', desc: '日本人ユーザーによる体験談・コツをまとめた記事が多数掲載。', url: 'https://note.com/search?q=%E3%82%A8%E3%83%8D%E3%83%AB%E3%82%AE%E3%83%BC+%E7%AE%A1%E7%90%86' },
  { type: '🇯🇵 まとめ 🌸', icon: '💬', title: 'Note「フェミニンエネルギー」', desc: '女性向け：フェミニンエネルギー・生活習慣・自己肯定感に関する記事。', url: 'https://note.com/search?q=%E3%83%95%E3%82%A7%E3%83%9F%E3%83%8B%E3%83%B3%E3%82%A8%E3%83%8D%E3%83%AB%E3%82%AE%E3%83%BC' },
  { type: '🇯🇵 YouTube 🙏', icon: '▶️', title: '大愚和尚の一問一答', desc: '仏教的視点から「心の豊かさ」「生きる意味」「人間関係」を解説。精神的豊かさを深めたい人に。', url: 'https://www.youtube.com/@osho_taigu' },
  { type: '🇯🇵 YouTube 💰', icon: '▶️', title: '両学長 リベラルアーツ大学', desc: 'お金の知識・投資・FIRE・人生設計をわかりやすく解説。「金銭的豊かさ」を学ぶなら最初の一本。', url: 'https://www.youtube.com/@ryogakucho' },
  { type: '🇯🇵 解説 💚', icon: '📖', title: 'タントラセックス徹底解説（tantra.jp）', desc: 'タントラセックスとは何か、射精を目的としない性のあり方、歴史的背景をわかりやすく解説。', url: 'https://tantra.jp/%e3%82%bf%e3%83%b3%e3%83%88%e3%83%a9%e3%82%bb%e3%83%83%e3%82%af%e3%82%b9%e3%80%80%e5%be%b9%e5%ba%95%e8%a7%a3%e8%aa%ac' },
  { type: '🇯🇵 Note 💚', icon: '📖', title: 'タントラヨガとは？性との関係は？', desc: '「タントラ＝性的なもの」という誤解を解き、エネルギー・意識の拡張という本来の意味を丁寧に解説。', url: 'https://note.com/tantrayogajapan/n/n19b5c13b23cf' },
  { type: '🇯🇵 Note 💚', icon: '📖', title: 'タントラが扱う「性」について（Kaiho先生に聞く）', desc: 'タントラにおける性エネルギーの位置づけを、Q&A形式でスピリチュアルな視点からわかりやすく説明。', url: 'https://note.com/tantrayogajapan/n/n1a482b3ddd78' },
  { type: '🇯🇵 サイト 🌿', icon: '🌸', title: 'cocoro.tokyo', desc: '依存症・習慣改善・こころのケアをテーマにしたサイト。各種トラッカーアプリも公開中。', url: 'https://cocoro.tokyo' },
  { type: '🇯🇵 YouTube 🧹', icon: '▶️', title: '小林正観（SKP公式）', desc: '「そ・わ・か（掃除・笑い・感謝）」の提唱者。掃除がいかに人生を変えるかを軽やかに語る。', url: 'https://www.youtube.com/@skp0358' },
  { type: '🇯🇵 動画 🧹', icon: '▶️', title: '【小林正観】掃けば掃くほど豊かになる', desc: '4つの時間に掃除をすることで豊かさを引き寄せる、正観さんの掃除哲学の代表的な一本。', url: 'https://www.youtube.com/watch?v=fMzgbjW8o0k' },
];

const RECOMMEND_LINKS_EN = [
  { type: 'YouTube', icon: '▶️', title: 'Better Than Yesterday', desc: 'Self-improvement, NoFap & habit science. Research-based.', url: 'https://www.youtube.com/@BetterThanYesterday' },
  { type: 'YouTube', icon: '▶️', title: 'Improvement Pill', desc: 'Animated explanations of NoFap, discipline & mental training.', url: 'https://www.youtube.com/@ImprovementPill' },
  { type: 'YouTube', icon: '▶️', title: 'RedFrost Motivation', desc: 'NoFap, discipline & motivation videos.', url: 'https://www.youtube.com/@RedFrostMotivation' },
  { type: 'YouTube 💚', icon: '▶️', title: 'Layla Martin', desc: 'World-renowned tantra teacher. Practical guidance on conscious sex, sacred intimacy & energy.', url: 'https://www.youtube.com/@laylamartintv' },
  { type: 'YouTube 💚', icon: '▶️', title: 'Mantak Chia', desc: 'Taoist master of sexual energy & male multi-orgasm (non-ejaculatory sex). The foundational source.', url: 'https://www.youtube.com/@MantakChiaOfficial' },
  { type: 'YouTube 🌿', icon: '▶️', title: 'Yoga With Adriene', desc: 'Yoga, breathwork & mindfulness to restore energy balance. Beloved by millions worldwide.', url: 'https://www.youtube.com/@yogawithadriene' },
  { type: 'YouTube ✨', icon: '▶️', title: 'Sadhguru', desc: 'Kundalini, prana & energy management from a world-renowned spiritual guide.', url: 'https://www.youtube.com/@SadhguruJV' },
  { type: 'YouTube 🌸', icon: '▶️', title: 'Lavendaire', desc: 'Self-growth, lifestyle design & feminine energy — ideal for women on this journey.', url: 'https://www.youtube.com/@Lavendaire' },
  { type: 'Community', icon: '💬', title: 'Reddit r/NoFap', desc: "The world's largest NoFap community.", url: 'https://www.reddit.com/r/NoFap/' },
  { type: 'Community', icon: '💬', title: 'Reddit r/pornfree', desc: 'Community focused on freedom from porn addiction.', url: 'https://www.reddit.com/r/pornfree/' },
  { type: 'Article', icon: '📖', title: 'Your Brain on Porn', desc: 'Science-based site explaining how porn affects the brain.', url: 'https://www.yourbrainonporn.com' },
  { type: 'Article', icon: '📖', title: 'NoFap Official Site', desc: 'Science of abstinence, FAQs, and recovery programs.', url: 'https://nofap.com' },
  { type: 'Tool', icon: '🛠️', title: 'Brainbuddy (App)', desc: 'Dedicated tracker app with coaching and blocking features.', url: 'https://www.brainbuddyapp.com' },
  { type: 'Tool', icon: '🛠️', title: 'Cold Turkey Blocker', desc: 'Block adult sites on PC and mobile. Supports your willpower.', url: 'https://getcoldturkey.com' },
  { type: '🇯🇵 YouTube', icon: '▶️', title: 'Mentalist DaiGo (JP)', desc: 'Science-based explanations of addiction & self-control. (Japanese)', url: 'https://www.youtube.com/@mentalistdaigo' },
  { type: '🇯🇵 YouTube ✨', icon: '▶️', title: 'Sadhguru Japanese', desc: "Sadhguru's teachings on energy, meditation & inner transformation in Japanese.", url: 'https://www.youtube.com/@SadhguruJapanese' },
  { type: '🇯🇵 YouTube 🙏', icon: '▶️', title: 'Daigū Oshō Q&A (JP)', desc: 'A Buddhist monk explores mental wealth, purpose & relationships. Deep inner richness. (Japanese)', url: 'https://www.youtube.com/@osho_taigu' },
  { type: '🇯🇵 YouTube 💰', icon: '▶️', title: 'Ryo Gakucho — Liberal Arts Univ (JP)', desc: 'Plain-language financial literacy: investing, FIRE & life design. Top Japanese finance channel.', url: 'https://www.youtube.com/@ryogakucho' },
  { type: '🇯🇵 Article 💚', icon: '📖', title: 'Tantra Sex Explained (JP)', desc: 'What is tantric sex? Non-ejaculatory intimacy, history & energy — clear Japanese explanation.', url: 'https://tantra.jp/%e3%82%bf%e3%83%b3%e3%83%88%e3%83%a9%e3%82%bb%e3%83%83%e3%82%af%e3%82%b9%e3%80%80%e5%be%b9%e5%ba%95%e8%a7%a3%e8%aa%ac' },
  { type: '🇯🇵 Note 💚', icon: '📖', title: 'What is Tantra Yoga? (JP)', desc: 'Clears up misconceptions about tantra — consciousness, energy & the real meaning beyond sexuality.', url: 'https://note.com/tantrayogajapan/n/n19b5c13b23cf' },
  { type: '🇯🇵 Note 💚', icon: '📖', title: 'Tantra & Sexuality — Q&A (JP)', desc: "How tantra views sexual energy from a spiritual perspective. Q&A format, easy to read.", url: 'https://note.com/tantrayogajapan/n/n1a482b3ddd78' },
  { type: '🇯🇵 Site 🌿', icon: '🌸', title: 'cocoro.tokyo', desc: 'Recovery support site covering addiction, habit change & mental wellness. Home of this app.', url: 'https://cocoro.tokyo' },
  { type: '🇯🇵 YouTube 🧹', icon: '▶️', title: 'Kobayashi Masakan (SKP Official)', desc: 'Pioneer of "so·wa·ka" — cleaning, laughter & gratitude. Talks on how cleaning transforms life. (JP)', url: 'https://www.youtube.com/@skp0358' },
  { type: '🇯🇵 Video 🧹', icon: '▶️', title: 'Kobayashi Masakan — Clean to Abundance', desc: 'The richer you sweep: Masakan\'s iconic talk on the power of cleaning. (JP)', url: 'https://www.youtube.com/watch?v=fMzgbjW8o0k' },
];

// ========== HELPERS ==========

// Gender-aware activity label/icon
function actLabel(a) {
  if (gender === 'female' && a.jaFemale) return lang === 'en' ? (a.enFemale || a.en) : a.jaFemale;
  return lang === 'en' ? a.en : a.ja;
}
function actIcon(a) {
  return (gender === 'female' && a.iconFemale) ? a.iconFemale : a.icon;
}

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

function getLevelObj(pts) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (pts >= l.min) current = l;
    else break;
  }
  return current;
}

function getLevel(pts) {
  const l = getLevelObj(pts);
  return lang === 'en' ? l.en : l.ja;
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
  const sexEjacRate = getSexEjacPct() / 100;
  if (gender === 'female') {
    return [
      { key: 'porn_solo',   icon: '⛔', ja: 'ポルノ＋自慰',      en: 'Porn + Solo',        rate: 0.35, isEjac: true,  isSoloEjac: true,  isFemaleB: false, isSexEjac: false },
      { key: 'solo',        icon: '💜', ja: '自慰（ポルノなし）', en: 'Self-care Solo',      rate: 0.10, isEjac: false, isSoloEjac: false, isFemaleB: true,  isSexEjac: false },
      { key: 'sex',         icon: '💛', ja: 'セックス',            en: 'Sex',                 rate: sexEjacRate, isEjac: sexEjacRate > 0, isSoloEjac: false, isFemaleB: false, isSexEjac: true },
      { key: 'junk',        icon: '🍔', ja: 'ジャンクフード',        en: 'Junk Food',             rate: 0.10, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
      { key: 'sugar',       icon: '🍬', ja: '糖質過多',               en: 'Excess Sugar',           rate: 0.05, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
      { key: 'alcohol',     icon: '🍺', ja: '過度な飲酒',            en: 'Excessive Alcohol',     rate: 0.10, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
      { key: 'bad_sleep',   icon: '🌙', ja: '睡眠不足・夜更かし',    en: 'Sleep Deprivation',     rate: 0.08, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
      { key: 'sns',         icon: '📱', ja: '長時間SNS',              en: 'Long SNS Scroll',       rate: 0.05, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
    ];
  }
  return [
    { key: 'porn_solo',   icon: '⛔', ja: 'ポルノ＋自慰（射精）',  en: 'Porn + Solo (ejac)',    rate: 0.65, isEjac: true,  isSoloEjac: true,  isFemaleB: false, isSexEjac: false },
    { key: 'solo',        icon: '⚠️', ja: '自慰（射精あり）',       en: 'Solo (ejaculation)',    rate: 0.45, isEjac: true,  isSoloEjac: true,  isFemaleB: false, isSexEjac: false },
    { key: 'sex_ejac',    icon: '💛', ja: 'セックス（射精あり）',   en: 'Sex (ejaculation)',     rate: sexEjacRate, isEjac: sexEjacRate > 0, isSoloEjac: false, isFemaleB: false, isSexEjac: true },
    { key: 'junk',        icon: '🍔', ja: 'ジャンクフード',          en: 'Junk Food',             rate: 0.10, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
    { key: 'sugar',       icon: '🍬', ja: '糖質過多',                 en: 'Excess Sugar',           rate: 0.05, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
    { key: 'alcohol',     icon: '🍺', ja: '過度な飲酒',              en: 'Excessive Alcohol',     rate: 0.10, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
    { key: 'bad_sleep',   icon: '🌙', ja: '睡眠不足・夜更かし',      en: 'Sleep Deprivation',     rate: 0.08, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
    { key: 'sns',         icon: '📱', ja: '長時間SNS',                en: 'Long SNS Scroll',       rate: 0.05, isEjac: false, isSoloEjac: false, isFemaleB: false, isSexEjac: false },
  ];
}

// ========== EFFECT DAYS ==========
// Days without solo ejaculation (porn+solo or solo). Sex does NOT reset this.

function getEffectDays() {
  const lastSolo = localStorage.getItem('energy_last_solo_ejac');
  if (!lastSolo) return getDays();
  const daysSince = Math.floor((Date.now() - parseInt(lastSolo)) / (1000 * 60 * 60 * 24));
  return Math.max(0, daysSince);
}

function setSoloEjacTime() {
  localStorage.setItem('energy_last_solo_ejac', Date.now().toString());
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
    'energy_last_solo_ejac', 'energy_history',
    'energy_sex_ejac_week', 'energy_forgiveness_q', 'energy_last_ejac',
    'energy_workout_streak', 'energy_last_workout_date',
    'energy_gender', 'energy_welcomed',
    'energy_sex_ejac_pct_m', 'energy_sex_ejac_pct_f',
    'energy_sex_weekly_limit', 'energy_forgiveness_days', 'energy_sex_no_ejac',
    'energy_period_start',
  ];
  keysToRemove.forEach(k => localStorage.removeItem(k));
  points = 0;
  startDate = null;
  gender = null;
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

// ========== HISTORY ==========

function recordHistorySnapshot() {
  if (!startDate) return;
  const today = todayStr();
  let history = [];
  try { history = JSON.parse(localStorage.getItem('energy_history') || '[]'); } catch(e) { history = []; }
  const snap = { date: today, pts: Math.round(points) };
  const idx = history.findIndex(e => e.date === today);
  if (idx >= 0) {
    history[idx] = snap;
  } else {
    history.push(snap);
    if (history.length > 90) history = history.slice(-90);
  }
  localStorage.setItem('energy_history', JSON.stringify(history));
}

// ========== POINTS ==========

function addPoints(amount) {
  points = Math.max(0, points + amount);
  savePoints();
  addToTodayChange(amount);
  recordHistorySnapshot();
}

function subtractPoints(newValue, lost) {
  points = newValue;
  savePoints();
  addToTodayChange(-lost);
  recordHistorySnapshot();
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

  // Check forgiveness recovery
  checkForgiveness();
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

// ========== WORKOUT STREAK ==========

function getWorkoutStreak() {
  return parseInt(localStorage.getItem('energy_workout_streak') || '0');
}

function updateWorkoutStreak() {
  const lastDate = localStorage.getItem('energy_last_workout_date');
  const today = todayStr();
  if (lastDate === today) return null; // 今日すでにカウント済み
  const yesterday = dateStr(new Date(Date.now() - 86400000));
  const streak = lastDate === yesterday ? getWorkoutStreak() + 1 : 1;
  localStorage.setItem('energy_workout_streak', streak.toString());
  localStorage.setItem('energy_last_workout_date', today);
  return streak;
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

// ========== SETTINGS: SEX & FORGIVENESS ==========

function getSexEjacPct() {
  const key = gender === 'female' ? 'energy_sex_ejac_pct_f' : 'energy_sex_ejac_pct_m';
  const def = gender === 'female' ? 5 : 15;
  const s = localStorage.getItem(key);
  return s !== null ? parseInt(s) : def;
}

function setSexEjacPct(pct) {
  const key = gender === 'female' ? 'energy_sex_ejac_pct_f' : 'energy_sex_ejac_pct_m';
  localStorage.setItem(key, pct);
}

function getSexNoEjacEnabled() {
  return localStorage.getItem('energy_sex_no_ejac') === 'true';
}

function getSexWeeklyLimit() {
  const s = localStorage.getItem('energy_sex_weekly_limit');
  return s !== null ? parseInt(s) : 1;
}

function getForgivenessdays() {
  const s = localStorage.getItem('energy_forgiveness_days');
  return s !== null ? parseInt(s) : 30;
}

// ========== SEX WEEKLY COUNT ==========

function getSexEjacWeekCount() {
  const s = localStorage.getItem('energy_sex_ejac_week');
  if (!s) return 0;
  const d = JSON.parse(s);
  if (d.week !== getWeekKey()) return 0;
  return d.count || 0;
}

function incrementSexEjacWeekCount() {
  const week = getWeekKey();
  const s = localStorage.getItem('energy_sex_ejac_week');
  let d = s ? JSON.parse(s) : { week, count: 0 };
  if (d.week !== week) d = { week, count: 0 };
  d.count++;
  localStorage.setItem('energy_sex_ejac_week', JSON.stringify(d));
}

// ========== FORGIVENESS QUEUE ==========

function getForgivenessQueue() {
  try { return JSON.parse(localStorage.getItem('energy_forgiveness_q') || '[]'); } catch(e) { return []; }
}

function addToForgivenessQueue(lost, key) {
  if (lost <= 0) return;
  const queue = getForgivenessQueue();
  queue.push({ ts: Date.now(), lost, key });
  if (queue.length > 90) queue.splice(0, queue.length - 90);
  localStorage.setItem('energy_forgiveness_q', JSON.stringify(queue));
}

function checkForgiveness() {
  const days = getForgivenessdays();
  if (days <= 0) return 0;
  const queue = getForgivenessQueue();
  const threshold = days * 86400000;
  const now = Date.now();
  let totalRestore = 0;
  const remaining = [];
  for (const item of queue) {
    if (now - item.ts >= threshold) {
      totalRestore += item.lost;
    } else {
      remaining.push(item);
    }
  }
  localStorage.setItem('energy_forgiveness_q', JSON.stringify(remaining));
  if (totalRestore > 0) addPoints(totalRestore);
  return totalRestore;
}

// ========== EJAC INTERVAL SYSTEM ==========

function getLastEjacTime() {
  const s = localStorage.getItem('energy_last_ejac');
  return s ? parseInt(s) : null;
}
function setLastEjacTime() {
  localStorage.setItem('energy_last_ejac', Date.now().toString());
}
function getDaysSinceLastEjac() {
  const last = getLastEjacTime();
  if (!last) return null;
  return Math.floor((Date.now() - last) / (1000 * 60 * 60 * 24));
}
function getEjacIntervalModifier() {
  const days = getDaysSinceLastEjac();
  const t = tr();
  if (days === null)  return { mult: 1.0, bonusPts: 0, msg: '' };   // 初回
  if (days >= 14)     return { mult: 0,   bonusPts: 100, msg: t.intervalBonus(100) };
  if (days >= 7)      return { mult: 0,   bonusPts: 0,   msg: t.intervalNoPenalty };
  if (days >= 3)      return { mult: 0.5, bonusPts: 0,   msg: t.intervalHalfPenalty };
  return               { mult: 1.0, bonusPts: 0, msg: '' };          // 3日未満
}

// ========== EFFECTIVE RATE HELPER ==========

function getEffectivePenaltyRate(p) {
  if (p.isSexEjac) {
    const count = getSexEjacWeekCount();
    const limit = getSexWeeklyLimit();
    if (count < limit) return 0;
  }
  return p.rate;
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

  // Moon phase activity bonus (排卵期 +10%, female only)
  const moonBonus = getMoonPhaseActivityBonus();
  if (moonBonus > 0) {
    const extra = Math.round(activity.points * moonBonus);
    if (extra > 0) { addPoints(extra); earned += extra; }
  }

  // Ejac recovery bonus: need both exercise AND meditation done within 48h window
  const ejacRec = getEjacRecovery();
  if (ejacRec && activity.isRecovery) {
    const done = ejacRec.done || [];
    if (!done.includes(actKey)) {
      done.push(actKey);
      ejacRec.done = done;
      localStorage.setItem('energy_ejac_recovery', JSON.stringify(ejacRec));
    }
    const hasPhysical = done.some(k => ['workout','yoga'].includes(k));
    const hasMental   = done.some(k => ['meditation','yoga'].includes(k));
    if (hasPhysical && hasMental && done.length >= 2) {
      const bonus = Math.round(points * 0.15);
      addPoints(bonus);
      earned += bonus;
      localStorage.removeItem('energy_ejac_recovery');
      bonusMsg = tr().recoveryBonusMsg;
    }
  }

  // Junk food recovery bonus (next day after junk)
  const junkRecovDate = localStorage.getItem('energy_junk_recovery_date');
  if (junkRecovDate === todayStr() && (activity.isJunkRecovery || actKey === 'workout')) {
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

  // Workout streak bonus (first workout of the day only)
  if (activity.isWorkout) {
    const streak = updateWorkoutStreak();
    if (streak === 3) {
      addPoints(100); earned += 100;
      if (!bonusMsg) bonusMsg = tr().workoutStreak3;
    } else if (streak === 7) {
      addPoints(300); earned += 300;
      if (!bonusMsg) bonusMsg = tr().workoutStreak7;
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

  let effectiveRate = penalty.rate;
  let extraMsg = '';

  // Sex ejac: check weekly limit first
  if (penalty.isSexEjac) {
    const count = getSexEjacWeekCount();
    const limit = getSexWeeklyLimit();
    if (count < limit) {
      effectiveRate = 0;
      extraMsg = tr().sexWithinLimitNote;
    }
    incrementSexEjacWeekCount();
  }

  // Ejac interval modifier (applies only when not already zero)
  let intervalBonusPts = 0;
  if (penalty.isEjac && effectiveRate > 0) {
    const mod = getEjacIntervalModifier();
    effectiveRate = effectiveRate * mod.mult;
    intervalBonusPts = mod.bonusPts;
    if (mod.msg) extraMsg = mod.msg;
  }

  // Moon phase modifier (female only, applies to all penalty types)
  if (gender === 'female' && effectiveRate > 0) {
    effectiveRate = effectiveRate * getMoonPhasePenaltyMult();
  }

  // Update last ejac timestamp (always, regardless of penalty amount)
  if (penalty.isEjac) setLastEjacTime();

  // Zero rate: record event only (possibly with interval bonus)
  if (effectiveRate === 0) {
    if (penalty.isSoloEjac) setSoloEjacTime();
    if (intervalBonusPts > 0) {
      addPoints(intervalBonusPts);
      savePoints();
      return { lost: -intervalBonusPts, remaining: Math.round(points), extraMsg };
    }
    return { lost: 0, remaining: Math.round(points), extraMsg };
  }

  const oldPoints = points;
  const newPoints = applyPenaltyCalc(points, effectiveRate);
  const lost = oldPoints - newPoints;
  subtractPoints(newPoints, lost);

  if (penalty.isEjac) {
    setEjacRecovery();
    if (!extraMsg) extraMsg = tr().recoveryTip;
    addToForgivenessQueue(lost, penaltyKey);
  }

  if (penalty.isSoloEjac) {
    setSoloEjacTime();
  }

  if (penalty.key === 'junk') {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem('energy_junk_recovery_date', dateStr(tomorrow));
    localStorage.setItem('energy_junk_penalty_amt', lost.toString());
    localStorage.setItem('energy_last_junk_date', todayStr());
    if (!extraMsg) extraMsg = tr().junkRecoveryTip;
  }

  if (gender === 'female' && penalty.isFemaleB) {
    incrementFemaleWeekCount();
    const count = getFemaleWeekCount();
    const limit = getFemaleLimit();
    if (count <= limit && !extraMsg) {
      extraMsg = tr().femaleSelfCareNote;
    }
  }

  return { lost, remaining: newPoints, extraMsg };
}

// ========== VIDEO SETTING ==========

function getVideosEnabled() {
  return localStorage.getItem('energy_videos_enabled') !== 'false';
}

function updateVideoToggleBtn() {
  const btn = document.getElementById('btn-video-toggle');
  if (!btn) return;
  const t = tr();
  btn.textContent = getVideosEnabled() ? t.videoOn : t.videoOff;
}

// ========== MOON CYCLE ==========

function getPeriodStart() {
  return localStorage.getItem('energy_period_start') || null;
}

function getMoonPhase() {
  const startStr = getPeriodStart();
  if (!startStr) return null;
  const start = new Date(startStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return null;
  const cycleDay = (diffDays % 28) + 1; // 1–28
  let phase;
  if (cycleDay <= 5)       phase = 0; // 生理期
  else if (cycleDay <= 13) phase = 1; // 卵胞期
  else if (cycleDay <= 16) phase = 2; // 排卵期
  else                     phase = 3; // 黄体期
  return { phase, cycleDay };
}

// Returns penalty multiplier based on moon phase (female only)
function getMoonPhasePenaltyMult() {
  if (gender !== 'female') return 1.0;
  const mp = getMoonPhase();
  if (!mp) return 1.0;
  if (mp.phase === 0) return 0.8;  // 生理期: −20%
  if (mp.phase === 3) return 0.9;  // 黄体期: −10%
  return 1.0;
}

// Returns bonus fraction for activity points during ovulation (排卵期)
function getMoonPhaseActivityBonus() {
  if (gender !== 'female') return 0;
  const mp = getMoonPhase();
  if (!mp) return 0;
  if (mp.phase === 2) return 0.10; // 排卵期: +10%
  return 0;
}

function updateMoonPhaseBar() {
  const bar = document.getElementById('moon-phase-bar');
  if (!bar) return;
  if (gender !== 'female') { bar.classList.add('hidden'); return; }
  const mp = getMoonPhase();
  if (!mp) { bar.classList.add('hidden'); return; }
  const t = tr();
  bar.classList.remove('hidden');
  document.getElementById('moon-phase-icon-name').textContent = t.moonPhaseNames[mp.phase];
  document.getElementById('moon-phase-day').textContent = t.moonPhaseDayLabel(mp.cycleDay);
  document.getElementById('moon-phase-effect').textContent = t.moonPhaseDescs[mp.phase];
}


// ========== RENDER ==========

let _lastRenderedLevel = -1; // stores level min threshold (number), -1 = unset
let _pendingActivityKey  = null;  // set to activity key when tapped → plays reward modal
let _pendingFeedbackMsg  = null;  // feedback message to show after modal closes
let _effectsExpanded = true; // always expanded now
let _levelsExpanded = false;

function render() {
  if (!startDate) return;
  const days = getDays();
  const t = tr();

  // Points card — detect level-up; compare by level min (language-independent)
  const currentLevelObj = getLevelObj(points);
  const currentLevel = lang === 'en' ? currentLevelObj.en : currentLevelObj.ja;
  const didLevelUp = _lastRenderedLevel !== -1 && _lastRenderedLevel !== currentLevelObj.min;
  _lastRenderedLevel = currentLevelObj.min;

  if (didLevelUp) {
    playLevelUp();
    showPendingFeedback(); // レベルアップ時はすぐ表示
    _pendingActivityKey = null;
    _pendingFeedbackMsg = null;
  } else if (_pendingActivityKey) {
    const key = _pendingActivityKey;
    _pendingActivityKey = null;
    playActivityVideo(key, showPendingFeedback); // モーダルが閉じたら表示
  }

  document.getElementById('points-display').textContent = Math.round(points).toLocaleString();
  document.getElementById('level-label').textContent = currentLevel;

  // Level image (male: img / female: imgF)
  const levelImgEl = document.getElementById('level-img');
  if (levelImgEl) {
    const imgSrc = (gender === 'female' && currentLevelObj.imgF) ? currentLevelObj.imgF : currentLevelObj.img;
    if (imgSrc) { levelImgEl.src = imgSrc; levelImgEl.alt = currentLevel; }
  }

  const todayChange = getTodayChange();
  document.getElementById('today-gain-display').textContent = t.todayGain(todayChange);

  // Next level display
  const nextLevelEl = document.getElementById('next-level-display');
  if (nextLevelEl) {
    const currentPts = Math.round(points);
    const nextL = LEVELS.find(l => l.min > currentPts);
    if (nextL) {
      const needed = nextL.min - currentPts;
      const name = lang === 'en' ? nextL.en : nextL.ja;
      nextLevelEl.textContent = t.nextLevel(needed, name);
    } else {
      nextLevelEl.textContent = t.maxLevel;
    }
  }

  if (startDate) {
    document.getElementById('streak-start').innerHTML =
      `${t.startedPrefix}${t.formatDate(startDate)} ／ <span class="days-num">${days}</span>${t.daysUnit}`;
  }

  // Message (female: use phase-specific messages if period date is set)
  let messages = getMessages();
  if (gender === 'female') {
    const mp = getMoonPhase();
    if (mp) {
      const phaseArr = lang === 'en' ? MESSAGES_PHASE_EN[mp.phase] : MESSAGES_PHASE[mp.phase];
      if (phaseArr && phaseArr.length > 0) messages = phaseArr;
    }
  }
  document.getElementById('message-text').textContent = messages[days % messages.length];

  // Women's Perspective Tips (male only)
  const tipCard = document.getElementById('womens-tips-card');
  const tipText = document.getElementById('womens-tips-text');
  if (tipCard) {
    if (gender === 'female') {
      tipCard.classList.add('hidden');
    } else {
      tipCard.classList.remove('hidden');
      const tipsArr = lang === 'en' ? WOMENS_TIPS_EN : WOMENS_TIPS;
      const tip = tipsArr.find(t => days <= t.maxDays) || tipsArr[tipsArr.length - 1];
      if (tipText) tipText.textContent = lang === 'en' ? tip.en : tip.ja;
    }
  }

  // Feminine Energy Tips (female only)
  const femCard = document.getElementById('feminine-tips-card');
  const femText = document.getElementById('feminine-tips-text');
  if (femCard) {
    if (gender !== 'female') {
      femCard.classList.add('hidden');
    } else {
      femCard.classList.remove('hidden');
      const femArr = lang === 'en' ? FEMININE_TIPS_EN : FEMININE_TIPS;
      const femTip = femArr.find(t => days <= t.maxDays) || femArr[femArr.length - 1];
      if (femText) femText.textContent = lang === 'en' ? femTip.en : femTip.ja;
    }
  }

  // Level list accordion toggle icon
  const lvToggleIcon = document.getElementById('milestones-toggle-icon');
  if (lvToggleIcon) lvToggleIcon.textContent = _levelsExpanded ? '∨' : '›';
  const milestonesEl = document.getElementById('milestones');
  if (milestonesEl) milestonesEl.classList.toggle('hidden', !_levelsExpanded);

  // Level list (unified)
  const container = document.getElementById('milestones');
  if (!_levelsExpanded) {
    // skip rendering content when collapsed
  } else {
  container.innerHTML = '';
  const currentPtsRounded = Math.round(points);
  LEVELS.forEach((lv, i) => {
    const label = lang === 'en' ? lv.en : lv.ja;
    const done = currentPtsRounded >= lv.min;
    const isCurrent = getLevelObj(currentPtsRounded).min === lv.min;
    const nextLv = LEVELS[i + 1];
    let pct = 100;
    if (!done) {
      pct = 0;
    } else if (isCurrent && nextLv) {
      const range = nextLv.min - lv.min;
      pct = Math.min(100, Math.round(((currentPtsRounded - lv.min) / range) * 100));
    }
    const row = document.createElement('div');
    row.className = `milestone${done ? ' done' : ''}${isCurrent ? ' current' : ''}`;
    row.innerHTML = `
      <span class="milestone-name">${label}</span>
      <div class="milestone-bar-bg">
        <div class="milestone-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="milestone-pct">${done && !isCurrent ? t.milestoneCheck : (isCurrent && nextLv ? pct + '%' : (done ? t.milestoneCheck : ''))}</span>
    `;
    container.appendChild(row);
  });
  } // end _levelsExpanded

  // Effects section
  renderEffects();

  // Penalty buttons
  renderPenaltyButtons();

  // Today's activities row
  renderTodayActivityRow();
}

function renderEffects() {
  const effectDays = getEffectDays();
  const effects = gender === 'female' ? EFFECTS_FEMALE : EFFECTS_MALE;
  const t = tr();
  const lastSolo = localStorage.getItem('energy_last_solo_ejac');

  // Sub label
  const sub = document.getElementById('effects-sub');
  if (sub) {
    sub.textContent = lastSolo
      ? t.effectsSubSolo(effectDays)
      : t.effectsSubStart(effectDays);
  }

  // Note
  const noteEl = document.getElementById('effects-note');
  if (noteEl) noteEl.textContent = t.effectsNote;

  // Effects list
  const list = document.getElementById('effects-list');
  if (!list) return;
  list.innerHTML = '';
  effects.forEach(eff => {
    const unlocked = effectDays >= eff.days;
    const label = lang === 'en' ? eff.en : eff.ja;
    const dayLabel = lang === 'en' ? `Day ${eff.days}` : `${eff.days}日`;
    const item = document.createElement('div');
    item.className = `effect-item${unlocked ? ' unlocked' : ''}`;
    item.innerHTML = `
      <div class="effect-day-badge">${dayLabel}</div>
      <div class="effect-icon-col">${unlocked ? eff.icon : '🔒'}</div>
      <div class="effect-text">${label}</div>
    `;
    list.appendChild(item);
  });
}

function penaltyRateLabel(p) {
  const eff = getEffectivePenaltyRate(p);
  if (eff === 0) return lang === 'en' ? 'log only' : '記録のみ';
  return `−${Math.round(eff * 100)}%`;
}

function renderPenaltyButtons() {
  const penalties = getPenalties();
  const container = document.getElementById('penalty-buttons');
  container.innerHTML = '';
  penalties.forEach(p => {
    const label = lang === 'en' ? p.en : p.ja;
    const btn = document.createElement('button');
    btn.className = 'btn-penalty-inline';
    btn.dataset.key = p.key;
    btn.innerHTML = `<span class="penalty-btn-icon">${p.icon}</span><span class="penalty-btn-label">${label}</span><span class="penalty-btn-rate">${penaltyRateLabel(p)}</span>`;
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
    chip.textContent = `${actIcon(a)} ${actLabel(a)}`;
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

  const visibleActivities = ACTIVITIES;
  visibleActivities.forEach(a => {
    const done = isActivityDone(a.key);
    const label = actLabel(a);
    const icon  = actIcon(a);
    const btn = document.createElement('button');
    btn.className = `btn-activity-item${done ? ' done' : ''}${a.img ? ' has-img' : ''}`;
    btn.dataset.key = a.key;
    if (a.img) btn.style.backgroundImage = `url('${a.img}')`;

    // Junk recovery indicator
    const isJunkRecovDay = junkRecovDate === todayStr() && (a.isJunkRecovery || a.key === 'exercise');
    const recovTag = isJunkRecovDay && !done ? ' ★' : '';

    const hint = lang === 'en' ? (a.hintEn || '') : (a.hint || '');
    btn.innerHTML = `
      <span class="act-icon">${icon}</span>
      <span class="act-label">${label}${recovTag}</span>
      ${hint ? `<span class="act-hint">${hint}</span>` : ''}
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

  // フィードバックはモーダルが閉じた後に表示（レベルアップ時はrender()内で即表示）
  let msg = tr().pointAdded(result.earned);
  if (result.bonusMsg) msg += '  ' + result.bonusMsg;
  _pendingFeedbackMsg = msg;
  _pendingActivityKey = key;

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
      <span class="penalty-item-rate">${penaltyRateLabel(p)}</span>
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

  const effectiveRate = getEffectivePenaltyRate(p);
  const box = document.getElementById('penalty-confirm-box');
  const confirmBody = effectiveRate === 0
    ? (p.isSexEjac ? t.penaltyWithinLimit : t.penaltyLogOnly)
    : t.penaltyConfirmBody(label, Math.round(effectiveRate * 100));
  const ptsPreview = effectiveRate === 0
    ? `${Math.round(points).toLocaleString()} pt（${t.noChange}）`
    : `${Math.round(points).toLocaleString()} pt → ${applyPenaltyCalc(points, effectiveRate).toLocaleString()} pt`;
  box.innerHTML = `
    <div class="confirm-icon">${p.icon}</div>
    <div class="confirm-title">${t.penaltyConfirmTitle}</div>
    <div class="confirm-body">${confirmBody}</div>
    <div class="confirm-pts-preview">${ptsPreview}</div>
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
  const ptsLine = result.lost > 0
    ? `<div class="result-pts">−${result.lost}pt</div><div class="result-remaining">${t.penaltyResultBody(result.lost, result.remaining)}</div><div class="result-riseup">${t.riseUp}</div>`
    : `<div class="result-pts" style="color:#6aff6a;font-size:2rem">✓</div><div class="result-remaining">${t.penaltyResultTitle}</div>`;
  box.innerHTML = `
    <div class="result-title">${t.penaltyResultTitle}</div>
    ${ptsLine}
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


// ========== FEEDBACK HELPER ==========

function showPendingFeedback() {
  if (!_pendingFeedbackMsg) return;
  const feedbackEl = document.getElementById('activity-feedback');
  feedbackEl.textContent = _pendingFeedbackMsg;
  feedbackEl.className = 'activity-feedback show';
  setTimeout(() => feedbackEl.classList.remove('show'), 2500);
  _pendingFeedbackMsg = null;
}

// ========== REWARD MODAL ==========

let _rewardTimer = null;

function showRewardModal(src, onClosed) {
  const backdrop = document.getElementById('reward-backdrop');
  const video    = document.getElementById('reward-video');
  if (!backdrop || !video) { if (onClosed) onClosed(); return; }

  const source = video.querySelector('source');
  source.src = src;
  video.load();

  backdrop.classList.remove('hidden');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    backdrop.classList.add('show');
    video.play().catch(() => {});
  }));

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    if (_rewardTimer) { clearTimeout(_rewardTimer); _rewardTimer = null; }
    backdrop.classList.remove('show');
    backdrop.removeEventListener('click', onBackdropClick);
    setTimeout(() => {
      backdrop.classList.add('hidden');
      video.pause();
      video.currentTime = 0;
      source.src = '';
      if (onClosed) onClosed();
    }, 280);
  };

  _rewardTimer = setTimeout(close, 5000);

  const onBackdropClick = (e) => {
    if (e.target === backdrop || e.target.closest('#reward-close')) close();
  };
  backdrop.addEventListener('click', onBackdropClick);
}

// celebrate動画プール（汎用ご褒美）
const CELEBRATE_POOL = [
  './celebrate.mp4','./celebrate2.mp4','./celebrate3.mp4','./celebrate4.mp4',
  './celebrate5.mp4','./celebrate6.mp4','./celebrate7.mp4','./celebrate8.mp4',
  './celebrate9.mp4','./celebrate12.mp4','./celebrate14.mp4','./celebrate15.mp4',
  './celebrate16.mp4','./celebrate17.mp4','./celebrate18.mp4','./celebrate20.mp4',
  './celebrate21.mp4','./celebrate22.mp4','./celebrate23.mp4','./celebrate24.mp4',
  './celebrate25.mp4','./celebrate26.mp4','./celebrate27.mp4','./celebrate28.mp4',
  './celebrate29.mp4','./celebrate30.mp4','./celebrate31.mp4','./celebrate32.mp4',
  './celebrate33.mp4','./celebrate34.mp4','./celebrate35.mp4','./celebrate36.mp4',
];

// アクティビティ動画再生
// 50%: ボタン専用動画からランダム / 50%: celebrate汎用プールからランダム
function playActivityVideo(key, onClosed) {
  if (!getVideosEnabled()) { if (onClosed) onClosed(); return; }
  const act = ACTIVITIES.find(a => a.key === key);
  const hasOwn = act && act.videoGroup && act.videoGroup.length > 0;

  let src;
  if (hasOwn && Math.random() < 0.5) {
    // 50%: ボタン専用動画
    src = act.videoGroup[Math.floor(Math.random() * act.videoGroup.length)];
  } else {
    // 50%（または専用動画なし）: celebrate汎用プール
    src = CELEBRATE_POOL[Math.floor(Math.random() * CELEBRATE_POOL.length)];
  }
  showRewardModal(src, onClosed);
}

// ========== LEVELUP VIDEO（レベルアップ時） ==========

function playLevelUp() {
  if (!getVideosEnabled()) return;
  showRewardModal('./levelup1.mp4', null);
}

// ========== BACKGROUND TOGGLE ==========

const BG_STYLES = [
  // --- デフォルト壁紙 ---
  'linear-gradient(135deg, rgba(20,30,10,0.6), rgba(40,60,10,0.5)), url(\'./bg-hero.png\') center right/cover no-repeat',
  'linear-gradient(135deg, rgba(20,30,10,0.6), rgba(40,60,10,0.5)), url(\'./bg-hero-male.jpg\') center right/cover no-repeat',
  'linear-gradient(135deg, rgba(10,10,20,0.52), rgba(20,10,30,0.42)), url(\'./bg-hero-female.jpg\') top right/cover no-repeat',
  'linear-gradient(135deg, rgba(10,5,20,0.45), rgba(20,10,30,0.35)), url(\'./female-with-male.png\') top center/cover no-repeat',
  'linear-gradient(135deg, #1a2e0a, #2d4a10)',
  // --- アクティビティ壁紙 ---
  'linear-gradient(135deg, rgba(10,20,5,0.58), rgba(5,15,0,0.48)), url(\'./act-workout.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(5,15,25,0.58), rgba(0,10,20,0.48)), url(\'./act-shower.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(10,20,5,0.58), rgba(5,15,0,0.48)), url(\'./act-yoga.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(15,10,25,0.58), rgba(10,5,20,0.48)), url(\'./act-meditation.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(20,5,20,0.55), rgba(15,0,15,0.45)), url(\'./act-tantra.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(10,20,5,0.58), rgba(5,15,0,0.48)), url(\'./act-cleaning.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(5,20,15,0.58), rgba(0,15,10,0.48)), url(\'./act-toilet.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(20,15,5,0.55), rgba(15,10,0,0.45)), url(\'./act-earlyrise.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(10,20,5,0.58), rgba(5,15,0,0.48)), url(\'./act-gratitude.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(20,10,5,0.55), rgba(15,5,0,0.45)), url(\'./act-smile.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(5,20,5,0.58), rgba(0,15,0,0.48)), url(\'./act-veggies.jpg\') center center/cover no-repeat',
  'linear-gradient(135deg, rgba(20,15,0,0.55), rgba(15,10,0,0.45)), url(\'./act-sowaka.jpg\') center center/cover no-repeat',
];

function applyBg() {
  document.getElementById('streak-card').style.background = BG_STYLES[bgIndex];
}

function toggleBg() {
  bgIndex = (bgIndex + 1) % BG_STYLES.length;
  localStorage.setItem('energy_bg', bgIndex);
  applyBg();
}

// ========== CHART ==========

let chartMode = false;

function toggleChartView() {
  chartMode = !chartMode;
  document.getElementById('card-stats').classList.toggle('hidden', chartMode);
  document.getElementById('card-chart').classList.toggle('hidden', !chartMode);
  document.getElementById('streak-card').classList.toggle('chart-mode', chartMode);
  document.getElementById('btn-chart-toggle').classList.toggle('active', chartMode);
  if (chartMode) {
    renderChart();
  } else {
    applyBg();
  }
}

function renderChart() {
  const container = document.getElementById('chart-svg-container');
  if (!container) return;

  // Load & update history
  let history = [];
  try { history = JSON.parse(localStorage.getItem('energy_history') || '[]'); } catch(e) { history = []; }
  const today = todayStr();
  const snap = { date: today, pts: Math.round(points) };
  const existIdx = history.findIndex(e => e.date === today);
  if (existIdx >= 0) history[existIdx] = snap;
  else history = [...history, snap];

  const data = history.slice(-30);

  // Labels
  const totalEl = document.getElementById('chart-total-label');
  const rangeEl = document.getElementById('chart-range-label');
  if (totalEl) totalEl.textContent = `${Math.round(points).toLocaleString()} pt`;
  if (rangeEl) {
    rangeEl.textContent = lang === 'en'
      ? `${data.length}-day history`
      : `過去 ${data.length} 日間`;
  }

  if (data.length < 2) {
    container.innerHTML = `<div class="chart-no-data">${lang === 'en' ? '2 days of data needed to show chart' : '2日分のデータが貯まるとグラフが表示されます'}</div>`;
    return;
  }

  const W = 310, H = 140;
  const PAD = { top: 10, right: 10, bottom: 28, left: 48 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const vals = data.map(d => d.pts);
  const minV = Math.min(...vals);
  const maxV = Math.max(...vals);
  const vRange = maxV - minV || Math.max(100, maxV * 0.1);
  const vPad  = vRange * 0.12;
  const yMin  = Math.max(0, minV - vPad);
  const yMax  = maxV + vPad;
  const yRange = yMax - yMin || 1;

  const xScale = i => PAD.left + (i / (data.length - 1)) * innerW;
  const yScale = v => PAD.top + (1 - (v - yMin) / yRange) * innerH;

  // Line & area paths
  const linePts = data.map((d, i) => `${xScale(i).toFixed(1)},${yScale(d.pts).toFixed(1)}`);
  const pathD = 'M' + linePts.join(' L');
  const baseY = (PAD.top + innerH).toFixed(1);
  const areaD = `${pathD} L${xScale(data.length - 1).toFixed(1)},${baseY} L${xScale(0).toFixed(1)},${baseY} Z`;

  // Y-axis grid (3 lines)
  const gridLines = [0, 0.5, 1].map(frac => {
    const v = yMin + yRange * frac;
    const y = yScale(v).toFixed(1);
    const label = v >= 10000 ? `${(v/1000).toFixed(0)}k` : v >= 1000 ? `${(v/1000).toFixed(1)}k` : Math.round(v).toString();
    return `<line x1="${PAD.left}" y1="${y}" x2="${W - PAD.right}" y2="${y}" stroke="rgba(255,255,255,0.07)" stroke-width="1" stroke-dasharray="4,3"/><text x="${PAD.left - 5}" y="${(parseFloat(y) + 3.5).toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.32)" font-size="8.5" font-family="system-ui,sans-serif">${label}</text>`;
  }).join('');

  // Dots
  const dots = data.map((d, i) => {
    const cx = xScale(i).toFixed(1);
    const cy = yScale(d.pts).toFixed(1);
    if (d.date === today) {
      return `<circle cx="${cx}" cy="${cy}" r="5.5" fill="#f5c842" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>`;
    }
    return `<circle cx="${cx}" cy="${cy}" r="2.5" fill="#4ade80" opacity="0.8"/>`;
  }).join('');

  // X-axis date labels
  const step = data.length <= 7 ? 1 : data.length <= 14 ? 2 : data.length <= 21 ? 3 : 5;
  const xLabels = data.map((d, i) => {
    const isLast = i === data.length - 1;
    if (i % step !== 0 && !isLast) return '';
    // don't double-print last if it coincides with a step
    if (isLast && i % step === 0 && i !== 0) return '';
    const dt = new Date(d.date + 'T00:00:00');
    const label = `${dt.getMonth() + 1}/${dt.getDate()}`;
    const x = xScale(i).toFixed(1);
    const anchor = i === 0 ? 'start' : isLast ? 'end' : 'middle';
    return `<text x="${x}" y="${H - PAD.bottom + 14}" text-anchor="${anchor}" fill="${d.date === today ? 'rgba(245,200,66,0.7)' : 'rgba(255,255,255,0.28)'}" font-size="8.5" font-family="system-ui,sans-serif">${label}</text>`;
  }).join('');

  container.innerHTML = `<svg width="100%" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4ade80" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#4ade80" stop-opacity="0.01"/>
    </linearGradient>
  </defs>
  ${gridLines}
  <path d="${areaD}" fill="url(#cg)"/>
  <path d="${pathD}" fill="none" stroke="#4ade80" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
  ${dots}
  ${xLabels}
</svg>`;
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
  if (startDate) { render(); renderRecommend(); updateMoonPhaseBar(); }
  if (document.getElementById('emergency-modal').classList.contains('open')) renderTip();
  updateSettingsModeDisplay();
  const ws = document.getElementById('welcome-screen');
  if (ws && !ws.classList.contains('hidden')) {
    document.getElementById('welcome-content').innerHTML = renderWelcomeContent();
  }
}

// ========== SCREENS ==========

function showScreen(id) {
  ['gender-screen','setup-screen','welcome-screen','main-screen'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

// ========== WELCOME SCREEN ==========

function renderWelcomeContent() {
  const t = tr();
  const penalties = getPenalties();
  const sexLimit = getSexWeeklyLimit();
  const forgiveDays = getForgivenessdays();

  const rows = penalties.map(p => {
    let rateStr;
    if (p.isSexEjac && p.rate > 0) {
      const freeStr = lang === 'en' ? `first ${sexLimit}/wk free` : `週${sexLimit}回まで免除`;
      const penStr = lang === 'en' ? `then −${Math.round(p.rate*100)}%` : `以降 −${Math.round(p.rate*100)}%`;
      rateStr = `${freeStr}<br><span style="opacity:.7">${penStr}</span>`;
    } else if (p.rate === 0) {
      rateStr = lang === 'en' ? 'log only' : '記録のみ';
    } else {
      rateStr = `−${Math.round(p.rate * 100)}%`;
    }
    const label = lang === 'en' ? p.en : p.ja;
    return `<div class="welcome-row"><span class="welcome-row-icon">${p.icon}</span><span class="welcome-row-label">${label}</span><span class="welcome-row-rate">${rateStr}</span></div>`;

  }).join('');

  return `
    <div class="welcome-section">
      <div class="welcome-section-title">${t.welcomePenaltyLabel}</div>
      ${rows}
    </div>
    <div class="welcome-section">
      <div class="welcome-section-title">${t.welcomeRecoveryLabel}</div>
      <div class="welcome-recovery-desc">${t.welcomeIntervalDesc}</div>
      <div class="welcome-interval-rows">
        <div class="welcome-interval-row muted">${t.welcomeInterval1}</div>
        <div class="welcome-interval-row half">${t.welcomeInterval2}</div>
        <div class="welcome-interval-row none">${t.welcomeInterval3}</div>
        <div class="welcome-interval-row bonus">${t.welcomeInterval4}</div>
      </div>
      <div class="welcome-forgiveness-note">${t.welcomeForgivenessNote(forgiveDays)}</div>
    </div>
  `;
}

function showWelcome() {
  document.getElementById('welcome-content').innerHTML = renderWelcomeContent();
  showScreen('welcome-screen');
}

function showMain() {
  showScreen('main-screen');
  checkAndAwardDailyPoints();
  render();
  applyBg();
  renderRecommend();
  updateMoonPhaseBar();
}

function showSetup() {
  showScreen('setup-screen');
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById('start-date-input').value = `${yyyy}-${mm}-${dd}`;
  // Show period input for female mode
  const periodSection = document.getElementById('setup-period-section');
  if (periodSection) periodSection.classList.toggle('hidden', gender !== 'female');
  const periodInput = document.getElementById('setup-period-input');
  if (periodInput) periodInput.value = getPeriodStart() || '';
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

  // Sex settings
  document.getElementById('sex-ejac-pct-display').textContent = getSexEjacPct() + '%';
  updateSexNoEjacBtn();
  document.getElementById('sex-limit-display').textContent = getSexWeeklyLimit();
  document.getElementById('forgiveness-days-display').textContent = getForgivenessdays();

  // Hide male-only sex settings for female mode
  const isMale = gender === 'male';
  document.getElementById('sex-ejac-rate-label').style.display = isMale ? '' : 'none';
  document.getElementById('sex-ejac-rate-row').style.display  = isMale ? 'flex' : 'none';

  // Video toggle
  updateVideoToggleBtn();

  // Moon cycle section (female only)
  const moonSection = document.getElementById('moon-cycle-section');
  if (moonSection) moonSection.style.display = isMale ? 'none' : 'block';
  const periodInput = document.getElementById('period-start-input');
  if (periodInput) periodInput.value = getPeriodStart() || '';

  document.getElementById('settings-modal').classList.add('open');
}

function updateSexNoEjacBtn() {
  const btn = document.getElementById('btn-sex-no-ejac-toggle');
  if (!btn) return;
  const t = tr();
  btn.textContent = getSexNoEjacEnabled() ? t.sexNoEjacOn : t.sexNoEjacOff;
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
  // Save period start date if provided (female only)
  const periodVal = document.getElementById('setup-period-input')?.value;
  if (periodVal && gender === 'female') {
    localStorage.setItem('energy_period_start', periodVal);
  }
  if (!localStorage.getItem('energy_welcomed')) {
    showWelcome();
  } else {
    showMain();
  }
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
  _lastRenderedLevel = -1; // レベルアップ誤検知防止
  clearAllData();
  showGenderScreen();
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
  document.getElementById('btn-welcome-start').addEventListener('click', () => {
    localStorage.setItem('energy_welcomed', '1');
    showMain();
  });

  // Level list accordion
  document.getElementById('milestones-label-toggle').addEventListener('click', () => {
    _levelsExpanded = !_levelsExpanded;
    render();
  });

  // Main screen
  document.getElementById('btn-bg-toggle').addEventListener('click', toggleBg);
  document.getElementById('btn-chart-toggle').addEventListener('click', toggleChartView);
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
      // 男性専用設定の表示切り替え
      const isMale = gender === 'male';
      document.getElementById('sex-ejac-rate-label').style.display = isMale ? '' : 'none';
      document.getElementById('sex-ejac-rate-row').style.display  = isMale ? 'flex' : 'none';
      const ms = document.getElementById('moon-cycle-section');
      if (ms) ms.style.display = isMale ? 'none' : 'block';
      updateSettingsModeDisplay();
      if (startDate) { render(); updateMoonPhaseBar(); }
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
  document.getElementById('btn-settings-done').addEventListener('click', closeSettings);

  // Sex ejac rate
  document.getElementById('btn-sex-ejac-minus').addEventListener('click', () => {
    const cur = getSexEjacPct();
    if (cur > 0) { setSexEjacPct(cur - 5); document.getElementById('sex-ejac-pct-display').textContent = getSexEjacPct() + '%'; if (startDate) render(); }
  });
  document.getElementById('btn-sex-ejac-plus').addEventListener('click', () => {
    const cur = getSexEjacPct();
    if (cur < 30) { setSexEjacPct(cur + 5); document.getElementById('sex-ejac-pct-display').textContent = getSexEjacPct() + '%'; if (startDate) render(); }
  });

  // Sex weekly limit
  document.getElementById('btn-sex-limit-minus').addEventListener('click', () => {
    const cur = getSexWeeklyLimit();
    if (cur > 0) { localStorage.setItem('energy_sex_weekly_limit', cur - 1); document.getElementById('sex-limit-display').textContent = cur - 1; }
  });
  document.getElementById('btn-sex-limit-plus').addEventListener('click', () => {
    const cur = getSexWeeklyLimit();
    if (cur < 7) { localStorage.setItem('energy_sex_weekly_limit', cur + 1); document.getElementById('sex-limit-display').textContent = cur + 1; }
  });

  // Forgiveness days
  document.getElementById('btn-forgiveness-minus').addEventListener('click', () => {
    const cur = getForgivenessdays();
    if (cur > 7) { localStorage.setItem('energy_forgiveness_days', cur - 7); document.getElementById('forgiveness-days-display').textContent = cur - 7; }
  });
  document.getElementById('btn-forgiveness-plus').addEventListener('click', () => {
    const cur = getForgivenessdays();
    if (cur < 90) { localStorage.setItem('energy_forgiveness_days', cur + 7); document.getElementById('forgiveness-days-display').textContent = cur + 7; }
  });

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

  // Video toggle
  document.getElementById('btn-video-toggle').addEventListener('click', () => {
    localStorage.setItem('energy_videos_enabled', getVideosEnabled() ? 'false' : 'true');
    updateVideoToggleBtn();
  });

  // Period start date
  const periodInput = document.getElementById('period-start-input');
  if (periodInput) {
    periodInput.addEventListener('change', () => {
      const val = periodInput.value;
      if (val) {
        localStorage.setItem('energy_period_start', val);
        updateMoonPhaseBar();
      }
    });
  }

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

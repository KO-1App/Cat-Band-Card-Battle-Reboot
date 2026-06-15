const CARD_LIBRARY = {
  scratch: { id: "scratch", name: "Scratch", type: "attack", cost: 1, rarity: "common", damage: 6, chorusGain: 5, tags: ["ATTACK"] },
  guardBeat: { id: "guardBeat", name: "Guard Beat", type: "skill", cost: 1, rarity: "common", block: 6, chorusGain: 4, tags: ["DEFENSE", "DRUM"] },
  micStrike: { id: "micStrike", name: "Mic Strike", type: "attack", cost: 1, rarity: "common", damage: 7, chorusGain: 8, tags: ["ATTACK", "VOCAL"] },
  crowdCall: { id: "crowdCall", name: "Crowd Call", type: "skill", cost: 1, rarity: "rare", draw: 1, chorusGain: 18, tags: ["CHORUS", "DRAW", "CROWD"] },
  guitarSlash: { id: "guitarSlash", name: "Guitar Slash", type: "attack", cost: 1, rarity: "common", damage: 4, hits: 2, chorusGain: 5, tags: ["ATTACK", "GUITAR"] },
  fastRiff: { id: "fastRiff", name: "Fast Riff", type: "attack", cost: 2, rarity: "rare", damage: 4, hits: 3, chorusGain: 8, tags: ["ATTACK", "GUITAR"] },
  bassHit: { id: "bassHit", name: "Bass Hit", type: "attack", cost: 1, rarity: "common", damage: 7, chorusGain: 5, tags: ["ATTACK", "BASS"] },
  lowGroove: { id: "lowGroove", name: "Low Groove", type: "skill", cost: 1, rarity: "rare", block: 5, enemyWeak: 2, chorusGain: 6, tags: ["DEFENSE", "DEBUFF", "BASS"] },
  drumHit: { id: "drumHit", name: "Drum Hit", type: "attack", cost: 1, rarity: "common", damage: 8, chorusGain: 4, tags: ["ATTACK", "DRUM"] },
  tempoUp: { id: "tempoUp", name: "Tempo Up", type: "skill", cost: 1, rarity: "rare", draw: 2, energyGain: 1, chorusGain: 6, tags: ["DRAW", "DRUM"] },
  encoreSpark: { id: "encoreSpark", name: "Encore Spark", type: "attack", cost: 1, rarity: "rare", damage: 10, chorusGain: 10, tags: ["ATTACK", "CHORUS", "CROWD"] },
  moshPit: { id: "moshPit", name: "Mosh Pit", type: "attack", cost: 2, rarity: "rare", damage: 16, chorusGain: 10, tags: ["ATTACK", "CROWD"] },
  feedbackNoise: { id: "feedbackNoise", name: "Feedback Noise", type: "attack", cost: 1, rarity: "epic", damage: 5, enemyWeak: 2, chorusGain: 6, tags: ["ATTACK", "DEBUFF", "NOISE"] },
  stageDive: { id: "stageDive", name: "Stage Dive", type: "attack", cost: 2, rarity: "epic", damage: 24, recoil: 4, chorusGain: 12, tags: ["ATTACK", "RISK", "CROWD"] },
  spotlight: { id: "spotlight", name: "Spotlight", type: "skill", cost: 0, rarity: "rare", draw: 1, chorusGain: 8, tags: ["DRAW", "CHORUS"] },
  powerChord: { id: "powerChord", name: "Power Chord", type: "attack", cost: 2, rarity: "epic", damage: 12, block: 8, chorusGain: 8, tags: ["ATTACK", "DEFENSE", "GUITAR"] },
  crowdShield: { id: "crowdShield", name: "Crowd Shield", type: "skill", cost: 1, rarity: "rare", block: 12, chorusGain: 5, tags: ["DEFENSE", "CROWD"] },
  powerNote: { id: "powerNote", name: "Power Note", type: "attack", cost: 1, rarity: "rare", damage: 8, chorusGain: 12, tags: ["ATTACK", "VOCAL", "CHORUS"] },
  encoreCall: { id: "encoreCall", name: "Encore Call", type: "skill", cost: 2, rarity: "epic", draw: 2, energyGain: 1, chorusGain: 22, tags: ["CHORUS", "DRAW", "VOCAL"] },
  shoutBack: { id: "shoutBack", name: "Shout Back", type: "attack", cost: 1, rarity: "common", damage: 5, block: 4, chorusGain: 6, tags: ["ATTACK", "DEFENSE", "VOCAL"] },
  doubleKick: { id: "doubleKick", name: "Double Kick", type: "attack", cost: 1, rarity: "rare", damage: 5, hits: 2, block: 3, chorusGain: 5, tags: ["ATTACK", "DRUM"] },
  drumRoll: { id: "drumRoll", name: "Drum Roll", type: "skill", cost: 1, rarity: "rare", draw: 2, energyGain: 1, chorusGain: 6, tags: ["DRAW", "DRUM"] },
  cymbalGuard: { id: "cymbalGuard", name: "Cymbal Guard", type: "skill", cost: 1, rarity: "common", block: 9, chorusGain: 4, tags: ["DEFENSE", "DRUM"] },
  subwooferPulse: { id: "subwooferPulse", name: "Subwoofer Pulse", type: "attack", cost: 2, rarity: "rare", damage: 12, enemyWeak: 2, chorusGain: 8, tags: ["ATTACK", "DEBUFF", "BASS"] },
  deepGroove: { id: "deepGroove", name: "Deep Groove", type: "skill", cost: 1, rarity: "common", block: 4, enemyWeak: 1, chorusGain: 5, tags: ["DEFENSE", "DEBUFF", "BASS"] },
  staticBurst: { id: "staticBurst", name: "Static Burst", type: "attack", cost: 1, rarity: "rare", damage: 8, enemyWeak: 1, draw: 1, chorusGain: 5, tags: ["ATTACK", "DEBUFF", "DRAW", "NOISE"] },
  whiteNoiseWall: { id: "whiteNoiseWall", name: "White Noise Wall", type: "skill", cost: 1, rarity: "common", block: 7, enemyWeak: 1, chorusGain: 4, tags: ["DEFENSE", "DEBUFF", "NOISE"] },
  riotChorus: { id: "riotChorus", name: "Riot Chorus", type: "attack", cost: 2, rarity: "epic", damage: 14, chorusGain: 18, tags: ["ATTACK", "CHORUS", "CROWD"] },
  setlistShuffle: { id: "setlistShuffle", name: "Setlist Shuffle", type: "skill", cost: 0, rarity: "rare", draw: 1, chorusGain: 5, tags: ["DRAW", "CHORUS"] },
};

const LEADERS = [
  {
    id: "vo",
    name: "ハチワレVo",
    emoji: "🐱🎤",
    trait: "Chorusゲージが溜まりやすい。カードのChorus +3。",
    passiveName: "Chorus Master",
    passiveDescription: "カードで得るChorus +3",
    chorusName: "Crowd Singalong",
    chorusDescription: "敵に20ダメージ / HPを5回復",
    chorusIcon: "🎤",
    chorusTheme: "vocal",
    deck: ["micStrike", "micStrike", "micStrike", "micStrike", "crowdCall", "crowdCall", "guardBeat", "guardBeat", "scratch", "scratch"],
    chorus(state) {
      dealDamage(20);
      healPlayer(5);
      log("Crowd Singalong! 20ダメージ、HPを5回復。");
    },
  },
  {
    id: "gt",
    name: "三毛Gt",
    emoji: "🐈🎸",
    trait: "連撃カードが強い。複数ヒット攻撃の各ヒット +1。",
    passiveName: "Guitar Virtuoso",
    passiveDescription: "複数ヒット攻撃の各ヒット+1",
    chorusName: "Guitar Solo",
    chorusDescription: "8ダメージ×4",
    chorusIcon: "🎸",
    chorusTheme: "guitar",
    deck: ["guitarSlash", "guitarSlash", "guitarSlash", "guitarSlash", "fastRiff", "fastRiff", "guardBeat", "guardBeat", "scratch", "scratch"],
    chorus() {
      for (let i = 0; i < 4; i += 1) dealDamage(8);
      log("Guitar Solo! 8ダメージを4回。");
    },
  },
  {
    id: "ba",
    name: "白猫Ba",
    emoji: "🐾🎵",
    trait: "弱体付与が得意。弱体効果 +1ターン。",
    passiveName: "Deep Resonance",
    passiveDescription: "弱体付与ターン+1",
    chorusName: "Bass Drop",
    chorusDescription: "18ダメージ / 弱体 4",
    chorusIcon: "🎵",
    chorusTheme: "bass",
    deck: ["bassHit", "bassHit", "bassHit", "bassHit", "lowGroove", "lowGroove", "guardBeat", "guardBeat", "scratch", "scratch"],
    chorus() {
      dealDamage(18);
      const weakResult = applyEnemyWeak(4);
      log(`Bass Drop: 18ダメージ / ${weakResult.changed ? `弱体 ${weakResult.value}` : "弱体維持"}`);
    },
  },
  {
    id: "dr",
    name: "茶トラDr",
    emoji: "🐈🥁",
    trait: "防御が得意。ブロックカードのブロック +2。",
    passiveName: "Iron Rhythm",
    passiveDescription: "ブロックカードのブロック+2",
    chorusName: "Drum Break",
    chorusDescription: "ブロック+18 / 2ドロー",
    chorusIcon: "🥁",
    chorusTheme: "drum",
    deck: ["drumHit", "drumHit", "drumHit", "drumHit", "guardBeat", "guardBeat", "guardBeat", "tempoUp", "scratch", "scratch"],
    chorus() {
      gainBlock(18);
      const drawn = drawCards(2);
      log(drawn < 2
        ? "Drum Break! ブロック +18。手札がいっぱいでドローできない。"
        : "Drum Break! ブロック +18、2ドロー。");
    },
  },
];

const ENCOUNTERS = [
  { kind: "normal", enemy: "noiseRat", reward: "card" },
  { kind: "normal", enemy: "angrySpeaker", reward: "card" },
  { kind: "midboss", enemy: "blackoutPhoenix", reward: "relic" },
  { kind: "normal", enemy: "brokenAmp", reward: "card" },
  { kind: "boss", enemy: "neonVoidIdol", reward: "stageClear" },
];

const STAGE_UNLOCK_KEY = "catBandUnlockedStages";
const TOUR_UNLOCK_KEY = "catBandTourModeUnlocked";
const TOUR_STAGE_IDS = ["neon_city", "blackout_warehouse", "abyss_bass_hall"];
const TOUR_MODIFIERS = {
  neon_city: { hp: 1, attack: 1 },
  blackout_warehouse: { hp: 1.15, attack: 1 },
  abyss_bass_hall: { hp: 1.3, attack: 1.15 },
};

const STAGES = [
  {
    id: "neon_city",
    number: 1,
    name: "Neon City",
    description: "まぶしいネオンが輝く、最初のライブ街。",
    unlockRequirement: null,
    boss: "Neon Void Idol",
    bgm: { normal: "neonNormal", elite: "neonNormal", midboss: "neonMiniboss", miniboss: "neonMiniboss", boss: "neonBoss" },
    playable: true,
    battles: ENCOUNTERS,
  },
  {
    id: "blackout_warehouse",
    number: 2,
    name: "Blackout Warehouse",
    description: "照明が落ちる危険な倉庫ライブ会場。",
    unlockRequirement: "neon_city",
    boss: "Warehouse Light Eater",
    bgm: { normal: "blackoutNormal", elite: "blackoutNormal", midboss: "blackoutMiniboss", miniboss: "blackoutMiniboss", boss: "blackoutBoss" },
    playable: true,
    battles: [
      { kind: "normal", enemyPool: ["fuseGremlin", "flickerBat", "cableSerpent"], reward: "card", eliteChance: 0 },
      { kind: "normal", enemyPool: ["fuseGremlin", "flickerBat", "cableSerpent"], reward: "card", eliteChance: 0 },
      { kind: "midboss", enemy: "strobeWraith", reward: "relic" },
      { kind: "elite", enemyPool: ["blackoutBouncer", "feedbackGolem", "cableHydra"], reward: "card" },
      { kind: "boss", enemy: "warehouseLightEater", reward: "stageClear" },
    ],
  },
  {
    id: "abyss_bass_hall",
    number: 3,
    name: "Abyss Bass Hall",
    description: "重低音が物理攻撃になる地下ホール。",
    unlockRequirement: "blackout_warehouse",
    boss: "Soundhole Leviathan",
    bgm: { normal: "abyssNormal", elite: "abyssNormal", midboss: "abyssMiniboss", miniboss: "abyssMiniboss", boss: "abyssBoss" },
    playable: true,
    battles: [
      { kind: "normal", enemyPool: ["subwooferSlime", "tremorMite", "resonanceJellyfish"], reward: "card", eliteChance: 0 },
      { kind: "normal", enemyPool: ["subwooferSlime", "tremorMite", "resonanceJellyfish"], reward: "card", eliteChance: 0 },
      { kind: "midboss", enemy: "deepTremorDjinn", reward: "relic" },
      { kind: "elite", enemyPool: ["bassBruiser", "resonanceMonk", "speakerKraken"], reward: "card" },
      { kind: "boss", enemy: "soundholeLeviathan", reward: "stageClear" },
    ],
  },
];

const ENEMIES = {
  noiseRat: {
    name: "Noise Rat",
    emoji: "🐭",
    enemyType: "normal",
    hp: 35,
    actions: [
      { type: "attack", amount: 6 },
      { type: "attack", amount: 8 },
      { type: "buff", amount: 2 },
      { type: "attack", amount: 10 },
    ],
  },
  angrySpeaker: {
    name: "Angry Speaker",
    emoji: "🔊",
    enemyType: "normal",
    hp: 45,
    actions: [
      { type: "attack", amount: 10 },
      { type: "attackDown", amount: 6, down: 1 },
      { type: "block", amount: 8 },
      { type: "attack", amount: 14 },
    ],
  },
  brokenAmp: {
    name: "Broken Amp",
    emoji: "📻",
    enemyType: "normal",
    hp: 55,
    actions: [
      { type: "attack", amount: 12 },
      { type: "multiAttack", amount: 5, hits: 2 },
      { type: "chorusDown", amount: 10 },
      { type: "attack", amount: 16 },
    ],
  },
  blackoutPhoenix: {
    name: "Blackout Phoenix",
    emoji: "🔥",
    enemyType: "miniboss",
    hp: 85,
    halfBuff: 2,
    gimmick: "blackout",
    actions: [
      { type: "attack", amount: 14 },
      { type: "multiAttack", amount: 8, hits: 2 },
      { type: "block", amount: 12 },
      { type: "chorusDown", amount: 15 },
      { type: "attack", amount: 18 },
    ],
  },
  neonVoidIdol: {
    name: "Neon Void Idol",
    emoji: "🌌",
    enemyType: "boss",
    hp: 120,
    halfBuff: 3,
    gimmick: "void",
    actions: [
      { type: "attack", amount: 16 },
      { type: "multiAttack", amount: 7, hits: 3 },
      { type: "chorusDown", amount: 20 },
      { type: "block", amount: 15 },
      { type: "attack", amount: 22 },
    ],
  },
  crowdCrusher: {
    name: "Crowd Crusher",
    emoji: "⚠️",
    enemyType: "elite",
    hp: 75,
    actions: [
      { type: "attack", amount: 18 },
      { type: "attack", amount: 18 },
      { type: "block", amount: 10 },
      { type: "attack", amount: 24 },
    ],
  },
  feedbackPhantom: {
    name: "Feedback Phantom",
    emoji: "👻",
    enemyType: "elite",
    hp: 70,
    actions: [
      { type: "attackPlayerWeak", amount: 10, weak: 1 },
      { type: "block", amount: 10 },
      { type: "attackPlayerWeak", amount: 14, weak: 1 },
      { type: "attack", amount: 18 },
    ],
  },
  stageSecurity: {
    name: "Stage Security",
    emoji: "🛡️",
    enemyType: "elite",
    hp: 85,
    actions: [
      { type: "block", amount: 12 },
      { type: "attack", amount: 10 },
      { type: "block", amount: 15 },
      { type: "attack", amount: 16 },
    ],
  },
  fuseGremlin: {
    name: "Fuse Gremlin",
    emoji: "⚡",
    enemyType: "normal",
    hp: 55,
    actions: [
      { type: "attack", amount: 9 },
      { type: "chorusDown", amount: 8 },
      { type: "attack", amount: 12 },
      { type: "buff", amount: 2 },
    ],
  },
  flickerBat: {
    name: "Flicker Bat",
    emoji: "🦇",
    enemyType: "normal",
    hp: 48,
    actions: [
      { type: "multiAttack", amount: 4, hits: 3 },
      { type: "playerWeak", weak: 1 },
      { type: "attack", amount: 11 },
      { type: "block", amount: 10 },
    ],
  },
  cableSerpent: {
    name: "Cable Serpent",
    emoji: "〰",
    enemyType: "normal",
    hp: 65,
    actions: [
      { type: "block", amount: 12 },
      { type: "attack", amount: 13 },
      { type: "playerWeak", weak: 1 },
      { type: "attackBlock", amount: 8, block: 8 },
    ],
  },
  blackoutBouncer: {
    name: "Blackout Bouncer",
    emoji: "🕶",
    enemyType: "elite",
    hp: 95,
    actions: [
      { type: "attack", amount: 16 },
      { type: "block", amount: 18 },
      { type: "multiAttack", amount: 10, hits: 2 },
      { type: "playerWeak", weak: 2 },
      { type: "attack", amount: 22 },
    ],
  },
  feedbackGolem: {
    name: "Feedback Golem",
    emoji: "🔊",
    enemyType: "elite",
    hp: 105,
    actions: [
      { type: "attack", amount: 18 },
      { type: "buff", amount: 3 },
      { type: "multiAttack", amount: 12, hits: 2 },
      { type: "block", amount: 20 },
      { type: "attack", amount: 26 },
    ],
  },
  cableHydra: {
    name: "Cable Hydra",
    emoji: "⛓",
    enemyType: "elite",
    hp: 90,
    actions: [
      { type: "multiAttack", amount: 8, hits: 2 },
      { type: "block", amount: 14 },
      { type: "playerWeak", weak: 1 },
      { type: "multiAttack", amount: 6, hits: 3 },
      { type: "attack", amount: 20 },
    ],
  },
  strobeWraith: {
    name: "Strobe Wraith",
    emoji: "🌑",
    enemyType: "miniboss",
    hp: 110,
    gimmick: "flicker",
    actions: [
      { type: "attack", amount: 12 },
      { type: "flickerCard", count: 1 },
      { type: "multiAttack", amount: 6, hits: 3 },
      { type: "chorusDown", amount: 12 },
      { type: "attack", amount: 18 },
    ],
  },
  warehouseLightEater: {
    name: "Warehouse Light Eater",
    emoji: "🌘",
    enemyType: "boss",
    hp: 150,
    gimmick: "lightEater",
    actions: [
      { type: "attack", amount: 16 },
      { type: "block", amount: 18 },
      { type: "lightDrain" },
      { type: "multiAttack", amount: 8, hits: 3 },
      { type: "chorusDown", amount: 20 },
      { type: "attack", amount: 24 },
    ],
  },
  subwooferSlime: {
    name: "Subwoofer Slime",
    emoji: "🔊",
    enemyType: "normal",
    hp: 70,
    actions: [
      { type: "attack", amount: 10 },
      { type: "bassPressure", amount: 1 },
      { type: "multiAttack", amount: 7, hits: 2 },
      { type: "shieldCrushAttack", crush: 6, amount: 10 },
    ],
  },
  tremorMite: {
    name: "Tremor Mite",
    emoji: "🌊",
    enemyType: "normal",
    hp: 58,
    actions: [
      { type: "multiAttack", amount: 5, hits: 3 },
      { type: "playerWeak", weak: 1 },
      { type: "attack", amount: 13 },
      { type: "bassPressure", amount: 1 },
    ],
  },
  resonanceJellyfish: {
    name: "Resonance Jellyfish",
    emoji: "🎐",
    enemyType: "normal",
    hp: 62,
    actions: [
      { type: "attack", amount: 9 },
      { type: "chorusDown", amount: 12 },
      { type: "block", amount: 14 },
      { type: "attack", amount: 15 },
    ],
  },
  bassBruiser: {
    name: "Bass Bruiser",
    emoji: "🥊",
    enemyType: "elite",
    hp: 110,
    actions: [
      { type: "attack", amount: 20 },
      { type: "bassPressure", amount: 1 },
      { type: "multiAttack", amount: 12, hits: 2 },
      { type: "buff", amount: 3 },
      { type: "attack", amount: 22 },
    ],
  },
  resonanceMonk: {
    name: "Resonance Monk",
    emoji: "🛕",
    enemyType: "elite",
    hp: 95,
    actions: [
      { type: "block", amount: 18 },
      { type: "bassPressure", amount: 1 },
      { type: "attack", amount: 16 },
      { type: "chorusDown", amount: 8 },
      { type: "blockBuff", block: 22, buff: 2 },
    ],
  },
  speakerKraken: {
    name: "Speaker Kraken",
    emoji: "🐙",
    enemyType: "elite",
    hp: 95,
    actions: [
      { type: "multiAttack", amount: 6, hits: 4 },
      { type: "shieldCrushAttack", crush: 10, amount: 16 },
      { type: "attack", amount: 18 },
      { type: "bassPressure", amount: 2 },
      { type: "multiAttack", amount: 10, hits: 3 },
    ],
  },
  deepTremorDjinn: {
    name: "Deep Tremor Djinn",
    emoji: "🌊",
    enemyType: "miniboss",
    hp: 125,
    gimmick: "tremorDjinn",
    actions: [
      { type: "attack", amount: 14 },
      { type: "bassPressure", amount: 1 },
      { type: "tremor" },
      { type: "multiAttack", amount: 8, hits: 3 },
      { type: "block", amount: 18 },
      { type: "attack", amount: 22 },
    ],
  },
  soundholeLeviathan: {
    name: "Soundhole Leviathan",
    emoji: "🐋",
    enemyType: "boss",
    hp: 145,
    gimmick: "bassLeviathan",
    actions: [
      { type: "attack", amount: 18 },
      { type: "bassPressureBlock", pressure: 1, block: 15 },
      { type: "multiAttack", amount: 9, hits: 3 },
      { type: "shieldCrushAttack", crush: 12, amount: 18 },
      { type: "bassPressure", amount: 2 },
      { type: "attack", amount: 28 },
    ],
  },
};

const ELITE_ENEMY_IDS = ["crowdCrusher", "feedbackPhantom", "stageSecurity"];
const ELITE_CHANCE = 0.35;

const ENEMY_BANNERS = {
  noiseRat: { src: "assets/enemies/noise-rat-banner.jpg", position: "center 42%" },
  angrySpeaker: { src: "assets/enemies/angry-speaker-banner.jpg", position: "center 44%" },
  brokenAmp: { src: "assets/enemies/broken-amp-banner.jpg", position: "center 42%" },
  blackoutPhoenix: { src: "assets/enemies/blackout-phoenix-banner.jpg", position: "center 38%" },
  neonVoidIdol: { src: "assets/enemies/neon-void-idol-banner.jpg", position: "center 36%" },
  crowdCrusher: { src: "assets/enemies/crowd-crusher-banner.jpg", position: "center 42%" },
  feedbackPhantom: { src: "assets/enemies/feedback-phantom-banner.jpg", position: "center 40%" },
  stageSecurity: { src: "assets/enemies/stage-security-banner.jpg", position: "center 42%" },
  fuseGremlin: { src: "assets/enemies/fuse-gremlin-banner.jpg", position: "center 42%" },
  flickerBat: { src: "assets/enemies/flicker-bat-banner.jpg", position: "center 40%" },
  cableSerpent: { src: "assets/enemies/cable-serpent-banner.jpg", position: "center 45%" },
  blackoutBouncer: { src: "assets/enemies/blackout-bouncer-banner.jpg", position: "center 38%" },
  feedbackGolem: { src: "assets/enemies/feedback-golem-banner.jpg", position: "center 40%" },
  cableHydra: { src: "assets/enemies/cable-hydra-banner.jpg", position: "center 42%" },
  strobeWraith: { src: "assets/enemies/strobe-wraith-banner.jpg", position: "center 38%" },
  warehouseLightEater: { src: "assets/enemies/warehouse-light-eater-banner.jpg", position: "center 36%" },
  subwooferSlime: { src: "assets/enemies/subwoofer-slime-banner.jpg", position: "center 42%" },
  tremorMite: { src: "assets/enemies/tremor-mite-banner.jpg", position: "center 42%" },
  resonanceJellyfish: { src: "assets/enemies/resonance-jellyfish-banner.jpg", position: "center 40%" },
  bassBruiser: { src: "assets/enemies/bass-bruiser-banner.jpg", position: "center 38%" },
  resonanceMonk: { src: "assets/enemies/resonance-monk-banner.jpg", position: "center 40%" },
  speakerKraken: { src: "assets/enemies/speaker-kraken-banner.jpg", position: "center 38%" },
  deepTremorDjinn: { src: "assets/enemies/deep-tremor-djinn-banner.jpg", position: "center 36%" },
  soundholeLeviathan: { src: "assets/enemies/soundhole-leviathan-banner.jpg", position: "center 34%" },
};

const LEADER_BANNERS = {
  vo: { src: "assets/leaders/hachiware-vo-banner.jpg", position: "center 35%" },
  gt: { src: "assets/leaders/mike-gt-banner.jpg", position: "center 38%" },
  ba: { src: "assets/leaders/white-ba-banner.jpg", position: "center 36%" },
  dr: { src: "assets/leaders/chatora-dr-banner.jpg", position: "center 38%" },
};

const RARITIES = {
  common: { label: "COMMON", icon: "⚪", weight: 70 },
  rare: { label: "RARE", icon: "🔵", weight: 25 },
  epic: { label: "EPIC", icon: "🟣", weight: 5 },
};

const REWARD_POOL = Object.keys(CARD_LIBRARY).filter((id) => id !== "scratch");

const RELICS = [
  { id: "tinyAmp", name: "Tiny Amplifier", emoji: "📣", text: "戦闘開始時、Chorus +20。" },
  { id: "stickerGuitar", name: "Sticker Covered Guitar", emoji: "🎸", text: "ATTACKカードのダメージ +1。" },
  { id: "catnipDrink", name: "Catnip Drink", emoji: "🥤", text: "戦闘開始時、HPを5回復。" },
  { id: "brokenMetronome", name: "Broken Metronome", emoji: "⏱️", text: "3ターンごとにChorus +10。" },
  { id: "luckyPick", name: "Lucky Pick", emoji: "🔺", text: "GUITARカードのダメージ +2。" },
  { id: "vintageBassCabinet", name: "Vintage Bass Cabinet", emoji: "🎛️", text: "BASSカード使用時、Chorus +4。" },
  { id: "customMic", name: "Custom Mic", emoji: "🎤", text: "VOCALカードで得るChorus +5。" },
  { id: "heavyDrumPedal", name: "Heavy Drum Pedal", emoji: "🦶", text: "DRUMカードで得るブロック +3。" },
  { id: "crowdBanner", name: "Crowd Banner", emoji: "🚩", text: "CROWDカード使用時、HPを1回復。" },
  { id: "noiseFilter", name: "Noise Filter", emoji: "🎚️", text: "NOISEカードが付与する弱体 +1ターン。" },
  { id: "fangedPickups", name: "Fanged Pickups", emoji: "🦷", text: "ATTACKカードのダメージ +2。" },
  { id: "velvetEarplugs", name: "Velvet Earplugs", emoji: "🟣", text: "DEBUFFカードが付与する弱体 +1ターン。" },
  { id: "harmonyRosette", name: "Harmony Rosette", emoji: "🌸", text: "CHORUSカードで得るChorus +6。" },
  { id: "blueStageJacket", name: "Blue Stage Jacket", emoji: "🧥", text: "DEFENSEカードで得るブロック +3。" },
  { id: "vocalHoney", name: "Vocal Warmup Honey", emoji: "🍯", text: "VOCALカード使用時、HPを1回復。" },
  { id: "feedbackLoop", name: "Guitar Feedback Loop", emoji: "〽️", text: "GUITARカードのダメージ +1、Chorus +2。" },
  { id: "basslineAnchor", name: "Bassline Anchor", emoji: "⚓", text: "BASSカードのブロック +2、弱体 +1ターン。" },
  { id: "drumlineShoes", name: "Drumline Shoes", emoji: "👟", text: "DRUMカードのブロック +2、Chorus +2。" },
  { id: "crowdWristbands", name: "Crowd Wristbands", emoji: "🎟️", text: "CROWDカードで得るChorus +3。" },
  { id: "staticCharm", name: "Static Charm", emoji: "⚡", text: "NOISEカードのダメージ +3、弱体 +1ターン。" },
  { id: "spotlightLens", name: "Spotlight Lens", emoji: "🔦", text: "DRAWカードで得るChorus +5。" },
  { id: "safetyHarness", name: "Safety Harness", emoji: "🪢", text: "RISKカードの反動ダメージ -2。" },
  { id: "pyroPermit", name: "Pyro Permit", emoji: "🔥", text: "RISKカードのダメージ +6、反動 +1。" },
  { id: "tagMixer", name: "Tag Mixer", emoji: "🎚️", text: "タグを2個以上持つカードはChorus +3。" },
  { id: "tripleEncorePatch", name: "Triple Encore Patch", emoji: "🔺", text: "タグを3個以上持つカードはダメージ +3、ブロック +3。" },
];

const SE_PATHS = {
  block: "assets/audio/se/block.mp3",
  card: "assets/audio/se/card.mp3",
  chorus: "assets/audio/se/chorus.mp3",
  hit: "assets/audio/se/hit.mp3",
  tension: "assets/audio/se/tension.mp3",
  victory: "assets/audio/se/victory.mp3",
};

const BGM = {
  normal: "assets/audio/bgm/neon-normal.mp3",
  miniboss: "assets/audio/bgm/neon-miniboss.mp3",
  boss: "assets/audio/bgm/neon-boss.mp3",
  neonNormal: "assets/audio/bgm/neon-normal.mp3",
  neonMiniboss: "assets/audio/bgm/neon-miniboss.mp3",
  neonBoss: "assets/audio/bgm/neon-boss.mp3",
  blackoutNormal: "assets/audio/bgm/blackout-normal.mp3",
  blackoutMiniboss: "assets/audio/bgm/blackout-miniboss.mp3",
  blackoutBoss: "assets/audio/bgm/blackout-boss.mp3",
  abyssNormal: "assets/audio/bgm/abyss-normal.mp3",
  abyssMiniboss: "assets/audio/bgm/abyss-miniboss.mp3",
  abyssBoss: "assets/audio/bgm/abyss-boss.mp3",
};

const BGM_READY = {
  normal: true,
  miniboss: true,
  boss: true,
  neonNormal: true,
  neonMiniboss: true,
  neonBoss: true,
  blackoutNormal: true,
  blackoutMiniboss: true,
  blackoutBoss: true,
  abyssNormal: true,
  abyssMiniboss: true,
  abyssBoss: true,
};

const DEFAULT_AUDIO_SETTINGS = {
  bgmVolume: 30,
  seVolume: 60,
};

const BGM_FADE_MS = 800;

const audioState = {
  unlocked: false,
  sounds: {},
  bgmVolume: DEFAULT_AUDIO_SETTINGS.bgmVolume / 100,
  seVolume: DEFAULT_AUDIO_SETTINGS.seVolume / 100,
  lastSeTestAt: 0,
  bgm: {
    currentType: null,
    currentAudio: null,
    previousAudios: [],
    fading: false,
    fadeId: 0,
    requestedType: null,
    requestedMeta: {},
    retryQueued: false,
  },
};

const chorusEffects = {
  vocal: {
    icon: "🎤",
    readyLabel: "✨ CHORUS READY ✨",
    overlayTitle: "🎤 CHORUS!!",
    className: "chorus-vocal",
  },
  guitar: {
    icon: "🎸",
    readyLabel: "🎸 CHORUS READY",
    overlayTitle: "🎸 CHORUS!!",
    className: "chorus-guitar",
  },
  bass: {
    icon: "🎵",
    readyLabel: "🎵 CHORUS READY",
    overlayTitle: "🎵 CHORUS!!",
    className: "chorus-bass",
  },
  drum: {
    icon: "🥁",
    readyLabel: "🥁 CHORUS READY",
    overlayTitle: "🥁 CHORUS!!",
    className: "chorus-drum",
  },
};

const CHORUS_TENSION_THRESHOLDS = [25, 50, 75, 100];
const MAX_WEAK_TURNS = 4;

const state = {
  leader: null,
  maxHp: 72,
  hp: 72,
  block: 0,
  chorus: 0,
  chorusReadyAnnounced: false,
  chorusTensionMarks: [],
  chorusAnimating: false,
  chorusDamageActive: false,
  pendingChorusDamage: 0,
  maxEnergy: 3,
  energy: 3,
  pendingTremorPenalty: 0,
    playerWeak: 0,
    playerAttackedThisTurn: false,
    blackoutSlots: [],
    pendingBlackout: false,
    pendingHiddenCardCount: 0,
  pendingHiddenCardCount: 0,
  masterDeck: [],
  drawPile: [],
  discardPile: [],
  hand: [],
  exhaustPile: [],
  relics: [],
  enemy: null,
  encounterIndex: 0,
  turn: 1,
  cardsPlayedThisTurn: 0,
  inBattle: false,
  runOver: false,
  pendingVictoryReward: null,
  pendingRewardLog: "",
  selectedRelicId: null,
  gameMode: "stage",
  tourStageIndex: 0,
  tourBattlesWon: 0,
  tourUnlocked: false,
  resultAction: "title",
  stageId: "neon_city",
  unlockedStages: defaultStageUnlocks(),
  lastStageClear: null,
  resultReturnToStageSelect: false,
};

const els = {
  screens: document.querySelectorAll(".screen"),
  startButton: document.querySelector("#startButton"),
  restartButton: document.querySelector("#restartButton"),
  stageList: document.querySelector("#stageList"),
  leaderList: document.querySelector("#leaderList"),
  tourHeader: document.querySelector("#tourHeader"),
  enemyArea: document.querySelector(".enemy-area"),
  enemyBannerImage: document.querySelector("#enemyBannerImage"),
  enemyEmoji: document.querySelector("#enemyEmoji"),
  enemyName: document.querySelector("#enemyName"),
  enemyHpText: document.querySelector("#enemyHpText"),
  enemyHpBar: document.querySelector("#enemyHpBar"),
  enemyIntent: document.querySelector("#enemyIntent"),
  enemyStatus: document.querySelector("#enemyStatus"),
  encounterLabel: document.querySelector("#encounterLabel"),
  playerArea: document.querySelector(".player-area"),
  playerBannerImage: document.querySelector("#playerBannerImage"),
  playerEmoji: document.querySelector("#playerEmoji"),
  playerName: document.querySelector("#playerName"),
  leaderPassiveSummary: document.querySelector("#leaderPassiveSummary"),
  leaderInfoButton: document.querySelector("#leaderInfoButton"),
  leaderInfoPopup: document.querySelector("#leaderInfoPopup"),
  playerHpText: document.querySelector("#playerHpText"),
  blockText: document.querySelector("#blockText"),
  energyText: document.querySelector("#energyText"),
  playerStatus: document.querySelector("#playerStatus"),
  chorusText: document.querySelector("#chorusText"),
  chorusBar: document.querySelector("#chorusBar"),
  chorusButton: document.querySelector("#chorusButton"),
  chorusOverlay: document.querySelector("#chorusOverlay"),
  chorusOverlayTitle: document.querySelector("#chorusOverlayTitle"),
  chorusOverlaySkill: document.querySelector("#chorusOverlaySkill"),
  bgmVolume: document.querySelector("#bgmVolume"),
  bgmVolumeValue: document.querySelector("#bgmVolumeValue"),
  seVolume: document.querySelector("#seVolume"),
  seVolumeValue: document.querySelector("#seVolumeValue"),
  relicStrip: document.querySelector("#relicStrip"),
  relicDetail: document.querySelector("#relicDetail"),
  battleLog: document.querySelector("#battleLog"),
  pileText: document.querySelector("#pileText"),
  hand: document.querySelector("#hand"),
  endTurnButton: null,
  cardRewardList: document.querySelector("#cardRewardList"),
  relicReward: document.querySelector("#relicReward"),
  battleVictoryTitle: document.querySelector("#battleVictoryTitle"),
  battleVictoryText: document.querySelector("#battleVictoryText"),
  battleVictoryButton: document.querySelector("#battleVictoryButton"),
  resultBadge: document.querySelector("#resultBadge"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  resultActions: document.querySelector("#resultActions"),
  runSummary: document.querySelector("#runSummary"),
};

function showScreen(id) {
  els.screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
}

function defaultStageUnlocks() {
  return Object.fromEntries(STAGES.map((stage) => [stage.id, stage.unlockRequirement === null]));
}

function loadStageUnlocks() {
  const defaults = defaultStageUnlocks();
  try {
    const stored = JSON.parse(localStorage.getItem(STAGE_UNLOCK_KEY) || "null");
    if (!stored || typeof stored !== "object") return defaults;
    return { ...defaults, ...stored };
  } catch (error) {
    console.warn("[Stage] unlock data could not be loaded", error);
    return defaults;
  }
}

function saveStageUnlocks() {
  localStorage.setItem(STAGE_UNLOCK_KEY, JSON.stringify(state.unlockedStages));
}

function loadTourUnlock() {
  return localStorage.getItem(TOUR_UNLOCK_KEY) === "true";
}

function saveTourUnlock() {
  localStorage.setItem(TOUR_UNLOCK_KEY, state.tourUnlocked ? "true" : "false");
}

function unlockTourMode() {
  if (state.tourUnlocked) return false;
  state.tourUnlocked = true;
  saveTourUnlock();
  return true;
}

function resetStageUnlocks() {
  state.unlockedStages = defaultStageUnlocks();
  saveStageUnlocks();
  renderStageSelect();
  console.log("[Stage] unlocks reset", state.unlockedStages);
  return state.unlockedStages;
}

function resetTourUnlock() {
  state.tourUnlocked = false;
  saveTourUnlock();
  renderStageSelect();
  console.log("[Tour] unlock reset");
  return state.tourUnlocked;
}

function unlockTourModeForDebug() {
  state.tourUnlocked = true;
  saveTourUnlock();
  renderStageSelect();
  console.log("[Tour] unlocked for debug");
  return state.tourUnlocked;
}

function stageById(id) {
  return STAGES.find((stage) => stage.id === id) || STAGES[0];
}

function currentStage() {
  return stageById(state.stageId);
}

function currentEncounters() {
  return currentStage().battles.length ? currentStage().battles : ENCOUNTERS;
}

function currentTourModifier() {
  if (state.gameMode !== "tour") return { hp: 1, attack: 1 };
  return TOUR_MODIFIERS[currentStage().id] || { hp: 1, attack: 1 };
}

function tourScaledEnemyHp(baseHp) {
  return Math.max(1, Math.round(baseHp * currentTourModifier().hp));
}

function tourScaledEnemyAttack(baseDamage) {
  return Math.max(0, Math.round(baseDamage * currentTourModifier().attack));
}

function isStageUnlocked(stage) {
  return !!state.unlockedStages[stage.id];
}

function nextStageAfter(stageId) {
  const index = STAGES.findIndex((stage) => stage.id === stageId);
  return index >= 0 ? STAGES[index + 1] || null : null;
}

function unlockNextStage(stageId) {
  const nextStage = nextStageAfter(stageId);
  if (!nextStage) return null;
  state.unlockedStages[nextStage.id] = true;
  saveStageUnlocks();
  return nextStage;
}

function renderStageSelect() {
  if (!els.stageList) return;
  const normalStages = STAGES.map((stage) => {
    const unlocked = isStageUnlocked(stage);
    const playable = unlocked && stage.playable;
    const requirement = stage.unlockRequirement ? stageById(stage.unlockRequirement).name : null;
    const status = !unlocked
      ? `未解放${requirement ? ` - ${requirement}クリアで解放` : ""}`
      : stage.playable
        ? "解放済み"
        : "近日追加";
    const action = playable ? "開始" : stage.playable ? "未解放" : "近日追加";
    return `
      <article class="stage-card ${unlocked ? "unlocked" : "locked"} ${stage.playable ? "" : "coming-soon"}">
        <div>
          <p class="eyebrow">ステージ ${stage.number}</p>
          <h3>${stage.name}</h3>
          <p>${stage.description}</p>
          <span class="stage-status">${status}</span>
          <span class="stage-boss">ボス: ${stage.boss}</span>
        </div>
        <button class="primary-button stage-play-button" type="button" data-stage="${stage.id}" ${playable ? "" : "disabled"}>
          ${action}
        </button>
      </article>
    `;
  }).join("");
  const tourStatus = state.tourUnlocked ? "解放済み" : "未解放 - Abyss Bass Hallクリアで解放";
  const tourAction = state.tourUnlocked ? "開始" : "未解放";
  const tourCard = `
    <article class="stage-card tour-card ${state.tourUnlocked ? "unlocked" : "locked"}">
      <div>
        <p class="eyebrow">特殊モード</p>
        <h3>Tour Mode</h3>
        <p>Stage 1〜Stage 3を、デッキ・HP・レリック引き継ぎで連続攻略。</p>
        <span class="stage-status">${tourStatus}</span>
        <span class="stage-boss">全15戦</span>
      </div>
      <button class="primary-button stage-play-button" type="button" data-tour="true" ${state.tourUnlocked ? "" : "disabled"}>
        ${tourAction}
      </button>
    </article>
  `;
  els.stageList.innerHTML = `
    <div class="stage-section">
      <h3 class="stage-section-title">通常ステージ</h3>
      ${normalStages}
    </div>
    <div class="stage-section">
      <h3 class="stage-section-title">特殊モード</h3>
      ${tourCard}
    </div>
  `;
}

function showStageSelect() {
  renderStageSelect();
  showScreen("stageSelectScreen");
}

function initAudio() {
  Object.entries(SE_PATHS).forEach(([key, path]) => {
    const audio = new Audio(path);
    audio.preload = "auto";
    audioState.sounds[key] = audio;
  });
}

function loadAudioSettings() {
  const storedBgm = localStorage.getItem("bgmVolume");
  const storedSe = localStorage.getItem("seVolume");
  const bgm = storedBgm === null ? DEFAULT_AUDIO_SETTINGS.bgmVolume : Number(storedBgm);
  const se = storedSe === null ? DEFAULT_AUDIO_SETTINGS.seVolume : Number(storedSe);
  setBgmVolume(Number.isFinite(bgm) ? bgm : DEFAULT_AUDIO_SETTINGS.bgmVolume, false);
  setSeVolume(Number.isFinite(se) ? se : DEFAULT_AUDIO_SETTINGS.seVolume, false);
}

function clampVolumePercent(value) {
  return Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
}

function setBgmVolume(value, shouldSave = true) {
  const percent = clampVolumePercent(value);
  audioState.bgmVolume = percent / 100;
  if (els.bgmVolume) els.bgmVolume.value = String(percent);
  if (els.bgmVolumeValue) els.bgmVolumeValue.textContent = `${percent}%`;
  if (audioState.bgm.currentAudio) audioState.bgm.currentAudio.volume = audioState.bgmVolume;
  if (shouldSave) localStorage.setItem("bgmVolume", String(percent));
}

function setSeVolume(value, shouldSave = true) {
  const percent = clampVolumePercent(value);
  audioState.seVolume = percent / 100;
  if (els.seVolume) els.seVolume.value = String(percent);
  if (els.seVolumeValue) els.seVolumeValue.textContent = `${percent}%`;
  if (shouldSave) localStorage.setItem("seVolume", String(percent));
}

function setupAudioControls() {
  loadAudioSettings();
  els.bgmVolume?.addEventListener("input", (event) => {
    setBgmVolume(event.target.value);
  });
  els.seVolume?.addEventListener("input", (event) => {
    unlockAudio();
    setSeVolume(event.target.value);
    const now = performance.now();
    if (now - audioState.lastSeTestAt > 180) {
      audioState.lastSeTestAt = now;
      playSe("card", { volumeScale: 0.72 });
    }
  });
}

function unlockAudio() {
  if (audioState.unlocked) return;
  audioState.unlocked = true;
  if (audioState.bgm.requestedType && !audioState.bgm.currentAudio) {
    fadeToBGM(audioState.bgm.requestedType, audioState.bgm.requestedMeta || {});
  }
}

function createBgmAudio(type, volume = audioState.bgmVolume) {
  const path = BGM[type];
  if (!path) return null;
  const audio = new Audio(path);
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = volume;
  audio.addEventListener("error", () => {
    console.warn(`[BGM] load error: ${bgmFileName(type)}`);
    clearCurrentBgmIfAudio(audio);
  });
  audio.addEventListener("pause", () => {
    if (audioState.bgm.currentAudio !== audio || audioState.bgm.fading || state.runOver) return;
    if (audio.ended) return;
    window.setTimeout(() => {
      if (audioState.bgm.currentAudio === audio && audio.paused && audioState.unlocked && !audioState.bgm.fading) {
        resumeCurrentBGM(type, audioState.bgm.requestedMeta || {});
      }
    }, 120);
  });
  return audio;
}

function bgmFileName(type) {
  return (BGM[type] || "").split("/").pop() || type;
}

function bgmDebugLabel(type, meta = {}) {
  const stage = meta.stageId || currentStage()?.id || "-";
  const battleType = meta.battleType || "-";
  return `[BGM] Stage: ${stage} / Type: ${battleType} / Track: ${bgmFileName(type)}`;
}

function rememberRequestedBGM(type, meta = {}) {
  audioState.bgm.requestedType = type;
  audioState.bgm.requestedMeta = { ...meta };
}

function clearCurrentBgmIfAudio(audio) {
  if (audioState.bgm.currentAudio !== audio) return;
  audioState.bgm.currentAudio = null;
  audioState.bgm.currentType = null;
  audioState.bgm.fading = false;
}

function queueBgmRetry(type, meta = {}) {
  rememberRequestedBGM(type, meta);
  if (audioState.bgm.retryQueued) return;
  audioState.bgm.retryQueued = true;
  document.addEventListener("pointerdown", () => {
    audioState.bgm.retryQueued = false;
    const retryType = audioState.bgm.requestedType;
    if (retryType) fadeToBGM(retryType, audioState.bgm.requestedMeta || {});
  }, { once: true });
}

function startBgmAudio(audio, type, meta = {}, options = {}) {
  audioState.bgm.currentType = type;
  audioState.bgm.currentAudio = audio;
  console.log(bgmDebugLabel(type, meta));
  return audio.play().then(() => {
    audioState.bgm.retryQueued = false;
    if (!options.keepVolume) audio.volume = audioState.bgmVolume;
    return audio;
  }).catch((error) => {
    console.warn(`[BGM] ${bgmFileName(type)} could not play`, error);
    clearCurrentBgmIfAudio(audio);
    queueBgmRetry(type, meta);
    return null;
  });
}

function resumeCurrentBGM(type, meta = {}) {
  const audio = audioState.bgm.currentAudio;
  if (!audio) return false;
  audio.loop = true;
  audio.volume = audioState.bgmVolume;
  startBgmAudio(audio, type, meta, { keepVolume: true });
  return true;
}

function playBGM(type, meta = {}) {
  if (!BGM[type]) {
    console.warn(`[BGM] missing track key: ${type}`);
    return;
  }
  rememberRequestedBGM(type, meta);
  if (!audioState.unlocked) {
    queueBgmRetry(type, meta);
    return;
  }
  if (audioState.bgm.currentType === type && audioState.bgm.currentAudio) {
    if (!audioState.bgm.currentAudio.paused && !audioState.bgm.currentAudio.ended) return;
    resumeCurrentBGM(type, meta);
    return;
  }

  stopBGM();
  const audio = createBgmAudio(type);
  if (!audio) return;

  startBgmAudio(audio, type, meta);
}

function cleanupBgmAudios(keepAudio = null) {
  const audios = [audioState.bgm.currentAudio, ...audioState.bgm.previousAudios].filter(Boolean);
  audios.forEach((audio) => {
    if (audio === keepAudio) return;
    audio.pause();
    audio.currentTime = 0;
  });
  audioState.bgm.previousAudios = [];
}

function stopBGM() {
  audioState.bgm.fadeId += 1;
  audioState.bgm.fading = false;
  const audio = audioState.bgm.currentAudio;
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  cleanupBgmAudios();
  audioState.bgm.currentAudio = null;
  audioState.bgm.currentType = null;
}

function fadeToBGM(type, meta = {}) {
  if (!BGM[type]) {
    console.warn(`[BGM] missing track key: ${type}`);
    return;
  }
  rememberRequestedBGM(type, meta);
  if (!audioState.unlocked) {
    queueBgmRetry(type, meta);
    return;
  }
  if (audioState.bgm.currentType === type && audioState.bgm.currentAudio) {
    if (!audioState.bgm.currentAudio.paused && !audioState.bgm.currentAudio.ended && !audioState.bgm.fading) return;
    resumeCurrentBGM(type, meta);
    return;
  }

  const current = audioState.bgm.currentAudio;
  if (!current) {
    playBGM(type, meta);
    return;
  }

  audioState.bgm.fading = true;
  const fadeId = audioState.bgm.fadeId + 1;
  audioState.bgm.fadeId = fadeId;
  const startVolume = current.volume;
  const startedAt = performance.now();
  const fadeOut = (now) => {
    if (fadeId !== audioState.bgm.fadeId) {
      current.pause();
      return;
    }
    const progress = Math.min(1, (now - startedAt) / BGM_FADE_MS);
    current.volume = startVolume * (1 - progress);
    if (progress < 1) {
      requestAnimationFrame(fadeOut);
      return;
    }
    current.pause();
    current.currentTime = 0;
    startBgmFadeIn(type, meta, fadeId);
  };
  requestAnimationFrame(fadeOut);
}

function startBgmFadeIn(type, meta = {}, fadeId = audioState.bgm.fadeId) {
  if (fadeId !== audioState.bgm.fadeId) return;
  cleanupBgmAudios();
  const nextAudio = createBgmAudio(type, 0);
  if (!nextAudio) {
    audioState.bgm.currentAudio = null;
    audioState.bgm.currentType = null;
    audioState.bgm.fading = false;
    return;
  }
  startBgmAudio(nextAudio, type, meta, { keepVolume: true }).then((startedAudio) => {
    if (!startedAudio || fadeId !== audioState.bgm.fadeId || audioState.bgm.currentAudio !== nextAudio) return;
    const startedAt = performance.now();
    const fadeIn = (now) => {
      if (fadeId !== audioState.bgm.fadeId || audioState.bgm.currentAudio !== nextAudio) {
        nextAudio.pause();
        return;
      }
      const progress = Math.min(1, (now - startedAt) / BGM_FADE_MS);
      nextAudio.volume = audioState.bgmVolume * progress;
      if (progress < 1) {
        requestAnimationFrame(fadeIn);
        return;
      }
      nextAudio.volume = audioState.bgmVolume;
      audioState.bgm.fading = false;
    };
    requestAnimationFrame(fadeIn);
  });
}

function bgmRoleForEncounter(encounter) {
  const isFinalBattle = state.encounterIndex === currentEncounters().length - 1;
  if (isFinalBattle || encounter.reward === "stageClear") return "boss";
  if (encounter.kind === "elite") return "normal";
  if (encounter.kind === "midboss") return "miniboss";
  if (encounter.kind === "boss") return "boss";
  return "normal";
}

function bgmTypeForEncounter(encounter) {
  const stageBgm = currentStage().bgm || {};
  const role = bgmRoleForEncounter(encounter);
  if (stageBgm[role]) return stageBgm[role];
  return role;
}

function playEncounterBGM(encounter) {
  const type = bgmTypeForEncounter(encounter);
  const role = bgmRoleForEncounter(encounter);
  console.log(`[BGM] Resolve Stage: ${currentStage().id} / Battle: ${state.encounterIndex + 1} / Type: ${role} / Track: ${bgmFileName(type)}`);
  if (!BGM_READY[type]) {
    console.warn(`[BGM] Stage: ${currentStage().id} / Type: ${role} / Track pending: ${bgmFileName(type)}`);
    const fallbackType = BGM_READY[role] ? role : "normal";
    fadeToBGM(fallbackType, { stageId: currentStage().id, battleType: role, fallbackFor: type });
    return;
  }
  fadeToBGM(type, { stageId: currentStage().id, battleType: role });
}

function debugCurrentBGM() {
  const encounter = currentEncounters()[state.encounterIndex];
  if (!encounter) return null;
  const role = bgmRoleForEncounter(encounter);
  const type = bgmTypeForEncounter(encounter);
  return {
    stage: currentStage().id,
    battle: state.encounterIndex + 1,
    encounterKind: encounter.kind,
    role,
    type,
    file: BGM[type],
    currentType: audioState.bgm.currentType,
    requestedType: audioState.bgm.requestedType,
    paused: audioState.bgm.currentAudio ? audioState.bgm.currentAudio.paused : null,
    ended: audioState.bgm.currentAudio ? audioState.bgm.currentAudio.ended : null,
    readyState: audioState.bgm.currentAudio ? audioState.bgm.currentAudio.readyState : null,
    fading: audioState.bgm.fading,
    retryQueued: audioState.bgm.retryQueued,
  };
}

function playSe(key, options = {}) {
  if (!audioState.unlocked) return;
  const source = audioState.sounds[key];
  if (!source) return;
  const audio = source.cloneNode();
  const baseVolume = key === "tension" ? audioState.seVolume * 0.72 : audioState.seVolume;
  audio.volume = Math.max(0, Math.min(1, baseVolume * (options.volumeScale || 1)));
  audio.play().catch(() => {});
}

function playEffect(type, target, options = {}) {
  const area = target === "enemy" ? els.enemyArea : els.playerArea;
  if (!area) return;

  const existing = area.querySelectorAll(".battle-effect");
  if (existing.length > 5) existing[0].remove();

  const effect = document.createElement("div");
  effect.className = `battle-effect effect-${type}`;
  effect.setAttribute("aria-hidden", "true");
  if (options.amount) effect.dataset.amount = options.amount;
  if (options.label) effect.dataset.label = options.label;
  area.classList.add(`fx-${type}`);

  if (type === "damage" || type === "chorusHit") {
    effect.innerHTML = `
      <span>${type === "chorusHit" ? "CHORUS!" : options.label || "HIT"}</span>
      <strong>${options.amount || ""}</strong>
    `;
  }

  const cleanup = () => {
    effect.remove();
    if (!area.querySelector(`.effect-${type}`)) area.classList.remove(`fx-${type}`);
  };
  effect.addEventListener("animationend", cleanup, { once: true });
  area.appendChild(effect);
  window.setTimeout(cleanup, options.duration || 620);
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function card(id) {
  return CARD_LIBRARY[id];
}

function rarityInfo(rarity) {
  return RARITIES[rarity] || RARITIES.common;
}

function rarityBadge(cardData) {
  const info = rarityInfo(cardData.rarity);
  return `<span class="rarity-badge rarity-${cardData.rarity}">${info.icon} ${info.label}</span>`;
}

function pickRewardRarity() {
  const entries = Object.entries(RARITIES);
  const total = entries.reduce((sum, [, rarity]) => sum + rarity.weight, 0);
  let roll = Math.random() * total;
  for (const [key, rarity] of entries) {
    roll -= rarity.weight;
    if (roll <= 0) return key;
  }
  return entries[0][0];
}

function pickRewardCards(count) {
  const choices = [];
  while (choices.length < count) {
    const rarity = pickRewardRarity();
    let pool = REWARD_POOL.filter((id) => card(id).rarity === rarity && !choices.includes(id));
    if (!pool.length) pool = REWARD_POOL.filter((id) => !choices.includes(id));
    if (!pool.length) break;
    choices.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return choices;
}

function hasTag(cardData, tag) {
  return Boolean(cardData?.tags?.includes(tag));
}

function hasAnyTag(cardData, tags) {
  return tags.some((tag) => hasTag(cardData, tag));
}

function countTags(cardData, tags) {
  return tags.filter((tag) => hasTag(cardData, tag)).length;
}

function describeCard(c) {
  const parts = [];
  const hits = c.hits || 1;
  if (c.damage) parts.push(hits > 1 ? c.damage + "ダメージ×" + hits : c.damage + "ダメージ");
  if (c.block) parts.push("ブロック +" + c.block);
  if (c.heal) parts.push("HP +" + c.heal);
  if (c.draw) parts.push(c.draw + "ドロー");
  if (c.energyGain) parts.push("Energy +" + c.energyGain);
  if (c.enemyWeak) parts.push("弱体 " + c.enemyWeak);
  if (c.recoil) parts.push("反動 " + c.recoil);
  if (c.chorusGain) parts.push("Chorus +" + c.chorusGain);
  return parts.join(" / ");
}



function calculateCardDamage(c, context = {}) {
  const hits = c.hits || 1;
  if (!c.damage) {
    return {
      damagePerHit: 0,
      hits,
      totalDamage: 0,
      modifiers: [],
    };
  }
  let damagePerHit = c.damage + (context.bonusDamage || 0);
  const modifiers = [...(context.modifiers || [])];
  if (state.leader?.id === "gt" && hits > 1) {
    damagePerHit += 1;
    modifiers.push("Guitar Virtuoso +1");
  }
  if ((state.playerWeak || 0) > 0 && !context.ignorePlayerWeak) {
    const beforeWeak = damagePerHit;
    damagePerHit = Math.max(0, Math.floor(damagePerHit * 0.75));
    modifiers.push(`自分の弱体 ${beforeWeak}→${damagePerHit}`);
  }
  return {
    damagePerHit,
    hits,
    totalDamage: damagePerHit * hits,
    modifiers,
  };
}

function formatCardDamage(c, damageInfo, actualDamage) {
  if (!c.damage) return describeCard(c);
  const hitText = damageInfo.hits > 1
    ? damageInfo.damagePerHit + "ダメージ ×" + damageInfo.hits
    : damageInfo.damagePerHit + "ダメージ";
  const parts = [hitText];
  if (actualDamage !== undefined && actualDamage !== damageInfo.totalDamage) parts.push("実ダメージ " + actualDamage);
  return parts.join(" / ");
}



function renderLeaders() {
  els.leaderList.innerHTML = LEADERS.map((leader) => `
    <button class="leader-card" type="button" data-leader="${leader.id}">
      <span class="leader-icon">${leader.emoji}</span>
      <span>
        <strong>${leader.name}</strong>
        <p>${leader.trait}</p>
        <span class="tag-row">
          <span class="tag">Chorus: ${leader.chorusName}</span>
        </span>
      </span>
    </button>
  `).join("");
}

function resetRun(options = {}) {
  const keepMode = !!options.keepMode;
  const mode = state.gameMode;
  const tourStageIndex = state.tourStageIndex;
  const stageId = state.stageId;
  Object.assign(state, {
    leader: null,
    maxHp: 72,
    hp: 72,
    block: 0,
    chorus: 0,
    chorusReadyAnnounced: false,
    chorusTensionMarks: [],
    chorusAnimating: false,
    chorusDamageActive: false,
    pendingChorusDamage: 0,
    maxEnergy: 3,
    energy: 3,
    pendingTremorPenalty: 0,
    masterDeck: [],
    drawPile: [],
    discardPile: [],
    hand: [],
    exhaustPile: [],
    relics: [],
    enemy: null,
    encounterIndex: 0,
    turn: 1,
    cardsPlayedThisTurn: 0,
    inBattle: false,
    runOver: false,
    pendingVictoryReward: null,
    pendingRewardLog: "",
    selectedRelicId: null,
    gameMode: keepMode ? mode : "stage",
    tourStageIndex: keepMode ? tourStageIndex : 0,
    tourBattlesWon: 0,
    resultAction: "title",
    stageId: keepMode ? stageId : "neon_city",
    lastStageClear: null,
    resultReturnToStageSelect: false,
  });
}

function chooseLeader(id) {
  const leader = LEADERS.find((item) => item.id === id);
  resetRun({ keepMode: true });
  state.leader = leader;
  state.masterDeck = [...leader.deck];
  applyDebugDeck();
  applyDebugRelics();
  startEncounter();
}

function applyDebugDeck() {
  const params = new URLSearchParams(window.location.search);
  const debugDeck = params.get("debugDeck");
  if (!debugDeck) return;
  const deck = debugDeck
    .split(",")
    .map((id) => id.trim())
    .filter((id) => CARD_LIBRARY[id]);
  if (deck.length) state.masterDeck = deck;
}

function applyDebugRelics() {
  const params = new URLSearchParams(window.location.search);
  const debugRelics = params.get("debugRelics");
  if (!debugRelics) return;
  debugRelics.split(",").forEach((id) => {
    const relic = RELICS.find((item) => item.id === id.trim());
    if (relic && !hasRelic(relic.id)) state.relics.push(relic);
  });
}

function debugEnemyId() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("debugEnemy");
  return ENEMIES[id] ? id : null;
}

function pickEnemyForEncounter(encounter) {
  const forced = debugEnemyId();
  if (forced) return forced;
  if (encounter.enemyPool?.length) {
    return encounter.enemyPool[Math.floor(Math.random() * encounter.enemyPool.length)];
  }
  if (encounter.kind === "elite") {
    return encounter.enemy || ELITE_ENEMY_IDS[Math.floor(Math.random() * ELITE_ENEMY_IDS.length)];
  }
  const eliteChance = encounter.eliteChance ?? ELITE_CHANCE;
  if (encounter.kind === "normal" && Math.random() < eliteChance) {
    return ELITE_ENEMY_IDS[Math.floor(Math.random() * ELITE_ENEMY_IDS.length)];
  }
  return encounter.enemy;
}

function startEncounter() {
  const encounter = currentEncounters()[state.encounterIndex];
  const enemyId = pickEnemyForEncounter(encounter);
  const enemyData = ENEMIES[enemyId];
  const scaledHp = tourScaledEnemyHp(enemyData.hp);
  state.enemy = {
    ...enemyData,
    id: enemyId,
    maxHp: scaledHp,
    hp: scaledHp,
    block: 0,
    weak: 0,
    actionIndex: 0,
    bonusAttack: 0,
    halfTriggered: false,
    blackoutCounter: 0,
    blackoutActive: false,
    flickerCounter: 0,
    lightDrainCounter: 0,
    lightDrainJustUsed: false,
    nextAttackBonus: 0,
    phase2Triggered: false,
    voidCounter: 0,
    voidPressure: 0,
    voidShieldTriggered: false,
    bassPressure: 0,
    warningBassCrush: false,
    tremorCounter: 0,
    bassHalfCounter: 0,
  };
  state.block = 0;
  state.energy = state.maxEnergy;
  state.playerWeak = 0;
  state.playerAttackedThisTurn = false;
  state.blackoutSlots = [];
  state.pendingBlackout = false;
  state.pendingHiddenCardCount = 0;
  state.pendingTremorPenalty = 0;
  state.skipEnemyActionThisTurn = false;
  state.turn = 1;
  state.cardsPlayedThisTurn = 0;
  state.drawPile = shuffle(state.masterDeck);
  state.discardPile = [];
  state.hand = [];
  state.inBattle = true;
  state.chorusReadyAnnounced = false;
  state.chorusTensionMarks = [];
  state.chorusAnimating = false;
  state.chorusDamageActive = false;
  state.pendingChorusDamage = 0;

  if (hasRelic("catnipDrink")) healPlayer(5, false);
  if (hasRelic("tinyAmp")) gainChorus(20, false);

  showScreen("battleScreen");
  hideLeaderInfoPopup();
  if (state.enemy.enemyType === "elite") showEliteIntro();
  playEncounterBGM(encounter);
  const battleMessage = state.gameMode === "tour"
    ? `TOUR Stage ${state.tourStageIndex + 1}/3 Battle ${state.encounterIndex + 1}/5: ${state.enemy.name}`
    : `Battle ${state.encounterIndex + 1}: ${state.enemy.name}`;
  const rewardMessage = state.pendingRewardLog;
  state.pendingRewardLog = "";
  startPlayerTurn(rewardMessage ? `${rewardMessage} / ${battleMessage}` : battleMessage);
}

function startPlayerTurn(message) {
  state.block = 0;
  state.energy = state.maxEnergy;
  state.cardsPlayedThisTurn = 0;
  state.playerAttackedThisTurn = false;
  state.hand = Array(5).fill(null);
  drawCards(5);
  const tremorMessage = applyPendingTremorPenalty();
  const hiddenCards = applyPendingBlackout();
  if (hiddenCards > 0) {
    message = `${message || ""}${message ? " / " : ""}A card was hidden by Flicker!`;
  }
  if (tremorMessage) {
    message = `${message || ""}${message ? " / " : ""}${tremorMessage}`;
  }
  if (hasRelic("brokenMetronome") && state.turn % 3 === 0) gainChorus(10, false);
  log(message || `Turn ${state.turn} 開始。`);
  maybeAnnounceChorusReady();
  renderBattle();
}

function ensureHandSlots() {
  const current = Array.isArray(state.hand) ? state.hand : [];
  state.hand = Array.from({ length: 5 }, (_, index) => current[index] || null);
}

function drawCards(count) {
  ensureHandSlots();
  let drawn = 0;
  for (let i = 0; i < count; i += 1) {
    const slot = state.hand.findIndex((id) => id === null);
    if (slot === -1) return drawn;
    if (state.drawPile.length === 0) {
      if (state.discardPile.length === 0) return drawn;
      state.drawPile = shuffle(state.discardPile);
      state.discardPile = [];
    }
    state.hand[slot] = state.drawPile.shift();
    drawn += 1;
  }
  return drawn;
}

function gainEnergy(amount) {
  const before = state.energy;
  state.energy = Math.min(state.maxEnergy, state.energy + amount);
  if (state.energy > before) bump(els.energyText);
  return state.energy - before;
}

function applyPendingTremorPenalty() {
  if (!state.pendingTremorPenalty) return "";
  const before = state.energy;
  state.energy = Math.max(1, state.energy - state.pendingTremorPenalty);
  state.pendingTremorPenalty = 0;
  if (state.energy < before) {
    bump(els.energyText);
    playBossEffect("tremor", "TREMOR");
    return "Deep Tremor Djinnがステージを揺らした！ Energy -1";
  }
  return "";
}

function playCard(index) {
  if (!state.inBattle || state.chorusAnimating || !state.hand[index]) return;
  const id = state.hand[index];
  const c = card(id);
  if (state.energy < c.cost) {
    log("Energyが足りない。");
    bump(els.energyText);
    return;
  }

  state.energy -= c.cost;
  playSe("card");
  state.hand[index] = null;
  state.discardPile.push(id);
  state.cardsPlayedThisTurn += 1;

  let bonusChorus = 0;
  let bonusDamage = 0;
  let bonusBlock = 0;
  let bonusEnemyWeak = 0;
  let extraEnemyWeak = 0;
  let bonusRecoil = 0;
  const relicLogs = [];
  const damageModifiers = [];

  if (state.leader.id === "vo") bonusChorus += 3;
  if (hasRelic("customMic") && hasTag(c, "VOCAL")) {
    bonusChorus += 5;
    relicLogs.push("Custom Mic: VOCAL Chorus +5");
  }
  if (hasRelic("vintageBassCabinet") && hasTag(c, "BASS")) {
    bonusChorus += 4;
    relicLogs.push("Vintage Bass Cabinet: Chorus +4");
  }
  if (hasRelic("luckyPick") && hasTag(c, "GUITAR")) {
    bonusDamage += 2;
    damageModifiers.push("Lucky Pick +2");
    relicLogs.push("Lucky Pick: GUITAR ダメージ +2");
  }
  if (hasRelic("stickerGuitar") && hasTag(c, "ATTACK")) {
    bonusDamage += 1;
    damageModifiers.push("Sticker Guitar +1");
    relicLogs.push("Sticker Covered Guitar: ATTACK ダメージ +1");
  }
  if (hasRelic("heavyDrumPedal") && hasTag(c, "DRUM")) {
    bonusBlock += 3;
    relicLogs.push("Heavy Drum Pedal: DRUM ブロック +3");
  }
  if (hasRelic("noiseFilter") && hasTag(c, "NOISE") && c.enemyWeak) {
    bonusEnemyWeak += 1;
    relicLogs.push("Noise Filter: NOISE 弱体 +1ターン");
  }
  if (hasRelic("crowdBanner") && hasTag(c, "CROWD")) {
    healPlayer(1, false);
    relicLogs.push("Crowd Banner: HP +1");
  }
  if (hasRelic("fangedPickups") && hasTag(c, "ATTACK")) {
    bonusDamage += 2;
    damageModifiers.push("Fanged Pickups +2");
    relicLogs.push("Fanged Pickups: ATTACK ダメージ +2");
  }
  if (hasRelic("velvetEarplugs") && hasTag(c, "DEBUFF")) {
    bonusEnemyWeak += 1;
    relicLogs.push("Velvet Earplugs: DEBUFF 弱体 +1ターン");
  }
  if (hasRelic("harmonyRosette") && hasTag(c, "CHORUS")) {
    bonusChorus += 6;
    relicLogs.push("Harmony Rosette: CHORUS +6");
  }
  if (hasRelic("blueStageJacket") && hasTag(c, "DEFENSE")) {
    bonusBlock += 3;
    relicLogs.push("Blue Stage Jacket: DEFENSE ブロック +3");
  }
  if (hasRelic("vocalHoney") && hasTag(c, "VOCAL")) {
    healPlayer(1, false);
    relicLogs.push("Vocal Honey: HP +1");
  }
  if (hasRelic("feedbackLoop") && hasTag(c, "GUITAR")) {
    bonusDamage += 1;
    bonusChorus += 2;
    damageModifiers.push("Feedback Loop +1");
    relicLogs.push("Feedback Loop: GUITAR ダメージ +1 / Chorus +2");
  }
  if (hasRelic("basslineAnchor") && hasTag(c, "BASS")) {
    bonusBlock += 2;
    extraEnemyWeak += 1;
    relicLogs.push("Bassline Anchor: ブロック +2 / 弱体 +1ターン");
  }
  if (hasRelic("drumlineShoes") && hasTag(c, "DRUM")) {
    bonusBlock += 2;
    bonusChorus += 2;
    relicLogs.push("Drumline Shoes: DRUM ブロック +2 / Chorus +2");
  }
  if (hasRelic("crowdWristbands") && hasTag(c, "CROWD")) {
    bonusChorus += 3;
    relicLogs.push("Crowd Wristbands: CROWD Chorus +3");
  }
  if (hasRelic("staticCharm") && hasTag(c, "NOISE")) {
    bonusDamage += 3;
    bonusEnemyWeak += 1;
    damageModifiers.push("Static Charm +3");
    relicLogs.push("Static Charm: NOISE ダメージ +3 / 弱体 +1ターン");
  }
  if (hasRelic("spotlightLens") && hasTag(c, "DRAW")) {
    bonusChorus += 5;
    relicLogs.push("Spotlight Lens: DRAW Chorus +5");
  }
  if (hasRelic("safetyHarness") && hasTag(c, "RISK")) {
    bonusRecoil -= 2;
    relicLogs.push("Safety Harness: recoil -2");
  }
  if (hasRelic("pyroPermit") && hasTag(c, "RISK")) {
    bonusDamage += 6;
    bonusRecoil += 1;
    damageModifiers.push("Pyro Permit +6");
    relicLogs.push("Pyro Permit: RISK ダメージ +6 / 反動 +1");
  }
  if (hasRelic("tagMixer") && (c.tags?.length || 0) >= 2) {
    bonusChorus += 3;
    relicLogs.push("Tag Mixer: 2+ tags Chorus +3");
  }
  if (hasRelic("tripleEncorePatch") && (c.tags?.length || 0) >= 3) {
    bonusDamage += 3;
    bonusBlock += 3;
    damageModifiers.push("Triple Encore Patch +3");
    relicLogs.push("Triple Encore Patch: 3+ tags ダメージ +3 / ブロック +3");
  }

  let actualCardDamage = 0;
  let damageInfo = calculateCardDamage(c, { bonusDamage, modifiers: damageModifiers });
  if (c.damage) {
    playEffect("attack", "enemy", { duration: 360 });
    for (let i = 0; i < damageInfo.hits; i += 1) {
      actualCardDamage += dealDamage(damageInfo.damagePerHit, { final: true });
    }
    state.playerAttackedThisTurn = true;
  }
  if (c.block || bonusBlock) gainBlock((c.block || 0) + (state.leader.id === "dr" && c.block ? 2 : 0) + bonusBlock);
  if (c.heal) healPlayer(c.heal);
  const totalEnemyWeak = (c.enemyWeak || 0)
    + ((c.enemyWeak || extraEnemyWeak || bonusEnemyWeak) && state.leader.id === "ba" ? 1 : 0)
    + bonusEnemyWeak
    + extraEnemyWeak;
  if (totalEnemyWeak) {
    const weakResult = applyEnemyWeak(totalEnemyWeak);
    relicLogs.push(weakResult.changed ? `弱体 ${weakResult.value}` : "弱体維持");
  }
  if (c.recoil) loseHp(Math.max(0, c.recoil + bonusRecoil));
  if (c.draw) {
    const drawn = drawCards(c.draw);
    if (drawn > 0) relicLogs.push(`${drawn}ドロー`);
    if (drawn < c.draw) relicLogs.push("手札がいっぱいでドローできない");
  }
  if (c.energyGain) {
    const gained = gainEnergy(c.energyGain);
    relicLogs.push(gained > 0 ? `Energy +${gained}` : "Energyは最大");
  }
  if (c.chorusGain) gainChorus(c.chorusGain + bonusChorus);

  const cardLog = c.damage
    ? formatCardDamage(c, damageInfo, actualCardDamage)
    : describeCard(c);
  log([`${c.name}: ${cardLog}`, ...damageInfo.modifiers.slice(-2), ...relicLogs.slice(-2)].join(" / "));
  maybeAnnounceChorusReady();
  checkEnemyThreshold();
  if (state.enemy.hp <= 0) {
    winBattle();
  } else {
    renderBattle();
  }
}

function endTurn() {
  if (!state.inBattle || state.chorusAnimating) return;
  ensureHandSlots();
  state.discardPile.push(...state.hand.filter(Boolean));
  state.hand = [];
  state.blackoutSlots = [];
  const voidMessage = handleVoidPressureOnEndTurn();
  const bassMessage = handleBassPressureOnEndTurn();
  if (state.hp <= 0) {
    loseRun();
    return;
  }
  tickPlayerWeak();
  const actionMessage = state.skipEnemyActionThisTurn ? "" : enemyAct();
  state.skipEnemyActionThisTurn = false;
  const enemyMessage = [voidMessage, bassMessage, actionMessage].filter(Boolean).join(" / ");
  if (state.hp <= 0) {
    loseRun();
    return;
  }
  state.turn += 1;
  startPlayerTurn(`${enemyMessage} / ターン ${state.turn} 開始。`);
}

function enemyAct() {
  const action = currentEnemyAction();
  const name = state.enemy.name;
  let message = "";
  let didAttack = false;

  if (action.type === "attack") {
    const attackInfo = enemyAttackInfo(action.amount);
    const result = takeAttack(attackInfo.finalDamage);
    didAttack = true;
    message = formatIncomingDamageLog(name, attackInfo, result);
  }
  if (action.type === "attackPlayerWeak") {
    const attackInfo = enemyAttackInfo(action.amount);
    const result = takeAttack(attackInfo.finalDamage);
    const weakResult = applyPlayerWeak(action.weak);
    didAttack = true;
    message = `${formatIncomingDamageLog(name, attackInfo, result)} / 自分に弱体 ${weakResult.changed ? weakResult.value : "維持"}`;
  }
  if (action.type === "multiAttack") {
    const attackInfo = enemyAttackInfo(action.amount);
    let totalBlocked = 0;
    let totalDamage = 0;
    for (let i = 0; i < action.hits; i += 1) {
      const result = takeAttack(attackInfo.finalDamage);
      totalBlocked += result.blocked;
      totalDamage += result.damage;
    }
    didAttack = true;
    message = `${name}: ${attackInfo.weakApplied ? `${attackInfo.strengthDamage}→${attackInfo.finalDamage}` : attackInfo.finalDamage} ×${action.hits} / ブロック ${totalBlocked} / ${totalDamage}ダメージ`;
  }
  if (action.type === "buff") {
    state.enemy.bonusAttack += action.amount;
    message = `${name}の音圧が上がった。攻撃 +${action.amount}。`;
  }
  if (action.type === "block") {
    state.enemy.block += action.amount;
    playSe("block");
    playEffect("block", "enemy", { amount: action.amount, duration: 360 });
    message = `${name}: ブロック +${action.amount}`;
  }
  if (action.type === "playerWeak") {
    const weakResult = applyPlayerWeak(action.weak);
    message = `${name}: 自分に${weakResult.changed ? `弱体 ${weakResult.value}` : "弱体維持"}`;
  }
  if (action.type === "attackBlock") {
    const attackInfo = enemyAttackInfo(action.amount);
    const result = takeAttack(attackInfo.finalDamage);
    state.enemy.block += action.block;
    playSe("block");
    playEffect("block", "enemy", { amount: action.block, duration: 360 });
    didAttack = true;
    message = `${formatIncomingDamageLog(name, attackInfo, result)} / ブロック ${action.block}`;
  }
  if (action.type === "shieldCrushAttack") {
    const crushLog = applyShieldCrush(action.crush);
    const attackInfo = enemyAttackInfo(action.amount);
    const result = takeAttack(attackInfo.finalDamage);
    didAttack = true;
    message = `${crushLog} / ${formatIncomingDamageLog(name, attackInfo, result)}`;
  }
  if (action.type === "bassPressure") {
    message = addBassPressure(action.amount || 1, `${name}: Bass Pressure +${action.amount || 1}`);
  }
  if (action.type === "bassPressureBlock") {
    const pressureLog = addBassPressure(action.pressure || 1, `${name}: Bass Pressure +${action.pressure || 1}`);
    state.enemy.block += action.block || 0;
    playSe("block");
    playEffect("block", "enemy", { amount: action.block || 0, duration: 420 });
    message = `${pressureLog} / ${name}: ブロック +${action.block || 0}`;
  }
  if (action.type === "blockBuff") {
    state.enemy.block += action.block || 0;
    state.enemy.bonusAttack += action.buff || 0;
    playSe("block");
    playEffect("block", "enemy", { amount: action.block || 0, duration: 420 });
    message = `${name}: ブロック +${action.block || 0} / 攻撃 +${action.buff || 0}`;
  }
  if (action.type === "tremor") {
    state.pendingTremorPenalty = Math.max(state.pendingTremorPenalty || 0, 1);
    playBossEffect("tremor", "TREMOR");
    message = "Deep Tremor Djinnがステージを揺らした！ 次のターンEnergy -1";
  }
  if (action.type === "flickerCard") {
    queueHiddenCards(action.count || 1);
    playBossEffect("blackout", "FLICKER");
    message = `${name}が照明をゆがませた！`;
  }
  if (action.type === "lightDrain") {
    state.chorus = Math.max(0, state.chorus - 15);
    state.enemy.block += 15;
    state.enemy.nextAttackBonus = (state.enemy.nextAttackBonus || 0) + 2;
    state.enemy.lightDrainCounter = 0;
    state.enemy.lightDrainJustUsed = true;
    playBossEffect("blackout", "LIGHT DRAIN");
    playSe("block");
    playEffect("block", "enemy", { amount: 15, duration: 420 });
    message = "Warehouse Light Eaterがステージライトを吸収した！";
  }
  if (action.type === "attackDown") {
    const attackInfo = enemyAttackInfo(action.amount);
    const result = takeAttack(attackInfo.finalDamage);
    weakenPlayer(action.down);
    didAttack = true;
    message = formatIncomingDamageLog(name, attackInfo, result);
  }
  if (action.type === "chorusDown") {
    state.chorus = Math.max(0, state.chorus - action.amount);
    message = `${name}がChorusを${action.amount}下げた。`;
  }

  if (didAttack) tickEnemyWeak();
  if (didAttack) state.enemy.nextAttackBonus = 0;
  state.enemy.actionIndex = (state.enemy.actionIndex + 1) % state.enemy.actions.length;
  const gimmickMessage = handleEnemyTurnGimmicks();
  return [message, gimmickMessage].filter(Boolean).join(" / ");
}

function handleEnemyTurnGimmicks() {
  if (!state.enemy) return "";
  if (state.enemy.gimmick === "blackout") return handleBlackoutPhoenixTurn();
  if (state.enemy.gimmick === "flicker") return handleStrobeWraithTurn();
  if (state.enemy.gimmick === "lightEater") return handleWarehouseLightEaterTurn();
  if (state.enemy.gimmick === "bassLeviathan") return handleSoundholeLeviathanTurn();
  return "";
}

function handleBlackoutPhoenixTurn() {
  state.enemy.blackoutCounter = (state.enemy.blackoutCounter || 0) + 1;
  if (state.enemy.blackoutCounter < 3) return "";
  state.enemy.blackoutCounter = 0;
  state.enemy.blackoutActive = true;
  state.pendingBlackout = true;
  queueHiddenCards(2);
  playBossEffect("blackout");
  return "Blackout Phoenix used Blackout!";
}

function handleStrobeWraithTurn() {
  state.enemy.flickerCounter = (state.enemy.flickerCounter || 0) + 1;
  if (state.enemy.flickerCounter < 3) return "";
  state.enemy.flickerCounter = 0;
  queueHiddenCards(1);
  playBossEffect("blackout", "FLICKER");
  return "Strobe Wraithが照明をゆがませた！";
}

function handleWarehouseLightEaterTurn() {
  if (state.enemy.lightDrainJustUsed) {
    state.enemy.lightDrainJustUsed = false;
    return "";
  }
  state.enemy.lightDrainCounter = (state.enemy.lightDrainCounter || 0) + 1;
  if (state.enemy.lightDrainCounter < 3) return "";
  state.enemy.lightDrainCounter = 0;
  state.chorus = Math.max(0, state.chorus - 15);
  state.enemy.block += 15;
  state.enemy.nextAttackBonus = (state.enemy.nextAttackBonus || 0) + 2;
  playBossEffect("blackout", "LIGHT DRAIN");
  playSe("block");
  playEffect("block", "enemy", { amount: 15, duration: 420 });
  return "Warehouse Light Eaterがステージライトを吸収した！";
}

function handleSoundholeLeviathanTurn() {
  if (!state.enemy.phase2Triggered) return "";
  state.enemy.bassHalfCounter = (state.enemy.bassHalfCounter || 0) + 1;
  if (state.enemy.bassHalfCounter < 2) return "";
  state.enemy.bassHalfCounter = 0;
  return addBassPressure(1, "Bass Pressure +1: Abyss Resonance");
}

function applyShieldCrush(amount) {
  const before = state.block;
  const crushed = Math.min(before, amount || 0);
  state.block = Math.max(0, state.block - (amount || 0));
  if (crushed > 0) {
    playSe("block");
    playEffect("damage", "player", { amount: crushed, label: "CRUSH", duration: 420 });
    bump(els.blockText);
  }
  return `Shield Crush! ブロック -${crushed}`;
}

function addBassPressure(amount, message = "Bass Pressure +1") {
  if (!state.enemy) return message;
  state.enemy.bassPressure = Math.min(6, (state.enemy.bassPressure || 0) + (amount || 0));
  playEffect("debuff", "enemy", { amount: state.enemy.bassPressure, label: "BASS", duration: 420 });
  if (state.enemy.gimmick === "bassLeviathan" && state.enemy.bassPressure >= 6) {
    state.enemy.warningBassCrush = true;
    playBossEffect("bassCrush", "WARNING");
    return `${message} / 警告！Bass Crush接近！`;
  }
  return message;
}

function reduceBassPressure(amount) {
  if (state.enemy?.gimmick !== "bassLeviathan") return "";
  const before = state.enemy.bassPressure || 0;
  state.enemy.bassPressure = Math.max(0, before - amount);
  if (before === state.enemy.bassPressure) return "";
  playEffect("heal", "player", { amount: before - state.enemy.bassPressure, label: "BASS", duration: 420 });
  if (state.enemy.warningBassCrush && state.enemy.bassPressure < 6) {
    state.enemy.warningBassCrush = false;
    return "ChorusがBass Pressureを押し返した！ / Bass Crushを阻止！";
  }
  return "ChorusがBass Pressureを押し返した！";
}

function triggerBassCrush() {
  state.enemy.bassPressure = 1;
  state.enemy.warningBassCrush = false;
  state.skipEnemyActionThisTurn = true;
  const shattered = state.block;
  state.block = 0;
  loseHp(12, false);
  playSe("hit");
  playBossEffect("bassCrush", "BASS CRUSH");
  playEffect("damage", "player", { amount: 12, label: "BASS CRUSH", duration: 620 });
  bump(els.blockText);
  return `Soundhole LeviathanがBass Crushを放った！ ブロック破壊 ${shattered} / 12ダメージ / Leviathanは低音圧に集中している...`;
}

function queueHiddenCards(count) {
  state.pendingHiddenCardCount = Math.max(state.pendingHiddenCardCount || 0, count);
  state.pendingBlackout = true;
}

function hideRandomHandCards(count) {
  ensureHandSlots();
  const filledSlots = state.hand
    .map((id, index) => (id ? index : null))
    .filter((index) => index !== null);
  state.blackoutSlots = shuffle(filledSlots).slice(0, count);
  return state.blackoutSlots.length;
}

function applyPendingBlackout() {
  state.blackoutSlots = [];
  if (!state.pendingBlackout && !state.pendingHiddenCardCount) return 0;
  const count = state.pendingHiddenCardCount || 2;
  state.pendingBlackout = false;
  state.pendingHiddenCardCount = 0;
  state.enemy.blackoutActive = false;
  return hideRandomHandCards(count);
}

function handleVoidPressureOnEndTurn() {
  if (state.enemy?.gimmick !== "void") return "";
  if (state.chorus < 80) return "";
  return addVoidPressure("High Chorus");
}

function handleBassPressureOnEndTurn() {
  if (state.enemy?.gimmick !== "bassLeviathan") return "";
  if (state.enemy.warningBassCrush) return triggerBassCrush();
  return addBassPressure(1, "Bass Pressure +1: turn end");
}

function addVoidPressure(reason) {
  if (state.enemy?.gimmick !== "void") return "";
  state.enemy.voidPressure = Math.min(3, (state.enemy.voidPressure || 0) + 1);
  playEffect("debuff", "enemy", { amount: state.enemy.voidPressure, label: "Void", duration: 420 });
  if (state.enemy.voidPressure < 3) {
    return `Void Pressure +1: ${reason}`;
  }
  const burstLog = triggerVoidBurst();
  return `Void Pressure +1: ${reason} / ${burstLog}`;
}

function triggerVoidBurst() {
  state.enemy.voidPressure = 0;
  const chorusBefore = state.chorus;
  state.chorus = Math.max(0, state.chorus - 30);
  if (state.chorus < 100) state.chorusReadyAnnounced = false;
  if (chorusBefore > state.chorus) state.chorusTensionMarks = [];
  playBossEffect("voidBurst");
  loseHp(10, false);
  playSe("hit");
  playEffect("damage", "player", { amount: 10, duration: 520 });
  bump(els.chorusText);
  return "Neon Void IdolがVoid Burstを放った！ 10ダメージ / Chorus -30";
}

function triggerVoidShield() {
  if (state.enemy?.gimmick !== "void" || state.enemy.voidShieldTriggered) return false;
  state.enemy.voidShieldTriggered = true;
  state.enemy.block += 25;
  state.chorus = Math.max(0, state.chorus - 20);
  state.chorusReadyAnnounced = state.chorus >= 100 && state.chorusReadyAnnounced;
  playBossEffect("voidShield");
  playEffect("block", "enemy", { amount: 25, duration: 520 });
  return true;
}

function playBossEffect(type, label) {
  const effect = document.createElement("div");
  effect.className = `boss-gimmick-effect ${type}`;
  if (type === "blackout") effect.textContent = label || "BLACKOUT";
  if (type === "voidBurst") effect.textContent = "VOID BURST";
  if (type === "voidShield") effect.textContent = "VOID SHIELD";
  if (type === "tremor") effect.textContent = label || "TREMOR";
  if (type === "bassCrush") effect.textContent = label || "BASS CRUSH";
  document.body.classList.toggle("boss-gimmick-shake", ["voidBurst", "tremor", "bassCrush"].includes(type));
  document.body.appendChild(effect);
  window.setTimeout(() => {
    effect.remove();
    document.body.classList.remove("boss-gimmick-shake");
  }, type === "blackout" ? 620 : 760);
}

function currentEnemyAction() {
  return state.enemy.actions[state.enemy.actionIndex];
}

function enemyAttackAmount(baseDamage) {
  const scaledBase = tourScaledEnemyAttack(baseDamage);
  const strengthDamage = Math.max(0, scaledBase + (state.enemy?.bonusAttack || 0) + (state.enemy?.nextAttackBonus || 0));
  if ((state.enemy?.weak || 0) <= 0) return strengthDamage;
  return Math.max(0, Math.floor(strengthDamage * 0.75));
}

function enemyAttackInfo(baseDamage) {
  const scaledBase = tourScaledEnemyAttack(baseDamage);
  const strengthDamage = Math.max(0, scaledBase + (state.enemy?.bonusAttack || 0) + (state.enemy?.nextAttackBonus || 0));
  const finalDamage = (state.enemy?.weak || 0) > 0
    ? Math.max(0, Math.floor(strengthDamage * 0.75))
    : strengthDamage;
  return {
    baseDamage,
    scaledBase,
    strengthDamage,
    finalDamage,
    weakApplied: finalDamage !== strengthDamage,
  };
}

function formatIncomingDamageLog(name, attackInfo, result) {
  const attackText = attackInfo.weakApplied
    ? `${attackInfo.strengthDamage}→${attackInfo.finalDamage}`
    : `${attackInfo.finalDamage}`;
  return `${name}: ${attackText} / ブロック ${result.blocked} / ${result.damage}ダメージ`;
}

function playerAttackAmount(baseDamage) {
  if ((state.playerWeak || 0) <= 0) return baseDamage;
  return Math.max(0, Math.floor(baseDamage * 0.75));
}

function tickEnemyWeak() {
  if ((state.enemy?.weak || 0) <= 0) return;
  state.enemy.weak = Math.max(0, state.enemy.weak - 1);
}

function tickPlayerWeak() {
  if (!state.playerAttackedThisTurn || (state.playerWeak || 0) <= 0) return;
  state.playerWeak = Math.max(0, state.playerWeak - 1);
}

function intentText() {
  const a = currentEnemyAction();
  const weakNote = (state.enemy?.weak || 0) > 0 ? "（弱体中）" : "";
  if (a.type === "attack") return "⚔️ 攻撃 " + enemyAttackAmount(a.amount) + weakNote;
  if (a.type === "attackPlayerWeak") return "⚔️ 攻撃 " + enemyAttackAmount(a.amount) + " / 💀 弱体 " + a.weak + weakNote;
  if (a.type === "multiAttack") return "⚔️ 攻撃 " + enemyAttackAmount(a.amount) + " ×" + a.hits + weakNote;
  if (a.type === "buff") return "⚡ 攻撃アップ +" + a.amount;
  if (a.type === "block") return "🛡️ ブロック " + a.amount;
  if (a.type === "attackDown") return "⚔️ 攻撃 " + enemyAttackAmount(a.amount) + " / 💀 妨害" + weakNote;
  if (a.type === "chorusDown") return "📉 Chorus -" + a.amount;
  if (a.type === "bassPressure") return "🔊 Bass Pressure +" + (a.amount || 1);
  if (a.type === "bassPressureBlock") return "🔊 Bass Pressure +" + (a.pressure || 1) + " / 🛡️ ブロック " + (a.block || 0);
  if (a.type === "shieldCrushAttack") return "🛡️ Shield Crush -" + (a.crush || 0) + " / ⚔️ 攻撃 " + enemyAttackAmount(a.amount) + weakNote;
  if (a.type === "blockBuff") return "🛡️ ブロック " + (a.block || 0) + " / ⚡ 攻撃アップ +" + (a.buff || 0);
  if (a.type === "tremor") return "🌊 Tremor";
  return "行動不明";
}



function bossIntentNote() {
  if (!state.enemy) return "";
  if (state.enemy.gimmick === "flicker") {
    const turns = 3 - (state.enemy.flickerCounter || 0);
    if (turns <= 1) return "🌑 Flicker間近";
  }
  if (state.enemy.gimmick === "lightEater") {
    const action = currentEnemyAction();
    if (action.type === "lightDrain") return "🌑 Light Drain";
    if (3 - (state.enemy.lightDrainCounter || 0) <= 1) return "🌑 Light Drain間近";
    if ((state.enemy.nextAttackBonus || 0) > 0) return "⚡ 次の攻撃 +" + state.enemy.nextAttackBonus;
  }
  if (state.enemy.gimmick === "blackout") {
    const turns = 3 - (state.enemy.blackoutCounter || 0);
    if (turns <= 1) return "🌑 Blackout間近";
  }
  if (state.enemy.gimmick === "void" && (state.enemy.voidPressure || 0) > 0) return "🟣 Void Pressure " + state.enemy.voidPressure + "/3";
  if (state.enemy.gimmick === "tremorDjinn") {
    const turns = Math.max(1, ((2 - state.enemy.actionIndex + state.enemy.actions.length) % state.enemy.actions.length) + 1);
    return "🌊 次のTremor: " + turns;
  }
  if (state.enemy.gimmick === "bassLeviathan") {
    if (state.enemy.warningBassCrush) return "⚠ Bass Crush接近";
    return "🔊 Bass Pressure " + (state.enemy.bassPressure || 0) + "/6";
  }
  return "";
}


function stageAwareIntentText() {
  const a = currentEnemyAction();
  const weakNote = (state.enemy?.weak || 0) > 0 ? "（弱体中）" : "";
  if (a.type === "playerWeak") return "💀 弱体 " + a.weak;
  if (a.type === "attackBlock") return "⚔️ 攻撃 " + enemyAttackAmount(a.amount) + " / 🛡 ブロック " + a.block + weakNote;
  if (a.type === "flickerCard") return "🌑 手札を隠す";
  if (a.type === "lightDrain") return "🌑 Light Drain";
  return intentText();
}



function bossStatusBadges() {
  if (!state.enemy) return [];
  if (state.enemy.gimmick === "flicker") {
    const turns = 3 - (state.enemy.flickerCounter || 0);
    return ['<span class="status-chip status-boss">🌑 次のFlicker: ' + turns + '</span>'];
  }
  if (state.enemy.gimmick === "lightEater") {
    const turns = 3 - (state.enemy.lightDrainCounter || 0);
    const chips = ['<span class="status-chip status-boss">🌑 Light Drain: ' + turns + '</span>'];
    if ((state.enemy.nextAttackBonus || 0) > 0) chips.push('<span class="status-chip status-attack-up">⚡ 次の攻撃 +' + state.enemy.nextAttackBonus + '</span>');
    if (state.enemy.phase2Triggered) chips.push('<span class="status-chip status-boss-danger">Total Blackout使用済み</span>');
    return chips;
  }
  if (state.enemy.gimmick === "blackout") {
    const turns = 3 - (state.enemy.blackoutCounter || 0);
    return ['<span class="status-chip status-boss">🌑 次のBlackout: ' + turns + '</span>'];
  }
  if (state.enemy.gimmick === "void") {
    const pressure = state.enemy.voidPressure || 0;
    return ['<span class="status-chip status-boss ' + (pressure >= 2 ? 'status-boss-danger' : '') + '">🟣 Void Pressure ' + pressure + '/3</span>'];
  }
  if (state.enemy.gimmick === "tremorDjinn") {
    const turns = Math.max(1, ((2 - state.enemy.actionIndex + state.enemy.actions.length) % state.enemy.actions.length) + 1);
    const chips = ['<span class="status-chip status-boss">🌊 次のTremor: ' + turns + '</span>'];
    if ((state.enemy.bassPressure || 0) > 0) chips.push('<span class="status-chip status-boss">🔊 Bass Pressure ' + state.enemy.bassPressure + '/6</span>');
    return chips;
  }
  if (state.enemy.gimmick === "bassLeviathan") {
    const pressure = state.enemy.bassPressure || 0;
    const chips = ['<span class="status-chip status-boss ' + (pressure >= 5 ? 'status-boss-danger' : '') + '">🔊 Bass Pressure ' + pressure + '/6</span>'];
    if (state.enemy.phase2Triggered) chips.push('<span class="status-chip status-boss-danger">Abyss Resonance</span>');
    return chips;
  }
  if ((state.enemy.bassPressure || 0) > 0) return ['<span class="status-chip status-boss">🔊 Bass Pressure ' + state.enemy.bassPressure + '/6</span>'];
  return [];
}


function renderStatusBadges(entity) {
  if (entity === "enemy") {
    const bonusAttack = state.enemy?.bonusAttack || 0;
    return [
      state.enemy?.block > 0 ? '<span class="status-chip status-block">🛡 ブロック ' + state.enemy.block + '</span>' : "",
      state.enemy?.weak > 0 ? '<span class="status-chip status-weak">💀 弱体 ' + state.enemy.weak + '</span>' : "",
      bonusAttack > 0 ? '<span class="status-chip status-attack-up">⚡ 攻撃 +' + bonusAttack + '</span>' : "",
      bonusAttack < 0 ? '<span class="status-chip status-attack-down">📉 攻撃 ' + bonusAttack + '</span>' : "",
      state.enemy?.warningBassCrush ? '<span class="status-chip status-boss-danger">⚠ Bass Crush接近</span>' : "",
      ...bossStatusBadges(),
    ].filter(Boolean).join("");
  }
  if (entity === "player") {
    const playerBonusAttack = state.playerBonusAttack || 0;
    return [
      state.playerWeak > 0 ? '<span class="status-chip status-weak">💀 自分の弱体 ' + state.playerWeak + '</span>' : "",
      playerBonusAttack > 0 ? '<span class="status-chip status-attack-up">⚡ 攻撃 +' + playerBonusAttack + '</span>' : "",
      playerBonusAttack < 0 ? '<span class="status-chip status-attack-down">📉 攻撃 ' + playerBonusAttack + '</span>' : "",
    ].filter(Boolean).join("");
  }
  return "";
}


function dealDamage(amount, options = {}) {
  const finalAmount = options.final || state.chorusDamageActive ? amount : playerAttackAmount(amount);
  if (finalAmount < amount) playEffect("debuff", "player", { amount: state.playerWeak, label: "Weak", duration: 420 });
  amount = finalAmount;
  const blocked = Math.min(state.enemy.block, amount);
  state.enemy.block -= blocked;
  const damage = amount - blocked;
  state.enemy.hp = Math.max(0, state.enemy.hp - damage);
  if (blocked > 0) {
    playSe("block");
    playEffect("block", "enemy", { amount: blocked, duration: 360 });
  }
  if (damage > 0) playSe("hit");
  if (damage > 0 && state.chorusDamageActive) {
    state.pendingChorusDamage += damage;
    playEffect("chorusHit", "enemy", { amount: damage, duration: 620 });
  } else if (damage > 0) {
    playEffect("damage", "enemy", { amount: damage, duration: 500 });
  }
  bump(els.enemyHpText);
  return damage;
}

function showChorusDamagePopup(amount) {
  if (!amount || !els.enemyArea) return;
  const pop = document.createElement("div");
  pop.className = "damage-pop chorus-damage-pop";
  pop.innerHTML = `<span>CHORUS!</span><strong>${amount}</strong>`;
  els.enemyArea.appendChild(pop);
  window.setTimeout(() => pop.remove(), 720);
}

function takeAttack(amount) {
  const blocked = Math.min(state.block, amount);
  state.block -= blocked;
  const damage = amount - blocked;
  if (blocked > 0) {
    playSe("block");
    playEffect("block", "player", { amount: blocked, duration: 360 });
  }
  if (damage > 0) {
    playSe("hit");
    playEffect("damage", "player", { amount: damage, duration: 500 });
  }
  loseHp(damage, false);
  bump(els.blockText);
  return { blocked, damage };
}

function loseHp(amount, shouldRender = true) {
  state.hp = Math.max(0, state.hp - amount);
  if (amount > 0 && shouldRender) {
    playSe("hit");
    playEffect("damage", "player", { amount, duration: 500 });
  }
  bump(els.playerHpText);
  if (shouldRender && state.hp <= 0) loseRun();
}

function healPlayer(amount, shouldLog = true) {
  const before = state.hp;
  state.hp = Math.min(state.maxHp, state.hp + amount);
  const healed = state.hp - before;
  if (healed > 0) playEffect("heal", "player", { amount: healed, duration: 520 });
  if (shouldLog && state.hp > before) log(`HPを${state.hp - before}回復。`);
}

function gainBlock(amount) {
  if (amount <= 0) return;
  state.block += amount;
  playSe("block");
  playEffect("block", "player", { amount, duration: 360 });
  bump(els.blockText);
}

function gainChorus(amount, shouldRender = true) {
  const before = state.chorus;
  state.chorus = Math.min(100, state.chorus + amount);
  maybePlayTensionAtThreshold(before, state.chorus);
  if (shouldRender) bump(els.chorusText);
}

function maybePlayTensionAtThreshold(before, after) {
  if (!state.inBattle || after <= before) return;
  const crossed = CHORUS_TENSION_THRESHOLDS.find((threshold) => (
    before < threshold
    && after >= threshold
    && !state.chorusTensionMarks.includes(threshold)
  ));
  if (!crossed) return;
  state.chorusTensionMarks.push(crossed);
  playSe("tension");
}

function chorusMeta() {
  const theme = state.leader?.chorusTheme || "vocal";
  const effect = chorusEffects[theme] || chorusEffects.vocal;
  return {
    icon: effect.icon || state.leader?.chorusIcon || "🎵",
    name: state.leader?.chorusName || "Chorus",
    theme,
    effect,
  };
}

function maybeAnnounceChorusReady() {
  if (!state.inBattle || state.chorus < 100 || state.chorusReadyAnnounced) return;
  const meta = chorusMeta();
  state.chorusReadyAnnounced = true;
  log(`${meta.icon} ${meta.name} Ready!`);
}

function startChorusPerformance(meta) {
  els.chorusOverlay.className = `chorus-overlay active ${meta.effect.className}`;
  els.chorusOverlay.setAttribute("aria-hidden", "false");
  els.chorusOverlayTitle.textContent = meta.effect.overlayTitle;
  els.chorusOverlaySkill.textContent = `${meta.name}!`;
  document.body.classList.remove("chorus-screen-flash", "chorus-shake");
  void els.chorusOverlay.offsetWidth;
  document.body.classList.add("chorus-screen-flash", "chorus-shake");
  els.chorusButton.classList.remove("chorus-fired");
  void els.chorusButton.offsetWidth;
  els.chorusButton.classList.add("chorus-fired");
}

function stopChorusPerformance() {
  window.setTimeout(() => {
    els.chorusOverlay.className = "chorus-overlay";
    els.chorusOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("chorus-screen-flash");
    document.body.classList.remove("chorus-shake");
    els.chorusButton.classList.remove("chorus-fired");
  }, 260);
}

function weakenEnemy(amount) {
  state.enemy.bonusAttack -= amount;
  playEffect("debuff", "enemy", { amount, duration: 520 });
}

function applyEnemyWeak(turns) {
  const current = Math.max(0, state.enemy.weak || 0);
  const next = Math.min(MAX_WEAK_TURNS, Math.max(current, turns || 0));
  state.enemy.weak = next;
  if (next > current) {
    playEffect("debuff", "enemy", { amount: next, label: "Weak", duration: 520 });
  }
  return { value: next, changed: next > current };
}

function applyPlayerWeak(turns) {
  const current = Math.max(0, state.playerWeak || 0);
  const next = Math.min(MAX_WEAK_TURNS, Math.max(current, turns || 0));
  state.playerWeak = next;
  if (next > current) {
    playEffect("debuff", "player", { amount: next, label: "Weak", duration: 520 });
  }
  return { value: next, changed: next > current };
}

function weakenPlayer(amount) {
  state.discardPile.push("scratch");
  log(`テンポが乱れた。Scratchが捨て札に混ざった。`);
}

function showEliteIntro() {
  const intro = document.createElement("div");
  intro.className = "elite-intro";
  intro.textContent = "⚠ ELITE ENEMY ⚠";
  document.body.appendChild(intro);
  window.setTimeout(() => intro.remove(), 900);
}

async function useChorus() {
  if (!state.inBattle || state.chorus < 100 || state.chorusAnimating) return;
  const meta = chorusMeta();
  state.chorusAnimating = true;
  state.pendingChorusDamage = 0;
  playSe("chorus");
  startChorusPerformance(meta);
  state.chorus = 0;
  state.chorusReadyAnnounced = false;
  state.chorusTensionMarks = [];
  renderBattle();
  await wait(560);
  state.chorusDamageActive = true;
  const logBeforeChorus = els.battleLog.textContent;
  state.leader.chorus(state);
  const chorusEffectLog = els.battleLog.textContent !== logBeforeChorus ? els.battleLog.textContent : "";
  state.chorusDamageActive = false;
  showChorusDamagePopup(state.pendingChorusDamage);
  checkEnemyThreshold();
  if (state.enemy.hp <= 0) {
    log(chorusEffectLog ? `${meta.icon} ${meta.name}! / ${chorusEffectLog}` : `${meta.icon} ${meta.name}!`);
    await wait(180);
    stopChorusPerformance();
    state.chorusAnimating = false;
    winBattle();
    return;
  }
  const bassLog = reduceBassPressure(2);
  const voidLog = addVoidPressure("Chorus used");
  log([chorusEffectLog ? `${meta.icon} ${meta.name}! / ${chorusEffectLog}` : `${meta.icon} ${meta.name}!`, bassLog, voidLog].filter(Boolean).join(" / "));
  if (state.hp <= 0) {
    await wait(180);
    stopChorusPerformance();
    state.chorusAnimating = false;
    loseRun();
    return;
  }
  state.chorusAnimating = false;
  renderBattle();
  stopChorusPerformance();
}

function checkEnemyThreshold() {
  if (state.enemy?.gimmick === "tremorDjinn" && !state.enemy.phase2Triggered && state.enemy.hp > 0 && state.enemy.hp <= state.enemy.maxHp / 2) {
    triggerDeepTremor();
  }
  if (state.enemy?.gimmick === "bassLeviathan" && !state.enemy.phase2Triggered && state.enemy.hp > 0 && state.enemy.hp <= state.enemy.maxHp / 2) {
    triggerAbyssResonance();
  }
  if (state.enemy?.gimmick === "lightEater" && !state.enemy.phase2Triggered && state.enemy.hp > 0 && state.enemy.hp <= state.enemy.maxHp / 2) {
    triggerTotalBlackout();
  }
  if (!state.enemy.halfBuff || state.enemy.halfTriggered) return;
  if (state.enemy.hp > 0 && state.enemy.hp <= state.enemy.maxHp / 2) {
    state.enemy.halfTriggered = true;
    state.enemy.bonusAttack += state.enemy.halfBuff;
    const shielded = triggerVoidShield();
    log(`${state.enemy.name}が本気になった。攻撃 +${state.enemy.halfBuff}。${shielded ? " / Neon Void Idol activated Void Shield!" : ""}`);
  }
}

function triggerTotalBlackout() {
  state.enemy.phase2Triggered = true;
  state.enemy.block += 25;
  hideRandomHandCards(2);
  playBossEffect("blackout", "TOTAL BLACKOUT");
  playEffect("block", "enemy", { amount: 25, duration: 520 });
  log("Total Blackout!");
}

function triggerDeepTremor() {
  state.enemy.phase2Triggered = true;
  const pressureLog = addBassPressure(2, "Bass Pressure +2");
  const crushLog = applyShieldCrush(10);
  playBossEffect("tremor", "DEEP TREMOR");
  log(`Deep Tremor! The floor shakes under the bass! / ${pressureLog} / ${crushLog}`);
}

function triggerAbyssResonance() {
  state.enemy.phase2Triggered = true;
  state.enemy.bonusAttack += 2;
  const pressureLog = addBassPressure(2, "Bass Pressure +2");
  playBossEffect("bassCrush", "ABYSS RESONANCE");
  log(`Abyss Resonance! ホールが重低音で崩れ始めた！ / 攻撃 +2 / ${pressureLog}`);
}

function winBattle() {
  state.inBattle = false;
  ensureHandSlots();
  state.discardPile.push(...state.hand.filter(Boolean));
  state.hand = [];
  const encounter = currentEncounters()[state.encounterIndex];
  state.pendingVictoryReward = encounter.reward;
  showBattleVictory(encounter);
}

function showBattleVictory(encounter) {
  playSe("victory");
  const isBoss = encounter.reward === "stageClear" || encounter.reward === "win";
  els.battleVictoryTitle.textContent = isBoss ? "ファイナルライブ成功！" : "ライブ成功！";
  els.battleVictoryText.textContent = isBoss
    ? `${state.enemy.name}を倒した！タップしてリザルトへ。`
    : `${state.enemy.name}を倒した！タップして報酬へ。`;
  showScreen("battleVictoryScreen");
}

function continueAfterBattleVictory() {
  const reward = state.pendingVictoryReward;
  state.pendingVictoryReward = null;
  const encounter = currentEncounters()[state.encounterIndex];
  if (!reward) return;
  if (encounter.reward === "stageClear" || encounter.reward === "win") {
    completeStage();
    return;
  }
  healPlayer(8, false);
  if (reward === "relic") {
    showRelicReward();
    return;
  }
  showCardRewards();
}

function completeStage() {
  const clearedStage = currentStage();
  state.unlockedStages[clearedStage.id] = true;
  saveStageUnlocks();
  const tourUnlockedNow = clearedStage.id === "abyss_bass_hall" ? unlockTourMode() : false;
  if (state.gameMode === "tour") {
    completeTourStage(clearedStage);
    return;
  }
  const nextStage = unlockNextStage(clearedStage.id);
  state.lastStageClear = {
    clearedStage,
    nextStage,
    nextStagePlayable: !!nextStage?.playable,
    tourUnlockedNow,
  };
  state.resultReturnToStageSelect = true;
  showStageClearResult();
}

function stageClearHealBonus() {
  const amount = Math.round(state.maxHp * 0.2);
  const before = state.hp;
  state.hp = Math.min(state.maxHp, state.hp + amount);
  return state.hp - before;
}

function completeTourStage(clearedStage) {
  state.tourBattlesWon += currentEncounters().length;
  const isFinalTourStage = state.tourStageIndex >= TOUR_STAGE_IDS.length - 1;
  if (isFinalTourStage) {
    showTourClearResult();
    return;
  }
  const healAmount = stageClearHealBonus();
  state.tourStageIndex += 1;
  const nextStage = stageById(TOUR_STAGE_IDS[state.tourStageIndex]);
  state.lastStageClear = { clearedStage, nextStage, healAmount };
  state.resultAction = "tourNext";
  showTourStageClearResult();
}

function showStageClearResult() {
  const clearedStage = state.lastStageClear?.clearedStage || currentStage();
  const nextStage = state.lastStageClear?.nextStage || null;
  showScreen("resultScreen");
  state.runOver = true;
  els.resultBadge.textContent = "ステージクリア";
  els.resultTitle.textContent = "ステージクリア！";
  els.restartButton.textContent = "ステージ選択へ";
  state.resultAction = "stageSelect";
  renderResultActions([]);
  const unlockText = nextStage
    ? nextStage.playable
      ? `新ステージ解放: ${nextStage.name}`
      : `${nextStage.name}: 近日追加`
    : state.lastStageClear?.tourUnlockedNow
      ? "Tour Mode解放！"
      : "続きは近日追加。";
  els.resultText.textContent = `${clearedStage.name} クリア！ ${unlockText}`;
  els.runSummary.innerHTML = [
    `リーダー: ${state.leader?.name || "-"}`,
    `デッキ: ${state.masterDeck.length}`,
    `レリック: ${state.relics.map((r) => r.name).join(", ") || "なし"}`,
    `ステージ: ${clearedStage.name}`,
    `バトル: ${currentEncounters().length} / ${currentEncounters().length}`,
  ].map((text) => `<span>${text}</span>`).join("");
}

function showTourStageClearResult() {
  const clearedStage = state.lastStageClear?.clearedStage || currentStage();
  const nextStage = state.lastStageClear?.nextStage || null;
  showScreen("resultScreen");
  state.runOver = true;
  els.resultBadge.textContent = "Tour Mode";
  els.resultTitle.textContent = "ステージクリア！";
  els.restartButton.textContent = nextStage ? `次へ: ${nextStage.name}` : "続ける";
  els.resultText.textContent = `${clearedStage.name} クリア！ ステージクリアボーナス: HP +${state.lastStageClear?.healAmount || 0}`;
  els.runSummary.innerHTML = [
    `TOUR MODE`,
    `ステージ: ${state.tourStageIndex} / ${TOUR_STAGE_IDS.length}`,
    `次: ${nextStage?.name || "-"}`,
    `HP: ${state.hp} / ${state.maxHp}`,
    `デッキ: ${state.masterDeck.length}`,
    `レリック: ${state.relics.length}`,
  ].map((text) => `<span>${text}</span>`).join("");
  renderResultActions([]);
}

function showTourClearResult() {
  showScreen("resultScreen");
  state.runOver = true;
  state.resultAction = "tourRestart";
  els.resultBadge.textContent = "Tour Mode";
  els.resultTitle.textContent = "ツアー制覇！";
  els.restartButton.textContent = "Tour Modeをもう一度";
  els.resultText.textContent = "Stage 1〜Stage 3を完走しました！";
  els.runSummary.innerHTML = [
    `リーダー: ${state.leader?.name || "-"}`,
    `HP: ${state.hp} / ${state.maxHp}`,
    `デッキ: ${state.masterDeck.length}`,
    `レリック数: ${state.relics.length}`,
    `レリック: ${state.relics.map((r) => r.name).join(", ") || "なし"}`,
    `合計バトル: 15`,
  ].map((text) => `<span>${text}</span>`).join("");
  renderResultActions([
    { action: "title", label: "タイトルへ戻る" },
    { action: "stageSelect", label: "ステージ選択へ戻る" },
  ]);
}

function showTourFailedResult() {
  showScreen("resultScreen");
  state.runOver = true;
  state.resultAction = "tourRestart";
  els.resultBadge.textContent = "Tour Mode";
  els.resultTitle.textContent = "ツアー失敗";
  els.restartButton.textContent = "Tour Modeをもう一度";
  els.resultText.textContent = `${state.enemy?.name || "Enemy"}に押し切られました。`;
  els.runSummary.innerHTML = [
    `到達: Stage ${state.tourStageIndex + 1} / ${TOUR_STAGE_IDS.length}`,
    `バトル: ${Math.min(state.encounterIndex + 1, currentEncounters().length)} / ${currentEncounters().length}`,
    `リーダー: ${state.leader?.name || "-"}`,
    `デッキ: ${state.masterDeck.length}`,
    `レリック数: ${state.relics.length}`,
  ].map((text) => `<span>${text}</span>`).join("");
  renderResultActions([
    { action: "title", label: "タイトルへ戻る" },
    { action: "stageSelect", label: "ステージ選択へ戻る" },
  ]);
}

function loseRun() {
  state.inBattle = false;
  if (state.gameMode === "tour") {
    showTourFailedResult();
    return;
  }
  showResult(false);
}

function showCardRewards() {
  const choices = pickRewardCards(3);
  els.cardRewardList.innerHTML = choices.map((id) => {
    const c = card(id);
    const typeLabel = c.type === "attack" ? "攻撃" : "スキル";
    return `
      <button class="reward-card rarity-card rarity-${c.rarity}" type="button" data-card="${id}">
        ${rarityBadge(c)}
        <span class="type-pill">${typeLabel} / コスト ${c.cost}</span>
        <strong>${c.name}</strong>
        <span class="card-tags reward-tags">
          ${c.tags.map((tag) => `<span class="tag-badge tag-${tag.toLowerCase()}">${tag}</span>`).join("")}
        </span>
        <p>${describeCard(c)}</p>
      </button>
    `;
  }).join("");
  showScreen("cardRewardScreen");
}

function chooseCardReward(id) {
  state.masterDeck.push(id);
  const c = card(id);
  const info = rarityInfo(c.rarity);
  state.pendingRewardLog = `獲得: ${info.icon} ${c.name}`;
  state.encounterIndex += 1;
  startEncounter();
}

function showRelicReward() {
  const available = RELICS.filter((relic) => !hasRelic(relic.id));
  const relic = available[Math.floor(Math.random() * available.length)] || RELICS[0];
  els.relicReward.innerHTML = `
    <div class="relic-art">${relic.emoji}</div>
    <h2>${relic.name}</h2>
    <p>${relic.text}</p>
    <button class="primary-button" type="button" data-relic="${relic.id}">受け取る</button>
  `;
  showScreen("relicRewardScreen");
}

function chooseRelic(id) {
  const relic = RELICS.find((item) => item.id === id);
  state.relics.push(relic);
  state.encounterIndex += 1;
  startEncounter();
}

function pickUnique(pool, count) {
  return shuffle(pool).slice(0, count);
}

function hasRelic(id) {
  return state.relics.some((relic) => relic.id === id);
}

function renderTourBattleHeader(battleTypeLabel) {
  if (!els.tourHeader) return;
  if (state.gameMode !== "tour") {
    els.tourHeader.hidden = true;
    els.tourHeader.innerHTML = "";
    return;
  }
  els.tourHeader.hidden = false;
  els.tourHeader.innerHTML = `
    <strong>🎸 Tour Mode</strong>
    <span>Stage ${state.tourStageIndex + 1}/${TOUR_STAGE_IDS.length} • バトル ${state.encounterIndex + 1}/${currentEncounters().length} • ${battleTypeLabel}</span>
    <em>${currentStage().name}</em>
  `;
}

function renderBattle() {
  const enemyPct = (state.enemy.hp / state.enemy.maxHp) * 100;
  const encounter = currentEncounters()[state.encounterIndex];
  const battleTypeLabel = state.enemy.enemyType === "elite"
    ? "エリート"
    : encounter.kind === "boss"
    ? "ボス"
    : encounter.kind === "midboss"
      ? "中ボス"
      : `バトル ${state.encounterIndex + 1}`;
  renderTourBattleHeader(battleTypeLabel);
  els.encounterLabel.textContent = battleTypeLabel;
  els.enemyArea.dataset.enemy = state.enemy.id;
  const enemyBanner = ENEMY_BANNERS[state.enemy.id];
  if (els.enemyBannerImage && enemyBanner) {
    els.enemyBannerImage.onerror = () => {
      els.enemyBannerImage.removeAttribute("src");
      els.enemyBannerImage.alt = `${state.enemy.name} banner pending`;
    };
    els.enemyBannerImage.src = enemyBanner.src;
    els.enemyBannerImage.style.objectPosition = enemyBanner.position;
    els.enemyBannerImage.alt = `${state.enemy.name} banner`;
  } else if (els.enemyBannerImage) {
    els.enemyBannerImage.removeAttribute("src");
    els.enemyBannerImage.alt = `${state.enemy.name} banner pending`;
  }
  els.enemyEmoji.textContent = state.enemy.emoji;
  els.enemyName.textContent = state.enemy.name;
  els.enemyHpText.textContent = `${state.enemy.hp} / ${state.enemy.maxHp}`;
  els.enemyHpBar.style.width = `${enemyPct}%`;
  els.enemyIntent.textContent = [stageAwareIntentText(), bossIntentNote()].filter(Boolean).join(" / ");
  if (els.enemyStatus) {
    els.enemyStatus.innerHTML = renderStatusBadges("enemy");
  }
  if (els.playerStatus) {
    els.playerStatus.innerHTML = renderStatusBadges("player");
  }
  els.playerArea.dataset.leader = state.leader.id;
  const leaderBanner = LEADER_BANNERS[state.leader.id];
  if (els.playerBannerImage && leaderBanner) {
    els.playerBannerImage.src = leaderBanner.src;
    els.playerBannerImage.style.objectPosition = leaderBanner.position;
    els.playerBannerImage.alt = `${state.leader.name} banner`;
  }
  els.playerEmoji.textContent = state.leader.emoji;
  els.playerName.textContent = state.leader.name;
  if (els.leaderPassiveSummary) {
    els.leaderPassiveSummary.textContent = `${state.leader.chorusIcon} ${state.leader.passiveName} / ${state.leader.passiveDescription}`;
  }
  els.playerHpText.textContent = `${state.hp} / ${state.maxHp}`;
  els.blockText.textContent = state.block;
  els.energyText.textContent = `${state.energy} / ${state.maxEnergy}`;
  els.chorusText.textContent = `${state.chorus} / 100`;
  els.chorusBar.style.width = `${state.chorus}%`;
  els.pileText.textContent = `山札 ${state.drawPile.length} / 捨て札 ${state.discardPile.length}`;
  const chorusReady = state.chorus >= 100;
  const meta = chorusMeta();
  els.chorusButton.dataset.theme = meta.theme;
  els.chorusButton.dataset.tensionMarks = state.chorusTensionMarks.join(",");
  els.chorusButton.innerHTML = chorusReady
    ? `<span class="chorus-ready-label">${meta.effect.readyLabel}</span><span class="chorus-skill-name">${meta.icon} ${meta.name}</span>`
    : `<span class="chorus-skill-name">${meta.name}</span>`;
  els.chorusButton.disabled = !chorusReady || state.chorusAnimating;
  els.chorusButton.classList.toggle("ready", chorusReady);
  els.relicStrip.innerHTML = state.relics.map((relic) => `
    <button class="relic-chip ${state.selectedRelicId === relic.id ? "active" : ""}" type="button" data-relic-info="${relic.id}" aria-label="${relic.name}の効果を表示">
      ${relic.emoji} ${relic.name}
    </button>
  `).join("");
  const handSlotsHtml = Array.from({ length: 5 }, (_, index) => {
    const id = state.hand[index] || null;
    if (!id) {
      return `
        <div class="card-slot empty-slot" aria-label="使用済み枠">
          <span>使用済み</span>
        </div>
      `;
    }
    const c = card(id);
    const unusable = state.energy < c.cost ? "unusable" : "";
    const blackedOut = state.blackoutSlots.includes(index);
    return `
      <button class="card card-slot rarity-card rarity-${c.rarity} ${c.type} ${unusable} ${blackedOut ? "blackout-card" : ""}" type="button" data-index="${index}">
        ${rarityBadge(c)}
        <span class="cost">${c.cost}</span>
        <strong class="card-name">${blackedOut ? "???" : c.name}</strong>
        <span class="card-tags">
          ${c.tags.map((tag) => `<span class="tag-badge tag-${tag.toLowerCase()}">${tag}</span>`).join("")}
        </span>
        <p class="card-text">${blackedOut ? "Blackout: 効果不明" : describeCard(c)}</p>
      </button>
    `;
  }).join("");
  els.hand.innerHTML = `${handSlotsHtml}
    <button id="endTurnButton" class="primary-button end-turn hand-end-turn" type="button" ${state.chorusAnimating ? "disabled" : ""}>
      ターン終了
    </button>
  `;
  els.endTurnButton = document.querySelector("#endTurnButton");
}

function renderRelicDetail() {
  const relic = state.relics.find((item) => item.id === state.selectedRelicId);
  if (!relic || !els.relicDetail) {
    if (els.relicDetail) {
      els.relicDetail.hidden = true;
      els.relicDetail.innerHTML = "";
    }
    return;
  }
  els.relicDetail.hidden = false;
  els.relicDetail.innerHTML = `
    <div class="relic-detail-icon">${relic.emoji}</div>
    <div>
      <strong>${relic.name}</strong>
      <p>${relic.text}</p>
    </div>
    <button class="relic-detail-close" type="button" aria-label="閉じる">×</button>
  `;
}

function showRelicOverlay(id) {
  const relic = state.relics.find((item) => item.id === id);
  if (!relic || !els.relicDetail) return;
  state.selectedRelicId = id;
  renderBattle();
  els.relicDetail.hidden = false;
  els.relicDetail.innerHTML = `
    <div class="relic-detail-panel" role="dialog" aria-modal="true" aria-label="${relic.name}の効果">
      <button class="relic-detail-close" type="button" aria-label="閉じる">×</button>
      <div class="relic-detail-heading">
        <div class="relic-detail-icon">${relic.emoji}</div>
        <div>
          <span>レリック</span>
          <strong>${relic.name}</strong>
        </div>
      </div>
      <p>${relic.text}</p>
    </div>
  `;
}

function hideRelicOverlay() {
  if (!els.relicDetail) return;
  state.selectedRelicId = null;
  els.relicDetail.hidden = true;
  els.relicDetail.innerHTML = "";
  renderBattle();
}

function renderLeaderInfoPopup() {
  if (!els.leaderInfoPopup || !state.leader) return;
  els.leaderInfoPopup.hidden = false;
  els.leaderInfoPopup.innerHTML = `
    <div class="leader-info-panel" role="dialog" aria-modal="true" aria-label="リーダー情報">
      <button class="leader-info-close" type="button" aria-label="閉じる">×</button>
      <div class="leader-info-section">
        <span>パッシブ</span>
        <strong>${state.leader.chorusIcon} ${state.leader.passiveName}</strong>
        <p>${state.leader.passiveDescription}</p>
      </div>
      <div class="leader-info-section">
        <span>CHORUS</span>
        <strong>${state.leader.chorusIcon} ${state.leader.chorusName}</strong>
        <p>${state.leader.chorusDescription}</p>
      </div>
    </div>
  `;
}

function hideLeaderInfoPopup() {
  if (!els.leaderInfoPopup) return;
  els.leaderInfoPopup.hidden = true;
  els.leaderInfoPopup.innerHTML = "";
}

function toggleRelicDetail(id) {
  showRelicOverlay(id);
}

function log(message) {
  els.battleLog.textContent = message;
}

function bump(element) {
  element.classList.remove("bump");
  void element.offsetWidth;
  element.classList.add("bump");
}

function renderResultActions(actions = []) {
  if (!els.resultActions) return;
  els.resultActions.innerHTML = actions.map((item) => `
    <button class="secondary-button" type="button" data-result-action="${item.action}">
      ${item.label}
    </button>
  `).join("");
}

function continueTourToNextStage() {
  const nextStageId = TOUR_STAGE_IDS[state.tourStageIndex];
  state.stageId = nextStageId;
  state.encounterIndex = 0;
  state.pendingVictoryReward = null;
  state.pendingRewardLog = `ステージクリアボーナス: HP +${state.lastStageClear?.healAmount || 0}`;
  state.resultAction = "title";
  state.runOver = false;
  renderResultActions([]);
  startEncounter();
}

function restartTourMode() {
  const leaderId = state.leader?.id;
  state.gameMode = "tour";
  state.tourStageIndex = 0;
  state.stageId = TOUR_STAGE_IDS[0];
  if (leaderId) {
    chooseLeader(leaderId);
    return;
  }
  renderLeaders();
  showScreen("leaderScreen");
}

function returnToTitle() {
  resetRun();
  renderResultActions([]);
  els.restartButton.textContent = "タイトルへ戻る";
  showScreen("titleScreen");
}

function returnToStageSelect() {
  resetRun();
  renderResultActions([]);
  showStageSelect();
}

function showResult(victory, shouldPlayVictorySe = true) {
  showScreen("resultScreen");
  state.runOver = true;
  state.resultAction = "title";
  renderResultActions([]);
  if (victory && shouldPlayVictorySe) playSe("victory");
  els.resultBadge.textContent = victory ? "勝利" : "敗北";
  els.resultTitle.textContent = victory ? "Neon Void Idol撃破！" : "ライブ失敗";
  els.resultText.textContent = victory
    ? `${state.leader.name}の演奏が夜を塗り替えた。猫バンド、アンコール成功！`
    : `${state.enemy?.name || "敵"}に押し切られた。次はEnergy配分とChorusのタイミングを変えてみよう。`;
  els.runSummary.innerHTML = [
    `リーダー: ${state.leader?.name || "-"}`,
    `デッキ: ${state.masterDeck.length}`,
    `レリック: ${state.relics.map((r) => r.name).join(", ") || "なし"}`,
    `Stage: ${currentStage().name}`,
    `バトル: ${Math.min(state.encounterIndex + 1, currentEncounters().length)} / ${currentEncounters().length}`,
  ].map((text) => `<span>${text}</span>`).join("");
}

els.startButton.addEventListener("click", () => {
  unlockAudio();
  resetRun();
  showStageSelect();
});

els.restartButton.addEventListener("click", () => {
  unlockAudio();
  if (state.resultAction === "tourNext") {
    continueTourToNextStage();
    return;
  }
  if (state.resultAction === "tourRestart") {
    restartTourMode();
    return;
  }
  if (state.resultAction === "stageSelect" || state.resultReturnToStageSelect) {
    returnToStageSelect();
    return;
  }
  returnToTitle();
});

els.resultActions?.addEventListener("click", (event) => {
  unlockAudio();
  const button = event.target.closest("[data-result-action]");
  if (!button) return;
  if (button.dataset.resultAction === "title") {
    returnToTitle();
    return;
  }
  if (button.dataset.resultAction === "stageSelect") {
    returnToStageSelect();
  }
});

els.stageList?.addEventListener("click", (event) => {
  unlockAudio();
  const tourButton = event.target.closest("[data-tour]");
  if (tourButton) {
    if (!state.tourUnlocked) return;
    state.gameMode = "tour";
    state.tourStageIndex = 0;
    state.stageId = TOUR_STAGE_IDS[0];
    renderLeaders();
    showScreen("leaderScreen");
    return;
  }
  const button = event.target.closest("[data-stage]");
  if (!button) return;
  const stage = stageById(button.dataset.stage);
  if (!isStageUnlocked(stage) || !stage.playable) return;
  state.gameMode = "stage";
  state.tourStageIndex = 0;
  state.stageId = stage.id;
  renderLeaders();
  showScreen("leaderScreen");
});

els.leaderList.addEventListener("click", (event) => {
  unlockAudio();
  const button = event.target.closest("[data-leader]");
  if (!button) return;
  chooseLeader(button.dataset.leader);
});

els.hand.addEventListener("click", (event) => {
  if (event.target.closest("#endTurnButton")) {
    endTurn();
    return;
  }
  const button = event.target.closest("[data-index]");
  if (!button) return;
  playCard(Number(button.dataset.index));
});

els.chorusButton.addEventListener("click", useChorus);
els.battleVictoryButton.addEventListener("click", continueAfterBattleVictory);

els.relicStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-relic-info]");
  if (!button) return;
  toggleRelicDetail(button.dataset.relicInfo);
});

els.relicDetail.addEventListener("click", (event) => {
  if (!event.target.closest(".relic-detail-close") && event.target.closest(".relic-detail-panel")) return;
  hideRelicOverlay();
});

els.leaderInfoButton.addEventListener("click", () => {
  renderLeaderInfoPopup();
});

els.leaderInfoPopup.addEventListener("click", (event) => {
  if (!event.target.closest(".leader-info-close") && event.target.closest(".leader-info-panel")) return;
  hideLeaderInfoPopup();
});

els.cardRewardList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-card]");
  if (!button) return;
  chooseCardReward(button.dataset.card);
});

els.relicReward.addEventListener("click", (event) => {
  const button = event.target.closest("[data-relic]");
  if (!button) return;
  chooseRelic(button.dataset.relic);
});

window.CatBandDebug = {
  cards: CARD_LIBRARY,
  relics: RELICS,
  leaders: LEADERS,
  stages: STAGES,
  chorusEffects,
  bgm: { BGM, BGM_READY, playBGM, stopBGM, fadeToBGM, playEncounterBGM, debugCurrentBGM },
  audio: { audioState, setBgmVolume, setSeVolume },
  state,
  renderStageSelect,
  resetStageUnlocks,
  resetTourUnlock,
  unlockTourModeForDebug,
  hasTag,
  hasAnyTag,
  countTags,
};
window.resetStageUnlocks = resetStageUnlocks;
window.resetTourUnlock = resetTourUnlock;
window.unlockTourModeForDebug = unlockTourModeForDebug;

initAudio();
setupAudioControls();
state.unlockedStages = loadStageUnlocks();
state.tourUnlocked = loadTourUnlock();
document.addEventListener("pointerdown", unlockAudio, { once: true });
renderLeaders();
renderStageSelect();

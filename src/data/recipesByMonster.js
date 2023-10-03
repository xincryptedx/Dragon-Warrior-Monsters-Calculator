const recipesByMonster = {
  DrakSlime: [
    {
      base: "SLIME",
      mate: "DRAGON",
    },
  ],
  SpotSlime: [
    {
      base: "SLIME",
      mate: "BEAST",
    },
  ],
  WingSlime: [
    {
      base: "SLIME",
      mate: "BIRD",
    },
  ],
  TreeSlime: [
    {
      base: "SLIME",
      mate: "PLANT",
    },
  ],
  Snaily: [
    {
      base: "SLIME",
      mate: "BUG",
    },
  ],
  SlimeNite: [
    {
      base: "SLIME",
      mate: "DEVIL",
    },
  ],
  Babble: [
    {
      base: "SLIME",
      mate: "GiantMoth",
    },
    {
      base: "SLIME",
      mate: "Poisongon",
    },
    {
      base: "SLIME",
      mate: "ZOMBIE",
    },
  ],
  BoxSlime: [
    {
      base: "SLIME",
      mate: "MATERIAL",
    },
  ],
  Healer: [
    {
      base: "SLIME",
      mate: "PillowRat",
    },
    {
      base: "SLIME",
      mate: "FunkyBird",
    },
    {
      base: "SLIME",
      mate: "MadPlant",
    },
    {
      base: "SLIME",
      mate: "CopyCat",
    },
  ],
  FangSlime: [
    {
      base: "SLIME",
      mate: "Almiraj",
    },
    {
      base: "SLIME",
      mate: "GulpBeast",
    },
    {
      base: "SLIME",
      mate: "Trumpeter",
    },
    {
      base: "SLIME",
      mate: "KingLeo",
    },
    {
      base: "SLIME",
      mate: "DarkHorn",
    },
    {
      base: "SLIME",
      mate: "MadCat",
    },
  ],
  RockSlime: [
    {
      base: "SLIME",
      mate: "Digster",
    },
    {
      base: "SLIME",
      mate: "DeadNite",
    },
    {
      base: "SLIME",
      mate: "Golem",
    },
    {
      base: "SLIME",
      mate: "StoneMan",
    },
    {
      base: "SLIME",
      mate: "BombCrag",
    },
  ],
  SlimeBorg: [
    {
      base: "DrakSlime",
      mate: "Swordgon",
    },
    {
      base: "DrakSlime",
      mate: "Spikerous",
    },
    {
      base: "DrakSlime",
      mate: "GreatDrak",
    },
    {
      base: "DrakSlime",
      mate: "BattleRex",
    },
    {
      base: "DrakSlime",
      mate: "SkyDragon",
    },
    {
      base: "SlimeNite",
      mate: "Swordgon",
    },
    {
      base: "SlimeNite",
      mate: "Spikerous",
    },
    {
      base: "SlimeNite",
      mate: "GreatDrak",
    },
    {
      base: "SlimeNite",
      mate: "BattleRex",
    },
    {
      base: "SlimeNite",
      mate: "SkyDragon",
    },
    {
      base: "RockSlime",
      mate: "Swordgon",
    },
    {
      base: "RockSlime",
      mate: "Spikerous",
    },
    {
      base: "RockSlime",
      mate: "GreatDrak",
    },
    {
      base: "RockSlime",
      mate: "BattleRex",
    },
    {
      base: "RockSlime",
      mate: "SkyDragon",
    },
    {
      base: "Metabble",
      mate: "Swordgon",
    },
    {
      base: "Metabble",
      mate: "Spikerous",
    },
    {
      base: "Metabble",
      mate: "GreatDrak",
    },
    {
      base: "Metabble",
      mate: "BattleRex",
    },
    {
      base: "Metabble",
      mate: "SkyDragon",
    },
    {
      base: "SLIME",
      mate: "Roboster",
    },
  ],
  Slabbit: [
    {
      base: "SLIME",
      mate: "Skullroo",
    },
  ],
  SpotKing: [
    {
      base: "KingSlime",
      mate: "GreatDrak",
    },
    {
      base: "KingSlime",
      mate: "BattleRex",
    },
    {
      base: "KingSlime",
      mate: "Divinegon",
    },
    {
      base: "KingSlime",
      mate: "Unicorn",
    },
    {
      base: "KingSlime",
      mate: "KingLeo",
    },
    {
      base: "KingSlime",
      mate: "MadCondor",
    },
    {
      base: "KingSlime",
      mate: "ZapBird",
    },
    {
      base: "KingSlime",
      mate: "WhipBird",
    },
    {
      base: "KingSlime",
      mate: "Gigantes",
    },
    {
      base: "KingSlime",
      mate: "Centasaur",
    },
    {
      base: "KingSlime",
      mate: "DeadNoble",
    },
    {
      base: "KingSlime",
      mate: "WhiteKing",
    },
    {
      base: "MetalKing",
      mate: "GreatDrak",
    },
    {
      base: "MetalKing",
      mate: "BattleRex",
    },
    {
      base: "MetalKing",
      mate: "Divinegon",
    },
    {
      base: "MetalKing",
      mate: "Unicorn",
    },
    {
      base: "MetalKing",
      mate: "KingLeo",
    },
    {
      base: "MetalKing",
      mate: "MadCondor",
    },
    {
      base: "MetalKing",
      mate: "ZapBird",
    },
    {
      base: "MetalKing",
      mate: "WhipBird",
    },
    {
      base: "MetalKing",
      mate: "Gigantes",
    },
    {
      base: "MetalKing",
      mate: "Centasaur",
    },
    {
      base: "MetalKing",
      mate: "DeadNoble",
    },
    {
      base: "MetalKing",
      mate: "WhiteKing",
    },
    {
      base: "SpotSlime",
      mate: "SpotSlime",
    },
  ],
  KingSlime: [
    {
      base: "SpotKing",
      mate: "GreatDrak",
    },
    {
      base: "SpotKing",
      mate: "BattleRex",
    },
    {
      base: "SpotKing",
      mate: "Divinegon",
    },
    {
      base: "SpotKing",
      mate: "Unicorn",
    },
    {
      base: "SpotKing",
      mate: "KingLeo",
    },
    {
      base: "SpotKing",
      mate: "MadCondor",
    },
    {
      base: "SpotKing",
      mate: "ZapBird",
    },
    {
      base: "SpotKing",
      mate: "WhipBird",
    },
    {
      base: "SpotKing",
      mate: "Gigantes",
    },
    {
      base: "SpotKing",
      mate: "Centasaur",
    },
    {
      base: "SpotKing",
      mate: "DeadNoble",
    },
    {
      base: "SpotKing",
      mate: "WhiteKing",
    },
    {
      base: "Slime",
      mate: "Slime",
    },
    {
      base: "SLIME",
      mate: "BOSS",
    },
  ],
  Metaly: [
    {
      base: "SLIME",
      mate: "MetalDrak",
    },
  ],
  Metabble: [
    {
      base: "Metaly",
      mate: "Metaly",
    },
  ],
  MetalKing: [
    {
      base: "SpotKing",
      mate: "MetalDrak",
    },
    {
      base: "KingSlime",
      mate: "MetalDrak",
    },
    {
      base: "Metabble",
      mate: "Metabble",
    },
  ],
  GoldSlime: [
    {
      base: "SpotKing",
      mate: "GoldGolem",
    },
    {
      base: "KingSlime",
      mate: "GoldGolem",
    },
    {
      base: "MetalKing",
      mate: "GoldGolem",
    },
    {
      base: "MetalKing",
      mate: "MetalKing",
    },
  ],
  DragonKid: [
    {
      base: "DRAGON",
      mate: "SLIME",
    },
  ],
  Tortragon: [
    {
      base: "DRAGON",
      mate: "BEAST",
    },
  ],
  Pteranod: [
    {
      base: "DRAGON",
      mate: "BIRD",
    },
  ],
  Gasgon: [
    {
      base: "DRAGON",
      mate: "PLANT",
    },
  ],
  FairyDrak: [
    {
      base: "DRAGON",
      mate: "BUG",
    },
  ],
  LizardMan: [
    {
      base: "DRAGON",
      mate: "DEVIL",
    },
  ],
  Poisongon: [
    {
      base: "DRAGON",
      mate: "ZOMBIE",
    },
  ],
  Swordgon: [
    {
      base: "DRAGON",
      mate: "MATERIAL",
    },
  ],
  Dragon: [
    {
      base: "DragonKid",
      mate: "DragonKid",
    },
  ],
  MiniDrak: [
    {
      base: "DRAGON",
      mate: "Picky",
    },
  ],
  MadDragon: [
    {
      base: "Gasgon",
      mate: "BEAST",
    },
    {
      base: "DRAGON",
      mate: "GulpBeast",
    },
  ],
  Rayburn: [
    {
      base: "LizardMan",
      mate: "WingSlime",
    },
    {
      base: "LizardMan",
      mate: "Trumpeter",
    },
    {
      base: "LizardMan",
      mate: "MadCat",
    },
    {
      base: "LizardMan",
      mate: "FaceTree",
    },
    {
      base: "LizardMan",
      mate: "Lionex",
    },
    {
      base: "LizardMan",
      mate: "GoatHorn",
    },
    {
      base: "LizardMan",
      mate: "GateGuard",
    },
    {
      base: "LizardMan",
      mate: "Gigantes",
    },
    {
      base: "DRAGON",
      mate: "MadCondor",
    },
  ],
  Chamelgon: [
    {
      base: "DRAGON",
      mate: "Voodoll",
    },
  ],
  LizardFly: [
    {
      base: "DRAGON",
      mate: "GoHopper",
    },
  ],
  Andreal: [
    {
      base: "Gasgon",
      mate: "Goategon",
    },
    {
      base: "Gasgon",
      mate: "Trumpeter",
    },
    {
      base: "Gasgon",
      mate: "MadCondor",
    },
    {
      base: "Gasgon",
      mate: "WhipBird",
    },
    {
      base: "Gasgon",
      mate: "FunkyBird",
    },
    {
      base: "Gasgon",
      mate: "ArcDemon",
    },
    {
      base: "Gasgon",
      mate: "Lionex",
    },
    {
      base: "Gasgon",
      mate: "GoatHorn",
    },
    {
      base: "Gasgon",
      mate: "Ogre",
    },
    {
      base: "Gasgon",
      mate: "Akubar",
    },
    {
      base: "Gasgon",
      mate: "DeadNoble",
    },
    {
      base: "Gasgon",
      mate: "Golem",
    },
    {
      base: "MadDragon",
      mate: "Goategon",
    },
    {
      base: "MadDragon",
      mate: "Trumpeter",
    },
    {
      base: "MadDragon",
      mate: "MadCondor",
    },
    {
      base: "MadDragon",
      mate: "WhipBird",
    },
    {
      base: "MadDragon",
      mate: "FunkyBird",
    },
    {
      base: "MadDragon",
      mate: "ArcDemon",
    },
    {
      base: "MadDragon",
      mate: "Lionex",
    },
    {
      base: "MadDragon",
      mate: "GoatHorn",
    },
    {
      base: "MadDragon",
      mate: "Ogre",
    },
    {
      base: "MadDragon",
      mate: "Akubar",
    },
    {
      base: "MadDragon",
      mate: "DeadNoble",
    },
    {
      base: "MadDragon",
      mate: "Golem",
    },
    {
      base: "SkyDragon",
      mate: "Goategon",
    },
    {
      base: "SkyDragon",
      mate: "Trumpeter",
    },
    {
      base: "SkyDragon",
      mate: "MadCondor",
    },
    {
      base: "SkyDragon",
      mate: "WhipBird",
    },
    {
      base: "SkyDragon",
      mate: "FunkyBird",
    },
    {
      base: "SkyDragon",
      mate: "ArcDemon",
    },
    {
      base: "SkyDragon",
      mate: "Lionex",
    },
    {
      base: "SkyDragon",
      mate: "GoatHorn",
    },
    {
      base: "SkyDragon",
      mate: "Ogre",
    },
    {
      base: "SkyDragon",
      mate: "Akubar",
    },
    {
      base: "SkyDragon",
      mate: "DeadNoble",
    },
    {
      base: "SkyDragon",
      mate: "Golem",
    },
    {
      base: "BattleRex",
      mate: "Goategon",
    },
    {
      base: "BattleRex",
      mate: "Trumpeter",
    },
    {
      base: "BattleRex",
      mate: "MadCondor",
    },
    {
      base: "BattleRex",
      mate: "WhipBird",
    },
    {
      base: "BattleRex",
      mate: "FunkyBird",
    },
    {
      base: "BattleRex",
      mate: "ArcDemon",
    },
    {
      base: "BattleRex",
      mate: "Lionex",
    },
    {
      base: "BattleRex",
      mate: "GoatHorn",
    },
    {
      base: "BattleRex",
      mate: "Ogre",
    },
    {
      base: "BattleRex",
      mate: "Akubar",
    },
    {
      base: "BattleRex",
      mate: "DeadNoble",
    },
    {
      base: "BattleRex",
      mate: "Golem",
    },
    {
      base: "DRAGON",
      mate: "Gulpple",
    },
  ],
  KingCobra: [
    {
      base: "DRAGON",
      mate: "Babble",
    },
  ],
  Spikerous: [
    {
      base: "DRAGON",
      mate: "ArmyCrab",
    },
    {
      base: "DRAGON",
      mate: "Digster",
    },
  ],
  GreatDrak: [
    {
      base: "DRAGON",
      mate: "SpotKing",
    },
    {
      base: "DRAGON",
      mate: "KingSlime",
    },
    {
      base: "DRAGON",
      mate: "MetalKing",
    },
    {
      base: "DRAGON",
      mate: "BattleRex",
    },
    {
      base: "DRAGON",
      mate: "Unicorn",
    },
    {
      base: "DRAGON",
      mate: "ZapBird",
    },
    {
      base: "DRAGON",
      mate: "WhipBird",
    },
    {
      base: "DRAGON",
      mate: "Gigantes",
    },
    {
      base: "DRAGON",
      mate: "Centasaur",
    },
    {
      base: "DragonKid",
      mate: "DragonKid",
    },
    {
      base: "Dragon",
      mate: "Dragon",
    },
  ],
  Crestpent: [
    {
      base: "DRAGON",
      mate: "BigRoost",
    },
  ],
  WingSnake: [
    {
      base: "Crestpent",
      mate: "Crestpent",
    },
  ],
  Coatol: [
    {
      base: "Pteranod",
      mate: "DarkHorn",
    },
    {
      base: "Pteranod",
      mate: "MadKnight",
    },
    {
      base: "Pteranod",
      mate: "Copycat",
    },
    {
      base: "Pteranod",
      mate: "StoneMan",
    },
    {
      base: "Gasgon",
      mate: "DarkHorn",
    },
    {
      base: "Gasgon",
      mate: "MadKnight",
    },
    {
      base: "Gasgon",
      mate: "Copycat",
    },
    {
      base: "Gasgon",
      mate: "StoneMan",
    },
    {
      base: "LizardMan",
      mate: "DarkHorn",
    },
    {
      base: "LizardMan",
      mate: "MadKnight",
    },
    {
      base: "LizardMan",
      mate: "Copycat",
    },
    {
      base: "LizardMan",
      mate: "StoneMan",
    },
    {
      base: "BattleRex",
      mate: "DarkHorn",
    },
    {
      base: "BattleRex",
      mate: "MadKnight",
    },
    {
      base: "BattleRex",
      mate: "Copycat",
    },
    {
      base: "BattleRex",
      mate: "StoneMan",
    },
    {
      base: "SkyDragon",
      mate: "DarkHorn",
    },
    {
      base: "SkyDragon",
      mate: "MadKnight",
    },
    {
      base: "SkyDragon",
      mate: "Copycat",
    },
    {
      base: "SkyDragon",
      mate: "StoneMan",
    },
    {
      base: "WingSnake",
      mate: "WingSnake",
    },
  ],
  Orochi: [
    {
      base: "Andreal",
      mate: "MedusaEye",
    },
    {
      base: "GreatDrak",
      mate: "MedusaEye",
    },
    {
      base: "DRAGON",
      mate: "BOSS",
    },
  ],
  BattleRex: [
    {
      base: "DRAGON",
      mate: "KingLeo",
    },
    {
      base: "DRAGON",
      mate: "Lionex",
    },
    {
      base: "DRAGON",
      mate: "Ogre",
    },
    {
      base: "DRAGON",
      mate: "MadKnight",
    },
    {
      base: "DRAGON",
      mate: "EvilArmor",
    },
  ],
  SkyDragon: [
    {
      base: "DRAGON",
      mate: "Phoenix",
    },
  ],
  Divinegon: [
    {
      base: "SkyDragon",
      mate: "Orochi",
    },
  ],
  Tonguella: [
    {
      base: "BEAST",
      mate: "SLIME",
    },
  ],
  Almiraj: [
    {
      base: "BEAST",
      mate: "DRAGON",
    },
  ],
  CatFly: [
    {
      base: "BEAST",
      mate: "BIRD",
    },
  ],
  PillowRat: [
    {
      base: "BEAST",
      mate: "PLANT",
    },
  ],
  Saccer: [
    {
      base: "BEAST",
      mate: "BUG",
    },
  ],
  GulpBeast: [
    {
      base: "Tonguella",
      mate: "Digster",
    },
    {
      base: "Tonguella",
      mate: "Skullgon",
    },
    {
      base: "Tonguella",
      mate: "DeadNoble",
    },
    {
      base: "Tonguella",
      mate: "WhiteKing",
    },
    {
      base: "Tonguella",
      mate: "Skeletor",
    },
    {
      base: "Grizzly",
      mate: "Digster",
    },
    {
      base: "Grizzly",
      mate: "Skullgon",
    },
    {
      base: "Grizzly",
      mate: "DeadNoble",
    },
    {
      base: "Grizzly",
      mate: "WhiteKing",
    },
    {
      base: "Grizzly",
      mate: "Skeletor",
    },
    {
      base: "Yeti",
      mate: "Digster",
    },
    {
      base: "Yeti",
      mate: "Skullgon",
    },
    {
      base: "Yeti",
      mate: "DeadNoble",
    },
    {
      base: "Yeti",
      mate: "WhiteKing",
    },
    {
      base: "Yeti",
      mate: "Skeletor",
    },
    {
      base: "Unicorn",
      mate: "Digster",
    },
    {
      base: "Unicorn",
      mate: "Skullgon",
    },
    {
      base: "Unicorn",
      mate: "DeadNoble",
    },
    {
      base: "Unicorn",
      mate: "WhiteKing",
    },
    {
      base: "Unicorn",
      mate: "Skeletor",
    },
    {
      base: "WildApe",
      mate: "Digster",
    },
    {
      base: "WildApe",
      mate: "Skullgon",
    },
    {
      base: "WildApe",
      mate: "DeadNoble",
    },
    {
      base: "WildApe",
      mate: "WhiteKing",
    },
    {
      base: "WildApe",
      mate: "Skeletor",
    },
    {
      base: "Trumpeter",
      mate: "Digster",
    },
    {
      base: "Trumpeter",
      mate: "Skullgon",
    },
    {
      base: "Trumpeter",
      mate: "DeadNoble",
    },
    {
      base: "Trumpeter",
      mate: "WhiteKing",
    },
    {
      base: "Trumpeter",
      mate: "Skeletor",
    },
    {
      base: "IronTurt",
      mate: "MetalDrak",
    },
    {
      base: "IronTurt",
      mate: "Roboster",
    },
    {
      base: "IronTurt",
      mate: "LavaMan",
    },
    {
      base: "IronTurt",
      mate: "IceMan",
    },
    {
      base: "IronTurt",
      mate: "Golem",
    },
    {
      base: "IronTurt",
      mate: "StoneMan",
    },
    {
      base: "Grizzly",
      mate: "MetalDrak",
    },
    {
      base: "Grizzly",
      mate: "Roboster",
    },
    {
      base: "Grizzly",
      mate: "LavaMan",
    },
    {
      base: "Grizzly",
      mate: "IceMan",
    },
    {
      base: "Grizzly",
      mate: "Golem",
    },
    {
      base: "Grizzly",
      mate: "StoneMan",
    },
    {
      base: "Yeti",
      mate: "MetalDrak",
    },
    {
      base: "Yeti",
      mate: "Roboster",
    },
    {
      base: "Yeti",
      mate: "LavaMan",
    },
    {
      base: "Yeti",
      mate: "IceMan",
    },
    {
      base: "Yeti",
      mate: "Golem",
    },
    {
      base: "Yeti",
      mate: "StoneMan",
    },
    {
      base: "Unicorn",
      mate: "MetalDrak",
    },
    {
      base: "Unicorn",
      mate: "Roboster",
    },
    {
      base: "Unicorn",
      mate: "LavaMan",
    },
    {
      base: "Unicorn",
      mate: "IceMan",
    },
    {
      base: "Unicorn",
      mate: "Golem",
    },
    {
      base: "Unicorn",
      mate: "StoneMan",
    },
    {
      base: "Goategon",
      mate: "MetalDrak",
    },
    {
      base: "Goategon",
      mate: "Roboster",
    },
    {
      base: "Goategon",
      mate: "LavaMan",
    },
    {
      base: "Goategon",
      mate: "IceMan",
    },
    {
      base: "Goategon",
      mate: "Golem",
    },
    {
      base: "Goategon",
      mate: "StoneMan",
    },
    {
      base: "WildApe",
      mate: "MetalDrak",
    },
    {
      base: "WildApe",
      mate: "Roboster",
    },
    {
      base: "WildApe",
      mate: "LavaMan",
    },
    {
      base: "WildApe",
      mate: "IceMan",
    },
    {
      base: "WildApe",
      mate: "Golem",
    },
    {
      base: "WildApe",
      mate: "StoneMan",
    },
    {
      base: "Grizzly",
      mate: "DRAGON",
    },
    {
      base: "Yeti",
      mate: "DRAGON",
    },
    {
      base: "Trumpeter",
      mate: "DRAGON",
    },
    {
      base: "BigEye",
      mate: "DRAGON",
    },
    {
      base: "Grizzly",
      mate: "DEVIL",
    },
  ],
  Skullroo: [
    {
      base: "BEAST",
      mate: "ZOMBIE",
    },
  ],
  WindBeast: [
    {
      base: "Catfly",
      mate: "BIRD",
    },
    {
      base: "BEAST",
      mate: "MATERIAL",
    },
  ],
  Anteater: [
    {
      base: "Saccer",
      mate: "DRAGON",
    },
  ],
  SuperTen: [
    {
      base: "Tonguella",
      mate: "TreeSlime",
    },
    {
      base: "Tonguella",
      mate: "FangSlime",
    },
    {
      base: "Tonguella",
      mate: "MadDragon",
    },
    {
      base: "Tonguella",
      mate: "FunkyBird",
    },
    {
      base: "Tonguella",
      mate: "MadPlant",
    },
    {
      base: "Tonguella",
      mate: "FaceTree",
    },
    {
      base: "Tonguella",
      mate: "Lipsy",
    },
    {
      base: "Tonguella",
      mate: "Demonite",
    },
    {
      base: "Tonguella",
      mate: "Gremlin",
    },
    {
      base: "Tonguella",
      mate: "CopyCat",
    },
    {
      base: "Tonguella",
      mate: "JewelBag",
    },
    {
      base: "Tonguella",
      mate: "Mimic",
    },
    {
      base: "GulpBeast",
      mate: "TreeSlime",
    },
    {
      base: "GulpBeast",
      mate: "FangSlime",
    },
    {
      base: "GulpBeast",
      mate: "MadDragon",
    },
    {
      base: "GulpBeast",
      mate: "FunkyBird",
    },
    {
      base: "GulpBeast",
      mate: "MadPlant",
    },
    {
      base: "GulpBeast",
      mate: "FaceTree",
    },
    {
      base: "GulpBeast",
      mate: "Lipsy",
    },
    {
      base: "GulpBeast",
      mate: "Demonite",
    },
    {
      base: "GulpBeast",
      mate: "Gremlin",
    },
    {
      base: "GulpBeast",
      mate: "CopyCat",
    },
    {
      base: "GulpBeast",
      mate: "JewelBag",
    },
    {
      base: "GulpBeast",
      mate: "Mimic",
    },
    {
      base: "BEAST",
      mate: "Mudron",
    },
  ],
  IronTurt: [
    {
      base: "BEAST",
      mate: "Tortragon",
    },
  ],
  Mommonja: [
    {
      base: "BEAST",
      mate: "DuckKite",
    },
  ],
  HammerMan: [
    {
      base: "BEAST",
      mate: "StubSuck",
    },
  ],
  Grizzly: [
    {
      base: "BEAST",
      mate: "MetalDrak",
    },
    {
      base: "BEAST",
      mate: "Roboster",
    },
    {
      base: "BEAST",
      mate: "LavaMan",
    },
    {
      base: "BEAST",
      mate: "IceMan",
    },
    {
      base: "BEAST",
      mate: "Golem",
    },
    {
      base: "BEAST",
      mate: "StoneMan",
    },
    {
      base: "BEAST",
      mate: "DEVIL",
    },
  ],
  Yeti: [
    {
      base: "IronTurt",
      mate: "Pteranod",
    },
    {
      base: "IronTurt",
      mate: "Gasgon",
    },
    {
      base: "IronTurt",
      mate: "Swordgon",
    },
    {
      base: "IronTurt",
      mate: "MadDragon",
    },
    {
      base: "IronTurt",
      mate: "BattleRex",
    },
    {
      base: "IronTurt",
      mate: "SkyDragon",
    },
    {
      base: "Goategon",
      mate: "Pteranod",
    },
    {
      base: "Goategon",
      mate: "Gasgon",
    },
    {
      base: "Goategon",
      mate: "Swordgon",
    },
    {
      base: "Goategon",
      mate: "MadDragon",
    },
    {
      base: "Goategon",
      mate: "BattleRex",
    },
    {
      base: "Goategon",
      mate: "SkyDragon",
    },
    {
      base: "WildApe",
      mate: "Pteranod",
    },
    {
      base: "WildApe",
      mate: "Gasgon",
    },
    {
      base: "WildApe",
      mate: "Swordgon",
    },
    {
      base: "WildApe",
      mate: "MadDragon",
    },
    {
      base: "WildApe",
      mate: "BattleRex",
    },
    {
      base: "WildApe",
      mate: "SkyDragon",
    },
    {
      base: "MadCat",
      mate: "Pteranod",
    },
    {
      base: "MadCat",
      mate: "Gasgon",
    },
    {
      base: "MadCat",
      mate: "Swordgon",
    },
    {
      base: "MadCat",
      mate: "MadDragon",
    },
    {
      base: "MadCat",
      mate: "BattleRex",
    },
    {
      base: "MadCat",
      mate: "SkyDragon",
    },
    {
      base: "BEAST",
      mate: "Orc",
    },
  ],
  MadGopher: [
    {
      base: "BEAST",
      mate: "SabreMan",
    },
  ],
  FairyRat: [
    {
      base: "BEAST",
      mate: "LizardFly",
    },
  ],
  Unicorn: [
    {
      base: "Tonguella",
      mate: "SLIME",
    },
    {
      base: "GulpBeast",
      mate: "SLIME",
    },
    {
      base: "Grizzly",
      mate: "SLIME",
    },
    {
      base: "Yeti",
      mate: "SLIME",
    },
    {
      base: "Goategon",
      mate: "SLIME",
    },
    {
      base: "WildApe",
      mate: "SLIME",
    },
    {
      base: "Trumpeter",
      mate: "SLIME",
    },
    {
      base: "BEAST",
      mate: "FangSlime",
    },
  ],
  Goategon: [
    {
      base: "BEAST",
      mate: "DrakSlime",
    },
    {
      base: "BEAST",
      mate: "LizardMan",
    },
  ],
  WildApe: [
    {
      base: "Almiraj",
      mate: "DRAGON",
    },
    {
      base: "BEAST",
      mate: "MadPecker",
    },
  ],
  Trumpeter: [
    {
      base: "Tonguella",
      mate: "LandOwl",
    },
    {
      base: "Tonguella",
      mate: "MadCondor",
    },
    {
      base: "Tonguella",
      mate: "ZapBird",
    },
    {
      base: "Tonguella",
      mate: "WhipBird",
    },
    {
      base: "GulpBeast",
      mate: "LandOwl",
    },
    {
      base: "GulpBeast",
      mate: "MadCondor",
    },
    {
      base: "GulpBeast",
      mate: "ZapBird",
    },
    {
      base: "GulpBeast",
      mate: "WhipBird",
    },
    {
      base: "Grizzly",
      mate: "LandOwl",
    },
    {
      base: "Grizzly",
      mate: "MadCondor",
    },
    {
      base: "Grizzly",
      mate: "ZapBird",
    },
    {
      base: "Grizzly",
      mate: "WhipBird",
    },
    {
      base: "Yeti",
      mate: "LandOwl",
    },
    {
      base: "Yeti",
      mate: "MadCondor",
    },
    {
      base: "Yeti",
      mate: "ZapBird",
    },
    {
      base: "Yeti",
      mate: "WhipBird",
    },
    {
      base: "GulpBeast",
      mate: "MetalDrak",
    },
    {
      base: "GulpBeast",
      mate: "BalZak",
    },
    {
      base: "GulpBeast",
      mate: "LavaMan",
    },
    {
      base: "GulpBeast",
      mate: "Roboster",
    },
    {
      base: "GulpBeast",
      mate: "LavaMan",
    },
    {
      base: "GulpBeast",
      mate: "IceMan",
    },
    {
      base: "GulpBeast",
      mate: "Golem",
    },
    {
      base: "WildApe",
      mate: "StoneMan",
    },
    {
      base: "SuperTen",
      mate: "DRAGON",
    },
  ],
  KingLeo: [
    {
      base: "Trumpeter",
      mate: "GulpBeast",
    },
    {
      base: "Trumpeter",
      mate: "MetalDrak",
    },
    {
      base: "Trumpeter",
      mate: "Balzak",
    },
    {
      base: "Trumpeter",
      mate: "GoldGolem",
    },
    {
      base: "Roboster",
      mate: "GulpBeast",
    },
    {
      base: "Roboster",
      mate: "SuperTen",
    },
    {
      base: "Roboster",
      mate: "Unicorn",
    },
    {
      base: "Roboster",
      mate: "Trumpeter",
    },
    {
      base: "Roboster",
      mate: "DarkHorn",
    },
    {
      base: "Roboster",
      mate: "MadCat",
    },
  ],
  DarkHorn: [
    {
      base: "BEAST",
      mate: "BOSS",
    },
  ],
  MadCat: [
    {
      base: "BEAST",
      mate: "Dragon",
    },
  ],
  BigEye: [
    {
      base: "BEAST",
      mate: "EyeBall",
    },
  ],
  Picky: [
    {
      base: "BIRD",
      mate: "SLIME",
    },
  ],
  Wyvern: [
    {
      base: "BIRD",
      mate: "DRAGON",
    },
  ],
  BullBird: [
    {
      base: "BIRD",
      mate: "BEAST",
    },
  ],
  FloraJay: [
    {
      base: "BIRD",
      mate: "PLANT",
    },
  ],
  DuckKite: [
    {
      base: "BIRD",
      mate: "BUG",
    },
  ],
  MadPecker: [
    {
      base: "BIRD",
      mate: "DEVIL",
    },
  ],
  MadRaven: [
    {
      base: "BIRD",
      mate: "ZOMBIE",
    },
  ],
  MistyWing: [
    {
      base: "BIRD",
      mate: "MATERIAL",
    },
  ],
  Dracky: [
    {
      base: "Picky",
      mate: "SLIME",
    },
  ],
  StubBird: [
    {
      base: "BIRD",
      mate: "RockSlime",
    },
  ],
  LandOwl: [
    {
      base: "BullBird",
      mate: "BEAST",
    },
  ],
  MadGoose: [
    {
      base: "Wyvern",
      mate: "DRAGON",
    },
    {
      base: "Wyvern",
      mate: "ZOMBIE",
    },
    {
      base: "LandOwl",
      mate: "DRAGON",
    },
    {
      base: "LandOwl",
      mate: "ZOMBIE",
    },
    {
      base: "MadCondor",
      mate: "DRAGON",
    },
    {
      base: "MadCondor",
      mate: "ZOMBIE",
    },
    {
      base: "Phoenix",
      mate: "DRAGON",
    },
    {
      base: "Phoenix",
      mate: "ZOMBIE",
    },
    {
      base: "BIRD",
      mate: "Droll",
    },
  ],
  MadCondor: [
    {
      base: "LandOwl",
      mate: "DEVIL",
    },
    {
      base: "BIRD",
      mate: "CoilBird",
    },
  ],
  Blizzardy: [
    {
      base: "BIRD",
      mate: "Metaly",
    },
    {
      base: "BIRD",
      mate: "Metabble",
    },
    {
      base: "BIRD",
      mate: "SuperTen",
    },
    {
      base: "BIRD",
      mate: "Yeti",
    },
    {
      base: "BIRD",
      mate: "Goategon",
    },
    {
      base: "BIRD",
      mate: "Trumpeter",
    },
    {
      base: "BIRD",
      mate: "Skullgon",
    },
    {
      base: "BIRD",
      mate: "DeadNoble",
    },
    {
      base: "BIRD",
      mate: "WhiteKing",
    },
    {
      base: "BIRD",
      mate: "Skeletor",
    },
    {
      base: "BIRD",
      mate: "Servant",
    },
    {
      base: "BIRD",
      mate: "IceMan",
    },
  ],
  Phoenix: [
    {
      base: "BIRD",
      mate: "DrakSlime",
    },
    {
      base: "BIRD",
      mate: "GulpBeast",
    },
    {
      base: "BIRD",
      mate: "IronTurt",
    },
    {
      base: "BIRD",
      mate: "Grizzly",
    },
    {
      base: "BIRD",
      mate: "ArcDemon",
    },
    {
      base: "BIRD",
      mate: "CopyCat",
    },
    {
      base: "BIRD",
      mate: "Gismo",
    },
    {
      base: "BIRD",
      mate: "LavaMan",
    },
  ],
  ZapBird: [
    {
      base: "MadCondor",
      mate: "Gismo",
    },
    {
      base: "Phoenix",
      mate: "Gismo",
    },
    {
      base: "WhipBird",
      mate: "Gismo",
    },
    {
      base: "BIRD",
      mate: "BOSS",
    },
  ],
  WhipBird: [
    {
      base: "LandOwl",
      mate: "RockSlime",
    },
    {
      base: "LandOwl",
      mate: "SlimeBorg",
    },
    {
      base: "LandOwl",
      mate: "Digster",
    },
    {
      base: "LandOwl",
      mate: "MetalDrak",
    },
    {
      base: "LandOwl",
      mate: "Golem",
    },
    {
      base: "LandOwl",
      mate: "StoneMan",
    },
    {
      base: "MadGoose",
      mate: "RockSlime",
    },
    {
      base: "MadGoose",
      mate: "SlimeBorg",
    },
    {
      base: "MadGoose",
      mate: "Digster",
    },
    {
      base: "MadGoose",
      mate: "MetalDrak",
    },
    {
      base: "MadGoose",
      mate: "Golem",
    },
    {
      base: "MadGoose",
      mate: "StoneMan",
    },
    {
      base: "MadCondor",
      mate: "RockSlime",
    },
    {
      base: "MadCondor",
      mate: "SlimeBorg",
    },
    {
      base: "MadCondor",
      mate: "Digster",
    },
    {
      base: "MadCondor",
      mate: "MetalDrak",
    },
    {
      base: "MadCondor",
      mate: "Golem",
    },
    {
      base: "MadCondor",
      mate: "StoneMan",
    },
    {
      base: "Blizzardy",
      mate: "RockSlime",
    },
    {
      base: "Blizzardy",
      mate: "SlimeBorg",
    },
    {
      base: "Blizzardy",
      mate: "Digster",
    },
    {
      base: "Blizzardy",
      mate: "MetalDrak",
    },
    {
      base: "Blizzardy",
      mate: "Golem",
    },
    {
      base: "Blizzardy",
      mate: "StoneMan",
    },
    {
      base: "ZapBird",
      mate: "RockSlime",
    },
    {
      base: "ZapBird",
      mate: "SlimeBorg",
    },
    {
      base: "ZapBird",
      mate: "Digster",
    },
    {
      base: "ZapBird",
      mate: "MetalDrak",
    },
    {
      base: "ZapBird",
      mate: "Golem",
    },
    {
      base: "ZapBird",
      mate: "StoneMan",
    },
    {
      base: "BIRD",
      mate: "Rayburn",
    },
  ],
  FunkyBird: [
    {
      base: "BIRD",
      mate: "DanceVegi",
    },
  ],
  RainHawk: [
    {
      base: "Blizzardy",
      mate: "Phoenix",
    },
  ],
  MadPlant: [
    {
      base: "PLANT",
      mate: "SLIME",
    },
  ],
  FireWeed: [
    {
      base: "PLANT",
      mate: "DRAGON",
    },
  ],
  FloraMan: [
    {
      base: "PLANT",
      mate: "BEAST",
    },
  ],
  WingTree: [
    {
      base: "PLANT",
      mate: "BIRD",
    },
  ],
  CactiBall: [
    {
      base: "PLANT",
      mate: "BUG",
    },
  ],
  Gulpple: [
    {
      base: "PLANT",
      mate: "DEVIL",
    },
  ],
  Toadstool: [
    {
      base: "PLANT",
      mate: "ZOMBIE",
    },
  ],
  AmberWeed: [
    {
      base: "PLANT",
      mate: "MATERIAL",
    },
  ],
  StubSuck: [
    {
      base: "AmberWeed",
      mate: "BEAST",
    },
  ],
  Oniono: [
    {
      base: "PLANT",
      mate: "Gophecada",
    },
  ],
  DanceVegi: [
    {
      base: "MadPlant",
      mate: "BEAST",
    },
    {
      base: "PLANT",
      mate: "Facer",
    },
  ],
  TreeBoy: [
    {
      base: "PLANT",
      mate: "Pixy",
    },
  ],
  FaceTree: [
    {
      base: "HerbMan",
      mate: "DRAGON",
    },
    {
      base: "PLANT",
      mate: "NiteWhip",
    },
  ],
  HerbMan: [
    {
      base: "DanceVegi",
      mate: "DEVIL",
    },
    {
      base: "PLANT",
      mate: "FunkyBird",
    },
  ],
  BeanMan: [
    {
      base: "PLANT",
      mate: "PillowRat",
    },
  ],
  EvilSeed: [
    {
      base: "PLANT",
      mate: "RockSlime",
    },
    {
      base: "PLANT",
      mate: "BigEye",
    },
    {
      base: "PLANT",
      mate: "DuckKite",
    },
    {
      base: "PLANT",
      mate: "Butterfly",
    },
    {
      base: "PLANT",
      mate: "Eyeder",
    },
    {
      base: "PLANT",
      mate: "DarkEye",
    },
    {
      base: "PLANT",
      mate: "EyeBall",
    },
    {
      base: "PLANT",
      mate: "MadMirror",
    },
  ],
  ManEater: [
    {
      base: "EvilSeed",
      mate: "EvilSeed",
    },
  ],
  Snapper: [
    {
      base: "ManEater",
      mate: "ManEater",
    },
  ],
  Rosevine: [
    {
      base: "PLANT",
      mate: "BOSS",
    },
  ],
  GiantSlug: [
    {
      base: "BUG",
      mate: "SLIME",
    },
  ],
  Catapila: [
    {
      base: "BUG",
      mate: "DRAGON",
    },
  ],
  Gophecada: [
    {
      base: "BUG",
      mate: "BEAST",
    },
  ],
  Butterfly: [
    {
      base: "BUG",
      mate: "BIRD",
    },
  ],
  WeedBug: [
    {
      base: "BUG",
      mate: "PLANT",
    },
  ],
  GiantWorm: [
    {
      base: "BUG",
      mate: "DEVIL",
    },
  ],
  Lipsy: [
    {
      base: "BUG",
      mate: "ZOMBIE",
    },
  ],
  StagBug: [
    {
      base: "BUG",
      mate: "MATERIAL",
    },
  ],
  ArmyAnt: [
    {
      base: "GiantSlug",
      mate: "SLIME",
    },
  ],
  TailEater: [
    {
      base: "WeedBug",
      mate: "PLANT",
    },
    {
      base: "BUG",
      mate: "FloraMan",
    },
  ],
  ArmorPede: [
    {
      base: "GiantWorm",
      mate: "MATERIAL",
    },
    {
      base: "Droll",
      mate: "DRAGON",
    },
    {
      base: "BUG",
      mate: "IronTurt",
    },
  ],
  Eyeder: [
    {
      base: "Catapila",
      mate: "BEAST",
    },
    {
      base: "BUG",
      mate: "AmberWeed",
    },
  ],
  GiantMoth: [
    {
      base: "Butterfly",
      mate: "DEVIL",
    },
    {
      base: "BUG",
      mate: "Saccer",
    },
  ],
  Droll: [
    {
      base: "Butterfly",
      mate: "Butterfly",
    },
    {
      base: "Butterfly",
      mate: "TailEater",
    },
    {
      base: "Butterfly",
      mate: "Eyeder",
    },
    {
      base: "TailEater",
      mate: "Butterfly",
    },
    {
      base: "TailEater",
      mate: "TailEater",
    },
    {
      base: "TailEater",
      mate: "Eyeder",
    },
    {
      base: "Eyeder",
      mate: "Butterfly",
    },
    {
      base: "Eyeder",
      mate: "TailEater",
    },
    {
      base: "Eyeder",
      mate: "Eyeder",
    },
    {
      base: "Lipsy",
      mate: "SLIME",
    },
    {
      base: "BUG",
      mate: "Spooky",
    },
  ],
  ArmyCrab: [
    {
      base: "BUG",
      mate: "DarkCrab",
    },
  ],
  MadHornet: [
    {
      base: "Eyeder",
      mate: "ZOMBIE",
    },
    {
      base: "Eyeder",
      mate: "FairyRat",
    },
    {
      base: "Droll",
      mate: "ZOMBIE",
    },
    {
      base: "Droll",
      mate: "FairyRat",
    },
    {
      base: "BUG",
      mate: "FairyRat",
    },
  ],
  HornBeet: [
    {
      base: "StagBug",
      mate: "StagBug",
    },
    {
      base: "ArmorPede",
      mate: "DEVIL",
    },
  ],
  Armorpion: [
    {
      base: "HornBeet",
      mate: "HornBeet",
    },
  ],
  Digster: [
    {
      base: "BUG",
      mate: "BOSS",
    },
  ],
  Pixy: [
    {
      base: "DEVIL",
      mate: "SLIME",
    },
  ],
  ArcDemon: [
    {
      base: "AgDevil",
      mate: "SpotKing",
    },
    {
      base: "AgDevil",
      mate: "KingSlime",
    },
    {
      base: "AgDevil",
      mate: "MetalKing",
    },
    {
      base: "AgDevil",
      mate: "Andreal",
    },
    {
      base: "AgDevil",
      mate: "GreatDrak",
    },
    {
      base: "AgDevil",
      mate: "Orochi",
    },
    {
      base: "AgDevil",
      mate: "Trumpeter",
    },
    {
      base: "AgDevil",
      mate: "KingLeo",
    },
    {
      base: "AgDevil",
      mate: "ZapBird",
    },
    {
      base: "AgDevil",
      mate: "WhipBird",
    },
    {
      base: "AgDevil",
      mate: "MetalDrak",
    },
    {
      base: "AgDevil",
      mate: "StoneMan",
    },
    {
      base: "Grendal",
      mate: "SpotKing",
    },
    {
      base: "Grendal",
      mate: "KingSlime",
    },
    {
      base: "Grendal",
      mate: "MetalKing",
    },
    {
      base: "Grendal",
      mate: "Andreal",
    },
    {
      base: "Grendal",
      mate: "GreatDrak",
    },
    {
      base: "Grendal",
      mate: "Orochi",
    },
    {
      base: "Grendal",
      mate: "Trumpeter",
    },
    {
      base: "Grendal",
      mate: "KingLeo",
    },
    {
      base: "Grendal",
      mate: "ZapBird",
    },
    {
      base: "Grendal",
      mate: "WhipBird",
    },
    {
      base: "Grendal",
      mate: "MetalDrak",
    },
    {
      base: "Grendal",
      mate: "StoneMan",
    },
    {
      base: "Gigantes",
      mate: "SpotKing",
    },
    {
      base: "Gigantes",
      mate: "KingSlime",
    },
    {
      base: "Gigantes",
      mate: "MetalKing",
    },
    {
      base: "Gigantes",
      mate: "Andreal",
    },
    {
      base: "Gigantes",
      mate: "GreatDrak",
    },
    {
      base: "Gigantes",
      mate: "Orochi",
    },
    {
      base: "Gigantes",
      mate: "Trumpeter",
    },
    {
      base: "Gigantes",
      mate: "KingLeo",
    },
    {
      base: "Gigantes",
      mate: "ZapBird",
    },
    {
      base: "Gigantes",
      mate: "WhipBird",
    },
    {
      base: "Gigantes",
      mate: "MetalDrak",
    },
    {
      base: "Gigantes",
      mate: "StoneMan",
    },
    {
      base: "GateGuard",
      mate: "ZOMBIE",
    },
    {
      base: "Ogre",
      mate: "DRAGON",
    },
    {
      base: "DEVIL",
      mate: "BOSS",
    },
  ],
  AgDevil: [
    {
      base: "EvilBeast",
      mate: "DRAGON",
    },
    {
      base: "SkulRider",
      mate: "DRAGON",
    },
    {
      base: "Gremlin",
      mate: "DRAGON",
    },
    {
      base: "MedusaEye",
      mate: "DRAGON",
    },
  ],
  Demonite: [
    {
      base: "DEVIL",
      mate: "BIRD",
    },
  ],
  DarkEye: [
    {
      base: "DEVIL",
      mate: "PLANT",
    },
  ],
  EyeBall: [
    {
      base: "DEVIL",
      mate: "BUG",
    },
  ],
  SkulRider: [
    {
      base: "DEVIL",
      mate: "ZOMBIE",
    },
  ],
  EvilBeast: [
    {
      base: "DEVIL",
      mate: "MATERIAL",
    },
  ],
  "1EyeClown": [
    {
      base: "Pixy",
      mate: "SLIME",
    },
    {
      base: "Demonite",
      mate: "SLIME",
    },
    {
      base: "EyeBall",
      mate: "SLIME",
    },
  ],
  Gremlin: [
    {
      base: "DEVIL",
      mate: "BEAST",
    },
  ],
  MedusaEye: [
    {
      base: "MedusaEye",
      mate: "ZOMBIE",
    },
    {
      base: "1EyeClown",
      mate: "ZOMBIE",
    },
    {
      base: "Gremlin",
      mate: "ZOMBIE",
    },
    {
      base: "DEVIL",
      mate: "DRAGON",
    },
  ],
  Lionex: [
    {
      base: "ArcDemon",
      mate: "ZOMBIE",
    },
    {
      base: "DEVIL",
      mate: "LizardMan",
    },
  ],
  GoatHorn: [
    {
      base: "ArcDemon",
      mate: "BEAST",
    },
    {
      base: "DEVIL",
      mate: "DarkHorn",
    },
  ],
  Orc: [
    {
      base: "DEVIL",
      mate: "BeanMan",
    },
  ],
  Ogre: [
    {
      base: "AgDevil",
      mate: "GulpBeast",
    },
    {
      base: "AgDevil",
      mate: "Unicorn",
    },
    {
      base: "AgDevil",
      mate: "Digster",
    },
    {
      base: "AgDevil",
      mate: "Roboster",
    },
    {
      base: "Grendal",
      mate: "GulpBeast",
    },
    {
      base: "Grendal",
      mate: "Unicorn",
    },
    {
      base: "Grendal",
      mate: "Digster",
    },
    {
      base: "Grendal",
      mate: "Roboster",
    },
    {
      base: "Gigantes",
      mate: "GulpBeast",
    },
    {
      base: "Gigantes",
      mate: "Unicorn",
    },
    {
      base: "Gigantes",
      mate: "Digster",
    },
    {
      base: "Gigantes",
      mate: "Roboster",
    },
    {
      base: "GateGuard",
      mate: "DRAGON",
    },
    {
      base: "DEVIL",
      mate: "HammerMan",
    },
  ],
  GateGuard: [
    {
      base: "AgDevil",
      mate: "SlimeBorg",
    },
    {
      base: "AgDevil",
      mate: "Swordgon",
    },
    {
      base: "AgDevil",
      mate: "Coatol",
    },
    {
      base: "AgDevil",
      mate: "MistyWing",
    },
    {
      base: "AgDevil",
      mate: "MadCondor",
    },
    {
      base: "AgDevil",
      mate: "Rosevine",
    },
    {
      base: "AgDevil",
      mate: "GiantMoth",
    },
    {
      base: "AgDevil",
      mate: "Skullgon ",
    },
    {
      base: "AgDevil",
      mate: "DeadNoble",
    },
    {
      base: "AgDevil",
      mate: "WhiteKing",
    },
    {
      base: "Grendal",
      mate: "SlimeBorg",
    },
    {
      base: "Grendal",
      mate: "Swordgon",
    },
    {
      base: "Grendal",
      mate: "Coatol",
    },
    {
      base: "Grendal",
      mate: "MistyWing",
    },
    {
      base: "Grendal",
      mate: "MadCondor",
    },
    {
      base: "Grendal",
      mate: "Rosevine",
    },
    {
      base: "Grendal",
      mate: "GiantMoth",
    },
    {
      base: "Grendal",
      mate: "Skullgon ",
    },
    {
      base: "Grendal",
      mate: "DeadNoble",
    },
    {
      base: "Grendal",
      mate: "WhiteKing",
    },
    {
      base: "Gigantes",
      mate: "SlimeBorg",
    },
    {
      base: "Gigantes",
      mate: "Swordgon",
    },
    {
      base: "Gigantes",
      mate: "Coatol",
    },
    {
      base: "Gigantes",
      mate: "MistyWing",
    },
    {
      base: "Gigantes",
      mate: "MadCondor",
    },
    {
      base: "Gigantes",
      mate: "Rosevine",
    },
    {
      base: "Gigantes",
      mate: "GiantMoth",
    },
    {
      base: "Gigantes",
      mate: "Skullgon ",
    },
    {
      base: "Gigantes",
      mate: "DeadNoble",
    },
    {
      base: "Gigantes",
      mate: "WhiteKing",
    },
    {
      base: "Demonite",
      mate: "Demonite",
    },
    {
      base: "Ogre",
      mate: "ZOMBIE",
    },
  ],
  ChopClown: [
    {
      base: "1EyeClown",
      mate: "1EyeClown",
    },
  ],
  Grendal: [
    {
      base: "SkulRider",
      mate: "BEAST",
    },
    {
      base: "EvilBeast",
      mate: "BEAST",
    },
    {
      base: "Gremlin",
      mate: "BEAST",
    },
    {
      base: "MedusaEye",
      mate: "BEAST",
    },
    {
      base: "DEVIL",
      mate: "MadDragon",
    },
  ],
  Akubar: [
    {
      base: "ArcDemon",
      mate: "GateGuard",
    },
    {
      base: "Grendal",
      mate: "Grendal",
    },
  ],
  MadKnight: [
    {
      base: "DEVIL",
      mate: "RogueNite",
    },
  ],
  Gigantes: [
    {
      base: "SkulRider",
      mate: "ZOMBIE",
    },
    {
      base: "EvilBeast",
      mate: "ZOMBIE",
    },
    {
      base: "DEVIL",
      mate: "BigEye",
    },
  ],
  Centasaur: [
    {
      base: "ArcDemon",
      mate: "DRAGON",
    },
    {
      base: "Ogre",
      mate: "BEAST",
    },
    {
      base: "GateGuard",
      mate: "BEAST",
    },
  ],
  EvilArmor: [
    {
      base: "ArcDemon",
      mate: "MATERIAL",
    },
    {
      base: "Ogre",
      mate: "MATERIAL",
    },
    {
      base: "GateGuard",
      mate: "MATERIAL",
    },
    {
      base: "DEVIL",
      mate: "ArmorPede",
    },
  ],
  Jamirus: [
    {
      base: "Akubar",
      mate: "RainHawk",
    },
    {
      base: "RainHawk",
      mate: "Akubar",
    },
  ],
  Durran: [
    {
      base: "Centasaur",
      mate: "GoldGolem",
    },
    {
      base: "GoldGolem",
      mate: "Centasaur",
    },
  ],
  Spooky: [
    {
      base: "ZOMBIE",
      mate: "SLIME",
    },
  ],
  "??Spooky??": [
    {
      base: "Skullgon",
      mate: "DRAGON",
    },
    {
      base: "DeadNoble",
      mate: "DRAGON",
    },
    {
      base: "WhiteKing",
      mate: "DRAGON",
    },
    {
      base: "BoneSlave",
      mate: "DRAGON",
    },
    {
      base: "Skeletor",
      mate: "DRAGON",
    },
  ],
  Skullgon: [
    {
      base: "ZOMBIE",
      mate: "Swordgon",
    },
    {
      base: "ZOMBIE",
      mate: "Rayburn",
    },
    {
      base: "ZOMBIE",
      mate: "Andreal",
    },
    {
      base: "ZOMBIE",
      mate: "GreatDrak",
    },
    {
      base: "ZOMBIE",
      mate: "Orochi",
    },
    {
      base: "ZOMBIE",
      mate: "BattleRex",
    },
    {
      base: "ZOMBIE",
      mate: "Divinegon",
    },
    {
      base: "DRAGON",
      mate: "Skullgon",
    },
    {
      base: "DRAGON",
      mate: "DeadNoble",
    },
    {
      base: "DRAGON",
      mate: "WhiteKing",
    },
    {
      base: "DRAGON",
      mate: "Servant",
    },
  ],
  Putrepup: [
    {
      base: "ZOMBIE",
      mate: "BEAST",
    },
  ],
  RotRaven: [
    {
      base: "ZOMBIE",
      mate: "BIRD",
    },
  ],
  Mummy: [
    {
      base: "ZOMBIE",
      mate: "PLANT",
    },
  ],
  DarkCrab: [
    {
      base: "ZOMBIE",
      mate: "BUG",
    },
  ],
  DeadNite: [
    {
      base: "ZOMBIE",
      mate: "DEVIL",
    },
  ],
  Shadow: [
    {
      base: "ZOMBIE",
      mate: "MATERIAL",
    },
  ],
  Hork: [
    {
      base: "Spooky",
      mate: "BEAST",
    },
  ],
  Mudron: [
    {
      base: "ZOMBIE",
      mate: "BoxSlime",
    },
    {
      base: "ZOMBIE",
      mate: "FangSlime",
    },
    {
      base: "ZOMBIE",
      mate: "Tonguella",
    },
    {
      base: "ZOMBIE",
      mate: "Yeti",
    },
    {
      base: "ZOMBIE",
      mate: "FunkyBird",
    },
    {
      base: "ZOMBIE",
      mate: "MadPlant",
    },
    {
      base: "ZOMBIE",
      mate: "DanceVegi",
    },
    {
      base: "ZOMBIE",
      mate: "GiantSlug",
    },
    {
      base: "ZOMBIE",
      mate: "Lipsy",
    },
    {
      base: "ZOMBIE",
      mate: "Droll",
    },
  ],
  NiteWhip: [
    {
      base: "MadSpirit",
      mate: "DEVIL",
    },
    {
      base: "DarkCrab",
      mate: "DEVIL",
    },
    {
      base: "ZOMBIE",
      mate: "MistyWing",
    },
  ],
  MadSpirit: [
    {
      base: "Skullgon",
      mate: "BIRD",
    },
    {
      base: "DeadNite",
      mate: "BIRD",
    },
    {
      base: "Mudron",
      mate: "BIRD",
    },
    {
      base: "DeadNoble",
      mate: "BIRD",
    },
    {
      base: "BoneSlave",
      mate: "BIRD",
    },
    {
      base: "Skeletor",
      mate: "BIRD",
    },
    {
      base: "ZOMBIE",
      mate: "DRAGON",
    },
  ],
  WindMerge: [
    {
      base: "RotRaven",
      mate: "BIRD",
    },
    {
      base: "ZOMBIE",
      mate: "WindBeast",
    },
  ],
  Reaper: [
    {
      base: "Spooky",
      mate: "DEVIL",
    },
    {
      base: "Hork",
      mate: "DEVIL",
    },
    {
      base: "ZOMBIE",
      mate: "WeedBug",
    },
  ],
  "???Reaper???": [
    {
      base: "Mudron",
      mate: "ArcDemon",
    },
    {
      base: "MadSpirit",
      mate: "ArcDemon",
    },
    {
      base: "BoneSlave",
      mate: "ArcDemon",
    },
    {
      base: "Skeletor",
      mate: "ArcDemon",
    },
    {
      base: "Mudron",
      mate: "Lionex",
    },
    {
      base: "MadSpirit",
      mate: "Lionex",
    },
    {
      base: "BoneSlave",
      mate: "Lionex",
    },
    {
      base: "Skeletor",
      mate: "Lionex",
    },
    {
      base: "Mudron",
      mate: "GateGuard",
    },
    {
      base: "MadSpirit",
      mate: "GateGuard",
    },
    {
      base: "BoneSlave",
      mate: "GateGuard",
    },
    {
      base: "Skeletor",
      mate: "GateGuard",
    },
    {
      base: "Mudron",
      mate: "MetalDrak",
    },
    {
      base: "MadSpirit",
      mate: "MetalDrak",
    },
    {
      base: "BoneSlave",
      mate: "MetalDrak",
    },
    {
      base: "Skeletor",
      mate: "MetalDrak",
    },
    {
      base: "Mudron",
      mate: "Roboster",
    },
    {
      base: "MadSpirit",
      mate: "Roboster",
    },
    {
      base: "BoneSlave",
      mate: "Roboster",
    },
    {
      base: "Skeletor",
      mate: "Roboster",
    },
  ],
  DeadNoble: [
    {
      base: "Skullgon",
      mate: "Copycat",
    },
    {
      base: "DeadNite",
      mate: "Copycat",
    },
    {
      base: "Mudron",
      mate: "Copycat",
    },
    {
      base: "BoneSlave",
      mate: "Copycat",
    },
    {
      base: "Skeletor",
      mate: "Copycat",
    },
    {
      base: "DeadNite",
      mate: "DeadNite",
    },
  ],
  WhiteKing: [
    {
      base: "Skullgon",
      mate: "SpotKing",
    },
    {
      base: "Skullgon",
      mate: "KingSlime",
    },
    {
      base: "Skullgon",
      mate: "MetalKing",
    },
    {
      base: "Skullgon",
      mate: "Andreal",
    },
    {
      base: "Skullgon",
      mate: "GreatDrak",
    },
    {
      base: "Skullgon",
      mate: "KingLeo",
    },
    {
      base: "Skullgon",
      mate: "Blizzardy",
    },
    {
      base: "Skullgon",
      mate: "ZapBird",
    },
    {
      base: "Skullgon",
      mate: "WhipBird",
    },
    {
      base: "Skullgon",
      mate: "GoldGolem",
    },
    {
      base: "DeadNoble",
      mate: "SpotKing",
    },
    {
      base: "DeadNoble",
      mate: "KingSlime",
    },
    {
      base: "DeadNoble",
      mate: "MetalKing",
    },
    {
      base: "DeadNoble",
      mate: "Andreal",
    },
    {
      base: "DeadNoble",
      mate: "GreatDrak",
    },
    {
      base: "DeadNoble",
      mate: "KingLeo",
    },
    {
      base: "DeadNoble",
      mate: "Blizzardy",
    },
    {
      base: "DeadNoble",
      mate: "ZapBird",
    },
    {
      base: "DeadNoble",
      mate: "WhipBird",
    },
    {
      base: "DeadNoble",
      mate: "GoldGolem",
    },
    {
      base: "BoneSlave",
      mate: "SpotKing",
    },
    {
      base: "BoneSlave",
      mate: "KingSlime",
    },
    {
      base: "BoneSlave",
      mate: "MetalKing",
    },
    {
      base: "BoneSlave",
      mate: "Andreal",
    },
    {
      base: "BoneSlave",
      mate: "GreatDrak",
    },
    {
      base: "BoneSlave",
      mate: "KingLeo",
    },
    {
      base: "BoneSlave",
      mate: "Blizzardy",
    },
    {
      base: "BoneSlave",
      mate: "ZapBird",
    },
    {
      base: "BoneSlave",
      mate: "WhipBird",
    },
    {
      base: "BoneSlave",
      mate: "GoldGolem",
    },
    {
      base: "Skeletor",
      mate: "SpotKing",
    },
    {
      base: "Skeletor",
      mate: "KingSlime",
    },
    {
      base: "Skeletor",
      mate: "MetalKing",
    },
    {
      base: "Skeletor",
      mate: "Andreal",
    },
    {
      base: "Skeletor",
      mate: "GreatDrak",
    },
    {
      base: "Skeletor",
      mate: "KingLeo",
    },
    {
      base: "Skeletor",
      mate: "Blizzardy",
    },
    {
      base: "Skeletor",
      mate: "ZapBird",
    },
    {
      base: "Skeletor",
      mate: "WhipBird",
    },
    {
      base: "Skeletor",
      mate: "GoldGolem",
    },
    {
      base: "ZOMBIE",
      mate: "BOSS",
    },
  ],
  BoneSlave: [
    {
      base: "Mummy",
      mate: "RockSlime",
    },
    {
      base: "Mummy",
      mate: "SlimeBorg",
    },
    {
      base: "Mummy",
      mate: "LandOwl",
    },
    {
      base: "Mummy",
      mate: "MadGoose",
    },
    {
      base: "Mummy",
      mate: "FloraMan",
    },
    {
      base: "Mummy",
      mate: "HornBeet",
    },
    {
      base: "Mummy",
      mate: "Gremlin",
    },
    {
      base: "DeadNite",
      mate: "RockSlime",
    },
    {
      base: "DeadNite",
      mate: "SlimeBorg",
    },
    {
      base: "DeadNite",
      mate: "LandOwl",
    },
    {
      base: "DeadNite",
      mate: "MadGoose",
    },
    {
      base: "DeadNite",
      mate: "FloraMan",
    },
    {
      base: "DeadNite",
      mate: "HornBeet",
    },
    {
      base: "DeadNite",
      mate: "Gremlin",
    },
    {
      base: "Hork",
      mate: "RockSlime",
    },
    {
      base: "Hork",
      mate: "SlimeBorg",
    },
    {
      base: "Hork",
      mate: "LandOwl",
    },
    {
      base: "Hork",
      mate: "MadGoose",
    },
    {
      base: "Hork",
      mate: "FloraMan",
    },
    {
      base: "Hork",
      mate: "HornBeet",
    },
    {
      base: "Hork",
      mate: "Gremlin",
    },
    {
      base: "Hork",
      mate: "Hork",
    },
  ],
  Skeletor: [
    {
      base: "Mummy",
      mate: "GulpBeast",
    },
    {
      base: "Mummy",
      mate: "Grizzly",
    },
    {
      base: "Mummy",
      mate: "MadCat",
    },
    {
      base: "Mummy",
      mate: "MadRaven",
    },
    {
      base: "Mummy",
      mate: "MadCondor",
    },
    {
      base: "Mummy",
      mate: "EvilBeast",
    },
    {
      base: "Mummy",
      mate: "Ogre",
    },
    {
      base: "Mummy",
      mate: "Golem",
    },
    {
      base: "Mummy",
      mate: "StoneMan",
    },
    {
      base: "DeadNite",
      mate: "GulpBeast",
    },
    {
      base: "DeadNite",
      mate: "Grizzly",
    },
    {
      base: "DeadNite",
      mate: "MadCat",
    },
    {
      base: "DeadNite",
      mate: "MadRaven",
    },
    {
      base: "DeadNite",
      mate: "MadCondor",
    },
    {
      base: "DeadNite",
      mate: "EvilBeast",
    },
    {
      base: "DeadNite",
      mate: "Ogre",
    },
    {
      base: "DeadNite",
      mate: "Golem",
    },
    {
      base: "DeadNite",
      mate: "StoneMan",
    },
    {
      base: "Mudron",
      mate: "GulpBeast",
    },
    {
      base: "Mudron",
      mate: "Grizzly",
    },
    {
      base: "Mudron",
      mate: "MadCat",
    },
    {
      base: "Mudron",
      mate: "MadRaven",
    },
    {
      base: "Mudron",
      mate: "MadCondor",
    },
    {
      base: "Mudron",
      mate: "EvilBeast",
    },
    {
      base: "Mudron",
      mate: "Ogre",
    },
    {
      base: "Mudron",
      mate: "Golem",
    },
    {
      base: "Mudron",
      mate: "StoneMan",
    },
    {
      base: "Mudron",
      mate: "GulpBeast",
    },
    {
      base: "Mudron",
      mate: "Grizzly",
    },
    {
      base: "Mudron",
      mate: "MadCat",
    },
    {
      base: "Mudron",
      mate: "MadRaven",
    },
    {
      base: "Mudron",
      mate: "MadCondor",
    },
    {
      base: "Mudron",
      mate: "EvilBeast",
    },
    {
      base: "Mudron",
      mate: "Ogre",
    },
    {
      base: "Mudron",
      mate: "Golem",
    },
    {
      base: "Mudron",
      mate: "StoneMan",
    },
    {
      base: "BoneSlave",
      mate: "BoneSlave",
    },
    {
      base: "MadSpirit",
      mate: "DRAGON",
    },
  ],
  Servant: [
    {
      base: "Skeletor",
      mate: "Skeletor",
    },
    {
      base: "WhiteKing",
      mate: "DEVIL",
    },
  ],
  JewelBag: [
    {
      base: "MATERIAL",
      mate: "SLIME",
    },
  ],
  EvilWand: [
    {
      base: "MATERIAL",
      mate: "DRAGON",
    },
  ],
  MadCandle: [
    {
      base: "MATERIAL",
      mate: "BEAST",
    },
  ],
  CoilBird: [
    {
      base: "MATERIAL",
      mate: "BIRD",
    },
  ],
  Facer: [
    {
      base: "MATERIAL",
      mate: "PLANT",
    },
  ],
  SpikyBoy: [
    {
      base: "MATERIAL",
      mate: "BUG",
    },
  ],
  MadMirror: [
    {
      base: "MATERIAL",
      mate: "DEVIL",
    },
  ],
  RogueNite: [
    {
      base: "MATERIAL",
      mate: "ZOMBIE",
    },
  ],
  Goopi: [
    {
      base: "JewelBag",
      mate: "SLIME",
    },
  ],
  Voodoll: [
    {
      base: "StoneMan",
      mate: "DrakSlime",
    },
    {
      base: "StoneMan",
      mate: "Snaily",
    },
    {
      base: "StoneMan",
      mate: "SlimeNite",
    },
    {
      base: "StoneMan",
      mate: "RockSlime",
    },
    {
      base: "Golem",
      mate: "DrakSlime",
    },
    {
      base: "Golem",
      mate: "Snaily",
    },
    {
      base: "Golem",
      mate: "SlimeNite",
    },
    {
      base: "Golem",
      mate: "RockSlime",
    },
    {
      base: "MATERIAL",
      mate: "Lipsy",
    },
  ],
  MetalDrak: [
    {
      base: "Andreal",
      mate: "SlimeBorg",
    },
    {
      base: "Andreal",
      mate: "KingSlime",
    },
    {
      base: "Andreal",
      mate: "Digster",
    },
    {
      base: "Andreal",
      mate: "Skullgon",
    },
    {
      base: "Andreal",
      mate: "Roboster",
    },
    {
      base: "Andreal",
      mate: "Golem",
    },
    {
      base: "Andreal",
      mate: "StoneMan",
    },
    {
      base: "Spikerous",
      mate: "SlimeBorg",
    },
    {
      base: "Spikerous",
      mate: "KingSlime",
    },
    {
      base: "Spikerous",
      mate: "Digster",
    },
    {
      base: "Spikerous",
      mate: "Skullgon",
    },
    {
      base: "Spikerous",
      mate: "Roboster",
    },
    {
      base: "Spikerous",
      mate: "Golem",
    },
    {
      base: "Spikerous",
      mate: "StoneMan",
    },
    {
      base: "GreatDrak",
      mate: "SlimeBorg",
    },
    {
      base: "GreatDrak",
      mate: "KingSlime",
    },
    {
      base: "GreatDrak",
      mate: "Digster",
    },
    {
      base: "GreatDrak",
      mate: "Skullgon",
    },
    {
      base: "GreatDrak",
      mate: "Roboster",
    },
    {
      base: "GreatDrak",
      mate: "Golem",
    },
    {
      base: "GreatDrak",
      mate: "StoneMan",
    },
    {
      base: "MetalDrak",
      mate: "DRAGON",
    },
    {
      base: "Roboster",
      mate: "DRAGON",
    },
    {
      base: "MATERIAL",
      mate: "Andreal",
    },
  ],
  Balzak: [
    {
      base: "LavaMan",
      mate: "DEVIL",
    },
    {
      base: "IceMan",
      mate: "DEVIL",
    },
    {
      base: "MATERIAL",
      mate: "BOSS",
    },
  ],
  SabreMan: [
    {
      base: "EvilWand",
      mate: "LandOwl",
    },
    {
      base: "EvilWand",
      mate: "MadGoose",
    },
    {
      base: "EvilWand",
      mate: "Phoenix",
    },
    {
      base: "EvilWand",
      mate: "FunkyBird",
    },
    {
      base: "Voodoll",
      mate: "LandOwl",
    },
    {
      base: "Voodoll",
      mate: "MadGoose",
    },
    {
      base: "Voodoll",
      mate: "Phoenix",
    },
    {
      base: "Voodoll",
      mate: "FunkyBird",
    },
    {
      base: "Golem",
      mate: "LandOwl",
    },
    {
      base: "Golem",
      mate: "MadGoose",
    },
    {
      base: "Golem",
      mate: "Phoenix",
    },
    {
      base: "Golem",
      mate: "FunkyBird",
    },
    {
      base: "StoneMan",
      mate: "LandOwl",
    },
    {
      base: "StoneMan",
      mate: "MadGoose",
    },
    {
      base: "StoneMan",
      mate: "Phoenix",
    },
    {
      base: "StoneMan",
      mate: "FunkyBird",
    },
    {
      base: "MATERIAL",
      mate: "GiantWorm",
    },
  ],
  CurseLamp: [
    {
      base: "Roboster",
      mate: "BIRD",
    },
    {
      base: "MATERIAL",
      mate: "WingTree",
    },
  ],
  Roboster: [
    {
      base: "SabreMan",
      mate: "SlimeBorg",
    },
    {
      base: "SabreMan",
      mate: "GreatDrak",
    },
    {
      base: "SabreMan",
      mate: "Unicorn",
    },
    {
      base: "SabreMan",
      mate: "Ogre",
    },
    {
      base: "SabreMan",
      mate: "Grendal",
    },
    {
      base: "SabreMan",
      mate: "EvilArmor",
    },
    {
      base: "SabreMan",
      mate: "DeadNoble",
    },
    {
      base: "SabreMan",
      mate: "Skeletor",
    },
    {
      base: "MATERIAL",
      mate: "GulpBeast",
    },
    {
      base: "MATERIAL",
      mate: "Grizzly",
    },
    {
      base: "MATERIAL",
      mate: "Trumpeter",
    },
    {
      base: "MATERIAL",
      mate: "KingLeo",
    },
    {
      base: "MATERIAL",
      mate: "SkulRider",
    },
  ],
  EvilPot: [
    {
      base: "Gismo",
      mate: "DEVIL",
    },
    {
      base: "MATERIAL",
      mate: "Snaily",
    },
  ],
  Gismo: [
    {
      base: "MadCandle",
      mate: "DrakSlime",
    },
    {
      base: "MadCandle",
      mate: "Wyvern",
    },
    {
      base: "MadCandle",
      mate: "MistyWing",
    },
    {
      base: "MadCandle",
      mate: "Phoenix",
    },
    {
      base: "MadCandle",
      mate: "FireWeed",
    },
    {
      base: "MadCandle",
      mate: "EvilSeed",
    },
    {
      base: "MadMirror",
      mate: "DrakSlime",
    },
    {
      base: "MadMirror",
      mate: "Wyvern",
    },
    {
      base: "MadMirror",
      mate: "MistyWing",
    },
    {
      base: "MadMirror",
      mate: "Phoenix",
    },
    {
      base: "MadMirror",
      mate: "FireWeed",
    },
    {
      base: "MadMirror",
      mate: "EvilSeed",
    },
    {
      base: "Goopi",
      mate: "DrakSlime",
    },
    {
      base: "Goopi",
      mate: "Wyvern",
    },
    {
      base: "Goopi",
      mate: "MistyWing",
    },
    {
      base: "Goopi",
      mate: "Phoenix",
    },
    {
      base: "Goopi",
      mate: "FireWeed",
    },
    {
      base: "Goopi",
      mate: "EvilSeed",
    },
  ],
  LavaMan: [
    {
      base: "MetalDrak",
      mate: "Orochi",
    },
    {
      base: "MetalDrak",
      mate: "KingLeo",
    },
    {
      base: "MetalDrak",
      mate: "ZapBird",
    },
    {
      base: "MetalDrak",
      mate: "ArcDemon",
    },
    {
      base: "MetalDrak",
      mate: "Centasaur",
    },
  ],
  IceMan: [
    {
      base: "MetalDrak",
      mate: "Skullgon",
    },
    {
      base: "MetalDrak",
      mate: "WhiteKing",
    },
    {
      base: "Roboster",
      mate: "KingLeo",
    },
  ],
  Mimic: [
    {
      base: "Roboster",
      mate: "ZOMBIE",
    },
    {
      base: "MATERIAL",
      mate: "BoxSlime",
    },
  ],
  MudDoll: [
    {
      base: "Goopi",
      mate: "Goopi",
    },
  ],
  Golem: [
    {
      base: "MudDoll",
      mate: "MudDoll",
    },
  ],
  StoneMan: [
    {
      base: "Golem",
      mate: "Golem",
    },
    {
      base: "MATERIAL",
      mate: "HornBeet",
    },
    {
      base: "MATERIAL",
      mate: "Digster",
    },
  ],
  BombCrag: [
    {
      base: "SpikyBoy",
      mate: "SpikyBoy",
    },
    {
      base: "Roboster",
      mate: "BUG",
    },
  ],
  GoldGolem: [
    {
      base: "IceMan",
      mate: "LavaMan",
    },
  ],
  DracoLord1: [
    {
      base: "Servant",
      mate: "Andreal",
    },
    {
      base: "Servant",
      mate: "GreatDrak",
    },
  ],
  DracoLord2: [
    {
      base: "DracoLord1",
      mate: "Divinegon",
    },
  ],
  Hargon: [
    {
      base: "WhiteKing",
      mate: "MetalKing",
    },
  ],
  Sidoh: [
    {
      base: "Jamirus",
      mate: "Rosevine",
    },
  ],
  Baramos: [
    {
      base: "Hargon",
      mate: "Orochi",
    },
  ],
  Zoma: [
    {
      base: "DracoLord",
      mate: "Sidoh",
    },
    {
      base: "DracoLord2",
      mate: "Sidoh",
    },
  ],
  Pizzaro: [
    {
      base: "Durran",
      mate: "Divinegon",
    },
  ],
  Esterk: [
    {
      base: "Pizzaro",
      mate: "KingLeo",
    },
  ],
  Mirudraas1: [
    {
      base: "Esterk",
      mate: "GoldSlime",
    },
  ],
  Mirudraas2: [
    {
      base: "Mirudraas1",
      mate: "Spikerous",
    },
  ],
  Mudou: [
    {
      base: "Baramos",
      mate: "DarkHorn",
    },
  ],
  DeathMore1: [
    {
      base: "Zoma",
      mate: "Mirudraas",
    },
    {
      base: "Zoma",
      mate: "Mirudraas2",
    },
  ],
  DeathMore2: [
    {
      base: "DeathMore1",
      mate: "Armorpion",
    },
  ],
  DeathMore3: [
    {
      base: "DeathMore2",
      mate: "Mudou",
    },
  ],
  DarkDrium: [
    {
      base: "DeathMore3",
      mate: "Watabou",
    },
  ],
};

export default recipesByMonster;

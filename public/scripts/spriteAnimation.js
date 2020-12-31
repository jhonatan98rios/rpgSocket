const sprites = {
  static_sprites: [
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',

    './static/images/character/static/0_Warrior_001.png',

    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',
    './static/images/character/static/0_Warrior_000.png',

    './static/images/character/static/0_Warrior_001.png',
  ],

  attack_sprites : [
    './static/images/character/0_Warrior_Attack_1_0.png',
    './static/images/character/0_Warrior_Attack_1_1.png',
    './static/images/character/0_Warrior_Attack_1_2.png',
    './static/images/character/0_Warrior_Attack_1_3.png',
    './static/images/character/0_Warrior_Attack_1_4.png',
    './static/images/character/0_Warrior_Attack_1_5.png',
    './static/images/character/0_Warrior_Attack_1_6.png',
    './static/images/character/0_Warrior_Attack_1_7.png',
    './static/images/character/0_Warrior_Attack_1_8.png',
    './static/images/character/0_Warrior_Attack_1_9.png',
    './static/images/character/0_Warrior_Attack_1_10.png',
    './static/images/character/0_Warrior_Attack_1_11.png',
    './static/images/character/0_Warrior_Attack_1_12.png',
    './static/images/character/0_Warrior_Attack_1_13.png',
    './static/images/character/0_Warrior_Attack_1_14.png',
  ],

  damage_sprites : [
    './static/images/character/0_Warrior_Hurt_000.png',
    './static/images/character/0_Warrior_Hurt_001.png',
    './static/images/character/0_Warrior_Hurt_002.png',
    './static/images/character/0_Warrior_Hurt_003.png',
    './static/images/character/0_Warrior_Hurt_004.png',
    './static/images/character/0_Warrior_Hurt_005.png',
    './static/images/character/0_Warrior_Hurt_006.png',
    './static/images/character/0_Warrior_Hurt_007.png',
    './static/images/character/0_Warrior_Hurt_008.png',
    './static/images/character/0_Warrior_Hurt_009.png',
    './static/images/character/0_Warrior_Hurt_010.png',
    './static/images/character/0_Warrior_Hurt_011.png',
    './static/images/character/0_Warrior_Hurt_012.png',
    './static/images/character/0_Warrior_Hurt_013.png',
    './static/images/character/0_Warrior_Hurt_014.png',
  ],

  died_sprites : [
    './static/images/character/0_Warrior_Died_000.png',
    './static/images/character/0_Warrior_Died_001.png',
    './static/images/character/0_Warrior_Died_002.png',
    './static/images/character/0_Warrior_Died_003.png',
    './static/images/character/0_Warrior_Died_004.png',
    './static/images/character/0_Warrior_Died_005.png',
    './static/images/character/0_Warrior_Died_006.png',
    './static/images/character/0_Warrior_Died_007.png',
    './static/images/character/0_Warrior_Died_008.png',
    './static/images/character/0_Warrior_Died_009.png',
    './static/images/character/0_Warrior_Died_010.png',
    './static/images/character/0_Warrior_Died_011.png',
    './static/images/character/0_Warrior_Died_012.png',
    './static/images/character/0_Warrior_Died_013.png',
    './static/images/character/0_Warrior_Died_014.png',
    './static/images/character/0_Warrior_Died_015.png',
    './static/images/character/0_Warrior_Died_016.png',
    './static/images/character/0_Warrior_Died_017.png',
    './static/images/character/0_Warrior_Died_018.png',
    './static/images/character/0_Warrior_Died_019.png',
    './static/images/character/0_Warrior_Died_020.png',
    './static/images/character/0_Warrior_Died_021.png',
    './static/images/character/0_Warrior_Died_022.png',
    './static/images/character/0_Warrior_Died_023.png',
    './static/images/character/0_Warrior_Died_024.png',
    './static/images/character/0_Warrior_Died_025.png',
    './static/images/character/0_Warrior_Died_026.png',
    './static/images/character/0_Warrior_Died_027.png',
    './static/images/character/0_Warrior_Died_028.png',
    './static/images/character/0_Warrior_Died_029.png'
  ]
}

function damageAnimation(opponent) {
  opponent.classList.add("blink")

  let blinker = setInterval(() => {
    opponent.classList.remove("blink")
    clearInterval(blinker)
  }, 900)
}
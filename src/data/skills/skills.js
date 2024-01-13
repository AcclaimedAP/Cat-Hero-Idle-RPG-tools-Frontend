import ImageDinnerTime from "../../assets/sprites/skills/common/GV_skillicon_dinnertime.png"
// import ImageSausage from "../../assets/sprites/companions/uncommon/aGV_pet_2star_sausage_0000.png"

export const skills = [
  {
    name: "Dinner Time",
    image: ImageDinnerTime,
    rarity: "Common",
    description: "Summons ${count} food missiles that deal ${dmgMultiplier} DMG of ATK.",
    cooldown: 20,
    basePossesBonus: {
      ATKBoost: 0.01,
    },
    possesBonusPerLevel: {
      ATKBoost: 0.005,
    },
    levelModifiers: [
      {
        level: 1,
        count: 4,
        dmgMultiplier: 0.55,
      },
      {
        level: 2,
        count: 5,
        dmgMultiplier: 0.6,
      },
      {
        level: 3,
        count: 6,
        dmgMultiplier: 0.65,
      },
      {
        level: 4,
        count: 7,
        dmgMultiplier: 0.7,
      },
      {
        level: 5,
        count: 8,
        dmgMultiplier: 0.75,
      }
    ]
  }
]
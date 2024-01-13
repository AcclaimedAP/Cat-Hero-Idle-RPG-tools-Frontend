import ImageSausage from "../../assets/sprites/companions/uncommon/aGV_pet_2star_sausage_0000.png"

export const companions = [
  {
    name: "Sausage",
    tier: "Uncommon",
    image: ImageSausage,
    manaCost: 1,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "Lv.${level}: Summons extra 1 sausages upon casting Dinner Time that deal extra ${sausageDmgMultiplier}% DMG of the Skill DMG.",
        tiers: [
          {
            level: 1,
            requiredLevel: 1,
            value1: 1.5
          },
          {
            level: 2,
            requiredLevel: 21,
            value1: 2.5
          },
          {
            level: 3,
            requiredLevel: 41,
            value1: 5.5
          }
        ]
      },
      {
        bonusId: 1,
        description: "Lv.${level}: Speeds up the cooldown of Dinner Time by ${coolDownSpeed}%.",
        tiers: [
          {
            level: 1,
            requiredLevel: 11,
            value1: 0.2
          },
          {
            level: 2,
            requiredLevel: 31,
            value1: 0.4
          },
          {
            level: 3,
            requiredLevel: 51,
            value1: 0.6
          }
        ]
      }
    ]
  }
]

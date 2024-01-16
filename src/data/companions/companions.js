import ImageSausage from "../../assets/sprites/companions/uncommon/aGV_pet_2star_sausage_0000.png"

export const companions = [
  {
    name: "Sausage",
    rarity: "Uncommon",
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
            sausageDmgMultiplier: 1.5
          },
          {
            level: 2,
            requiredLevel: 21,
            sausageDmgMultiplier: 2.5
          },
          {
            level: 3,
            requiredLevel: 41,
            sausageDmgMultiplier: 5.5
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
            coolDownSpeed: 0.2
          },
          {
            level: 2,
            requiredLevel: 31,
            coolDownSpeed: 0.4
          },
          {
            level: 3,
            requiredLevel: 51,
            coolDownSpeed: 0.6
          }
        ]
      }
    ]
  }
]
function getDescription(level = 21) {
  const effects = []
  this.specialEffect.map(effect => {
    let description = effect.description;
    let templateVars = effect.tiers.filter(tier => tier.requiredLevel <= level);
    templateVars.map(tier => {
      const desc = description.replace(/\$\{(\w+)\}(%?)/g, (_, variable, isPercent) => {
        let value = tier[variable];
        if (isPercent) {
          value *= 100;
          value += "%";
        }
        return value;
      });
      effects.push(desc);
    });
  }
  );
  return effects;
}

companions.forEach(companion => {
  companion.getDescription = getDescription;
});
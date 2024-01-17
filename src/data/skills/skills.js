import ImageDinnerTime from "../../assets/sprites/skills/common/GV_skillicon_dinnertime.png"

export const skills = [
  {
    name: "Dinner Time",
    image: ImageDinnerTime,
    rarity: "Common",
    description: "Summons ${count} food missiles that deal ${dmgMultiplier}% DMG of ATK.",
    cooldown: 20,
    tags: ["Food"],
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


function getDescription(level = 1) {
  let description = this.description;
  let templateVars = this.levelModifiers[level - 1]
  return description.replace(/\$\{(\w+)\}(%?)/g, (a, variable, isPercent) => {
    let value = templateVars[variable];
    if (isPercent) {
      value = Math.round(value * 100);
      value += "%";
    }
    return value;
  });
}

skills.forEach(skill => {
  skill.getDescription = getDescription;
});
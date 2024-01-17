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
  },
  {
    name: "Sunny",
    rarity: "Uncommon",
    image: null,
    manaCost: 1,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Bread",
    rarity: "Uncommon",
    image: null,
    manaCost: 1,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Cracker",
    rarity: "Uncommon",
    image: null,
    manaCost: 2,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Pudding",
    rarity: "Uncommon",
    image: null,
    manaCost: 2,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Cake",
    rarity: "Uncommon",
    image: null,
    manaCost: 2,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Tamago",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Carrot",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Clover",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Trunk",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Tacoyaki",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Chick",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Burger",
    rarity: "Rare",
    image: null,
    manaCost: 3,
    baseAttack: 0.1,
    baseASPD: 0.4,
    attackPerLevel: 0.005,
    ASPDPerLevel: 0.002,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Jackdolf",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Mouse",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Pingu",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Ghost Cat",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Bunny",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Fire Chick",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Tulip",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Phoenix",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Lightree",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Whopper",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Drake",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Spark",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Cookie Knight",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Pumpky",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Steel Fin",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Angry Bomb",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Devil Cat",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Bro",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Sparrow",
    rarity: "Epic",
    image: null,
    manaCost: 4,
    baseAttack: 0.8,
    baseASPD: 0.8,
    attackPerLevel: 0.01,
    ASPDPerLevel: 0.005,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Cat Black",
    rarity: "Legendary",
    image: null,
    manaCost: 6,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Jack Striker",
    rarity: "Legendary",
    image: null,
    manaCost: 8,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Werewolf",
    rarity: "Legendary",
    image: null,
    manaCost: 8,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Grom",
    rarity: "Legendary",
    image: null,
    manaCost: 8,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "LuLu",
    rarity: "Legendary",
    image: null,
    manaCost: 8,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "RoRo",
    rarity: "Legendary",
    image: null,
    manaCost: 6,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Jack Tiger",
    rarity: "Legendary",
    image: null,
    manaCost: 6,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Jack Jaws",
    rarity: "Legendary",
    image: null,
    manaCost: 6,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Jack Fly",
    rarity: "Legendary",
    image: null,
    manaCost: 6,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "War Wolf",
    rarity: "Legendary",
    image: null,
    manaCost: 6,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Jackdaw",
    rarity: "Legendary",
    image: null,
    manaCost: 8,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
  {
    name: "Tanker",
    rarity: "Legendary",
    image: null,
    manaCost: 8,
    baseAttack: 3.2,
    baseASPD: 1,
    attackPerLevel: 0.103,
    ASPDPerLevel: 0.01,
    specialEffect: [
      {
        bonusId: 0,
        description: "",
        tiers: [
          {
            level: 1,
            requiredLevel: 1
          }
        ]
      }
    ]
  },
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
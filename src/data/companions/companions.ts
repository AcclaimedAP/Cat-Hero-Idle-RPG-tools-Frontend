import { IBaseCompanion, ICompanion } from 'types/ICompanion';

const baseCompanions: IBaseCompanion[] = [
	{
		name: 'Sausage',
		rarity: 'Uncommon',

		manaCost: 1,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: 'Lv.${level}: Summons extra 1 sausages upon casting Dinner Time that deal extra ${sausageDmgMultiplier}% DMG of the Skill DMG.',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
						sausageDmgMultiplier: 1.5,
					},
					{
						level: 2,
						requiredLevel: 21,
						sausageDmgMultiplier: 2.5,
					},
					{
						level: 3,
						requiredLevel: 41,
						sausageDmgMultiplier: 5.5,
					},
				],
			},
			{
				bonusId: 1,
				description: 'Lv.${level}: Speeds up the cooldown of Dinner Time by ${coolDownSpeed}%.',
				tiers: [
					{
						level: 1,
						requiredLevel: 11,
						coolDownSpeed: 0.2,
					},
					{
						level: 2,
						requiredLevel: 31,
						coolDownSpeed: 0.4,
					},
					{
						level: 3,
						requiredLevel: 51,
						coolDownSpeed: 0.6,
					},
				],
			},
		],
	},
	{
		name: 'Sunny',
		rarity: 'Uncommon',

		manaCost: 1,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Bread',
		rarity: 'Uncommon',

		manaCost: 1,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Cracker',
		rarity: 'Uncommon',

		manaCost: 2,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Pudding',
		rarity: 'Uncommon',

		manaCost: 2,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Cake',
		rarity: 'Uncommon',

		manaCost: 2,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Tamago',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Carrot',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Clover',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Trunk',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Takoyaki',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Chick',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Burger',
		rarity: 'Rare',

		manaCost: 3,
		baseAttack: 0.1,
		baseASPD: 0.4,
		attackPerLevel: 0.005,
		ASPDPerLevel: 0.002,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Jackdolf',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Mouse',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Pingu',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Ghost Cat',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Bunny',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Fire Chick',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Tulip',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Phoenix',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Lightree',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Whopper',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Drake',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Spark',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Cookie Knight',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Pumpky',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Steel Fin',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Angry Bomb',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Devil Cat',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Bro',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Sparrow',
		rarity: 'Epic',

		manaCost: 4,
		baseAttack: 0.8,
		baseASPD: 0.8,
		attackPerLevel: 0.01,
		ASPDPerLevel: 0.005,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Cat Black',
		rarity: 'Legendary',

		manaCost: 6,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Jack Striker',
		rarity: 'Legendary',

		manaCost: 8,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
			{
				bonusId: 1,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
			{
				bonusId: 2,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
			{
				bonusId: 3,
				description: 'Reduces required MP by ${selfMpReduction}%.',
				tiers: [
					{
						level: 1,
						requiredLevel: 41,
						selfMpReduction: 1,
					},
					{
						level: 2,
						requiredLevel: 81,
						selfMpReduction: 2,
					},
					{
						level: 3,
						requiredLevel: 121,
						selfMpReduction: 3,
					},
				],
			},
		],
	},
	{
		name: 'Werewolf',
		rarity: 'Legendary',

		manaCost: 8,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Grom',
		rarity: 'Legendary',

		manaCost: 8,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'LuLu',
		rarity: 'Legendary',

		manaCost: 8,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
			{
				bonusId: 1,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
			{
				bonusId: 2,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
			{
				bonusId: 3,
				description: 'Reduces required MP by ${selfMpReduction}%.',
				tiers: [
					{
						level: 1,
						requiredLevel: 41,
						selfMpReduction: 1,
					},
					{
						level: 2,
						requiredLevel: 81,
						selfMpReduction: 2,
					},
					{
						level: 3,
						requiredLevel: 121,
						selfMpReduction: 3,
					},
				],
			},
		],
	},
	{
		name: 'RoRo',
		rarity: 'Legendary',

		manaCost: 6,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Jack Tiger',
		rarity: 'Legendary',

		manaCost: 6,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Jack Jaws',
		rarity: 'Legendary',

		manaCost: 6,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Jack Fly',
		rarity: 'Legendary',

		manaCost: 6,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'War Wolf',
		rarity: 'Legendary',

		manaCost: 6,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Jackdaw',
		rarity: 'Legendary',

		manaCost: 8,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Tanker',
		rarity: 'Legendary',

		manaCost: 8,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
	{
		name: 'Oracle',
		rarity: 'Mythic',

		manaCost: 12,
		baseAttack: 3.2,
		baseASPD: 1,
		attackPerLevel: 0.103,
		ASPDPerLevel: 0.01,
		specialEffect: [
			{
				bonusId: 0,
				description: '',
				tiers: [
					{
						level: 1,
						requiredLevel: 1,
					},
				],
			},
		],
	},
];

function getDescription(this: ICompanion, level = 1) {
	const effects: string[] = [];
	this.specialEffect.map((effect) => {
		let description = effect.description;
		let templateVars = effect.tiers.filter((tier) => tier.requiredLevel <= level);
		templateVars.map((tier) => {
			const desc = description.replace(/\$\{(\w+)\}(%?)/g, (_: string, variable: string | number, isPercent: string) => {
				let value = tier[variable];
				if (isPercent) {
					value *= 100;
					return `${value}%`;
				}
				return String(value);
			});
			effects.push(desc);
		});
	});
	return effects;
}
export const companions: ICompanion[] = baseCompanions.map((companion, index) => {
	return (companion = { id: index, getDescription, ...companion } as ICompanion);
});

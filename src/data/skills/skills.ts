import { IBaseSkill, ISkill } from 'types/ISkill';

const baseSkills: IBaseSkill[] = [
	{
		name: 'Dinner Time',

		rarity: 'Common',
		description: 'Summons ${count} food missiles that deal ${dmgMultiplier}% DMG of ATK.',
		cooldown: 20,
		tags: ['Food'],
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
			},
		],
	},
	{
		name: 'Rat Bomb',

		rarity: 'Common',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.01,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.005,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Super Cat',

		rarity: 'Common',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.01,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.005,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Magic Circus',

		rarity: 'Common',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.01,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.005,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Dessert Coma',

		rarity: 'Uncommon',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.02,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.01,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Leaf Slash',

		rarity: 'Uncommon',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.02,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.01,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Icy Thorns',

		rarity: 'Uncommon',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.02,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.01,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Scraaatch',

		rarity: 'Uncommon',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.02,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.01,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Grrrrrrr!',

		rarity: 'Uncommon',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.02,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.01,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Cluster Bomb',

		rarity: 'Uncommon',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.02,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.01,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Fish Rain',

		rarity: 'Rare',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.05,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.025,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Scarecrow',

		rarity: 'Rare',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.05,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.025,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Tornado',

		rarity: 'Rare',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.05,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.025,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Magic Shield',

		rarity: 'Rare',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.05,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.025,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Chicken Run',

		rarity: 'Rare',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.05,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.025,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Chakra',

		rarity: 'Rare',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.05,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.025,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Howl',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Black Cloud',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Spray Ink',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Burger Party',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Magic Crossbow',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Full Moon',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Catteor',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Cat Laser',

		rarity: 'Epic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.1,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.05,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Claw Punch',

		rarity: 'Legendary',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.4,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.2,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Pirate Sign',

		rarity: 'Legendary',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.4,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.2,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Nocturne Summon',

		rarity: 'Legendary',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.4,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.2,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Black Hole',

		rarity: 'Legendary',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.4,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.2,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Dreadnought Whale',

		rarity: 'Legendary',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 0.4,
		},
		possesBonusPerLevel: {
			ATKBoost: 0.2,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Cat Heroes',

		rarity: 'Mythic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 2,
		},
		possesBonusPerLevel: {
			ATKBoost: 1,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: "Ocean's Punishment",

		rarity: 'Mythic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 2,
		},
		possesBonusPerLevel: {
			ATKBoost: 1,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
	{
		name: 'Shaman Cat',

		rarity: 'Mythic',
		description: '',
		cooldown: 0,
		tags: [],
		basePossesBonus: {
			ATKBoost: 2,
		},
		possesBonusPerLevel: {
			ATKBoost: 1,
		},
		levelModifiers: [
			{
				level: 1,
				dmgMultiplier: 0,
			},
		],
	},
];

function getDescription(this: ISkill, level = 1) {
	let description = this.description;
	let templateVars: { [key: string]: number } = this.levelModifiers[level - 1];
	return description.replace(/\$\{(\w+)\}(%?)/g, (_: string, variable: string | number, isPercent: string) => {
		let value = templateVars[variable];
		if (isPercent) {
			value = Math.round(value * 100);
			return `${value}%`;
		}
		return String(value); // Convert the value to a string
	});
}
export const skills: ISkill[] = baseSkills.map((skill, index) => {
	return (skill = { id: index, getDescription, ...skill } as ISkill);
});

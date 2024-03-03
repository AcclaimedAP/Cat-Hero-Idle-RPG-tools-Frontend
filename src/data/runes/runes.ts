import { IBaseRune, IRune } from 'types/IRune';

const baseRunes: IBaseRune[] = [
	{
		name: 'Dessert Enhanced',
		type: 'Sub',
		label: 'DeSk%De',
		rarity: 'Uncommon',
		description: 'Increases the Skill DMG of Dessert type skills by ${dessertBonusDamage}% per one Dessert companion equipped.',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {
			dessertBonusDamage: 0.2,
		},
	},
	{
		name: 'Triple Shot',
		type: 'Sub',
		label: '3xShot',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Chicken Enhanced',
		type: 'Sub',
		label: 'Skill%Ch',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Medium Enhanced',
		type: 'Sub',
		label: 'Skill%M',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Animal Enhanced',
		type: 'Sub',
		label: 'Dmg%An',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Large Enhanced',
		type: 'Sub',
		label: 'Skill%L',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Cat Enhanced',
		type: 'Sub',
		label: 'CaSk%Ca',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Machine Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'McSk%Mc',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Wolf Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'WoSk%Wo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Double Shot',
		type: 'Sub',
		rarity: 'Uncommon',
		label: '2xShot',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Dragon Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'Skill%Dr',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Shark Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'ShSk%Sh',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Food Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'FoSk%Fo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Magic Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'MaSk%Ma',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Cloud Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'Sk%Cl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Small Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'Sk%Sm',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Hamburger Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'Sk%Ha',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'ATK',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'Atk',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Boss Attack',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'BoDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Plant Enhanced',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'PlSk%Pl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'CRIT DMG',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'CrDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'Fish Boost',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'FishBst',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'CRIT Chance',
		type: 'Sub',
		rarity: 'Uncommon',
		label: 'CrChance',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.1,
		},
		modifiers: {},
	},
	{
		name: 'CRIT DMG',
		type: 'Sub',
		rarity: 'Rare',
		label: 'CrDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'CRIT Chance',
		type: 'Sub',
		rarity: 'Rare',
		label: 'CrChance',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Dessert Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'DeSk%De',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Chicken Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Skill%Ch',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'ATK',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Atk',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Animal Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Dmg%An',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Machine Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'McSk%Mc',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Cat Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'CaSk%Ca',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Fish Boost',
		type: 'Sub',
		rarity: 'Rare',
		label: 'FishBst',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Dragon Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Skill%Dr',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Boss Attack',
		type: 'Sub',
		rarity: 'Rare',
		label: 'BoDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Triple Shot',
		type: 'Sub',
		rarity: 'Rare',
		label: '3xShot',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Double Shot',
		type: 'Sub',
		rarity: 'Rare',
		label: '2xShot',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Small Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Sk%Sm',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Shark Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'ShSk%Sh',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Hamburger Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Sk%Ha',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Wolf Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'WoAtk%Wo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Plant Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'PlSk%Pl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Large Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Skill%L',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Plant MP Improved',
		type: 'Sub',
		rarity: 'Rare',
		label: 'PlMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Magic Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'MaSk%Ma',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Medium Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Skill%M',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Food Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'FoSk%Fo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Cloud Enhanced',
		type: 'Sub',
		rarity: 'Rare',
		label: 'Sk%Cl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Cloud Enhanced 2',
		type: 'Sub',
		rarity: 'Epic',
		label: 'ClDur',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Fish Boost',
		type: 'Sub',
		rarity: 'Epic',
		label: 'FishBst',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Triple Shot',
		type: 'Sub',
		rarity: 'Epic',
		label: '3xShot',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'CRIT DMG',
		type: 'Sub',
		rarity: 'Epic',
		label: 'CrDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Plant MP Improved',
		type: 'Sub',
		rarity: 'Epic',
		label: 'PlMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Hamburger Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Sk%Ha',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Boss Attack',
		type: 'Sub',
		rarity: 'Epic',
		label: 'BoDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Animal MP Improved',
		type: 'Sub',
		rarity: 'Epic',
		label: 'AnMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'ATK',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Atk',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Dragon Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Skill%Dr',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Cloud Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Sk%Cl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Cat Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'CaSk%Ca',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Food Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'FoSk%Fo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Machine Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'McSk%Mc',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Shark Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'ShSk%Sh',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Medium Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Skill%M',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Dessert Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'DeSk%De',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Plant Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'PlSk%Pl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Chicken Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Skill%Ch',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Small Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Sk%Sm',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Magic Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'MaSk%Ma',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Machine MP Improved',
		type: 'Sub',
		rarity: 'Epic',
		label: 'McMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Large Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Skill%L',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Animal Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'Dmg%An',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Wolf Enhanced',
		type: 'Sub',
		rarity: 'Epic',
		label: 'WoSk%Wo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.4,
		},
		modifiers: {},
	},
	{
		name: 'Chicken Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Skill%Ch',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Animal Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Dmg%An',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Machine MP Improved',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'McMp',
		description: '',
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Zero MP Hamburger',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'HaMp',
		description: '',
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Machine Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'McSk%Ma',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Cat Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'CaSk%Ca',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Legendary Enhancement',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'LegSk%Leg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Magic Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'MaSk%Ma',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Animal MP Improved',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'AnMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Plant Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'PlSk%Pl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Wolf MP Improved',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'WoMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Hamburger Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Sk%Ha',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Cloud Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Sk%Cl',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Shark Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'ShSk%Sh',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Wolf Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'WoSk%Wo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Large Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Skill%L',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Medium Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Skill%M',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Small Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Sk%Sm',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Pirate CRIT Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'CrDmg%Pi',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Dessert Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'DeSk%De',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Food Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'FoSk%Fo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Dragon Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Skill%Dr',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Cat Skill Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'CaSk%Ca',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Pirate CRIT Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'CrBst%Pi',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Pirate Skill Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'PiSk%Pi',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Wolf Enhanced',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'Sk%Wo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Cat CRIT Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'CrBst%Ca',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Pirate Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'FiPiSk%',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Cat Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'FiCaSk%',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Fish Boost',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'FishBst',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Boss Attack',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'BoDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'CRIT DMG',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'CrDmg',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Max MP Increased',
		type: 'Sub',
		rarity: 'Legendary',
		label: 'MaxMp',
		description: '',
		
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Pirate CRIT Enhanced',
		type: 'Sub',
		rarity: 'Mythic',
		label: 'CrDmg%Pi',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Pirate CRIT Boost',
		type: 'Sub',
		rarity: 'Mythic',
		label: 'CrBst%Pi',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Pirate Boost',
		type: 'Sub',
		rarity: 'Mythic',
		label: 'FiPiSk%',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cat CRIT Boost',
		type: 'Sub',
		rarity: 'Mythic',
		label: 'CrBst%Ca',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cat Boost',
		type: 'Sub',
		rarity: 'Mythic',
		label: 'FiCaSk%',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Wolf CRIT Enhanced',
		type: 'Sub',
		rarity: 'Mythic',
		label: 'CrDmg%Wo',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Leaf Slash Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Magic Circus Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Random Uncommon Skill',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Rat Bomb Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cluster Bomb Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Scraaatch Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Dessert Coma Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Dinner Time Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Icy Thorns Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Super Cat Enhanced-II',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Grrrrrrr! Enhanced',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Magic Shield Enhanced',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Fish Rain Enhanced',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Random Rare Skill',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Chicken Run Enhanced',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Super Cat Enhanced-II',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Scarecrow Enhanced',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Tornado Enhanced',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Super Cat Enhanced-I',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Chakra Enhanced',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Howl Enhanced',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Magic Crossbow Enhanced',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Burger Party Enhanced',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Full Moon Enhanced',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Catteor Enhanced',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cat Laser Enhanced',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Random Epic Skill',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cloud Enhanced',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Random Legendary Skill',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cat Electric Shock',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Summon Cat Laser',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Pirate x2',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Dreadnought Whale Enhanced',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Black Hole Enhanced',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Claw Punch Enhanced',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Shaman Cat Enhanced',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Guardian Angel',
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Cat Heroes Enhanced',
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: "Ocean's Punishment Enhanced",
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: 'Shaman Cat Enhanced 2',
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
];

export const runes: IRune[] = baseRunes.map((rune, index) => {
	return { id: index, ...rune };
});

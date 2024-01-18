import ImageDessert from '../../assets/sprites/rune/mega-runes/runeImage/GV_petskill_0_0003.png';
import ImageTripleShot from '../../assets/sprites/rune/mega-runes/runeImage/GV_spef_studyicon_0019.png';
import ImageDoubleShot from '../../assets/sprites/rune/mega-runes/runeImage/GV_rune_0004.png';
import ImageChicken from '../../assets/sprites/rune/mega-runes/runeImage/GV_specialrune_0027 1.png';
import ImageMedium from '../../assets/sprites/rune/mega-runes/runeImage/GV_specialrune_0031.png';
import ImageAnimal from '../../assets/sprites/rune/mega-runes/runeImage/GV_petskill_0_0002.png';
import ImageGreenTriangle from '../../assets/sprites/rune/mega-runes/runeImage/GV_runeiconeff_0.png';
import ImageSword from '../../assets/sprites/rune/mega-runes/runeImage/GV_runeiconeff_2.png';
// import ImageLarge from '../../assets/sprites/rune/mega-runes/runeImage/....png';
import ImageCat from '../../assets/sprites/rune/mega-runes/runeImage/GV_petskill_0_0001.png';
import ImageMachine from '../../assets/sprites/rune/mega-runes/runeImage/GV_runeicon_0000_1.png';
import ImageWolf from '../../assets/sprites/rune/mega-runes/runeImage/GV_specialrune_0029.png';
import ImageDragon from '../../assets/sprites/rune/mega-runes/runeImage/GV_runeicon_0006.png';
import ImageShark from '../../assets/sprites/rune/mega-runes/runeImage/GV_specialrune_0020.png';
import ImageFood from '../../assets/sprites/rune/mega-runes/runeImage/GV_petskill_0_0005.png';
import ImageMagic from '../../assets/sprites/rune/mega-runes/runeImage/GV_specialrune_0028 1.png';

import { IBaseRune, IRune } from '../../types/IRune';

const baseRunes: IBaseRune[] = [
	{
		name: 'Dessert Enhanced',
		type: 'Sub',
		label: 'DeSk%De',
		rarity: 'Uncommon',
		description: 'Increases the Skill DMG of Dessert type skills by ${dessertBonusDamage}% per one Dessert companion equipped.',
		image: [ImageDessert],
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
		image: [ImageTripleShot, ImageGreenTriangle],
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
		image: [ImageChicken, ImageSword],
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
		image: [ImageMedium, ImageSword],
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
		image: [ImageAnimal, ImageSword],
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
		image: null,
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
		image: [ImageCat, ImageSword],
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
		label: 'MaSk%Ma',
		description: '',
		image: [ImageMachine, ImageSword],
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
		label: 'WoAtk%Wo',
		description: '',
		image: [ImageWolf, ImageSword],
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
		image: [ImageDoubleShot, ImageGreenTriangle],
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
		image: [ImageDragon, ImageSword],
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
		image: [ImageShark, ImageSword],
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
		image: [ImageFood],
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
		image: [ImageMagic, ImageSword],
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 0.2,
		},
		modifiers: {},
	},
	{
		name: 'Persistent Cloud',
		type: 'Sub',
		rarity: 'Epic',
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Hamburger MP Improved',
		type: 'Sub',
		rarity: 'Legendary',
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 0,
			ATKBoost: 1,
		},
		modifiers: {},
	},
	{
		name: 'Legendary Enchantment',
		type: 'Sub',
		rarity: 'Legendary',
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
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
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Uncommon',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 1,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Rare',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 2,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Epic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 4,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Legendary',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 10,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
	{
		name: '',
		type: 'Main',
		rarity: 'Mythic',
		description: '',
		image: null,
		possessBonus: {
			tankFishLevel: 40,
			ATKBoost: 0,
		},
		modifiers: {},
	},
];

export const runes: IRune[] = baseRunes as IRune[];

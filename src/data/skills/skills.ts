import ImageDinnerTime from 'assets/sprites/skills/common/GV_skillicon_dinnertime.png';
import ImageRatBomb from 'assets/sprites/skills/common/GV_skillicon_boommouse_single.png';
import ImageSuperCat from 'assets/sprites/skills/common/GV_skillicon_supercat.png';
import ImageMagicCircus from 'assets/sprites/skills/common/GV_skillicon_magiccircus.png';
import ImageDessertComa from 'assets/sprites/skills/uncommon/GV_skillicon_dessertmeteor.png';
import ImageLeafSlash from 'assets/sprites/skills/uncommon/GV_skillicon_leaf.png';
import ImageIcyThorns from 'assets/sprites/skills/uncommon/GV_skillicon_ice_single.png';
import ImageScraaatch from 'assets/sprites/skills/uncommon/GV_skill_hunting.png';
import ImageGrrrrrrr from 'assets/sprites/skills/uncommon/GV_skillicon_angry.png';
import ImageClusterBomb from 'assets/sprites/skills/uncommon/GV_skillicon_bomb_single.png';
import ImageFishRain from 'assets/sprites/skills/rare/GV_skillicon_fishbomb.png';
import ImageScarecrow from 'assets/sprites/skills/rare/GV_skillicon_CatScarecrow.png';
import ImageTornado from 'assets/sprites/skills/rare/GV_skillicon_tornado.png';
import ImageMagicShield from 'assets/sprites/skills/rare/GV_skillicon_shield.png';
import ImageChickenRun from 'assets/sprites/skills/rare/GV_skillicon_boomchicken.png';
import ImageChakra from 'assets/sprites/skills/rare/GV_skillicon_magiccompress.png';
import ImageHowl from 'assets/sprites/skills/epic/GV_skill_howling.png';
import ImageBlackCloud from 'assets/sprites/skills/epic/GV_skillicon_blackcloud.png';
import ImageSprayInk from 'assets/sprites/skills/epic/GV_skillicon_26.png';
import ImageBurgerParty from 'assets/sprites/skills/epic/GV_skillicon_bugerparty.png';
import ImageMagicCrossbow from 'assets/sprites/skills/epic/GV_skillicon_arrow.png';
import ImageFullMoon from 'assets/sprites/skills/epic/GV_skillicon_fullmoon.png';
import ImageCatteor from 'assets/sprites/skills/epic/GV_skillicon_meteor.png';
import ImageCatLaser from 'assets/sprites/skills/epic/GV_skillicon_laser_single.png';
import ImageClawPunch from 'assets/sprites/skills/legendary/GV_skill_wolfclaw.png';
import ImagePirateSign from 'assets/sprites/skills/legendary/GV_skillicon_25.png';
import ImageNocturneSummon from 'assets/sprites/skills/legendary/GV_skillicon_24.png';
import ImageBlackHole from 'assets/sprites/skills/legendary/GV_skillicon_blackh.png';
import ImageDreadnoughWhale from 'assets/sprites/skills/legendary/GV_skillicon_gogorae_single.png';
import ImageCatHeroes from 'assets/sprites/skills/mythic/GV_skillicon_catheroes.png';
import ImageOceansPunishment from 'assets/sprites/skills/mythic/GV_skillicon_seaexecution.png';
import { IBaseSkill, ISkill } from 'types/ISkill';

const baseSkills: IBaseSkill[] = [
	{
		name: 'Dinner Time',
		image: ImageDinnerTime,
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
		image: ImageRatBomb,
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
		image: ImageSuperCat,
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
		image: ImageMagicCircus,
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
		image: ImageDessertComa,
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
		image: ImageLeafSlash,
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
		image: ImageIcyThorns,
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
		image: ImageScraaatch,
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
		image: ImageGrrrrrrr,
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
		image: ImageClusterBomb,
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
		image: ImageFishRain,
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
		image: ImageScarecrow,
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
		image: ImageTornado,
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
		image: ImageMagicShield,
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
		image: ImageChickenRun,
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
		image: ImageChakra,
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
		image: ImageHowl,
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
		image: ImageBlackCloud,
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
		image: ImageSprayInk,
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
		image: ImageBurgerParty,
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
		image: ImageMagicCrossbow,
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
		image: ImageFullMoon,
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
		image: ImageCatteor,
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
		image: ImageCatLaser,
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
		image: ImageClawPunch,
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
		image: ImagePirateSign,
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
		image: ImageNocturneSummon,
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
		image: ImageBlackHole,
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
		name: 'Dreadnough Whale',
		image: ImageDreadnoughWhale,
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
		image: ImageCatHeroes,
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
		image: ImageOceansPunishment,
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

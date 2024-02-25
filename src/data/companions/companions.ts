import ImageSausage from 'assets/sprites/companions/uncommon/aGV_pet_2star_sausage_0000.png';
import ImageSunny from 'assets/sprites/companions/uncommon/aGV_pet_1star_eggfried_0000.png';
import ImageBread from 'assets/sprites/companions/uncommon/aGV_pet_1star_bread_0000.png';
import ImageCracker from 'assets/sprites/companions/uncommon/aGV_pet_1star_cracker_0000.png';
import ImagePudding from 'assets/sprites/companions/uncommon/aGV_pet_2star_pudding_0000.png';
import ImageCake from 'assets/sprites/companions/uncommon/aGV_pet_2star_cake_0000.png';
import ImageTamago from 'assets/sprites/companions/rare/bGV_pet_2star_eggsushi_0000.png';
import ImageCarrot from 'assets/sprites/companions/rare/bGV_pet_1star_carrot_0000.png';
import ImageClover from 'assets/sprites/companions/rare/bGV_pet_1star_clover_0000.png';
import ImageTrunk from 'assets/sprites/companions/rare/bGV_pet_1star_log_0000.png';
import ImageTacoyaki from 'assets/sprites/companions/rare/bGV_pet_3star_takoya_0000.png';
import ImageChick from 'assets/sprites/companions/rare/bGV_pet_2star_chick_0000.png';
import ImageBurger from 'assets/sprites/companions/rare/bGV_pet_2star_burger_0000.png';
import ImageJackdolf from 'assets/sprites/companions/epic/cGV_pet_ jackdolf_0000.png';
import ImageMouse from 'assets/sprites/companions/epic/cGV_pet_moustache_0000.png';

import ImagePingu from 'assets/sprites/companions/epic/cGV_pet_3star_pengpeng_0000.png';
import ImageGhostCat from 'assets/sprites/companions/epic/cGV_pet_cathood_0000.png';
import ImageBunny from 'assets/sprites/companions/epic/cGV_pet_5star_clockrabbit_0000.png';
import ImageFireChick from 'assets/sprites/companions/epic/cGV_pet_firebird_0000.png';
import ImageTulip from 'assets/sprites/companions/epic/cGV_pet_flower_0000.png';
import ImagePhoenix from 'assets/sprites/companions/epic/cGV_pet_bluebirdphoenix_0000.png';
import ImageLightree from 'assets/sprites/companions/epic/cGV_pet_bigtree_0000.png';
import ImageWhopper from 'assets/sprites/companions/epic/cGV_pet_kingburger_0000.png';
import ImageDrake from 'assets/sprites/companions/epic/cGV_pet_dragon_0000.png';
import ImageSpark from 'assets/sprites/companions/epic/cGV_pet_babydragon_0000.png';
import ImageCookieKnight from 'assets/sprites/companions/epic/cGV_pet_cookie_0000.png';
import ImagePumpky from 'assets/sprites/companions/epic/cGV_pet_pumpking_0000.png';
import ImageSteelFin from 'assets/sprites/companions/epic/cGV_pet_steelphin_0001.png';
import ImageAngryBomb from 'assets/sprites/companions/epic/cGV_pet_angrybot_0000.png';
import ImageDevilCat from 'assets/sprites/companions/epic/cGV_pet_kong_0000.png';
import ImageBro from 'assets/sprites/companions/epic/cGV_pet_bro_0000.png';
import ImageSparrow from 'assets/sprites/companions/epic/cGV_pet_shortbird_0000.png';
import ImageCatBlack from 'assets/sprites/companions/legendary/dGV_pet_catblack_0000.png';
import ImageJackStriker from 'assets/sprites/companions/legendary/GV_pet_jackwave_0001.png';
import ImageWerewolf from 'assets/sprites/companions/legendary/GV_pet_redwolf_icon.png';
import ImageGrom from 'assets/sprites/companions/legendary/GV_pet_babyredwolf_0000.png';
import ImageLuLu from 'assets/sprites/companions/legendary/GV_pet_Lulu_0003.png';
import ImageRoRo from 'assets/sprites/companions/legendary/dGV_pet_roro_0000.png';
import ImageJackTiger from 'assets/sprites/companions/legendary/dGV_pet_jacktiger_0000.png';
import ImageJackJaws from 'assets/sprites/companions/legendary/dGV_pet_jackjaws_0000.png';
import ImageJackFly from 'assets/sprites/companions/legendary/dGV_pet_jackfly_0000.png';
import ImageWarWolf from 'assets/sprites/companions/legendary/dGV_pet_warwolf_0000.png';
import ImageJackdaw from 'assets/sprites/companions/legendary/dGV_pet_jackdaw_0000.png';
import ImageTanker from 'assets/sprites/companions/legendary/dGV_pet_catmachine_0000.png';
import ImageOracle from 'assets/sprites/companions/mythic/GV_pet_oracle_0000.png';
import { IBaseCompanion, ICompanion } from 'types/ICompanion';

const baseCompanions: IBaseCompanion[] = [
	{
		name: 'Sausage',
		rarity: 'Uncommon',
		image: ImageSausage,
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
		image: ImageSunny,
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
		image: ImageBread,
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
		image: ImageCracker,
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
		image: ImagePudding,
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
		image: ImageCake,
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
		image: ImageTamago,
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
		image: ImageCarrot,
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
		image: ImageClover,
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
		image: ImageTrunk,
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
		name: 'Tacoyaki',
		rarity: 'Rare',
		image: ImageTacoyaki,
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
		image: ImageChick,
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
		image: ImageBurger,
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
		image: ImageJackdolf,
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
		image: ImageMouse,
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
		image: ImagePingu,
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
		image: ImageGhostCat,
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
		image: ImageBunny,
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
		image: ImageFireChick,
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
		image: ImageTulip,
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
		image: ImagePhoenix,
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
		image: ImageLightree,
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
		image: ImageWhopper,
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
		image: ImageDrake,
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
		image: ImageSpark,
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
		image: ImageCookieKnight,
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
		image: ImagePumpky,
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
		image: ImageSteelFin,
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
		image: ImageAngryBomb,
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
		image: ImageDevilCat,
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
		image: ImageBro,
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
		image: ImageSparrow,
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
		image: ImageCatBlack,
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
		image: ImageJackStriker,
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
		name: 'Werewolf',
		rarity: 'Legendary',
		image: ImageWerewolf,
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
		image: ImageGrom,
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
		image: ImageLuLu,
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
		image: ImageRoRo,
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
		image: ImageJackTiger,
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
		image: ImageJackJaws,
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
		image: ImageJackFly,
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
		image: ImageWarWolf,
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
		image: ImageJackdaw,
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
		image: ImageTanker,
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
		image: ImageOracle,
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

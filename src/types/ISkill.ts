export interface IBaseSkill {
	name: string;
	image: string;
	rarity: string;
	description: string;
	cooldown: number;
	tags: string[];
	basePossesBonus: {
		ATKBoost: number;
	};
	possesBonusPerLevel: {
		ATKBoost: number;
	};
	levelModifiers: {
		level: number;
		count?: number;
		dmgMultiplier?: number;
	}[];
	getDescription?: (level?: number) => string;
}

export interface ISkill extends IBaseSkill {
	id: number;
	getDescription: (level?: number) => string;
}

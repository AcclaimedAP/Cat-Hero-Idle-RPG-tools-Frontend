export interface IBaseCompanion {
	name: string;
	rarity: string;
	image: string;
	manaCost: number;
	baseAttack: number;
	baseASPD: number;
	attackPerLevel: number;
	ASPDPerLevel: number;
	specialEffect: {
		bonusId: number;
		description: string;
		tiers: {
			level: number;
			requiredLevel: number;
			[key: string]: number;
		}[];
	}[];
	getDescription?: (level?: number) => string[];
}
export interface ICompanion extends IBaseCompanion {
	id: number;
	getDescription: (level?: number) => string[];
}

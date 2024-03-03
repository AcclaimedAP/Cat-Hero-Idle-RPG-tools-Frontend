export interface IBaseRune {
	name: string;
	label?: string;
	type: string;
	rarity: string;
	description: string;
	possessBonus: {
		tankFishLevel: number;
		ATKBoost: number;
	};
	modifiers: { [key: string]: number };
}

export interface IRune extends IBaseRune {
	id: number;
}

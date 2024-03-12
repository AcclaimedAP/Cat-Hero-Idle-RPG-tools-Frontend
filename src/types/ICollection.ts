export interface ISelectedCompanion {
	id?: number;
	level?: number;
}
export interface ISelectedSkill {
	id?: number;
	level?: number;
}
export interface ISelectedSubRune {
	id?: number;
}
export interface ISelectedMainRune {
	id?: number;
}
export interface ICollection {
	companionsList: ISelectedCompanion[];
	skillList: ISelectedSkill[];
	mainRuneList: ISelectedMainRune[];
	subRuneList: ISelectedSubRune[];
}
export interface IEquipment extends ICollection {
	mp: number;
	baseMp: number;
	shoes: number;
	mpResearchLevel: number;
	maxMp: number;
}
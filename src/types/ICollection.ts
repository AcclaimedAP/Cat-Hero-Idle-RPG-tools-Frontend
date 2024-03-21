/**
 * @interface ICollection
 * @param {ISelectedCompanion[]} companionsList - The list of selected companions
 * @param {ISelectedSkill[]} skillList - The list of selected skills
 * @param {ISelectedMainRune[]} mainRuneList - The list of selected main runes
 * @param {ISelectedSubRune[]} subRuneList - The list of selected sub runes
 *
 */
export interface ICollection {
	companionsList: ISelectedCompanion[];
	skillList: ISelectedSkill[];
	mainRuneList: ISelectedMainRune[];
	subRuneList: ISelectedSubRune[];
}
/**
 * @interface ISelectedCompanion
 * @param {number} id - The id of the companion
 * @param {number} level - The level of the companion
 */
export interface ISelectedCompanion {
	id?: number;
	level?: number;
}
/**
 * @interface ISelectedSkill
 * @param {number} id - The id of the skill
 * @param {number} level - The level of the skill
 */
export interface ISelectedSkill {
	id?: number;
	level?: number;
}
/**
 * @interface ISelectedSubRune
 * @param {number} id - The id of the sub rune
 */
export interface ISelectedSubRune {
	id?: number;
}
/**
 * @interface ISelectedMainRune
 * @param {number} id - The id of the main rune
 */
export interface ISelectedMainRune {
	id?: number;
}
/**
 * @interface IEquipment
 * @param {number} additionalMp - The additional mp of the equipment
 * @param {number} mpResearchLevel - The mp research level of the equipment
 */
export interface IEquipment extends ICollection {
	additionalMp: number;
	mpResearchLevel: number;
}

interface IStuffBoxProps {
	add: (skill: ISelectedSkill) => void;
	remove: (skill: ISelectedSkill) => void;
	isEquipped: boolean;
	filterString: string;
}

export interface ISkillBoxProps extends IStuffBoxProps {
	skill: ISelectedSkill;
}

export interface ICompanionBoxProps extends IStuffBoxProps {
	companion: ISelectedCompanion;
}

export interface IMainRuneBoxProps extends IStuffBoxProps {
	rune: ISelectedMainRune;
}

export interface ISubRuneBoxProps extends IStuffBoxProps {
	rune: ISelectedSubRune;
}


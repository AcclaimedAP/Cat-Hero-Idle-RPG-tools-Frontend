/**
 * Interface for SubRune
 * @interface ISubRune
 * @param {number} id - The id of the rune
 * @param {string} name - The name of the rune
 * @param {string} slug - The slug of the rune
 * @param {string} type - The type of the rune
 * @param {string} rarity - The rarity of the rune
 * @param {string} description - The description of the rune
 * @param {string} type__name - The type name of the rune
 * @param {string[]} values - The values of the rune
 *
 */
export interface ISubRune {
	id: number;
	name: string;
	slug: string;
	type: string;
	rarity: string;
	description: string;
	type__name: string;
	values: string[];
}

/**
 * Interface for MainRune
 * @interface IMainRune
 * @param {number} id - The id of the rune
 * @param {string} name - The name of the rune
 * @param {string} slug - The slug of the rune
 * @param {string} type - The type of the rune
 * @param {string} rarity - The rarity of the rune
 * @param {string} description - The description of the rune
 *
 */
export interface IMainRune {
	id: number;
	name: string;
	slug: string;
	type: string;
	rarity: string;
	description: string;
}

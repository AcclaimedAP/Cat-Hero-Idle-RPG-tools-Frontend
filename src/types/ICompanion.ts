/**
 * Interface for the companion object
 * @interface ICompanion
 * @param {number} id - The id of the companion
 * @param {string} name - The name of the companion
 * @param {string} rarity - The rarity of the companion
 * @param {number} base_mp - The base mp of the companion
 * @param {string} slug - The slug of the companion
 * @param {string[]} types - The types of the companion
 *
 */

export interface ICompanion {
	id: number;
	name: string;
	rarity: string;
	base_mp: number;
	slug: string;
	types: string[];
}

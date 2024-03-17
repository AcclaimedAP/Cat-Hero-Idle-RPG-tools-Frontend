/**
 * Interface for the Skill object
 * @interface ISkill
 * @param {number} id - The id of the skill
 * @param {string} name - The name of the skill
 * @param {string} rarity - The rarity of the skill
 * @param {string} slug - The slug of the skill
 * @param {string[]} types - The types of the skill
 * @param {number} cooldown - The cooldown of the skill
 * @param {string} description - The description of the skill
 */

export interface ISkill {
	id: number;
	name: string;
	rarity: string;
	slug: string;
	types: string[];
	cooldown: number;
	description: string;
}

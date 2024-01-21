import { describe, expect, test } from 'vitest';
import { skills } from 'src/data/skills/skills';

describe('skills', () => {
	test('skills have dynamically added keys', () => {
		const expectedKeys = ['id', 'getDescription'];
		const checkKeys = expectedKeys.every((key) => skills[0].hasOwnProperty(key));
		expect(checkKeys).toBe(true);
	});
	test('ids should be unique', () => {
		const ids = skills.map((skill) => skill.id);
		const uniqueIds = [...new Set(ids)];
		expect(uniqueIds.length).toBe(ids.length);
		expect(uniqueIds).toEqual(ids);
	});
	test('skills getDescription should return a string with values based on level', () => {
		const skill = skills[0];
		const description = skill.getDescription(1);
		expect(typeof description).toBe('string');
	});
	test('skills getDescription with no parameter should return values based on level 1', () => {
		const skill = skills[0];
		const description = skill.getDescription();
		expect(typeof description).toBe('string');
	});
});

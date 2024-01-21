import { describe, expect, test } from 'vitest';
import { skills } from 'src/data/skills/skills';

describe('skills', () => {
	test('skills have dynamically added keys', () => {
		const expectedKeys = ['id', 'getDescription'];
		const checkKeys = expectedKeys.every((key) => skills[0].hasOwnProperty(key));
		expect(checkKeys).toBe(true);
	});
});

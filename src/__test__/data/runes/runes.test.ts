import { describe, expect, test } from 'vitest';
import { runes } from 'src/data/runes/runes';

describe('runes', () => {
	test('runes have dynamically added keys', () => {
		const expectedKeys = ['id'];
		const checkKeys = expectedKeys.every((key) => runes[0].hasOwnProperty(key));
		expect(checkKeys).toBe(true);
	});
	test('ids should be unique', () => {
		const ids = runes.map((rune) => rune.id);
		const uniqueIds = [...new Set(ids)];
		expect(uniqueIds.length).toBe(ids.length);
		expect(uniqueIds).toEqual(ids);
	});
});

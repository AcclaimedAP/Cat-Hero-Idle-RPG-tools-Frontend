import { describe, expect, test } from 'vitest';
import { companions } from 'src/data/companions/companions';

describe('companions', () => {
	test('companions have dynamically added keys', () => {
		const expectedKeys = ['id', 'getDescription'];
		const checkKeys = expectedKeys.every((key) => companions[0].hasOwnProperty(key));
		expect(checkKeys).toBe(true);
	});
	test('ids should be unique', () => {
		const ids = companions.map((companion) => companion.id);
		const uniqueIds = [...new Set(ids)];
		expect(uniqueIds.length).toBe(ids.length);
		expect(uniqueIds).toEqual(ids);
	});
	test('companions getDescription should return array of strings based on level', () => {
		const companion = companions[0];
		const description = companion.getDescription(1);
		console.log(description);
		expect(Array.isArray(description)).toBe(true);
		expect(typeof description[0]).toBe('string');
	});
	test('companions getDescription with no parameter should return values based on level 1', () => {
		const companion = companions[0];
		const description = companion.getDescription();
		expect(Array.isArray(description)).toBe(true);
		expect(typeof description[0]).toBe('string');
	});
});

import { describe, expect, test } from 'vitest';
import { companions } from 'src/data/companions/companions';

describe('companions', () => {
	test('companions have dynamically added keys', () => {
		const expectedKeys = ['id', 'getDescription'];
		const checkKeys = expectedKeys.every((key) => companions[0].hasOwnProperty(key));
		expect(checkKeys).toBe(true);
	});
});

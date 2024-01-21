import { expect, test } from 'vitest';
import { getRuneBackground } from 'utility/imageHandling/getRuneBackground';

test('get rune background based on type and rarity', () => {
	// Main
	expect(getRuneBackground('Main', 'Uncommon')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png');
	expect(getRuneBackground('Main', 'Rare')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_rare.png');
	expect(getRuneBackground('Main', 'Epic')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_epic.png');
	expect(getRuneBackground('Main', 'Legendary')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_legendary.png');
	expect(getRuneBackground('Main', 'Mythic')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_mythic.png');
	expect(getRuneBackground('Main', '')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png');

	// Sub
	expect(getRuneBackground('Sub', 'Uncommon')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_uncommon.png');
	expect(getRuneBackground('Sub', 'Rare')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_rare.png');
	expect(getRuneBackground('Sub', 'Epic')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_epic.png');
	expect(getRuneBackground('Sub', 'Legendary')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_legendary.png');
	expect(getRuneBackground('Sub', 'Mythic')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_mythic.png');
	expect(getRuneBackground('Sub', '')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_uncommon.png');

	// Default
	expect(getRuneBackground('', '')).toBe('/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png');
});

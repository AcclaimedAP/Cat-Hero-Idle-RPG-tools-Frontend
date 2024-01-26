import { expect, test } from 'vitest';
import { getRuneBackground } from 'utility/imageHandling/getRuneBackground';

test('get rune background based on type and rarity', () => {
	// Main
	expect(getRuneBackground('Main', 'Uncommon')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png');
	expect(getRuneBackground('Main', 'Rare')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_rare.png');
	expect(getRuneBackground('Main', 'Epic')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_epic.png');
	expect(getRuneBackground('Main', 'Legendary')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_legendary.png');
	expect(getRuneBackground('Main', 'Mythic')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_mythic.png');
	expect(getRuneBackground('Main', '')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png');

	// Sub
	expect(getRuneBackground('Sub', 'Uncommon')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_uncommon.png');
	expect(getRuneBackground('Sub', 'Rare')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_rare.png');
	expect(getRuneBackground('Sub', 'Epic')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_epic.png');
	expect(getRuneBackground('Sub', 'Legendary')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_legendary.png');
	expect(getRuneBackground('Sub', 'Mythic')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_mythic.png');
	expect(getRuneBackground('Sub', '')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_sub_uncommon.png');

	// Default
	expect(getRuneBackground('', '')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png');
});

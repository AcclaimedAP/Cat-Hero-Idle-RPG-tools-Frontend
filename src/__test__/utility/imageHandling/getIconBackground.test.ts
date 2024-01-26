import { expect, test } from 'vitest';
import { getIconBackground } from 'utility/imageHandling/getIconBackground';

test('get icon background string depending on rarity', () => {
	expect(getIconBackground('Common')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_0.png');
	expect(getIconBackground('Uncommon')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_1.png');
	expect(getIconBackground('Rare')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_2.png');
	expect(getIconBackground('Epic')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_3.png');
	expect(getIconBackground('Legendary')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_4.png');
	expect(getIconBackground('Mythic')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_5.png');
	expect(getIconBackground('')).toBe('/Cat-Hero-Idle-RPG-tools-Frontend/src/assets/sprites/background/GV_ui_main19_0.png');
});

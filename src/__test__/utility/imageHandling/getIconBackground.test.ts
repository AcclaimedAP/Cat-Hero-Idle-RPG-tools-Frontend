import { expect, test } from 'vitest';
import { getIconBackground } from 'utility/imageHandling/getIconBackground';

test('get icon background string depending on rarity', () => {
	expect(getIconBackground('Common')).toBe('/src/assets/sprites/background/GV_ui_main19_0.png');
	expect(getIconBackground('Uncommon')).toBe('/src/assets/sprites/background/GV_ui_main19_1.png');
	expect(getIconBackground('Rare')).toBe('/src/assets/sprites/background/GV_ui_main19_2.png');
	expect(getIconBackground('Epic')).toBe('/src/assets/sprites/background/GV_ui_main19_3.png');
	expect(getIconBackground('Legendary')).toBe('/src/assets/sprites/background/GV_ui_main19_4.png');
	expect(getIconBackground('Mythic')).toBe('/src/assets/sprites/background/GV_ui_main19_5.png');
	expect(getIconBackground('')).toBe('/src/assets/sprites/background/GV_ui_main19_0.png');
});

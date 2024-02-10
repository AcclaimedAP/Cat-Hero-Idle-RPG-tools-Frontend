import BgMainUncommon from 'assets/sprites/rune/mega-runes/backgrounds/bg_main_uncommon.png';
import BgMainRare from 'assets/sprites/rune/mega-runes/backgrounds/bg_main_rare.png';
import BgMainEpic from 'assets/sprites/rune/mega-runes/backgrounds/bg_main_epic.png';
import BgMainLegendary from 'assets/sprites/rune/mega-runes/backgrounds/bg_main_legendary.png';
import BgMainMythic from 'assets/sprites/rune/mega-runes/backgrounds/bg_main_mythic.png';
import BgSubUncommon from 'assets/sprites/rune/mega-runes/backgrounds/bg_sub_uncommon.png';
import BgSubRare from 'assets/sprites/rune/mega-runes/backgrounds/bg_sub_rare.png';
import BgSubEpic from 'assets/sprites/rune/mega-runes/backgrounds/bg_sub_epic.png';
import BgSubLegendary from 'assets/sprites/rune/mega-runes/backgrounds/bg_sub_legendary.png';
import BgSubMythic from 'assets/sprites/rune/mega-runes/backgrounds/bg_sub_mythic.png';

/**
 * Get the background image for the rune based on the type and rarity
 * @param type - The type of the rune
 * @param rarity - The rarity of the rune
 * @returns The background image for the rune
 * @example
 * const background = getRuneBackground('Main', 'Uncommon');
 * // returns BgMainUncommon
 * 
 */
export const getRuneBackground = (type: string, rarity: string) => {
	switch (type) {
		case 'Main':
			switch (rarity) {
				case 'Uncommon':
					return BgMainUncommon;
				case 'Rare':
					return BgMainRare;
				case 'Epic':
					return BgMainEpic;
				case 'Legendary':
					return BgMainLegendary;
				case 'Mythic':
					return BgMainMythic;
				default:
					return BgMainUncommon;
			}
		case 'Sub':
			switch (rarity) {
				case 'Uncommon':
					return BgSubUncommon;
				case 'Rare':
					return BgSubRare;
				case 'Epic':
					return BgSubEpic;
				case 'Legendary':
					return BgSubLegendary;
				case 'Mythic':
					return BgSubMythic;
				default:
					return BgSubUncommon;
			}
		default:
			return BgMainUncommon;
	}
};

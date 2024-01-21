import ImageBackgroundCommon from 'assets/sprites/background/GV_ui_main19_0.png';
import ImageBackgroundUncommon from 'assets/sprites/background/GV_ui_main19_1.png';
import ImageBackgroundRare from 'assets/sprites/background/GV_ui_main19_2.png';
import ImageBackgroundEpic from 'assets/sprites/background/GV_ui_main19_3.png';
import ImageBackgroundLegendary from 'assets/sprites/background/GV_ui_main19_4.png';
import ImageBackgroundMythic from 'assets/sprites/background/GV_ui_main19_5.png';

export const getIconBackground = (rarity: string) => {
	switch (rarity) {
		case 'Common':
			return ImageBackgroundCommon;
		case 'Uncommon':
			return ImageBackgroundUncommon;
		case 'Rare':
			return ImageBackgroundRare;
		case 'Epic':
			return ImageBackgroundEpic;
		case 'Legendary':
			return ImageBackgroundLegendary;
		case 'Mythic':
			return ImageBackgroundMythic;
		default:
			return ImageBackgroundCommon;
	}
};

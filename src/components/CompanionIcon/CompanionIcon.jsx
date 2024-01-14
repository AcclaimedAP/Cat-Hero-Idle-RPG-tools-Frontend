import { getIconBackground } from '../../utility/imageHandling/getIconBackground';

export const CompanionIcon = ({ companion, label = true, level = 1 }) => {
	const background = getIconBackground(companion.rarity);
	return (
		<>
			<div className='relative w-12 h-14'>
				{label && <span className='absolute z-20 text-[0.6rem] left-1/2 bottom-2 game-text translate-x-[-50%] translate-y-[50%] text-outline'>Lv. {level}</span>}
				<img
					className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5'
					src={companion.image}
					alt=''
				/>
				<img
					className='absolute left-0 top-0 z-1 h-full w-full'
					src={background}
					alt=''
				/>
			</div>
		</>
	);
};

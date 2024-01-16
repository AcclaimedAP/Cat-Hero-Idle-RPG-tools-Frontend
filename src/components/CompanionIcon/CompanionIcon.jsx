import { getIconBackground } from '../../utility/imageHandling/getIconBackground';
import manaIcon from '../../assets/sprites/companions/GV_runeiconeff_1.png';

export const CompanionIcon = ({ companion, label = true, level = 1 }) => {
	const background = getIconBackground(companion.rarity);
	return (
		<>
			<div className='relative container-light w-16 h-20'>
				<div className='absolute z-30 left-0 top-0 w-[45%] h-[45%] -translate-x-1/3 -translate-y-1/3'>
					<div className='relative left-0 top-0'>
						<img
							src={manaIcon}
							alt=''
							className='absolute left-0 top-0'
						/>
						<span className='absolute left-1/3 top-1/2 text-[0.75rem]'>{companion.manaCost}</span>
					</div>
				</div>
				{label && <span className='absolute z-20 text-[0.6rem] left-1/2 bottom-3 translate-x-[-50%] translate-y-[50%]'>Lv. {level}</span>}
				<img
					className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5'
					src={companion.image}
					alt=''
				/>
				<img
					className='absolute left-0 top-0 z-1 h-14 w-full'
					src={background}
					alt=''
				/>
			</div>
		</>
	);
};

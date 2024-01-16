import { getIconBackground } from '../../utility/imageHandling/getIconBackground';

export const SkillIcon = ({ skill, label = true, level = 1 }) => {
	const background = getIconBackground(skill.rarity);
	return (
		<>
			<div className='relative w-12 h-12'>
				{label && <span className='absolute z-20 text-[0.6rem] left-[4px] top-[2px]'>Lv. {level}</span>}
				<img
					className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%]'
					src={skill.image}
					alt=''
				/>
				<img
					className='absolute left-0 top-0 z-1'
					src={background}
					alt=''
				/>
			</div>
		</>
	);
};

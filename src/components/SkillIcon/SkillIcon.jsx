import ImageBackground from '../../assets/sprites/background/GV_ui_main19_0.png';

export const SkillIcon = ({ skill, label = true, level = 1 }) => {
	return (
		<>
			<div className='relative w-10 h-10'>
				{label && (
					<span
						className='absolute z-20 text-[0.6rem] left-[4px] top-[2px] '
						style={{ textShadow: '1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000', fontSmooth: 'never', fontWeight: 'bolder' }}
					>
						Lv. {level}
					</span>
				)}
				<img
					className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5'
					src={skill.image}
					alt=''
				/>
				<img
					className='absolute left-0 top-0 z-1'
					src={ImageBackground}
					alt=''
				/>
			</div>
		</>
	);
};

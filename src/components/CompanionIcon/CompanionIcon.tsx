import { getIconBackground } from 'utility/imageHandling/getIconBackground';
import { ICompanion } from 'types/ICompanion';
import manaIcon from 'assets/sprites/companions/GV_runeiconeff_1.png';

export const CompanionIcon = ({ companion, label = true, level = 1 }: { companion: ICompanion | undefined, label?: boolean, level?: number }) => {
  if (!companion) return null;
  const background = getIconBackground(companion.rarity);
	const iconSize = () => {
		switch (companion.manaCost) {
			case 3:
				return 'max-w-6 max-h-6';
			case 4:
				return 'max-w-8 max-h-8';
			case 6:
				return 'min-w-10 min-h-10 max-w-12 max-h-12';
			case 8:
				return 'min-w-10 min-h-12 max-w-16 max-h-12';
			default:
				return 'max-w-6 max-h-6';
		}
	};

	return (
		<>
      <div className='relative w-14 h-14 m-1 z-0 inline-block'>
				<div className='absolute z-20 left-0 top-0 w-[45%] h-[45%] -translate-x-1/3 -translate-y-1/3'>
					<div className='relative left-0 top-0'>
						<img
							src={manaIcon}
							alt=''
							className='absolute left-0 top-0'
						/>
						<span className='absolute left-1/3 top-0.5 text-[0.75rem]'>{companion.manaCost}</span>
					</div>
				</div>
				<div className='overflow-hidden absolute z-10 w-14 h-14 left-0 top-0 border-[2px] border-black'>
					{label && <span className='absolute z-20 text-[0.6rem] left-1/2 bottom-2 translate-x-[-50%] translate-y-[50%]'>Lv. {level}</span>}
					<img
						className={`${iconSize()} absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
						src={companion.image}
						alt=''
					/>
					<img
						className='absolute left-0 top-0 z-1 h-full w-full'
						src={background}
						alt=''
					/>
				</div>
			</div>
		</>
	);
};

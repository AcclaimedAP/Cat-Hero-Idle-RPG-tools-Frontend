import { getIconBackground } from 'utility/imageHandling/getIconBackground';
import { getCompanionStars } from 'utility/imageHandling/getCompanionStars';
import { ICompanion } from 'types/ICompanion';
import manaIcon from 'assets/sprites/companions/GV_runeiconeff_1.png';

export const CompanionIcon = ({ companion, label = true, level = 1, border = true, stars = true }: { companion: ICompanion | undefined, label?: boolean, level?: number, border?: boolean, stars?: boolean }) => {
  if (!companion) return null;
  //const background = getIconBackground(companion.rarity);
  const background = `game-assets/companions/${companion.rarity}/background.png`.toLowerCase();
  const companionname = companion.name.replace(/ /g, '_').replace(/-/g, '_').replace(/'/g, '').replace(/!/g, '').toLowerCase();
  const companionImage = `game-assets/companions/${companion.rarity}/${companionname}.png`.toLowerCase();
  const starsImage = getCompanionStars(level);
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
      case 12:
        return 'min-w-10 min-h-14 max-w-16 max-h-12';
			default:
				return 'max-w-6 max-h-6';
		}
	};

	return (
    <>
      <div className={border ? 'container-light inline-block' : ''}>
        <div className='relative w-14 h-16 z-0 inline-block'>
          <div className='absolute z-20 left-0 top-0 w-[45%] h-[45%] -translate-x-1/3 -translate-y-1/3'>

            <div className='relative left-0 top-0 h-6 w-6'>
						<img
							src={manaIcon}
							alt=''
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
						/>
              <span className='absolute left-1/2 top-1/2 text-[0.75rem] -translate-x-1/2 -translate-y-1/2'>{companion.manaCost}</span>
					</div>
				</div>
				<div className='overflow-hidden absolute z-10 w-14 h-14 left-0 top-0 border-[2px] border-black'>
					{label && <span className='absolute z-20 text-[0.6rem] left-1/2 bottom-2 translate-x-[-50%] translate-y-[50%]'>Lv. {level}</span>}
					<img
						className={`${iconSize()} absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              src={companionImage}
						alt=''
            />

					<img
						className='absolute left-0 top-0 z-1 h-full w-full'
						src={background}
						alt=''
					/>
          </div>
          <div className='absolute left-0 -bottom-3 z-10 h-4 w-full flex justify-center'>
            {stars && <img
              className='h-4'
              src={starsImage} alt="" />}
          </div>
        </div>
      </div>
		</>
	);
};

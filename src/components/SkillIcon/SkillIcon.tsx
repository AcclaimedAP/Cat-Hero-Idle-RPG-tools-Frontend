import { getIconBackground } from 'utility/imageHandling/getIconBackground';
import { ISkill } from 'types/ISkill';

export const SkillIcon = ({ skill, label = true, level = 1 }: { skill: ISkill | undefined, label?: boolean, level?: number }) => {
  if (!skill) return null;
  const background: string = getIconBackground(skill.rarity);

  return (
    <>
      <div className='relative w-14 h-14 inline-block'>
        {label && <span className='absolute z-20 text-[0.6rem] left-[4px] top-[2px]'>Lv. {level}</span>}
        <img
          className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[40%] min-h-[40%] max-w-[60%] max-h-[60%]'
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

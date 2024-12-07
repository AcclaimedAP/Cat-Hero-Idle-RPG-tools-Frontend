import Game from "types/game";
/**
 * Renders a skill icon with an optional label and level.
 * @param skill - The skill object containing information about the skill.
 * @param label - Whether to display the skill level label. Defaults to true.
 * @param level - The skill level to display. Defaults to 1.
 * @returns The rendered SkillIcon component.
 */

export const SkillIcon = ({ skill, label = true, level = 1 }: { skill: Game.Skill | undefined, label?: boolean, level?: number }): JSX.Element | null => {
  if (!skill) return null;
  const background = `game-assets/skills/${skill.rarity}/background.png`.toLowerCase();
  const skillname = skill.slug.replaceAll('-', '_')
  const skillImage = `game-assets/skills/${skill.rarity}/${skillname}.png`.toLowerCase();
  return (
    <>
      <div className='relative w-14 h-14 inline-block'>
        {label && <span className='absolute z-20 text-[0.6rem] left-[4px] top-[2px]'>Lv. {level}</span>}
        <img
          className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[40%] min-h-[40%] max-w-[60%] max-h-[60%]'
          src={skillImage}
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

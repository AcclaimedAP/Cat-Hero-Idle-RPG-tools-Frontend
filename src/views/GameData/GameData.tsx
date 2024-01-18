import { companions } from '../../data/companions/companions';
import { skills } from '../../data/skills/skills';
import { SkillIcon } from '../../components/SkillIcon/SkillIcon';
import { CompanionIcon } from '../../components/CompanionIcon/CompanionIcon';
import { runes } from '../../data/runes/runes';
import { RuneIcon } from '../../components/RuneIcon/RuneIcon';
import { SubNavigationBar } from '../../components/SubNavigationBar/SubNavigationBar';
import { navigationDataGameData } from './subMenuData';

export const GameData = () => {
  const skillIcons = skills.map((skill) => {
    return (
      <SkillIcon
        key={skill.name}
        skill={skill}
      />
    );
  });
  const companionIcons = companions.map((companion) => {
    return (
      <CompanionIcon
        key={companion.name}
        companion={companion}
      />
    );
  });
  const mainRunes = runes.map((rune, index) => {
    if (rune.type != "Main") {
      return null;
    }
    return (
      <RuneIcon
        key={`${rune.name}-${rune.type}-${rune.rarity}-${index}`}
        rune={rune}
      />
    );
  });
  const subRunes = runes.map((rune, index) => {
    if (rune.type != "Sub") {
      return null;
    }
    return (
      <RuneIcon
        key={`${rune.name}-${rune.type}-${rune.rarity}-${index}`}
        rune={rune}
      />
    );
  });
  return (
    <>
      <SubNavigationBar navigationData={navigationDataGameData} />
      <div className='container-dark'>
        <div className='flex flex-col items-center container-light'>
          <h1 className='text-2xl m-8'>Game Data</h1>
          <p className='text-sm m-8'>Shows all added game data in form of icons. The main purpose of this page will be to gain quick access to information about specific skills, companions, runes, or other parts.</p>
        </div>
        <div className='container-dark'>
          <div className='container-dark-inner'>
            <h2 className='text-xl text-center'>Skills</h2>
          </div>
          <div className='container-light'>{skillIcons}</div>
        </div>
        <div className='container-light'>
          <div className='container-dark'>
            <h2 className='text-xl text-center'>Companions</h2>
          </div>
          <div className='container-dark'>{companionIcons}</div>
        </div>
        <div className='container-dark'>
          <div className='container-dark-inner'>
            <h2 className='text-xl text-center'>Main Runes</h2>
          </div>
          <div className='container-dark-inner'>{mainRunes}</div>

          <div className='container-dark-inner'>
            <h2 className='text-xl text-center'>Sub Runes</h2>
          </div>
          <div className='container-dark-inner'>{subRunes}</div>
        </div>
      </div>
    </>
  );
};

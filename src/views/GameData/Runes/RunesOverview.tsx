import { runes } from '../../../data/runes/runes';
import { RuneIcon } from '../../../components/RuneIcon/RuneIcon';
import { SubNavigationBar } from '../../../components/SubNavigationBar/SubNavigationBar';
import { navigationDataGameData } from '../subMenuData';
export const RunesOverview = () => {
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
          <h1 className='text-2xl m-2'>Runes Data Overview</h1>
          <p className='text-sm m-2'>Shows a list of all Runes.</p>
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

import { companions } from 'data/companions/companions';
import { CompanionIcon } from 'components/CompanionIcon/CompanionIcon';
import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataGameData } from 'views/GameData/subMenuData';
export const CompanionsOverview = () => {
  const companionIcons = companions.map((companion) => {
    return (
      <CompanionIcon
        key={companion.name}
        companion={companion}
      />
    );
  });
  return (
    <>
      <SubNavigationBar navigationData={navigationDataGameData} />
      <div className='container-dark'>
        <div className='flex flex-col items-center container-light'>
          <h1 className='text-2xl m-2'>Companion Data Overview</h1>
          <p className='text-sm m-2'>Shows all data added for companions.</p>
        </div>
        <div className='container-dark'>
          <div className='container-dark-inner'>
            <h2 className='text-xl text-center'>Companions</h2>
          </div>
          <div className='container-dark-inner'>{companionIcons}</div>
        </div>
      </div>
    </>
  );
};

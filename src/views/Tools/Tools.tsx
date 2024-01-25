import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataTools } from './subMenuData';

export const Tools = () => {
  return (
    <>
      <SubNavigationBar navigationData={navigationDataTools} />
      <div className='container-dark'>
			<h1>Tools</h1>
      </div>
    </>

	);
};

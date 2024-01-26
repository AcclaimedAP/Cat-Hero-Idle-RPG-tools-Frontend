import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataTools } from './subMenuData';

export const Tools = () => {
  return (
    <>
      <SubNavigationBar navigationData={navigationDataTools} />
      <div className='container-dark'>
        <div className='justify-center container-light'>
          <h1 className='text-3xl font-bold text-center'>Tools</h1>
          <p className='text-xl text-center'>Tools and useful gadgets for your Kittens best interest!</p>
        </div>
      </div>
    </>

	);
};

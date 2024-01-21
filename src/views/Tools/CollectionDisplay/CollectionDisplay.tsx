import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataTools } from 'views/Tools/subMenuData';
export const CollectionDisplay = () => {
  return (
    <>
      <SubNavigationBar navigationData={navigationDataTools} />
      <div className="container-dark">
        <h1>Collection Display</h1>
      </div>
    </>
  );
};

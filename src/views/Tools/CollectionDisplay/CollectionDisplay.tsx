import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataTools } from 'views/Tools/subMenuData';
import { SelectionContainer } from 'components/ToolsCollectionOverview/SelectionContainer/SelectionContainer';
import { CollectionContainer } from 'components/ToolsCollectionOverview/CollectionContainer/CollectionContainer';
import type { RootState } from 'src/config/redux/store'
import { useSelector } from 'react-redux'



export const CollectionDisplay = () => {

  const collection = useSelector((state: RootState) => state.collectionDisplay)

  const exportString = () => {
  }

  return (
    <>
      <SubNavigationBar navigationData={navigationDataTools} />
      <div className="container-dark flex flex-col gap-2">
        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl p-2'>Collection Display</h1>
          <button className='container-light hover:brightness-110' onClick={exportString}>Export</button>
        </div>
        <SelectionContainer />
        <CollectionContainer />
      </div>
    </>
  );
};

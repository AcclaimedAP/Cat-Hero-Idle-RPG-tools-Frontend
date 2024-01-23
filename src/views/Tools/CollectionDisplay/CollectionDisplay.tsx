import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataTools } from 'views/Tools/subMenuData';
import { SelectionContainer } from 'components/ToolsCollectionOverview/SelectionContainer/SelectionContainer';
import { CollectionContainer } from 'components/ToolsCollectionOverview/CollectionContainer/CollectionContainer';
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEquipment } from 'src/config/redux/slices/equipmentDisplaySlice'
import { setCollection } from 'src/config/redux/slices/collectionDisplaySlice'



export const CollectionDisplay = () => {
  const dispatch = useDispatch();

  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const getFromLocalStorage = () => {
    const collection = localStorage.getItem('collection')
    const equipment = localStorage.getItem('equipment')
    if (collection) {
      const collectionData = JSON.parse(collection)
      if (collectionData) {
        dispatch(setCollection(collectionData))
      }
    }
    if (equipment) {
      const equipmentData = JSON.parse(equipment)
      if (equipmentData) {
        dispatch(setEquipment(equipmentData))
      }
    }
  }
  const saveToLocalStorage = () => {
    localStorage.setItem('collection', JSON.stringify(collection))
    localStorage.setItem('equipment', JSON.stringify(equipment))
  }





  const exportString = () => {
  }

  return (
    <>
      <SubNavigationBar navigationData={navigationDataTools} />
      <div className="container-dark flex flex-col gap-2">
        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl p-2'>Collection Display</h1>
          <button className='container-light hover:brightness-110' onClick={getFromLocalStorage}>Load</button>
          <button className='container-light hover:brightness-110' onClick={saveToLocalStorage}>Save</button>
        </div>
        <SelectionContainer />
        <CollectionContainer />
      </div>
    </>
  );
};

import { SelectionContainer } from 'components/Tools/Tools/Structure/CollectionOverview/Selection/SelectionContainer/SelectionContainer';
import { CollectionContainer } from 'components/Tools/Tools/Structure/CollectionOverview/Collection/CollectionContainer/CollectionContainer';
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEquipment, resetEquipment } from 'src/config/redux/slices/equipmentDisplaySlice'
import { setCollection, resetCollection } from 'src/config/redux/slices/collectionDisplaySlice'
import { useEffect, useState } from 'react';
import { StringTextField } from 'components/Tools/Tools/Structure/CollectionOverview/StringTextField/StringTextField';
import { collectionInitialState } from 'src/config/redux/slices/collectionDisplaySlice';
import { equipmentInitialState } from 'src/config/redux/slices/equipmentDisplaySlice';
import { useSearchParams } from 'react-router-dom';
import { PopupModal } from 'src/components/PopupModal/PopupModal';


export const CollectionDisplay = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const [shareString, setShareString] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionParamString = searchParams.get('collection');
  const [popupModal, setPopupModal] = useState(false)
  useEffect(() => {
    if (collectionParamString) {
      setPopupModal(false);
      const decodedCollectionString = atob(collectionParamString)
      const [collectionString, equipmentString] = decodedCollectionString.split('|')
      const collectionData = JSON.parse(collectionString)
      const equipmentData = JSON.parse(equipmentString)
      if (collectionData) {
        dispatch(setCollection(collectionData))
      }
      if (equipmentData) {
        dispatch(setEquipment(equipmentData))
      }
      setSearchParams({})
    }
  }, [collectionParamString, dispatch, setSearchParams])
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
    if (JSON.stringify(collection) === JSON.stringify(collectionInitialState) && JSON.stringify(equipment) === JSON.stringify(equipmentInitialState)) {
      return
    }
    localStorage.setItem('collection', JSON.stringify(collection))
    localStorage.setItem('equipment', JSON.stringify(equipment))
  }
  const exportString = () => {
    const collectionString = JSON.stringify(collection);
    const equipmentString = JSON.stringify(equipment);
    const shareString = btoa(collectionString + "|" + equipmentString);
    const currentUrl = window.location.href.split('?')[0];

    setShareString(shareString);
    setShareUrl(currentUrl + '?collection=' + shareString);
    setPopupModal(true);
  }

  const importString = () => {
    const shareString = prompt('Paste the share string here:')
    if (shareString) {
      const decodedShareString = atob(shareString)

      const [collectionString, equipmentString] = decodedShareString.split('|')

      const collectionData = JSON.parse(collectionString)
      const equipmentData = JSON.parse(equipmentString)
      if (collectionData) {
        dispatch(setCollection(collectionData))
      }
      if (equipmentData) {
        dispatch(setEquipment(equipmentData))
      }
    }

  }


  const reset = () => {
    dispatch(resetCollection())
    dispatch(resetEquipment())
  }

  return (
    <>
      <PopupModal isOpen={popupModal} onClose={() => { setPopupModal(false) }}>
        <div className='p-4 min-w-96'>
        Share string:
        <StringTextField>{shareString}</StringTextField>
        Url:
          <StringTextField>{shareUrl}</StringTextField>
        </div>
      </PopupModal>

      <div className="container-dark flex flex-col gap-2">

        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl p-2'>Collection Display</h1>
          <div className='flex gap-8 flex-row'>
            <div className='flex flex-row flex-nowrap gap-2'>

              <button className='container-light hover:brightness-110' onClick={exportString}>Export</button>
              <button className='container-light hover:brightness-110' onClick={importString}>Import</button>
            </div>
            <div className='flex flex-row flex-nowrap gap-2'>
              <button className='container-light hover:brightness-110' onClick={getFromLocalStorage}>Load</button>
              <button className='container-light hover:brightness-110' onClick={saveToLocalStorage}>Save</button>
              <button className='container-light hover:brightness-110' onClick={reset}>Clear</button>
            </div>
          </div>
        </div>
        <SelectionContainer />
        <CollectionContainer />
      </div>
    </>
  );
};

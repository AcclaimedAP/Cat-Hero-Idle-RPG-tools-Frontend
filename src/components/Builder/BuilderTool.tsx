import { SelectionContainer } from 'components/Builder/Selection/SelectionContainer/SelectionContainer';
import { CollectionContainer } from 'components/Builder/Collection/CollectionContainer/CollectionContainer';
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEquipment, resetEquipment } from 'src/config/redux/slices/equipmentDisplaySlice'
import { setCollection, resetCollection } from 'src/config/redux/slices/collectionDisplaySlice'
import { useEffect, useState } from 'react';
import { StringTextField } from 'components/Builder/StringTextField/StringTextField';
import { collectionInitialState } from 'src/config/redux/slices/collectionDisplaySlice';
import { equipmentInitialState } from 'src/config/redux/slices/equipmentDisplaySlice';
import { useSearchParams } from 'react-router-dom';
import { PopupModal } from 'src/components/PopupModal/PopupModal';
import { saveBuild, getBuild } from 'src/config/api/services/buildUrl';



export const BuilderTool = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const [shareString, setShareString] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const buildIdParam = searchParams.get('build_id');
  const [popupModal, setPopupModal] = useState(false)
  const [activeTab, setActiveTab] = useState('collection' as 'collection' | 'equip' | '')
  const fetchBuild = async (id: string) => {

    const response: any = await getBuild(id);
    if (response.status !== 200) {
      alert('Failed to load build');
      return;
    }
    const decodedCollectionString = atob(response.data.build)
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

  useEffect(() => {
    if (buildIdParam) {
      setPopupModal(false);
      fetchBuild(buildIdParam);
    }
  }, [buildIdParam, dispatch, setSearchParams])
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
  const exportString = async () => {
    const collectionString = JSON.stringify(collection);
    const equipmentString = JSON.stringify(equipment);
    const shareString = btoa(collectionString + "|" + equipmentString);
    const currentUrl = window.location.href.split('?')[0];
    const response: any = await saveBuild(shareString);
    if (response.status === 201 || response.status === 200) {
      setShareString(shareString);
      setShareUrl(currentUrl + '?build_id=' + response.data.build_id);
      setPopupModal(true);
      return;
    }
    alert('Failed to save build');
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

  const handleTabClick = (tab: 'collection' | 'equip') => {
    setActiveTab(tab)
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

      <div className="flex flex-col gap-2">

        <div>
          <div className='flex flex-col-reverse md:flex-row justify-between'>
            <div className='flex flex-row gap-1 justify-items-end w-full'>
              <button className={`sub-menu-button ${activeTab == "collection" ? "sub-menu-button-active top-0 md:top-[10px]" : "top-[14px] md:top-[24px]"}`} onClick={() => { handleTabClick("collection") }}>collection</button>
              <button className={`sub-menu-button ${activeTab == "equip" ? "sub-menu-button-active top-0 md:top-[10px]" : "top-[14px] md:top-[24px]"}`} onClick={() => { handleTabClick("equip") }}>equip</button>
            </div>
            <div className='flex gap-4 flex-row'>
              <div className='flex flex-row flex-nowrap gap-1'>
              <button className='container-light hover:brightness-110' onClick={exportString}>Export</button>
              <button className='container-light hover:brightness-110' onClick={importString}>Import</button>
            </div>
              <div className='flex flex-row flex-nowrap gap-1'>
              <button className='container-light hover:brightness-110' onClick={getFromLocalStorage}>Load</button>
              <button className='container-light hover:brightness-110' onClick={saveToLocalStorage}>Save</button>
              <button className='container-light hover:brightness-110' onClick={reset}>Clear</button>
              </div>
            </div>
          </div>
          <div className=''>
            {activeTab == "collection" ? <SelectionContainer /> :
              <CollectionContainer />}
          </div>
        </div>
      </div>
    </>
  );
};

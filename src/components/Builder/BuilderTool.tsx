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
import { getStuff } from 'src/config/api/services/stuff';

/**
 * The builder tool
 * @name BuilderTool
 * @returns The builder tool main component.
 * @description This component is used to display the builder tool for the application.
 * @remarks
 * This component consists of many sub components and functionalities.
 * It's the main logic component for the builder tool, and includes:
 * Importing/exporting builds
 * Automatic saving
 * Tab switching
 * Clearing the build
 * 
 * It renders the SelectionContainer and CollectionContainer components.
 * SelectionContainer is used to show ALL of the stuff that can be added to the build, while CollectionContainer is used to show the stuff that has been added to the build.
 * 
 * @example
 * <BuilderTool></BuilderTool>
 * // returns the builder tool
 */

export const BuilderTool = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const [shareUrl, setShareUrl] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const buildIdParam = searchParams.get('build_id');
  const [popupModal, setPopupModal] = useState(false)
  const [activeTab, setActiveTab] = useState('collection' as 'collection' | 'equip' | '')
  const [automaticSave, setAutomaticSave] = useState(false)
  const [stuff, setStuff] = useState<any>(null)
  const fetchStuff = async () => {
    const res = await getStuff();
    if (res) {
      setStuff(await res)
    }
  }

  useEffect(() => {
    fetchStuff();
  }, [])

  const toggleAutomaticSave = () => {
    setAutomaticSave(!automaticSave)
    localStorage.setItem('automaticSave', (!automaticSave).toString())
  }

  const fetchBuild = async (id: string) => {

    const response: any = await getBuild(id);
    if (response.status !== 200) {
      alert('Failed to load build');
      return;
    }
    const collectionData = response.data.build.collection;
    const equipmentData = response.data.build.equipment;
    if (collectionData) {
      dispatch(setCollection(collectionData))
    }
    if (equipmentData) {
      dispatch(setEquipment(equipmentData))
    }
    setActiveTab('equip')
    setSearchParams({})

  }

  useEffect(() => {
    const autoSave = localStorage.getItem('automaticSave')
    if (buildIdParam) {
      setPopupModal(false);
      fetchBuild(buildIdParam);
    } else {
      if (autoSave) {
        setAutomaticSave(autoSave === 'true')
        if (autoSave !== 'true') return;
      }
      if (JSON.stringify(collection) === JSON.stringify(collectionInitialState) && JSON.stringify(equipment) === JSON.stringify(equipmentInitialState)) {
        getFromLocalStorage();
      }
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
        if (equipmentData !== equipmentInitialState) {
          setActiveTab('equip')
        }
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

    const currentUrl = window.location.href.split('?')[0];
    const response: any = await saveBuild({ collection, equipment });
    if (response.status === 201 || response.status === 200) {
      setShareUrl(currentUrl + '?build_id=' + response.data.build_id);
      setPopupModal(true);
      return;
    }
    alert('Failed to save build');
  }


  const updateLocalStorage = () => {
    if (!automaticSave) return;
    if (JSON.stringify(collection) === JSON.stringify(collectionInitialState) && JSON.stringify(equipment) === JSON.stringify(equipmentInitialState)) {
      return
    }
    localStorage.setItem('collection', JSON.stringify(collection))
    localStorage.setItem('equipment', JSON.stringify(equipment))
  }

  useEffect(() => {
    updateLocalStorage();
  }, [collection, equipment])

  const reset = () => {
    dispatch(resetCollection())
    dispatch(resetEquipment())
  }

  const handleTabClick = (tab: 'collection' | 'equip') => {
    setActiveTab(tab)
  }

  const clearLocalStorage = () => {
    const confirm = window.confirm('Are you sure you want to completely reset? This will clear your build, settings, and you will have to fetch all data again. Only this primarily when you are experiencing issues.');
    if (!confirm) return;
    localStorage.clear();
    window.location.reload();
  }


  return (
    <>
      {popupModal && <PopupModal isOpen={popupModal} onClose={() => { setPopupModal(false) }}>
        <div className='p-2 min-w-96'>
          <div className='flex flex-row justify-between'><span>Url:</span> <span className='flex justify-center justify-items-center hover:scale-110 transition-all cursor-pointer w-8 h-8 text-center hover:brightness-125' onClick={() => { setPopupModal(false) }}><div>X</div></span></div>
          <StringTextField >{shareUrl}</StringTextField>
        </div>
      </PopupModal>}

      <div className="flex flex-col gap-2">
        <div className='w-full flex flex-row justify-end'>
          <label htmlFor="manualSave" className='text-sm m-1'>Automatic Save</label>
          <input type="checkbox" name="manualSave" onChange={toggleAutomaticSave} checked={automaticSave} id="" className='mx-1' />
          <button className='btn btn-ghost btn-xs m-1 h-2 text-xs text-stone-400' onClick={clearLocalStorage}>Reset (!)</button>
        </div>
        <div>
          <div className='flex flex-col-reverse md:flex-row justify-between'>
            <div className='flex flex-row gap-1 justify-items-end w-full'>
              <button className={`sub-menu-button ${activeTab == "collection" ? "sub-menu-button-active top-0 md:top-[10px]" : "top-[14px] md:top-[24px]"}`} onClick={() => { handleTabClick("collection") }}>collection</button>
              <button className={`sub-menu-button ${activeTab == "equip" ? "sub-menu-button-active top-0 md:top-[10px]" : "top-[14px] md:top-[24px]"}`} onClick={() => { handleTabClick("equip") }}>equip</button>
            </div>
            <div className='flex gap-4 flex-row'>
              <div className='flex flex-row flex-nowrap gap-1'>
                <button className='container-light hover:brightness-110' onClick={exportString}>Export</button>
            </div>
              <div className='flex flex-row flex-nowrap gap-1'>

                {!automaticSave && <>
                  <button className='container-light hover:brightness-110' onClick={getFromLocalStorage}>Load</button>
                  <button className='container-light hover:brightness-110' onClick={saveToLocalStorage}>Save</button>
                </>}
              <button className='container-light hover:brightness-110' onClick={reset}>Clear</button>
              </div>
            </div>
          </div>{stuff ?
            <div>
              <div className={`${activeTab === "collection" ? "" : "z-0 hidden"}`}>
                <SelectionContainer />
              </div>
              <div className={`${activeTab === "equip" ? "" : "z-0 hidden"}`}>
                <CollectionContainer />
              </div>
            </div>
            :
            <div className='flex justify-center items-center h-96 container-dark-inner'>
              <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white'></div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

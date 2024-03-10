import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "src/config/redux/store";
import { setMp, setMaxMp } from "src/config/redux/slices/equipmentDisplaySlice";
import { getStuffMp } from "src/config/api/services/stuff";


export const EquippedMana = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const mana = useSelector((state: RootState) => state.equipmentDisplay.mp) || 0;
  const maxMana = useSelector((state: RootState) => state.equipmentDisplay.maxMp) || 30;



  const calculateMana = async () => {
    const collectionString = JSON.stringify(collection);
    const equipmentString = JSON.stringify(equipment);
    const shareString = btoa(collectionString + "|" + equipmentString);
    const response: any = await getStuffMp(shareString);
    if (response.status === 200) {
      const data = response.data;
      dispatch(setMp(data.mp));
      dispatch(setMaxMp(data.maxMp));
    }
  }

  useEffect(() => {
    calculateMana();
  }, [equipment])

  return (
    <>
      <div className="m-1 w-full">

        <progress className="w-full border-2 border-solid bg-slate-800 border-zinc-800" max={maxMana} value={mana}></progress>

        <div className="flex flex-row justify-end">

          <div>
            <span className="text-outline w-10 text-center rounded-2xl">{mana}</span>
            <span className="mx-1">/</span>
            <span className="text-outline w-10 text-center rounded-2xl">{maxMana} MP</span>
          </div>
        </div>

      </div>
    </>
  );
}
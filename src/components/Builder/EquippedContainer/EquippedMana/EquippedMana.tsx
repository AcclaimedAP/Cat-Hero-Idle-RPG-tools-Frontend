import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "src/config/redux/store";
import { setMp, setBaseMp, setMaxMp, setShoes, setMpResearchLevel, equipmentInitialState } from "src/config/redux/slices/equipmentDisplaySlice";
import { getStuffMp } from "src/config/api/services/stuff";


export const EquippedMana = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const mana = useSelector((state: RootState) => state.equipmentDisplay.mp) || 0;
  const maxMana = useSelector((state: RootState) => state.equipmentDisplay.maxMp) || 30;
  const mpResearchLevel = useSelector((state: RootState) => state.equipmentDisplay.mpResearchLevel) || 15;
  const shoes = useSelector((state: RootState) => state.equipmentDisplay.shoes)
  const [overload, setOverload] = useState(false);
  const handleShoesToggle = (e: any) => {
    dispatch(setShoes(e.target.checked ? 3 : 0));
    dispatch(setBaseMp(15 + mpResearchLevel + (e.target.checked ? 2 : 0)));
  }
  const handleMpResearchLevelChange = (e: any) => {
    if (e.target.value === "") {
      dispatch(setMpResearchLevel(e.target.value));
      return;
    }
    const value = parseInt(e.target.value);
    let clampValue = value;
    if (value < 0) {
      clampValue = 0;
      dispatch(setMpResearchLevel(0));

    } else if (value > 15) {
      clampValue = 15;
      dispatch(setMpResearchLevel(15));
    } else {
      dispatch(setMpResearchLevel(clampValue));
    }
    dispatch(setBaseMp(15 + clampValue + (shoes > 0 ? 2 : 0)));
  }

  const calculateMana = async () => {
    const equipmentString = JSON.stringify(equipment);
    const initialEquipmentString = JSON.stringify(equipmentInitialState);
    if (equipmentString === initialEquipmentString) {
      return;
    }


    const response: any = await getStuffMp(equipment);
    if (response.status === 200) {
      const data = response.data;
      setOverload(data.mp > data.maxMp);
      dispatch(setMp(data.mp));
      dispatch(setMaxMp(data.maxMp));
    }
  }

  useEffect(() => {
    calculateMana();
  }, [equipment.companionsList, equipment.subRuneList, equipment.baseMp, equipment.mpResearchLevel, equipment.shoes])

  return (
    <>
      <div className="m-1 w-full">
        <div className="flex flex-row justify-between text-sm mb-2">
          <label className="">Mp research level: <input className="w-12 bg-slate-800 text-white px-1" type="number" onChange={handleMpResearchLevelChange} value={mpResearchLevel} /></label>
          <label htmlFor="shoes-check">Shoes +3:<input onChange={handleShoesToggle} checked={shoes > 0 ? true : false} className="mx-1" type="checkbox" name="shoes-check" /></label>
        </div>
        <progress className={`mp-bar ${overload ? "mp-bar-overload" : ""}`} max={maxMana} value={mana}></progress>

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
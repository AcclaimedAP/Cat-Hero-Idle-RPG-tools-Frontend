import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "src/config/redux/store";
import { setMp, setBaseMp, setMaxMp, equipmentInitialState } from "src/config/redux/slices/equipmentDisplaySlice";
import { getStuffMp } from "src/config/api/services/stuff";


export const EquippedMana = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state: RootState) => state.collectionDisplay)
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const mana = useSelector((state: RootState) => state.equipmentDisplay.mp) || 0;
  const maxMana = useSelector((state: RootState) => state.equipmentDisplay.maxMp) || 30;
  const [mpResearchLevel, setMpResearchLevel] = useState(15);
  const [shoes, setShoes] = useState(false);
  const [overload, setOverload] = useState(false);
  const handleShoesToggle = (e: any) => {
    setShoes(e.target.checked);
    dispatch(setBaseMp(15 + mpResearchLevel + (e.target.checked ? 2 : 0)));
  }
  const handleMpResearchLevelChange = (e: any) => {
    if (e.target.value === "") {
      setMpResearchLevel(e.target.value);
      return;
    }
    const value = parseInt(e.target.value);
    let clampValue = value;
    if (value < 0) {
      clampValue = 0;
      setMpResearchLevel(0);

    } else if (value > 15) {
      clampValue = 15;
      setMpResearchLevel(15);
    } else {
      setMpResearchLevel(clampValue);
      setMpResearchLevel(parseInt(e.target.value));
    }
    dispatch(setBaseMp(15 + clampValue + (shoes ? 2 : 0)));
  }

  const calculateMana = async () => {
    const equipmentString = JSON.stringify(equipment);
    const initialEquipmentString = JSON.stringify(equipmentInitialState);
    if (equipmentString === initialEquipmentString) {
      return;
    }
    const collectionString = JSON.stringify(collection);
    const shareString = btoa(collectionString + "|" + equipmentString);
    const response: any = await getStuffMp(shareString);
    if (response.status === 200) {
      const data = response.data;
      setOverload(data.mp > data.maxMp);
      dispatch(setMp(data.mp));
      dispatch(setMaxMp(data.maxMp));
    }
  }

  useEffect(() => {
    calculateMana();
  }, [equipment.companionsList, equipment.subRuneList, equipment.baseMp])

  return (
    <>
      <div className="m-1 w-full">
        <div className="flex flex-row justify-between text-sm mb-2">
          <label className="">Mp research level: <input className="w-10 text-white px-1" type="number" onChange={handleMpResearchLevelChange} value={mpResearchLevel} /></label>
          <label htmlFor="shoes-check">Shoes +3:<input onChange={handleShoesToggle} checked={shoes} className="mx-1" type="checkbox" name="shoes-check" /></label>
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
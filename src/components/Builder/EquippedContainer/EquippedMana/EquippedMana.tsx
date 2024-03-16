import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "src/config/redux/store";
import { setAdditionalMp, setMpResearchLevel, equipmentInitialState } from "src/config/redux/slices/equipmentDisplaySlice";
import { getStuffMp } from "src/config/api/services/stuff";


export const EquippedMana = () => {
  const dispatch = useDispatch();
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)
  const [mp, setMp] = useState(0);
  const [maxMp, setMaxMp] = useState(0);
  const mpResearchLevel = useSelector((state: RootState) => state.equipmentDisplay.mpResearchLevel) || 15;
  const [mpResearchLevelInput, setMpResearchLevelInput] = useState(mpResearchLevel);
  const shoes = useSelector((state: RootState) => state.equipmentDisplay.additionalMp)
  const [overload, setOverload] = useState(false);

  const handleShoesToggle = (e: any) => {
    dispatch(setAdditionalMp(e.target.checked ? 2 : 0));
  }

  const handleUnFocus = (e: any) => {
    if (e.target.value === "") {
      setMpResearchLevelInput(0);
    }
  }

  const handleMpResearchLevelChange = (e: any) => {
    setMpResearchLevelInput(e.target.value);

    if (e.target.value == "") {
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
    setMpResearchLevelInput(clampValue);
  }

  const calculateMana = async () => {
    const equipmentString = JSON.stringify(equipment);
    const initialEquipmentString = JSON.stringify(equipmentInitialState);
    if (equipmentString === initialEquipmentString) {
      return;
    }
    const equipmentData = equipment;
    if (!equipment.hasOwnProperty('additionalMp')) {
      dispatch(setAdditionalMp(0));
      equipmentData.additionalMp = 0;
    }
    if (!equipment.hasOwnProperty('mpResearchLevel')) {
      dispatch(setMpResearchLevel(15));
      equipmentData.mpResearchLevel = 15;
    }


    const response: any = await getStuffMp(equipmentData);
    if (response.status === 200) {
      const data = response.data;
      setOverload(data.mp > data.maxMp);
      setMp(data.mp);
      setMaxMp(data.maxMp);
    }
  }

  useEffect(() => {
    calculateMana();
  }, [equipment.companionsList, equipment.subRuneList, equipment.mpResearchLevel, equipment.additionalMp])

  return (
    <>
      <div className="m-1 w-full">
        <div className="flex flex-row justify-between text-sm mb-2">
          <label className="">Mp research level: <input className="w-12 bg-slate-800 text-white px-1" type="number" onBlur={handleUnFocus} onChange={handleMpResearchLevelChange} value={mpResearchLevelInput} /></label>
          <label htmlFor="shoes-check">Shoes +3:<input onChange={handleShoesToggle} checked={shoes > 0 ? true : false} className="mx-1" type="checkbox" name="shoes-check" /></label>
        </div>
        <progress className={`mp-bar ${overload ? "mp-bar-overload" : ""}`} max={maxMp} value={mp}></progress>

        <div className="flex flex-row justify-end">

          <div>
            <span className="text-outline w-10 text-center rounded-2xl">{mp}</span>
            <span className="mx-1">/</span>
            <span className="text-outline w-10 text-center rounded-2xl">{maxMp} MP</span>
          </div>
        </div>

      </div>
    </>
  );
}
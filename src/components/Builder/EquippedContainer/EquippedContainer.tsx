import { EquippedCompanions } from "./EquippedCompanions/EquippedCompanions";
import { EquippedSkills } from "./EquippedSkills/EquippedSkills";
import { EquippedMainRunes } from "./EquippedMainRunes/EquippedMainRunes";
import { EquippedSubRunes } from "./EquippedSubRunes/EquippedSubRunes";
import { useDispatch } from 'react-redux'
import { resetEquipment } from 'src/config/redux/slices/equipmentDisplaySlice'
import { EquippedMana } from "./EquippedMana/EquippedMana";

export const EquippedContainer = () => {
  const dispatch = useDispatch();

  const reset = () => {

    dispatch(resetEquipment())
  }

  return (
    <>
      <div className="flex flex-col gap-2 container-light">

        <div className="flex flex-col gap-2 p-2">
          <EquippedMana />
          <EquippedCompanions />
          <EquippedSkills />
        </div>
        <div className="flex flex-row justify-around gap-2 p-2">
          <EquippedMainRunes />
          <EquippedSubRunes />
        </div>
      </div>
      <button className='container-light hover:brightness-110' onClick={reset}>Clear equipment</button>
    </>
  );
}
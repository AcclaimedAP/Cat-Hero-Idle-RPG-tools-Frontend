import { EquippedCompanions } from "./EquippedCompanions/EquippedCompanions";
import { EquippedSkills } from "./EquippedSkills/EquippedSkills";
import { EquippedMainRunes } from "./EquippedMainRunes/EquippedMainRunes";
import { EquippedSubRunes } from "./EquippedSubRunes/EquippedSubRunes";

export const EquippedContainer = () => {

  return (
    <>
      <div className="flex flex-col gap-2 container-light">
        <div className="flex flex-col gap-2 p-2">
          <EquippedCompanions />
          <EquippedSkills />
        </div>
        <div className="flex flex-row justify-around gap-2 p-2">
          <EquippedMainRunes />
          <EquippedSubRunes />
        </div>
      </div>
    </>
  );
}
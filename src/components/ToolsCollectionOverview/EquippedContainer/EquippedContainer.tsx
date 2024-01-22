import { ICollection } from "src/views/Tools/CollectionDisplay/CollectionDisplay";
import { EquippedCompanions } from "./EquippedCompanions/EquippedCompanions";
import { EquippedSkills } from "./EquippedSkills/EquippedSkills";
import { EquippedMainRunes } from "./EquippedMainRunes/EquippedMainRunes";
import { EquippedSubRunes } from "./EquippedSubRunes/EquippedSubRunes";


export const EquippedContainer = ({ equipped }: { equipped: ICollection }) => {


  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <EquippedCompanions equipped={equipped.companionsList} />
          <EquippedSkills equipped={equipped.skillList} />
        </div>
        <div className="flex flex-row justify-around gap-2">
          <EquippedMainRunes equipped={equipped.mainRuneList} />
          <EquippedSubRunes equipped={equipped.subRuneList} />
        </div>
      </div>
    </>
  );
}
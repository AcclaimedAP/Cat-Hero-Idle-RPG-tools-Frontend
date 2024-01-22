import { CompanionCollection } from "../CompanionCollection/CompanionCollection";
import { ICollection } from "src/views/Tools/CollectionDisplay/CollectionDisplay";
import { SkillCollection } from "../SkillCollection/SkillCollection";
import { MainRuneCollection } from "../MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "../SubRuneCollection/SubRuneCollection";
import { useState } from "react";
import { ISelectedSkill } from "../SkillSelection/SkillSelection";
import { ISelectedCompanion } from "../CompanionSelection/CompanionSelection";
import { ISelectedMainRune } from "../MainRuneSelection/MainRuneSelection";
import { ISelectedSubRune } from "../SubRuneSelection/SubRuneSelection";


export const CollectionContainer = ({ collection }: { collection: ICollection }) => {

  const [equipped, setEquipped] = useState<ICollection>({
    companionsList: [],
    skillList: [],
    mainRuneList: [],
    subRuneList: []
  })
  const updateEquipped = (type: string, list: ISelectedSkill[] | ISelectedCompanion[] | ISelectedMainRune[] | ISelectedSubRune[]) => {
    switch (type) {
      case "companion":
        setEquipped({ ...equipped, companionsList: list as ISelectedCompanion[] })
        break;
      case "skill":
        setEquipped({ ...equipped, skillList: list as ISelectedSkill[] })
        break;
      case "mainRune":
        setEquipped({ ...equipped, mainRuneList: list as ISelectedMainRune[] })
        break;
      case "subRune":
        setEquipped({ ...equipped, subRuneList: list as ISelectedSubRune[] })
        break;
    }

  }

  return (
    <>
      <div className="container-light flex flex-row">
        <div className="min-w-[30vw]">
          <div className="flex flex-col lg:flex-row container-dark gap-2 justify-around">
            <CompanionCollection companionsList={collection.companionsList} updateEquipped={updateEquipped} />
            <SkillCollection skillsList={collection.skillList} updateEquipped={updateEquipped} />
          </div>
          <div className="flex flex-col lg:flex-row container-dark gap-2 justify-around">
            <MainRuneCollection runesList={collection.mainRuneList} updateEquipped={updateEquipped} />
            <SubRuneCollection runesList={collection.subRuneList} updateEquipped={updateEquipped} />
          </div>
        </div>
        <div className="container-dark min-w-[30vw]">
          equipped display
          {JSON.stringify(equipped)}
        </div>
      </div>
    </>
  );
}
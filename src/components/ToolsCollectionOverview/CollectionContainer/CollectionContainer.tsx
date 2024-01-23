import { CompanionCollection } from "../CompanionCollection/CompanionCollection";
import { ICollection } from "src/views/Tools/CollectionDisplay/CollectionDisplay";
import { SkillCollection } from "../SkillCollection/SkillCollection";
import { MainRuneCollection } from "../MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "../SubRuneCollection/SubRuneCollection";
import { useEffect, useState } from "react";
import { ISelectedSkill } from "../SkillSelection/SkillSelection";
import { ISelectedCompanion } from "../CompanionSelection/CompanionSelection";
import { ISelectedMainRune } from "../MainRuneSelection/MainRuneSelection";
import { ISelectedSubRune } from "../SubRuneSelection/SubRuneSelection";
import { EquippedContainer } from "../EquippedContainer/EquippedContainer";



export const CollectionContainer = ({ collection }: { collection: ICollection }) => {


  const getLocalStorage = () => {
    const local = localStorage.getItem("equipped")
    if (local) {
      return JSON.parse(local)
    }
    return {
      companionsList: [],
      skillList: [],
      mainRuneList: [],
      subRuneList: []
    }
  }
  const [equipped, setEquipped] = useState<ICollection>(getLocalStorage())
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
  useEffect(() => {
    localStorage.setItem("equipped", JSON.stringify(equipped))
  }, [equipped])
  useEffect(() => {
    if (localStorage.getItem("equipped")) {
      const equipped = JSON.parse(localStorage.getItem("equipped") || "")
      setEquipped(equipped)
    }
  }, [])

  return (
    <>
      <div className="container-light flex flex-row">
        <div className="w-full">
          <div className="flex flex-row justify-around">
            <div className="container-dark flex flex-col md:flex-row gap-4 w-full">
              <div className=" flex flex-col gap-2 w-full">
                <CompanionCollection companionsList={collection.companionsList} updateEquipped={updateEquipped} />

                <div className="flex flex-col lg:flex-col gap-2 justify-around">
                  <MainRuneCollection runesList={collection.mainRuneList} updateEquipped={updateEquipped} />
                  <SubRuneCollection runesList={collection.subRuneList} updateEquipped={updateEquipped} />
                </div>
              </div>
              <div className="md:min-w-[25rem] md:max-w-[26rem] p-2 gap-6 flex flex-col">
                <SkillCollection skillsList={collection.skillList} updateEquipped={updateEquipped} />
                <EquippedContainer equipped={equipped} />
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}
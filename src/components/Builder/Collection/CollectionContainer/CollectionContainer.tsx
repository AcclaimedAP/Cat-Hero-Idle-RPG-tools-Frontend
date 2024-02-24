import { CompanionCollection } from "components/Builder/Collection/CompanionCollection/CompanionCollection";
import { SkillCollection } from "components/Builder/Collection/SkillCollection/SkillCollection";
import { MainRuneCollection } from "components/Builder/Collection/MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "components/Builder/Collection/SubRuneCollection/SubRuneCollection";
import { EquippedContainer } from "components/Builder/EquippedContainer/EquippedContainer";


export const CollectionContainer = () => {

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-around p-2 gap-2">
          <div className=" flex flex-col gap-2 w-full">
            <CompanionCollection />
            <div className="flex flex-col lg:flex-col gap-2 justify-around">
              <MainRuneCollection />
              <SubRuneCollection />
            </div>
          </div>
          <div className="md:min-w-[25rem] md:max-w-[26rem] gap-6 flex flex-col justify-items-center">
            <SkillCollection />
            <EquippedContainer />
          </div>
        </div>
      </div>
    </>
  );
}
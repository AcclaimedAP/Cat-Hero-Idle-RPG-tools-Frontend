import { CompanionCollection } from "components/Tools/Tools/Structure/CollectionOverview/Collection/CompanionCollection/CompanionCollection";
import { SkillCollection } from "components/Tools/Tools/Structure/CollectionOverview/Collection/SkillCollection/SkillCollection";
import { MainRuneCollection } from "components/Tools/Tools/Structure/CollectionOverview/Collection/MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "components/Tools/Tools/Structure/CollectionOverview/Collection/SubRuneCollection/SubRuneCollection";
import { EquippedContainer } from "components/Tools/Tools/Structure/CollectionOverview/EquippedContainer/EquippedContainer";


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
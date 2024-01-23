import { CompanionCollection } from "../CompanionCollection/CompanionCollection";
import { SkillCollection } from "../SkillCollection/SkillCollection";
import { MainRuneCollection } from "../MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "../SubRuneCollection/SubRuneCollection";
import { EquippedContainer } from "../EquippedContainer/EquippedContainer";


export const CollectionContainer = () => {

  return (
    <>
      <div className="container-light flex flex-row">
        <div className="w-full">
          <div className="flex flex-row justify-around">
            <div className="container-dark flex flex-col md:flex-row gap-4 w-full">
              <div className=" flex flex-col gap-2 w-full">
                <CompanionCollection />

                <div className="flex flex-col lg:flex-col gap-2 justify-around">
                  <MainRuneCollection />
                  <SubRuneCollection />
                </div>
              </div>
              <div className="md:min-w-[25rem] md:max-w-[26rem] p-2 gap-6 flex flex-col">
                <SkillCollection />
                <EquippedContainer />
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}
import { CompanionCollection } from "../CompanionCollection/CompanionCollection";
import { ICollection } from "src/views/Tools/CollectionDisplay/CollectionDisplay";
import { SkillCollection } from "../SkillCollection/SkillCollection";
import { MainRuneCollection } from "../MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "../SubRuneCollection/SubRuneCollection";


export const CollectionContainer = ({ collection }: { collection: ICollection }) => {


  return (
    <>
      <div className="container-light flex flex-row">
        <div>
          <div className="flex flex-col lg:flex-row container-dark gap-2">
          <CompanionCollection companionsList={collection.companionsList} />
          <SkillCollection skillsList={collection.skillList} />
        </div>
          <div className="flex flex-col lg:flex-row container-dark gap-2">
          <MainRuneCollection runesList={collection.mainRuneList} />
            <SubRuneCollection runesList={collection.subRuneList} />
          </div>
        </div>
        <div className="container-dark">equipped display</div>
      </div>
    </>
  );
}
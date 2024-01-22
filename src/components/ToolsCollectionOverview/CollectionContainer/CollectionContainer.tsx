import { CompanionCollection } from "../CompanionCollection/CompanionCollection";
import { ICollection } from "src/views/Tools/CollectionDisplay/CollectionDisplay";
import { SkillCollection } from "../SkillCollection/SkillCollection";
import { MainRuneCollection } from "../MainRuneCollection/MainRuneCollection";
import { SubRuneCollection } from "../SubRuneCollection/SubRuneCollection";


export const CollectionContainer = ({ collection }: { collection: ICollection }) => {


  return (
    <>
      <div className="container-light">
        <div className="flex flex-col lg:flex-row container-dark">
          <CompanionCollection companionsList={collection.companionsList} />
          <SkillCollection skillsList={collection.skillList} />
        </div>
        <div className="flex flex-col lg:flex-row container-dark">
          <MainRuneCollection runesList={collection.mainRuneList} />
          <SubRuneCollection runesList={collection.subRuneList} />
        </div>
      </div>
    </>
  );
}
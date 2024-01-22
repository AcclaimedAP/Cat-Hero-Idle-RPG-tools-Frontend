import { SubNavigationBar } from 'components/SubNavigationBar/SubNavigationBar';
import { navigationDataTools } from 'views/Tools/subMenuData';
import { SelectionContainer } from 'components/ToolsCollectionOverview/SelectionContainer/SelectionContainer';
import { CollectionContainer } from 'components/ToolsCollectionOverview/CollectionContainer/CollectionContainer';
import { useState } from 'react';
import { ISelectedCompanion } from 'components/ToolsCollectionOverview/CompanionSelection/CompanionSelection';
import { ISelectedSkill } from 'components/ToolsCollectionOverview/SkillSelection/SkillSelection';
import { ISelectedMainRune } from 'components/ToolsCollectionOverview/MainRuneSelection/MainRuneSelection';
import { ISelectedSubRune } from 'components/ToolsCollectionOverview/SubRuneSelection/SubRuneSelection';

export interface ICollection {
  companionsList: ISelectedCompanion[],
  skillList: ISelectedSkill[],
  mainRuneList: ISelectedMainRune[],
  subRuneList: ISelectedSubRune[]
}


export const CollectionDisplay = () => {
  const [collection, setCollection] = useState<ICollection>({
    companionsList: [],
    skillList: [],
    mainRuneList: [],
    subRuneList: []
  })

  return (
    <>
      <SubNavigationBar navigationData={navigationDataTools} />
      <div className="container-dark flex flex-col gap-2">
        <h1 className='text-2xl p-2'>Collection Display</h1>
        <SelectionContainer setCollection={setCollection} />
        <CollectionContainer collection={collection} />
      </div>
    </>
  );
};

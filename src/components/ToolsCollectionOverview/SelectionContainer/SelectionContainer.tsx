
import { CompanionSelection } from "components/ToolsCollectionOverview/CompanionSelection/CompanionSelection"
import { useEffect, useState } from "react"
import { ISelectedCompanion } from "components/ToolsCollectionOverview/CompanionSelection/CompanionSelection"
import { ISelectedSkill } from "components/ToolsCollectionOverview/SkillSelection/SkillSelection"
import { SkillSelection } from "components/ToolsCollectionOverview/SkillSelection/SkillSelection"
import { ISelectedMainRune } from "components/ToolsCollectionOverview/MainRuneSelection/MainRuneSelection"
import { MainRuneSelection } from "components/ToolsCollectionOverview/MainRuneSelection/MainRuneSelection"
import { ISelectedSubRune } from "components/ToolsCollectionOverview/SubRuneSelection/SubRuneSelection"
import { SubRuneSelection } from "components/ToolsCollectionOverview/SubRuneSelection/SubRuneSelection"
import { ICollection } from "src/views/Tools/CollectionDisplay/CollectionDisplay"
export const SelectionContainer = ({ setCollection }: { setCollection: (collection: ICollection) => void }) => {
  const [companionList, setCompanionList] = useState<ISelectedCompanion[]>([])
  const [skillList, setSkillList] = useState<ISelectedSkill[]>([])
  const [mainRuneList, setMainRuneList] = useState<ISelectedMainRune[]>([])
  const [subRuneList, setSubRuneList] = useState<ISelectedSubRune[]>([])

  useEffect(() => {
    setCollection({
      companionsList: companionList,
      skillList: skillList,
      mainRuneList: mainRuneList,
      subRuneList: subRuneList
    })
  }, [companionList, skillList, mainRuneList, subRuneList])



  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <CompanionSelection setCompanionList={setCompanionList} />
        <SkillSelection setSkillList={setSkillList} />
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <MainRuneSelection setMainRuneList={setMainRuneList} />
        <SubRuneSelection setSubRuneList={setSubRuneList} />
      </div>
    </>
  )
}
import { CompanionSelection } from "components/Builder/Selection/CompanionSelection/CompanionSelection"
import { SkillSelection } from "components/Builder/Selection/SkillSelection/SkillSelection"
import { MainRuneSelection } from "components/Builder/Selection/MainRuneSelection/MainRuneSelection"
import { SubRuneSelection } from "components/Builder/Selection/SubRuneSelection/SubRuneSelection"


export const SelectionContainer = () => {

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <CompanionSelection />
        <SkillSelection />
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <MainRuneSelection />
        <SubRuneSelection />
      </div>
    </>
  )
}
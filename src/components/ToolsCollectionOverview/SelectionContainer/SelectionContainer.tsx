
import { useEffect, useState } from "react"
import { CompanionSelection } from "components/ToolsCollectionOverview/CompanionSelection/CompanionSelection"
import { SkillSelection } from "components/ToolsCollectionOverview/SkillSelection/SkillSelection"
import { MainRuneSelection } from "components/ToolsCollectionOverview/MainRuneSelection/MainRuneSelection"
import { SubRuneSelection } from "components/ToolsCollectionOverview/SubRuneSelection/SubRuneSelection"


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
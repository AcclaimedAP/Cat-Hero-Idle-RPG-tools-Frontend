
import { useEffect, useState } from "react"
import { CompanionSelection } from "components/Tools/Tools/Structure/CollectionOverview/Selection/CompanionSelection/CompanionSelection"
import { SkillSelection } from "components/Tools/Tools/Structure/CollectionOverview/Selection/SkillSelection/SkillSelection"
import { MainRuneSelection } from "components/Tools/Tools/Structure/CollectionOverview/Selection/MainRuneSelection/MainRuneSelection"
import { SubRuneSelection } from "components/Tools/Tools/Structure/CollectionOverview/Selection/SubRuneSelection/SubRuneSelection"


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
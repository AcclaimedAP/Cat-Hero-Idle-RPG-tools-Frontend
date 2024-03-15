import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { ISelectedSkill } from "types/ICollection";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISkill } from "src/types/ISkill";
import { HoverBox, IHoverBox } from "src/components/HoverBox/SkillHoverBox";
import React from "react";

const SkillBox = ({ skill }: { skill: ISelectedSkill }) => {
  const skills: ISkill[] = getData('skills');
  const ref = React.createRef<IHoverBox>();

  const dispatch = useDispatch();
  const equippedSkills = useSelector((state: RootState) => state.equipmentDisplay.skillList)


  const getSkill = (id: number | undefined) => {
    return skills.find((skill) => skill.id === id)
  }
  const removeSkillFromList = () => {
    const equippedSkillList = [...equippedSkills]
    const index = equippedSkillList.findIndex((equippedSkill) => equippedSkill.id === skill.id)
    equippedSkillList[index] = {}
    dispatch(setSkillList(equippedSkillList));
  }


  const handleMouseEnter = () => {
    ref.current?.show()
  }
  const handleMouseLeave = () => {
    ref.current?.hide()
  }
  const skillData = getSkill(skill.id)
  if (!skillData) return null

  return (
    <>
      <div className="flex flex-col items-center" onTouchStart={handleMouseEnter} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <HoverBox skill={skillData} ref={ref} />
        </div>
      <div onClick={removeSkillFromList} className="scale-[.8] w-8 h-8 sm:w-12 sm:h-12 sm:scale-100 -translate-x-[0.4rem] -translate-y-[0.4rem] sm:-translate-x-0 sm:-translate-y-0 relative min-h-8 sm:min-h-14">
        <div className="absolute">
            <SkillIcon skill={skillData} level={skill.level} />
          </div>
        </div>
      </div>
    </>
  )
}

const EmptySlot = () => {
  return (
    <>
      <div className="w-8 h-8 sm:w-12 sm:h-12 container-dark-inner"></div>
    </>
  )
}

export const EquippedSkills = () => {
  const equipped = useSelector((state: RootState) => state.equipmentDisplay.skillList)

  return (
    <>
      <div className="grid grid-cols-6 max-w-96 gap-4 m-2 mx-auto">
        {equipped.map((skill, index) => {
          if (!skill.id) return <EmptySlot key={index} />
          return (
            <SkillBox key={index} skill={skill} />
          )
        })
        }
      </div>
    </>
  )
}
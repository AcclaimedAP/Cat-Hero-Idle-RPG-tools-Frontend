import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { ISelectedSkill } from "types/ICollection";
import { skills } from "data/skills/skills";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/equipmentDisplaySlice'

const SkillBox = ({ skill }: { skill: ISelectedSkill }) => {
  const dispatch = useDispatch();
  const equippedSkills = useSelector((state: RootState) => state.equipmentDisplay.skillList)


  const getSkill = (id: number) => {
    return skills.find((skill) => skill.id === id)
  }
  const removeSkillFromList = () => {
    const equippedSkillList = [...equippedSkills]
    const index = equippedSkillList.findIndex((equippedSkill) => equippedSkill.id === skill.id)
    equippedSkillList[index] = {}
    dispatch(setSkillList(equippedSkillList));
  }

  if (!skill.id) return null
  return (
    <>
      <div onClick={removeSkillFromList} className="scale-[.8] sm:scale-100 -translate-x-[0.4rem] -translate-y-[0.4rem] sm:-translate-x-0 sm:-translate-y-0 relative">
        <div className="absolute">
          <SkillIcon skill={getSkill(skill.id)} level={skill.level} />
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
      <div className="grid grid-cols-6 max-w-96 gap-4 m-2">
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
import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { ISelectedSkill } from "types/ICollection";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISkill } from "src/types/ISkill";

const SkillBox = ({ skill }: { skill: ISelectedSkill }) => {
  const skills: ISkill[] = getData('skills');

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

  return (
    <>
      <div onClick={removeSkillFromList} className="scale-[.8] sm:scale-100 -translate-x-[0.4rem] -translate-y-[0.4rem] sm:-translate-x-0 sm:-translate-y-0 relative min-h-8 sm:min-h-14">
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
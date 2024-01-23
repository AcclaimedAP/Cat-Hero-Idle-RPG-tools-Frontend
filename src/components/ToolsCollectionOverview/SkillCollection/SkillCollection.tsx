import { ISelectedSkill } from "types/ICollection";
import { skills } from "src/data/skills/skills";
import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/equipmentDisplaySlice'


const SkillBox = ({ skill, add, remove, isEquipped }: { skill: ISelectedSkill, add: (skill: ISelectedSkill) => void, remove: (skill: ISelectedSkill) => void, isEquipped: boolean }) => {
  const [selected, setSelected] = useState(isEquipped)
  const selectedClass = selected ? "brightness-125 selected-shadow" : ""
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      add({ id: skill.id, level: skill.level })
    } else {
      remove({ id: skill.id, level: skill.level })
    }
  }, [selected])

  const getSkill = (id: number) => {
    return skills.find((skill) => skill.id === id)
  }
  useEffect(() => {
    setSelected(isEquipped)
  }, [isEquipped])


  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`} onClick={handleSelect}>
      {selected && <span className="absolute z-10 right-0 -top-1 text-2xl">🗸</span>}
      <SkillIcon skill={getSkill(skill.id)} level={skill.level} label={true} />
    </div>
  )
}

export const SkillCollection = () => {
  const dispatch = useDispatch();
  const skillsList = useSelector((state: RootState) => state.collectionDisplay.skillList)
  const equippedSkills = useSelector((state: RootState) => state.equipmentDisplay.skillList)

  const sortById = (a: ISelectedSkill, b: ISelectedSkill) => {
    return a.id - b.id
  }

  const addToList = (skill: ISelectedSkill) => {
    if (equippedSkills.some((obj) => obj.id === skill.id)) return
    const equippedSkillList = [...equippedSkills, skill]
    if (equippedSkillList.length > 6) {
      equippedSkillList.shift()
    }
    dispatch(setSkillList(equippedSkillList));
  }

  const removeFromList = (skill: ISelectedSkill) => {
    dispatch(setSkillList(equippedSkills.filter((obj) => obj.id !== skill.id)));
  }

  const isEquipped = (id: number) => {
    return equippedSkills.some((skill) => skill.id === id)
  }


  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Skills</h3>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {skillsList.toSorted(sortById).map((skill, index) => {
          const isEquippedBool = isEquipped(skill.id)
          return (
            <SkillBox add={addToList} remove={removeFromList} skill={skill} key={index} isEquipped={isEquippedBool} />
          )
        })}
      </div>
    </div >
  );
};
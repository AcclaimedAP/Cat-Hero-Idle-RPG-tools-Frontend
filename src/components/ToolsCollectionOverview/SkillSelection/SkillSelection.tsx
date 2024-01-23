import { skills } from "data/skills/skills"
import { useEffect, useState } from "react"
import { SkillIcon } from "src/components/SkillIcon/SkillIcon"
import { ISkill } from "src/types/ISkill"
import { ISelectedSkill } from "types/ICollection"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/collectionDisplaySlice'


const SkillBox = ({ skill, isSelected, add, remove, update }: { skill: ISkill, isSelected: { selected: boolean, level: number }, add: (skill: ISelectedSkill) => void, remove: (skill: ISelectedSkill) => void, update: (skill: ISelectedSkill) => void }) => {
  const [level, setLevel] = useState(isSelected.level)
  const [selected, setSelected] = useState(isSelected.selected)
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(event.target.value))
    update({ id: skill.id, level: parseInt(event.target.value) })
  }
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      add({ id: skill.id, level: level })
    } else {
      remove({ id: skill.id, level: level })
    }
  }, [selected])

  const selectedClass = selected ? "" : "brightness-50"

  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <SkillIcon skill={skill} level={level} label={true} />
      </div>
      <input type="number" name="" id="" value={level} onChange={handleLevelChange} className="w-full z-10 -mt-3" />
    </div>
  )
}


export const SkillSelection = () => {
  const selectedSkills = useSelector((state: RootState) => state.collectionDisplay.skillList)
  const dispatch = useDispatch();

  const addToList = (skill: ISelectedSkill) => {
    dispatch(setSkillList([...selectedSkills, skill]));
  }

  const removeFromList = (skill: ISelectedSkill) => {
    dispatch(setSkillList(selectedSkills.filter((obj) => obj.id !== skill.id)));
  }

  const updateList = (skill: ISelectedSkill) => {
    dispatch(setSkillList(selectedSkills.map((obj) => obj.id === skill.id ? skill : obj)));
  }

  const isSelected = (id: number) => {
    const skill = selectedSkills.find((skill) => skill.id === id)
    if (!skill) return { selected: false, level: 1 };
    return { selected: true, level: skill.level }
  }

  const skillBoxes = skills.map((skill) => {
    const isSelectedBool = isSelected(skill.id)
    return (
      <SkillBox add={addToList} isSelected={isSelectedBool} remove={removeFromList} update={updateList} skill={skill} key={skill.id} />
    )
  })

  return (
    <>
      <div className="container-dark-inner">
        <h1 className="text-xl">
          Skill Selection
        </h1>
        <div className="flex flex-wrap gap-1">
          {skillBoxes}
        </div>
      </div>
    </>
  )
}
import { useEffect, useState } from "react"
import { SkillIcon } from "src/components/SkillIcon/SkillIcon"
import { ISkill } from "src/types/ISkill"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setSkillList as setEquippedSkills } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"

const SkillBox = ({ skill }: { skill: ISkill }) => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector((state: RootState) => state.collectionDisplay.skillList)
  const equippedSkills = useSelector((state: RootState) => state.equipmentDisplay.skillList)
  const isSelected = selectedSkills.some((obj) => obj.id === skill.id)
  const skillFromList = selectedSkills.find((obj) => obj.id === skill.id)

  const [level, setLevel] = useState<number | string>(1)
  const [selected, setSelected] = useState(isSelected)
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setLevel(event.target.value)
      return
    }
    setLevel(parseInt(event.target.value))
    const updatedSkillList = selectedSkills.map((obj) => obj.id === skill.id ? { id: skill.id, level: parseInt(event.target.value) } : obj)
    dispatch(setSkillList(updatedSkillList));
    const updatedEquipment = equippedSkills.map((obj) => obj.id === skill.id ? { id: skill.id, level: parseInt(event.target.value) } : obj)
    dispatch(setEquippedSkills(updatedEquipment))
  }
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (typeof level != "number") {
        return
      }
      if (skillFromList) {
        dispatch(setSkillList(selectedSkills.map((obj) => obj.id === skill.id ? { id: skill.id, level: level } : obj)));
      } else {
        dispatch(setSkillList([...selectedSkills, { id: skill.id, level: level }]));
      }
    } else {
      dispatch(setSkillList(selectedSkills.filter((obj) => obj.id !== skill.id)));
      dispatch(setEquippedSkills(equippedSkills.map((obj) => obj.id === skill.id ? {} : obj)));
    }
  }, [selected])

  useEffect(() => {
    setSelected(isSelected)
    if (skillFromList) {
      setLevel(skillFromList.level || 1)
    }
  }, [isSelected, skillFromList])

  const selectedClass = selected ? "" : "brightness-50"
  const skillLevel = typeof level === "number" ? level : 1;

  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <SkillIcon skill={skill} level={skillLevel} label={true} />
      </div>
      <input type="number" name="" id="" value={level} onChange={handleLevelChange} className="w-full z-10 -mt-3" />
    </div>
  )
}


export const SkillSelection = () => {
  const skills: ISkill[] = getData("skills");

  const skillBoxes = skills.map((skill) => {
    return (
      <SkillBox skill={skill} key={skill.id} />
    )
  })

  return (
    <>
      <div className="container-dark-inner">
        <h1 className="text-xl">
          Skill Selection
        </h1>
        <div className="flex flex-row gap-2 flex-wrap justify-center">
          {skillBoxes}
        </div>
      </div>
    </>
  )
}
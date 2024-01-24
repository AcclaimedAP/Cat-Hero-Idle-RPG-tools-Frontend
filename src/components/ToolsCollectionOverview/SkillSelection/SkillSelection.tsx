import { skills } from "data/skills/skills"
import { useEffect, useState } from "react"
import { SkillIcon } from "src/components/SkillIcon/SkillIcon"
import { ISkill } from "src/types/ISkill"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/collectionDisplaySlice'


const SkillBox = ({ skill }: { skill: ISkill }) => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector((state: RootState) => state.collectionDisplay.skillList)
  const isSelected = selectedSkills.some((obj) => obj.id === skill.id)
  const skillFromList = selectedSkills.find((obj) => obj.id === skill.id)

  const [level, setLevel] = useState(1)
  const [selected, setSelected] = useState(isSelected)
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(event.target.value))
    const updatedSkillList = selectedSkills.map((obj) => obj.id === skill.id ? { id: skill.id, level: parseInt(event.target.value) } : obj)
    dispatch(setSkillList(updatedSkillList));
  }
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (skillFromList) {
        dispatch(setSkillList(selectedSkills.map((obj) => obj.id === skill.id ? { id: skill.id, level: level } : obj)));
      } else {
        dispatch(setSkillList([...selectedSkills, { id: skill.id, level: level }]));
      }
    } else {
      dispatch(setSkillList(selectedSkills.filter((obj) => obj.id !== skill.id)));
    }
  }, [selected])

  useEffect(() => {
    setSelected(isSelected)
    if (skillFromList) {
      setLevel(skillFromList.level || 1)
    }
  }, [isSelected, skillFromList])

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
        <div className="flex flex-wrap gap-1">
          {skillBoxes}
        </div>
      </div>
    </>
  )
}
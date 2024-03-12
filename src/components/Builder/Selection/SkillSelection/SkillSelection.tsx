import { useEffect, useState } from "react"
import { SkillIcon } from "src/components/SkillIcon/SkillIcon"
import { ISkill } from "src/types/ISkill"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setSkillList as setEquippedSkills } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"
import { FilterQuery } from "../../FilterQuery/FilterQuery";

const SkillBox = ({ skill, filterString }: { skill: ISkill, filterString: string }) => {
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


  const filterItem = (skill: ISkill) => {
    const filterWords = filterString.split(' ')
    const types = skill.types.join(' ')
    const nameAndTypes = skill.name + ' ' + types + skill.rarity

    for (let i = 0; i < filterWords.length; i++) {
      if (!nameAndTypes.toLowerCase().includes(filterWords[i].toLowerCase())) {
        return false
      }
    }
    return true
  }
  const filtered = filterItem(skill)
  const brightness = () => {
    if (filterString.length > 0) {
      if (filtered) {
        if (selected) {
          return "brightness-125"
        }
        return "brightness-100"
      }
      if (selected) {
        return "brightness-75"
      }
      return "brightness-50"
    }
    if (selected) {
      return "brightness-125"
    }
    return "brightness-75"
  }


  const skillLevel = typeof level === "number" ? level : 1;

  return (
    <div className={`flex flex-col ${brightness()} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <SkillIcon skill={skill} level={skillLevel} label={true} />
      </div>
      <input type="number" name="" id="" value={level} onChange={handleLevelChange} className="w-full z-10 -mt-3 bg-slate-800 text-white" />
    </div>
  )
}


export const SkillSelection = () => {
  const skills: ISkill[] = getData("skills");
  const [filter, setFilter] = useState('')

  const skillBoxes = skills.map((skill) => {
    return (
      <SkillBox filterString={filter} skill={skill} key={skill.id} />
    )
  })
  const updateFilter = (query: string) => {
    setFilter(query)
  }
  return (
    <>
      <div className="container-dark-inner">
        <div className="flex flex-row justify-between items-center container-dark">
          <h3 className="text-center min-w-32 text-lg">Skills</h3>
          <FilterQuery updateFilter={updateFilter} />
        </div>
        <div className="flex flex-row gap-2 flex-wrap justify-center">
          {skillBoxes}
        </div>
      </div>
    </>
  )
}
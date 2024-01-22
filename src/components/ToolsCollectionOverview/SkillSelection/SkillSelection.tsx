import { skills } from "data/skills/skills"
import { useEffect, useState } from "react"
import { SkillIcon } from "src/components/SkillIcon/SkillIcon"
import { ISkill } from "src/types/ISkill"

export interface ISelectedSkill {
  id: number,
  level: number
}
const SkillBox = ({ skill, add, remove, update }: { skill: ISkill, add: (skill: ISelectedSkill) => void, remove: (skill: ISelectedSkill) => void, update: (skill: ISelectedSkill) => void }) => {
  const [level, setLevel] = useState(1)
  const [selected, setSelected] = useState(false)
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


export const SkillSelection = ({ setSkillList }: { setSkillList: (skillList: ISelectedSkill[]) => void }) => {
  const [selectedSkills, setSelectedSkills] = useState<ISelectedSkill[]>([])

  const addToList = (skill: ISelectedSkill) => {
    setSelectedSkills([...selectedSkills, skill])
  }

  const removeFromList = (skill: ISelectedSkill) => {
    setSelectedSkills(selectedSkills.filter((obj) => obj.id !== skill.id))
  }

  const updateList = (skill: ISelectedSkill) => {
    setSelectedSkills(selectedSkills.map((obj) => {
      if (obj.id === skill.id) {
        return skill
      }
      return obj
    }))
  }

  const skillBoxes = skills.map((skill) => {
    return (
      <SkillBox add={addToList} remove={removeFromList} update={updateList} skill={skill} key={skill.id} />
    )
  })
  useEffect(() => {
    setSkillList(selectedSkills)
  }, [selectedSkills]);


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
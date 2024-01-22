import { ISelectedSkill } from "../SkillSelection/SkillSelection";
import { skills } from "src/data/skills/skills";
import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { useEffect, useState } from "react";


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

export const SkillCollection = ({ skillsList, updateEquipped }: { skillsList: ISelectedSkill[], updateEquipped: (type: string, list: ISelectedSkill[]) => void }) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem("equipped")
    if (local) {
      return JSON.parse(local).skillList
    }
    return []
  }
  const [equippedSkills, setEquippedSkills] = useState<ISelectedSkill[]>(getLocalStorage())

  const sortById = (a: ISelectedSkill, b: ISelectedSkill) => {
    return a.id - b.id
  }
  skillsList.sort(sortById);

  const addToList = (skill: ISelectedSkill) => {
    const equippedSkillList = [...equippedSkills, skill]
    if (equippedSkillList.length > 6) {
      equippedSkillList.shift()
    }
    setEquippedSkills(equippedSkillList)
  }

  const removeFromList = (skill: ISelectedSkill) => {
    setEquippedSkills(equippedSkills.filter((obj) => obj.id !== skill.id))
  }

  const isEquipped = (id: number) => {
    return equippedSkills.some((skill) => skill.id === id)
  }

  useEffect(() => {
    updateEquipped("skill", equippedSkills)
  }, [equippedSkills])



  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Skills</h3>
      <div className="flex flex-col lg:flex-row gap-2 flex-wrap justify-center">
        {skillsList.map((skill) => {
          const isEquippedBool = isEquipped(skill.id)
          return (
            <SkillBox add={addToList} remove={removeFromList} skill={skill} key={skill.id} isEquipped={isEquippedBool} />
          )
        })}
      </div>
    </div >
  );
};
import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { ISelectedSkill } from "../../SkillSelection/SkillSelection";
import { skills } from "data/skills/skills";

const SkillBox = ({ skill }: { skill: ISelectedSkill }) => {

  const getSkill = (id: number) => {
    return skills.find((skill) => skill.id === id)
  }
  return (
    <>
      <SkillIcon skill={getSkill(skill.id)} level={skill.level} />
    </>
  )
}

const EmptySlot = () => {
  return (
    <>
      <div className="w-12 h-12 container-dark-inner"></div>
    </>
  )
}

export const EquippedSkills = ({ equipped }: { equipped: ISelectedSkill[] }) => {




  return (
    <>
      <div className="grid grid-cols-6">
        {equipped.map((skill, index) => {
          return (
            <SkillBox key={index} skill={skill} />
          )
        })
        }
        {
          Array(6 - equipped.length).fill(0).map((_, index) => {
            return (
              <EmptySlot key={index} />
            )
          })
        }
      </div>
    </>
  )
}
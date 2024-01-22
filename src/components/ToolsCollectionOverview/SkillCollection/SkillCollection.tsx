import { ISelectedSkill } from "../SkillSelection/SkillSelection";
import { skills } from "src/data/skills/skills";
import { SkillIcon } from "src/components/SkillIcon/SkillIcon";


export const SkillCollection = ({ skillsList }: { skillsList: ISelectedSkill[] }) => {

  const getSkill = (id: number) => {
    return skills.find((skill) => skill.id === id)
  }
  const sortById = (a: ISelectedSkill, b: ISelectedSkill) => {
    return a.id - b.id
  }
  skillsList.sort(sortById);

  return (
    <div className="container-dark-inner">

      <div className="flex flex-col lg:flex-row gap-1">
        {skillsList.map((skill) => {
          return (
            <div className="flex flex-col justify-center items-center w-12 m-auto" key={skill.id}>
              <SkillIcon skill={getSkill(skill.id)} level={skill.level} label={true} />
            </div>
          )
        })}
      </div>
    </div >
  );
};
import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { ISkill } from "src/types/ISkill";
import { HoverContainer } from "./HoverContainer";
import { Ribbon } from "./HoverRibbon";
import { TypesList } from "./HoverTypes";
import { SkillIcon } from "../SkillIcon/SkillIcon";

export interface IHoverBox {
  show: () => void;
  hide: () => void;
}

export const HoverBox = forwardRef(({ skill }: { skill: ISkill }, ref: Ref<IHoverBox>) => {
  const [isVisible, setIsVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: () => {
      setIsVisible(true);
    },
    hide: () => {
      setIsVisible(false);
    }
  }));

  if (!isVisible) {
    return (
      <>
      </>)
  }
  return (
    <HoverContainer type="skill">
      <div className='hover-box hover-box-skill flex justify-center items-start h-52 w-72'>
        <Ribbon width={"large"}>{skill.name}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-12 mt-1 gap-2 w-64'>
          <div>
            <SkillIcon skill={skill} label={false} />
          </div>
          <div className="flex flex-col">
            <TypesList types={skill.types} />
            <div className="text-[0.6rem] p-2 m-1 mb-2 rounded-md hover-type">
              <span>{skill.description}</span>
            </div>
          </div>
        </div>
      </div>
    </HoverContainer>
  );
});
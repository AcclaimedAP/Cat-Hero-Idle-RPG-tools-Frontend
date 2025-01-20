import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { HoverContainer } from "./HoverContainer";
import { Ribbon } from "./HoverRibbon";
import { TypesList } from "./HoverTypes";
import { SkillIcon } from "../SkillIcon/SkillIcon";
import { getDeviceType } from "src/utility/device/getDevice";
import { IHoverBox } from "src/types/IHoverBox";
import Game from "types/game";
import { DescriptionText } from "./DescriptionText";
/**
 * Hover box for the skill
 * @param {ISkill} skill - The skill object
 */

export const HoverBox = forwardRef(({ skill }: { skill: Game.Skill }, ref: Ref<IHoverBox>) => {
  const [isVisible, setIsVisible] = useState(false);
  let hoverTimeout: any;
  const delayTimer = getDeviceType() === 'desktop' ? 0 : 0;
  useImperativeHandle(ref, () => ({
    show: () => {
      hoverTimeout = setTimeout(() => {
        setIsVisible(true);
      }, delayTimer);
    },
    hide: () => {
      clearTimeout(hoverTimeout);
      setIsVisible(false);
    }
  }));
  // remove the $[]] and [/] from the description
  const cleanDescription = skill.description ? skill.description.replace(/\$\[([^\]]+)\](.*?)\[\/\]/g, '') : '';
  const heightValue = cleanDescription.length + ((cleanDescription.split('\n').length - 1) * 30);
  const heightClass = function (height: number) {
    if (height < 125) {
      return "h-40";
    } else if (height < 180) {
      return "h-48";
    } else if (height < 210) {
      return "h-52";
    } else if (height < 250) {
      return "h-56";
    } else if (height < 300) {
      return "h-64";
    } else if (height < 380) {
      return "h-72";
    } else if (height < 440) {
      return "h-80";
    } else if (height < 515) {
      return "h-[22rem]";
    } else if (height < 600) {
      return "h-96";
    } else {
      return "h-[25rem]";
    }
  }
  if (!isVisible) {
    return (
      <>
      </>)
  }
  return (
    <HoverContainer type="skill">
      <div className={`hover-box hover-box-skill flex justify-center items-start ${heightClass(heightValue)} w-72`} onMouseOver={() => { clearTimeout(hoverTimeout); setIsVisible(false); }}>
        <Ribbon width={"large"}>{skill.name}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-12 mt-1 gap-2 w-64 h-[calc(100%-4rem)]'>
          <div>
            <SkillIcon skill={skill} label={false} />
            <span className="bg-gray-500 p-1 text-[0.6rem] whitespace-nowrap">{skill.cooldown} seconds</span>
          </div>
          <div className="flex flex-col h-full">
            <TypesList types={skill.types} />
            <div className="text-[0.6rem] p-2 m-1 mb-2 rounded-md hover-type h-full">
              <span><DescriptionText description={skill.description} /></span>
            </div>
          </div>
        </div>
      </div>
    </HoverContainer>
  );
});
import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { HoverContainer } from "./HoverContainer";
import { Ribbon } from "./HoverRibbon";
import { RuneIcon } from "../RuneIcon/RuneIcon";
import { getDeviceType } from "src/utility/device/getDevice";
import { IHoverBox } from "src/types/IHoverBox";
import Game from "types/game";
import { DescriptionText } from "./DescriptionText";
/**
 * Hover box for the sub rune
 * @param {ISubRune} rune - The sub rune object
 */

export const HoverBox = forwardRef(({ rune }: { rune: Game.Rune.SubRune }, ref: Ref<IHoverBox>) => {
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
  const heightValue = rune.description.length + ((rune.description.split('\n').length - 1) * 30);
  const heightClass = function (height: number) {
    if (height < 65) {
      return "h-32";
    } else if (height < 85) {
      return "h-36";
    } else if (height < 100) {
      return "h-40";
    } else if (height < 120) {
      return "h-44";
    } else if (height < 140) {
      return "h-48";
    } else {
      return "h-52";
    }
  }

  if (!isVisible) {
    return (
      <>
      </>)
  }
  return (
    <HoverContainer type="sub-rune">
      <div className={`hover-box hover-box-sub-rune flex justify-center items-start ${heightClass(heightValue)} w-56`} onMouseOver={() => { clearTimeout(hoverTimeout); setIsVisible(false); }}>
        <Ribbon width={""}>{rune.name}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-12 mt-1 gap-2 w-48 h-[calc(100%-4rem)]'>
          <div>
            <RuneIcon type="sub" rune={rune} label={false} />
          </div>
          <div className="flex flex-col h-full">
            <div className="text-[0.6rem] p-2 m-1 mb-2 rounded-md hover-type h-full">
              <span><DescriptionText description={rune.description} /></span>
            </div>
          </div>
        </div>
      </div>
    </HoverContainer>
  );
});
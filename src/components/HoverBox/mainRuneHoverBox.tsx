import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { HoverContainer } from "./HoverContainer";
import { Ribbon } from "./HoverRibbon";
import { RuneIcon } from "../RuneIcon/RuneIcon";
import { getDeviceType } from "src/utility/device/getDevice";
import { IHoverBox } from "src/types/IHoverBox";
import Game from "types/game";
import { DescriptionText } from "./DescriptionText";
/**
 * Hover box for the main rune
 * @param {IMainRune} rune - The main rune object
 */

export const HoverBox = forwardRef(({ rune }: { rune: Game.Rune.MainRune }, ref: Ref<IHoverBox>) => {
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
    if (height < 80) {
      return "h-32";
    } else if (height < 120) {
      return "h-36";
    } else if (height < 160) {
      return "h-44";
    } else if (height < 310) {
      return "h-48";
    } else if (height < 420) {
      return "h-52";
    }
  }
  if (!isVisible) {
    return (
      <>
      </>)
  }
  return (
    <HoverContainer type="main-rune">
      <div className={`hover-box hover-box-main-rune flex justify-center items-start ${heightClass(heightValue)} w-64`} onMouseOver={() => { clearTimeout(hoverTimeout); setIsVisible(false); }}>
        <Ribbon width={"medium"}>{rune.name + " " + heightValue}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-12 mt-1 gap-2 w-56'>
          <div>
            <RuneIcon type="main" rune={rune} label={false} />
          </div>
          <div className="flex flex-col">
            <div className="text-[0.6rem] p-2 m-1 mb-2 rounded-md hover-type">
              <span><DescriptionText description={rune.description} /></span>
            </div>
          </div>
        </div>
      </div>
    </HoverContainer>
  );
});
import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { ISubRune } from "src/types/IRune";
import { HoverContainer } from "./HoverContainer";
import { Ribbon } from "./HoverRibbon";
import { RuneIcon } from "../RuneIcon/RuneIcon";
import { getDeviceType } from "src/utility/device/getDevice";

export interface IHoverBox {
  show: () => void;
  hide: () => void;
}

/**
 * Hover box for the sub rune
 * @param {ISubRune} rune - The sub rune object
 */

export const HoverBox = forwardRef(({ rune }: { rune: ISubRune }, ref: Ref<IHoverBox>) => {
  const [isVisible, setIsVisible] = useState(false);
  let hoverTimeout: any;
  const delayTimer = getDeviceType() === 'desktop' ? 500 : 0;
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

  if (!isVisible) {
    return (
      <>
      </>)
  }
  return (
    <HoverContainer type="sub-rune">
      <div className='hover-box hover-box-sub-rune flex justify-center items-start h-36 w-56' onMouseOver={() => { clearTimeout(hoverTimeout); setIsVisible(false); }}>
        <Ribbon width={""}>{rune.name}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-12 mt-1 gap-2 w-48'>
          <div>
            <RuneIcon type="sub" rune={rune} label={false} />
          </div>
          <div className="flex flex-col">
            <div className="text-[0.6rem] p-2 m-1 mb-2 rounded-md hover-type">
              <span>{rune.description}</span>
            </div>
          </div>
        </div>
      </div>
    </HoverContainer>
  );
});
import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { IMainRune } from "src/types/IRune";
import { HoverContainer } from "./HoverContainer";
import { Ribbon } from "./HoverRibbon";
import { RuneIcon } from "../RuneIcon/RuneIcon";

export interface IHoverBox {
  show: () => void;
  hide: () => void;
}

export const HoverBox = forwardRef(({ rune }: { rune: IMainRune }, ref: Ref<IHoverBox>) => {
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
    <HoverContainer type="main-rune">
      <div className='hover-box hover-box-main-rune flex justify-center items-start h-48 w-64'>
        <Ribbon width={"medium"}>{rune.name}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-12 mt-1 gap-2 w-56'>
          <div>
            <RuneIcon type="main" rune={rune} label={false} />
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
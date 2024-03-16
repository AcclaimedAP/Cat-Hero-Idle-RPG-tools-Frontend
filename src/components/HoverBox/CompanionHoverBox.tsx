import { forwardRef, useImperativeHandle, Ref, useState } from "react";
import { ICompanion } from "src/types/ICompanion";
import { HoverContainer } from "./HoverContainer";
import { CompanionIcon } from "../CompanionIcon/CompanionIcon";
import { Ribbon } from "./HoverRibbon";
import { TypesList } from "./HoverTypes";

export interface IHoverBox {
  show: () => void;
  hide: () => void;
}

export const HoverBox = forwardRef(({ companion }: { companion: ICompanion }, ref: Ref<IHoverBox>) => {
  const [isVisible, setIsVisible] = useState(false);
  let hoverTimeout: any;

  useImperativeHandle(ref, () => ({
    show: () => {
      hoverTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 500);

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
    <HoverContainer>
      <div className='hover-box hover-box-companion flex justify-center items-center h-32 w-48'>
        <Ribbon width={"small"}>{companion.name}</Ribbon>
        <div className='flex flex-row justify-between items-start translate-y-6 gap-2 w-44'>
          <div>
            <CompanionIcon companion={companion} border={false} stars={false} label={false} mp={false} />
          </div>
          <TypesList types={companion.types} />
        </div>
      </div>
    </HoverContainer>
  );
});
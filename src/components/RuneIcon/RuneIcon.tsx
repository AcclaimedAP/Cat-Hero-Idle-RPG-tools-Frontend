import { getRuneBackground } from "../../utility/imageHandling/getRuneBackground";
import { IRune } from "../../types/IRune";

export const RuneIcon = ({ rune, label = true }: { rune: IRune, label?: boolean }) => {

  const background: string = getRuneBackground(rune.type, rune.rarity);

  return (
    <>
      <div className='relative w-12 h-12 inline-block m-1'>
        {label && <span className='absolute z-10 text-[0.6rem] left-1/2 bottom-0 -translate-x-1/2'>{rune.label}</span>}
        {rune.image && <img
          className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[40%] min-h-[40%] max-w-[60%] max-h-[60%]'
          src={rune.image}
          alt=''
        />}
        <img
          className='absolute left-0 top-0 z-1'
          src={background}
          alt=''
        />
      </div>
    </>
  );
};

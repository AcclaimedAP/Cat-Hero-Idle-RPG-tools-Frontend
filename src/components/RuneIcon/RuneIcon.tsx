import { getRuneBackground } from "utility/imageHandling/getRuneBackground";
import { IRune } from "types/IRune";

export const RuneIcon = ({ rune, label = true }: { rune: IRune | undefined, label?: boolean }) => {
  if (!rune) return null;

  const background: string = getRuneBackground(rune.type, rune.rarity);
  const setImages = () => {
    if (rune.image == null || rune.image.length == 0) {
      return <></>;
    }
    const imageCount = rune.image.length;
    return rune.image.map((image, index) => {
      const imageLocation = imageCount > 1 ? ['max-w-[40%] max-h-[50%] left-[40%] top-[45%]', 'self-end max-w-[30%] max-h-[30%] left-2/3 top-[65%]'] : ['left-1/2 top-1/2'];
      const imageSize = imageCount > 1 ? '' : ' max-w-[50%] max-h-[50%]';
      return <img
        className={`${imageSize} ${imageLocation[index]} -translate-y-1/2 -translate-x-1/2 object-cover absolute`}
        src={image}
        alt=''
        key={index}
      />
    })
  }
  const runeImage = setImages()
  return (
    <>
      <div className='relative w-14 h-14 inline-block'>
        {label && <span className='absolute z-10 text-[0.7rem] left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2'>{rune.label}</span>}
        <div className="z-10 relative h-full w-full">{runeImage}</div>
        <img
          className='absolute left-0 top-0 z-1'
          src={background}
          alt=''
        />
      </div>
    </>
  );
};

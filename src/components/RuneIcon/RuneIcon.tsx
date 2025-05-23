import Game from "types/game";

/**
 * Renders a rune icon component.
 * @param type - The type of rune to display.
 * @param rune - The rune object to display.
 * @param label - Not used currently.
 * @returns The rendered RuneIcon component.
 */
export const RuneIcon = ({ type = "main", rune, label = true }: { type?: string, rune: Game.Rune.SubRune | Game.Rune.MainRune | undefined, label?: boolean }) => {
  if (!rune) return null;

  const runename = rune.slug.replaceAll('-', '_');
  const background = `game-assets/runes-${type}/${rune.rarity}/background.png`.toLowerCase();
  const runeImage = `game-assets/runes-${type}/${rune.rarity}/${runename}.webp`.toLowerCase();
  return (
    <>
      <div className='relative w-14 h-14 inline-block'>
        {label && <span className='absolute z-10 text-[0.7rem] left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2'></span>}
        <div className="z-10 relative h-full w-full">
          <img
            className='text-sm'
            src={runeImage}
            alt={`${rune.name} icon`}
            onError={(e) => {
              e.currentTarget.src = 'favicon-32x32.png';
              e.currentTarget.className = 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2';
            }}
          />
        </div>
        <img
          className='absolute left-0 top-0 z-1'
          src={background}
          alt='rune background'
        />
      </div>
    </>
  );
};

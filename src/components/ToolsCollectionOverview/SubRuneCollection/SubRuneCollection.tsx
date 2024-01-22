import { ISelectedSubRune } from "../SubRuneSelection/SubRuneSelection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";


export const SubRuneCollection = ({ runesList }: { runesList: ISelectedSubRune[] }) => {
  const getRune = (id: number) => {
    return runes.find((rune) => rune.id === id)
  }
  const sortById = (a: ISelectedSubRune, b: ISelectedSubRune) => {
    return a.id - b.id
  }
  runesList.sort(sortById);

  return (
    <div className="container-dark-inner">
      <h3 className="text-center min-w-48">Sub Runes</h3>
      <div className="flex flex-col lg:flex-row gap-1 flex-wrap">
        {runesList.map((rune) => {
          return (
            <div className="flex flex-col justify-center items-center w-14 m-auto" key={rune.id}>
              <RuneIcon rune={getRune(rune.id)} label={true} />
            </div>
          )
        })}
      </div>
    </div>
  );
};
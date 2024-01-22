import { ISelectedMainRune } from "../MainRuneSelection/MainRuneSelection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";


export const MainRuneCollection = ({ runesList }: { runesList: ISelectedMainRune[] }) => {
  const getRune = (id: number) => {
    return runes.find((rune) => rune.id === id)
  }
  const sortById = (a: ISelectedMainRune, b: ISelectedMainRune) => {
    return a.id - b.id
  }
  runesList.sort(sortById);

  return (
    <div className="container-dark-inner">
      <div className="flex flex-col lg:flex-row gap-1">
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
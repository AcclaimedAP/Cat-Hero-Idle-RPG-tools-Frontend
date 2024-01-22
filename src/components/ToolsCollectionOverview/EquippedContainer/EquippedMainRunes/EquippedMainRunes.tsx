import { ISelectedMainRune } from "../../MainRuneSelection/MainRuneSelection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";


const RuneBox = ({ rune }: { rune: ISelectedMainRune }) => {

  const getRune = (id: number) => {
    return runes.find((rune) => rune.id === id)
  }
  return (
    <>
      <div className="justify-center flex">
        <RuneIcon rune={getRune(rune.id)} />
      </div>
    </>
  )
}

const EmptySlot = () => {
  return (
    <>
      <div className=" justify-center flex">
        <div className="w-14 h-14 bg-[#392d20] border-2 border-black rounded-[50%]"></div>
      </div>
    </>
  )
}

export const EquippedMainRunes = ({ equipped }: { equipped: ISelectedMainRune[] }) => {




  return (
    <>
      <div className="flex flex-wrap justify-around gap-1 [&>*:first-child]:w-full ">
        {equipped.map((rune, index) => {
          return (
            <RuneBox key={index} rune={rune} />
          )
        })
        }
        {
          Array(3 - equipped.length).fill(0).map((_, index) => {
            return (
              <EmptySlot key={index} />
            )
          })
        }
      </div>
    </>
  )
}
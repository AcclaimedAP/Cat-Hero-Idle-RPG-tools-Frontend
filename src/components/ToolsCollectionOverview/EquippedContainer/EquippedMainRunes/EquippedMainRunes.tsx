import { ISelectedMainRune } from "types/ICollection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'

const RuneBox = ({ rune }: { rune: ISelectedMainRune }) => {
  const dispatch = useDispatch();
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)

  const getRune = (id: number) => {
    return runes.find((rune) => rune.id === id)
  }
  const removeRuneFromList = () => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((equippedRune) => equippedRune.id === rune.id)
    equippedRuneList[index] = {}
    dispatch(setMainRuneList(equippedRuneList));
  }

  if (!rune.id) return null
  return (
    <>
      <div className="justify-center flex" onClick={removeRuneFromList}>
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

export const EquippedMainRunes = () => {
  const equipped = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)
  return (
    <>
      <div className="flex flex-wrap justify-around gap-1 [&>*:first-child]:w-full ">
        {equipped.map((rune, index) => {
          if (!rune.id) return <EmptySlot key={index} />
          return (
            <RuneBox key={index} rune={rune} />
          )
        })
        }
      </div>
    </>
  )
}
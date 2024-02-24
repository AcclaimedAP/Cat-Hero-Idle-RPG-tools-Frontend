import { ISelectedSubRune } from "types/ICollection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'


const RuneBox = ({ rune }: { rune: ISelectedSubRune }) => {
  const dispatch = useDispatch();
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)

  const getRune = (id: number) => {
    return runes.find((rune) => rune.id === id)
  }
  const removeRuneFromList = () => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((equippedRune) => equippedRune.id === rune.id)
    equippedRuneList[index] = {}
    dispatch(setSubRuneList(equippedRuneList));
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
      <div className="">
        <div className="w-14 h-14 bg-[#392d20] border-2 border-black rounded-[50%]">

        </div>
      </div>
    </>
  )
}

export const EquippedSubRunes = () => {
  const equipped = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 [&>*:first-child]:w-full ">
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
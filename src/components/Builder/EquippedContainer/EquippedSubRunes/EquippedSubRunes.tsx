import { ISelectedSubRune } from "types/ICollection";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISubRune } from "src/types/IRune";

const RuneBox = ({ rune }: { rune: ISelectedSubRune }) => {
  const runes: ISubRune[] = getData('subRunes');

  const dispatch = useDispatch();
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)

  const getRune = (id: number | undefined) => {
    return runes.find((rune) => rune.id === id)
  }
  const removeRuneFromList = () => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((equippedRune) => equippedRune.id === rune.id)
    equippedRuneList[index] = {}
    dispatch(setSubRuneList(equippedRuneList));
  }

  const doesRuneExist = (id: number | undefined) => {
    return runes.some((rune) => rune.id === id)
  }

  if (!doesRuneExist(rune.id)) return <EmptySlot />
  return (
    <>
      <div className="justify-center flex" onClick={removeRuneFromList}>
        <RuneIcon type="sub" rune={getRune(rune.id)} />
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
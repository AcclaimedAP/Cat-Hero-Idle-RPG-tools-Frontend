import { ISelectedSubRune } from "types/ICollection";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISubRune } from "src/types/IRune";
import { HoverBox, IHoverBox } from "src/components/HoverBox/subRuneHoverBox";
import React from "react";

const RuneBox = ({ rune }: { rune: ISelectedSubRune }) => {
  const runes: ISubRune[] = getData('subRunes');
  const ref = React.createRef<IHoverBox>();

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
  const handleMouseEnter = () => {
    ref.current?.show()
  }
  const handleMouseLeave = () => {
    ref.current?.hide()
  }
  if (!doesRuneExist(rune.id)) return <EmptySlot />
  const runeData = getRune(rune.id)
  if (!runeData) return null
  return (
    <>
      <div className="flex flex-col items-center" onTouchStart={handleMouseEnter} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <HoverBox rune={runeData} ref={ref} />
        </div>
      <div className="justify-center flex" onClick={removeRuneFromList}>
          <RuneIcon type="sub" rune={runeData} />
        </div>
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
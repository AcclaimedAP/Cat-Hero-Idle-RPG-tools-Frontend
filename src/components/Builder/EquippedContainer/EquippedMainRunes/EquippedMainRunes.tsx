import { ISelectedMainRune } from "types/ICollection";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { IMainRune } from "src/types/IRune";
import { HoverBox, IHoverBox } from "src/components/HoverBox/mainRuneHoverBox";
import React from "react";

const RuneBox = ({ rune }: { rune: ISelectedMainRune }) => {
  const runes: IMainRune[] = getData('mainRunes');
  const ref = React.createRef<IHoverBox>();
  const dispatch = useDispatch();
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)

  const getRune = (id: number | undefined) => {
    return runes.find((rune) => rune.id === id)
  }
  const removeRuneFromList = () => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((equippedRune) => equippedRune.id === rune.id)
    equippedRuneList[index] = {}
    dispatch(setMainRuneList(equippedRuneList));
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
          <RuneIcon type="main" rune={runeData} />
        </div>
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
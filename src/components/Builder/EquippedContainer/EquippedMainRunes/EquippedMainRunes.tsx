import Game from "types/game";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { HoverBox } from "src/components/HoverBox/mainRuneHoverBox";
import { IHoverBox } from "src/types/IHoverBox";
import React from "react";
import { getDeviceType } from "src/utility/device/getDevice";

const RuneBox = ({ rune }: { rune: Game.Collection.MainRune }) => {
  const runes: Game.Rune.MainRune[] = getData('mainRunes');
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

  const device = getDeviceType();
  return (
    <>
      <div className="flex flex-col items-center" onTouchStart={() => {
        if (device !== 'desktop') {
          handleMouseEnter()
        }
      }} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
      {/* <div className="flex flex-wrap justify-around gap-1 [&>*:first-child]:w-full "> */}
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
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
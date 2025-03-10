import Game from "types/game";
import { CompanionIcon } from "components/CompanionIcon/CompanionIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from "src/config/redux/slices/equipmentDisplaySlice";
import { getData } from "src/utility/data/getData";
import { HoverBox } from "src/components/HoverBox/CompanionHoverBox";
import React from "react";
import { IHoverBox } from "src/types/IHoverBox";
import { getDeviceType } from "src/utility/device/getDevice";



const CompanionBox = ({ companion }: { companion: Game.Collection.Companion }) => {
  const companions: Game.Companion[] = getData('companions');
  const dispatch = useDispatch();
  const equippedCompanions = useSelector((state: RootState) => state.equipmentDisplay.companionsList)
  const ref = React.createRef<IHoverBox>();

  const getCompanion = (id: number | undefined) => {
    return companions.find((companion) => companion.id === id)
  }
  const removeCompanionFromList = () => {
    const equippedCompanionList = [...equippedCompanions]
    const index = equippedCompanionList.findIndex((equippedCompanion) => equippedCompanion.id === companion.id)
    equippedCompanionList[index] = {}
    dispatch(setCompanionsList(equippedCompanionList));
  }

  const handleMouseEnter = () => {
    ref.current?.show()
  }
  const handleMouseLeave = () => {
    ref.current?.hide()
  }
  const companionData = getCompanion(companion.id)
  if (!companionData) return null
  const device = getDeviceType();
  return (
    <>
      <div onClick={removeCompanionFromList} onTouchStart={() => {
        if (device !== 'desktop') {
          handleMouseEnter()
        }
      }} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="scale-[.8] sm:scale-100 w-8 h-8 sm:w-12 sm:h-12 -translate-x-[0.4rem] -translate-y-[0.35rem] sm:-translate-x-0 sm:-translate-y-0 relative min-h-8 sm:min-h-14">
        <div className="relative">
          <HoverBox companion={companionData} ref={ref} />
        </div>
        <div className="absolute">
          <CompanionIcon companion={companionData} level={companion.level} border={false} stars={false} />
        </div>
      </div>
    </>
  )
}

const EmptySlot = () => {
  return (
    <>
      <div className="w-8 h-8 sm:w-12 sm:h-12 container-dark-inner"></div>
    </>
  )
}

export const EquippedCompanions = () => {
  const equipped = useSelector((state: RootState) => state.equipmentDisplay.companionsList)

  return (
    <>
      <div className="grid grid-cols-6 gap-4 max-w-96 m-2 mx-auto">
        {equipped.map((companion, index) => {
          if (!companion.id) return <EmptySlot key={index} />
          return (
            <CompanionBox key={index} companion={companion} />
          )
        })
        }
      </div>
    </>
  )
}
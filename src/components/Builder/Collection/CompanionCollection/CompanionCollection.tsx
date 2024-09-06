import { ISelectedCompanion } from "types/ICollection";
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ICompanion } from "src/types/ICompanion";
import { FilterQuery } from "../../FilterQuery/FilterQuery";
import { HoverBox } from "src/components/HoverBox/CompanionHoverBox";
import React from "react";
import { IHoverBox } from "src/types/IHoverBox";
import { getDeviceType } from "src/utility/device/getDevice";
import { ICompanionBoxProps } from "types/ICollection";

const CompanionBox = ({ companion, add, remove, isEquipped, filterString }: ICompanionBoxProps) => {

  if (!companion.id) return null
  const companions: ICompanion[] = getData('companions');
  const [selected, setSelected] = useState(isEquipped);
  const ref = React.createRef<IHoverBox>();

  const handleSelect = () => {
    setSelected(!selected)
  }

  const getCompanion = (id: number) => {
    return companions.find((companion) => companion.id === id)
  }

  useEffect(() => {
    if (selected) {
      add({ id: companion.id, level: companion.level })
    } else {
      remove({ id: companion.id, level: companion.level })
    }
  }, [selected])

  useEffect(() => {
    setSelected(isEquipped)
  }, [isEquipped])
  const companionData = getCompanion(companion.id)
  if (!companionData) return null
  const filterItem = (companion: ICompanion) => {
    const filterWords = filterString.split(' ')
    const types = companion.types.join(' ')
    const nameAndTypes = companion.name + ' ' + types + companion.rarity

    for (let i = 0; i < filterWords.length; i++) {
      if (!nameAndTypes.toLowerCase().includes(filterWords[i].toLowerCase())) {
        return false
      }
    }
    return true
  }
  const filtered = filterItem(companionData)
  const brightness = () => {
    if (filterString.length > 0) {
      if (filtered) {
        return "brightness-125"
      }
      if (selected) {
        return "brightness-75"
      }
      return "brightness-50"
    }
    if (selected) {
      return "brightness-125"
    }
    return "brightness-75"
  }




  const handleMouseEnter = () => {
    ref.current?.show()
  }
  const handleMouseLeave = () => {
    ref.current?.hide()
  }


  const device = getDeviceType();
  return (
    <>
      <div className="flex flex-col items-center" onTouchStart={() => {
        if (device !== 'desktop') {
          handleMouseEnter()
        }
      }} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <HoverBox companion={companionData} ref={ref} />
        </div>
        <div className={`${brightness()} flex flex-col justify-center items-center w-20 h-24`} key={companion.id} onClick={handleSelect}>
          {selected && <span className="absolute z-10 right-0 top-0 text-2xl">🗸</span>}
          <CompanionIcon companion={companionData} level={companion.level} label={true} />
        </div>
      </div>
    </>
  )
}

export const CompanionCollection = () => {
  const companionsList = useSelector((state: RootState) => state.collectionDisplay.companionsList)
  const dispatch = useDispatch();
  const equippedCompanions = useSelector((state: RootState) => state.equipmentDisplay.companionsList)
  const [filter, setFilter] = useState('')
  const sortById = (a: ISelectedCompanion, b: ISelectedCompanion) => {
    if (!a.id || !b.id) return 0
    return a.id - b.id
  }
  const companions: ICompanion[] = getData('companions');
  const rarityOrder = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic']
  const sortByRarity = (a: ISelectedCompanion, b: ISelectedCompanion) => {
    const companionA = companions.find((companion) => companion.id === a.id)
    const companionB = companions.find((companion) => companion.id === b.id)
    if (!companionA || !companionB) return 0
    return rarityOrder.indexOf(companionA.rarity) - rarityOrder.indexOf(companionB.rarity)
  }



  const addToList = (companion: ISelectedCompanion) => {
    if (equippedCompanions.some((obj) => obj.id === companion.id)) return
    const equippedCompanionList = [...equippedCompanions]
    const indexOfEmpty = equippedCompanionList.findIndex((obj) => !obj.id)
    if (indexOfEmpty === -1) {
      equippedCompanionList.shift()
      equippedCompanionList.push(companion)
    } else {
      equippedCompanionList[indexOfEmpty] = companion
    }

    dispatch(setCompanionsList(equippedCompanionList));
  }

  const removeFromList = (companion: ISelectedCompanion) => {
    const equippedCompanionList = [...equippedCompanions]
    const index = equippedCompanionList.findIndex((obj) => obj.id === companion.id)
    if (index === -1) return
    equippedCompanionList[index] = {}
    dispatch(setCompanionsList(equippedCompanionList));
  }

  const isEquipped = (id: number) => {
    return equippedCompanions.some((companion) => companion.id === id)
  }

  const updateFilter = (query: string) => {
    setFilter(query)
  }



  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center container-dark">
        <h3 className="text-center min-w-28 text-lg">Companions</h3>
        <FilterQuery updateFilter={updateFilter} />
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {companionsList.toSorted(sortByRarity).map((companion, index) => {
          if (!companion.id) return null
          const isEquippedBool = isEquipped(companion.id)
          return (
            <CompanionBox filterString={filter} companion={companion} add={addToList} remove={removeFromList} key={index} isEquipped={isEquippedBool} />
          )
        })}
      </div>
    </div>
  );
};
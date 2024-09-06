import { ISelectedSubRune } from "types/ICollection";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISubRune } from "src/types/IRune";
import { FilterQuery } from "../../FilterQuery/FilterQuery";
import { HoverBox } from "src/components/HoverBox/subRuneHoverBox";
import { IHoverBox } from "src/types/IHoverBox";
import React from "react";
import { getDeviceType } from "src/utility/device/getDevice";
import { ISubRuneBoxProps } from "types/ICollection";

const SubRuneBox = ({ rune, add, remove, isEquipped, filterString }: ISubRuneBoxProps) => {
  const runes: ISubRune[] = getData('subRunes');
  const ref = React.createRef<IHoverBox>();
  const [selected, setSelected] = useState(isEquipped)
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      add({ id: rune.id })
    } else {
      remove({ id: rune.id })
    }
  }, [selected])

  const getRune = (id: number | undefined) => {
    return runes.find((rune) => rune.id === id)
  }
  useEffect(() => {
    setSelected(isEquipped)
  }, [isEquipped])

  const runeData = getRune(rune.id)
  if (!runeData) return null
  const filterItem = (rune: ISubRune) => {
    const filterWords = filterString.split(' ')
    const nameAndTypes = rune.name + ' ' + rune.type + rune.rarity
    for (let i = 0; i < filterWords.length; i++) {
      if (!nameAndTypes.toLowerCase().includes(filterWords[i].toLowerCase())) {
        return false
      }
    }
    return true
  }

  const filtered = filterItem(runeData)
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
          <HoverBox rune={runeData} ref={ref} />
        </div>
        <div className={`flex flex-col ${brightness()} justify-center items-center w-14`} onClick={handleSelect}>
          {selected && <>
            <span className="absolute z-10 right-0 -top-1 text-2xl">🗸</span>
            <div className=" rounded-[50%] selected-shadow-circle border-2 border-red-400 w-14 h-14 top-1 absolute"></div>
          </>
          }
          <RuneIcon type="sub" rune={getRune(rune.id)} label={true} />
        </div>
      </div>
    </>
  )

}


export const SubRuneCollection = () => {
  const dispatch = useDispatch();
  const runesList = useSelector((state: RootState) => state.collectionDisplay.subRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)
  const [filter, setFilter] = useState('')
  const sortById = (a: ISelectedSubRune, b: ISelectedSubRune) => {
    if (!a.id || !b.id) return 0
    return a.id - b.id
  }

  const runes: ISubRune[] = getData('subRunes');
  const rarityOrder = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic']
  const sortByRarity = (a: ISelectedSubRune, b: ISelectedSubRune) => {
    const runeA = runes.find((rune) => rune.id === a.id)
    const runeB = runes.find((rune) => rune.id === b.id)
    if (!runeA || !runeB) return 0
    return rarityOrder.indexOf(runeA.rarity) - rarityOrder.indexOf(runeB.rarity)
  }
  const addToList = (rune: ISelectedSubRune) => {
    if (equippedRunes.some((obj) => obj.id === rune.id)) return
    const equippedRuneList = [...equippedRunes]
    const indexOfEmpty = equippedRuneList.findIndex((obj) => !obj.id)
    if (indexOfEmpty === -1) {
      equippedRuneList.shift()
      equippedRuneList.push(rune)
    } else {
      equippedRuneList[indexOfEmpty] = rune
    }
    dispatch(setSubRuneList(equippedRuneList));
  }
  const removeFromList = (rune: ISelectedSubRune) => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((obj) => obj.id === rune.id)
    if (index === -1) return
    equippedRuneList[index] = {}
    dispatch(setSubRuneList(equippedRuneList));
  }
  const isEquipped = (id: number) => {
    return equippedRunes.some((rune) => rune.id === id)
  }
  const doesRuneExist = (id: number) => {
    return runes.some((rune) => rune.id === id)
  }
  const updateFilter = (query: string) => {
    setFilter(query)
  }
  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <div className="flex flex-row md:flex-col lg:flex-row justify-between items-center container-dark">
        <h3 className="text-center min-w-24 text-lg">Sub Runes</h3>
        <FilterQuery updateFilter={updateFilter} />
      </div>
      <div className="flex flex-row gap-1 flex-wrap justify-center">
        {runesList.toSorted(sortByRarity).map((rune, index) => {
          if (rune.id === undefined || !doesRuneExist(rune.id)) return null
          const isEquippedBool = isEquipped(rune.id)
          return (
            <SubRuneBox filterString={filter} add={addToList} remove={removeFromList} isEquipped={isEquippedBool} rune={rune} key={index} />
          )
        })}
      </div>
    </div>
  );
};
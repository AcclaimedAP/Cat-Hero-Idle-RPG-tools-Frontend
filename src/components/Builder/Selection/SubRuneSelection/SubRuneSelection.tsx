import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setSubRuneList as setEquippedRunes } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"
import { FilterQuery } from "../../FilterQuery/FilterQuery";
import { HoverBox } from "src/components/HoverBox/subRuneHoverBox";
import { IHoverBox } from "src/types/IHoverBox";
import React from "react";
import { getDeviceType } from "src/utility/device/getDevice"
import Game from "types/game";

const RuneBox = ({ rune, filterString }: { rune: Game.Rune.SubRune, filterString: string }) => {
  const dispatch = useDispatch();
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.subRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)
  const isSelected = selectedRunes.some((obj) => obj.id === rune.id)
  const runeFromList = selectedRunes.find((obj) => obj.id === rune.id)
  const ref = React.createRef<IHoverBox>();
  const [selected, setSelected] = useState(isSelected)

  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (runeFromList) {
        dispatch(setSubRuneList(selectedRunes.map((obj) => obj.id === rune.id ? { id: rune.id } : obj)));
      } else {
        dispatch(setSubRuneList([...selectedRunes, { id: rune.id }]));
      }
    } else {
      dispatch(setSubRuneList(selectedRunes.filter((obj) => obj.id !== rune.id)));
      dispatch(setEquippedRunes(equippedRunes.map((obj) => obj.id === rune.id ? {} : obj)));
    }
  }, [selected])

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])


  const filterItem = (rune: Game.Rune.SubRune) => {
    const filterWords = filterString.split(' ')
    const nameAndTypes = rune.name + ' ' + rune.type + rune.rarity

    for (let i = 0; i < filterWords.length; i++) {
      if (!nameAndTypes.toLowerCase().includes(filterWords[i].toLowerCase())) {
        return false
      }
    }
    return true
  }
  const filtered = filterItem(rune)
  const brightness = () => {
    if (filterString.length > 0) {
      if (filtered) {
        if (selected) {
          return "brightness-125"
        }
        return "brightness-100"
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
          <HoverBox rune={rune} ref={ref} />
        </div>
        <div className={`flex flex-col ${brightness()} justify-center items-center w-14`}>
          <div onClick={handleSelect}>
            <RuneIcon type="sub" rune={rune} label={true} />
          </div>
        </div>
      </div>
    </>
  )
}


export const SubRuneSelection = () => {
  const runes: Game.Rune.SubRune[] = getData('subRunes')
  const [filter, setFilter] = useState('')
  const rarityOrder = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic', 'supreme']
  const sortByRarity = (a: Game.Rune.SubRune, b: Game.Rune.SubRune) => {
    return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
  }
  const runeBoxes = runes.toSorted(sortByRarity).map((rune) => {
    return (
      <RuneBox filterString={filter} rune={rune} key={rune.id} />
    )
  })
  const updateFilter = (query: string) => {
    setFilter(query)
  }
  return (
    <>
      <div className="container-dark-inner">
        <div className="flex flex-row justify-between items-center container-dark">
          <h3 className="text-center min-w-32 text-lg">Sub runes</h3>
          <FilterQuery updateFilter={updateFilter} />
        </div>
        <div className="flex flex-row gap-1 flex-wrap justify-center">
          {runeBoxes}
        </div>
      </div>
    </>
  )
}
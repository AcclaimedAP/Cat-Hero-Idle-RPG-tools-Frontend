import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IMainRune } from "src/types/IRune"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setMainRuneList as setEquippedRunes } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"
import { FilterQuery } from "../../FilterQuery/FilterQuery";
import { HoverBox, IHoverBox } from "src/components/HoverBox/mainRuneHoverBox";
import React from "react";

const RuneBox = ({ rune, filterString }: { rune: IMainRune, filterString: string }) => {
  const dispatch = useDispatch();
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.mainRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)
  const isSelected = selectedRunes.some((obj) => obj.id === rune.id)
  const runeFromList = selectedRunes.find((obj) => obj.id === rune.id)
  const [selected, setSelected] = useState(isSelected)
  const ref = React.createRef<IHoverBox>();

  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (runeFromList) {
        dispatch(setMainRuneList(selectedRunes.map((obj) => obj.id === rune.id ? { id: rune.id } : obj)));
      } else {
        dispatch(setMainRuneList([...selectedRunes, { id: rune.id }]));
      }
    } else {
      dispatch(setMainRuneList(selectedRunes.filter((obj) => obj.id !== rune.id)));
      dispatch(setEquippedRunes(equippedRunes.map((obj) => obj.id === rune.id ? {} : obj)));
    }
  }, [selected])

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  const filterItem = (rune: IMainRune) => {
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

  return (
    <>

      <div className="flex flex-col items-center" onTouchStart={handleMouseEnter} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <HoverBox rune={rune} ref={ref} />
        </div>
    <div className={`flex flex-col ${brightness()} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <RuneIcon type={"main"} rune={rune} label={false} />
      </div>
        </div>
      </div>
    </>
  )
}


export const MainRuneSelection = () => {
  const runes: IMainRune[] = getData('mainRunes');
  const [filter, setFilter] = useState('')
  const runeBoxes = runes.map((rune) => {
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
          <h3 className="text-center min-w-32 text-lg">Main runes</h3>
          <FilterQuery updateFilter={updateFilter} />
        </div>
        <div className="flex flex-row gap-1 flex-wrap justify-center">
          {runeBoxes}
        </div>
      </div>
    </>
  )
}
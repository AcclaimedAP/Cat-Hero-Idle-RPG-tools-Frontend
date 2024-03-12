import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { ISubRune } from "src/types/IRune"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setSubRuneList as setEquippedRunes } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"
import { FilterQuery } from "../../FilterQuery/FilterQuery";

const RuneBox = ({ rune, filterString }: { rune: ISubRune, filterString: string }) => {
  const dispatch = useDispatch();
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.subRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)
  const isSelected = selectedRunes.some((obj) => obj.id === rune.id)
  const runeFromList = selectedRunes.find((obj) => obj.id === rune.id)
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


  return (
    <div className={`flex flex-col ${brightness()} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <RuneIcon type="sub" rune={rune} label={true} />
      </div>
    </div>
  )
}


export const SubRuneSelection = () => {
  const runes: ISubRune[] = getData('subRunes')
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
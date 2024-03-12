import { useEffect, useState } from "react"
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon"
import { ICompanion } from "src/types/ICompanion"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setCompanionsList as setEquippedChampions } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"
import { FilterQuery } from "../../FilterQuery/FilterQuery";

const CompanionBox = ({ companion, filterString }: { companion: ICompanion, filterString: string }) => {
  const dispatch = useDispatch();
  const selectedCompanions = useSelector((state: RootState) => state.collectionDisplay.companionsList)
  const equippedCompanions = useSelector((state: RootState) => state.equipmentDisplay.companionsList)
  const isSelected = selectedCompanions.some((obj) => obj.id === companion.id)
  const companionFromList = selectedCompanions.find((obj) => obj.id === companion.id)

  const [level, setLevel] = useState<number | string>(1)

  const [selected, setSelected] = useState(isSelected)
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setLevel(event.target.value)
      return
    }
    setLevel(parseInt(event.target.value))
    const updatedCompanionList = selectedCompanions.map((obj) => obj.id === companion.id ? { id: companion.id, level: parseInt(event.target.value) } : obj)
    dispatch(setCompanionsList(updatedCompanionList));
    const updatedEquipment = equippedCompanions.map((obj) => obj.id === companion.id ? { id: companion.id, level: parseInt(event.target.value) } : obj)
    dispatch(setEquippedChampions(updatedEquipment))
  }
  const handleSelect = () => {
    setSelected(!selected)
  }

  useEffect(() => {
    if (selected) {
      if (typeof level != "number") {
        return
      }
      const companionLevel = level || 1;
      if (companionFromList) {
        dispatch(setCompanionsList(selectedCompanions.map((obj) => obj.id === companion.id ? { id: companion.id, level: companionLevel } : obj)));
      } else {
        dispatch(setCompanionsList([...selectedCompanions, { id: companion.id, level: companionLevel }]));
      }
    } else {
      dispatch(setCompanionsList(selectedCompanions.filter((obj) => obj.id !== companion.id)));
      dispatch(setEquippedChampions(equippedCompanions.map((obj) => obj.id === companion.id ? {} : obj)));
    }
  }, [selected])

  useEffect(() => {

    setSelected(isSelected)
    if (companionFromList) {
      setLevel(companionFromList.level || 1)
    }
  }, [isSelected, companionFromList])


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
  const filtered = filterItem(companion)
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


  const companionLevel = typeof level === "number" ? level : 1;
  return (
    <div className={`flex flex-col ${brightness()} justify-center items-center w-20 h-28 mb-2`}>
      <div onClick={handleSelect}>
        <CompanionIcon companion={companion} level={companionLevel} label={true} />
      </div>
      <input type="number" name="" id="" value={level} onChange={handleLevelChange} className="w-20 z-10 -mt-3 bg-slate-800 text-white" />
    </div>
  )
}


export const CompanionSelection = () => {
  const companions: any[] = getData("companions");
  const [filter, setFilter] = useState('')
  const companionBoxes = companions.map((companion) => {
    return (
      <CompanionBox filterString={filter} companion={companion} key={companion.id} />
    )
  })
  const updateFilter = (query: string) => {
    setFilter(query)
  }
  return (
    <>
      <div className="container-dark-inner">
        <div className="flex flex-row justify-between items-center container-dark">
          <h3 className="text-center min-w-32 text-lg">Companions</h3>
          <FilterQuery updateFilter={updateFilter} />
        </div>
        <div className="flex flex-row gap-2 flex-wrap justify-center">
          {companionBoxes}
        </div>
      </div>
    </>
  )
}
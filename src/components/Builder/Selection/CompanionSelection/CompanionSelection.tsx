import { useEffect, useState } from "react"
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon"
import { ICompanion } from "src/types/ICompanion"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setCompanionsList as setEquippedChampions } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"

const CompanionBox = ({ companion }: { companion: ICompanion }) => {
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
    }
  }, [selected])

  useEffect(() => {

    setSelected(isSelected)
    if (companionFromList) {
      setLevel(companionFromList.level || 1)
    }
  }, [isSelected, companionFromList])

  const selectedClass = selected ? "" : "brightness-50"
  const companionLevel = typeof level === "number" ? level : 1;
  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-20 h-28 mb-2`}>
      <div onClick={handleSelect}>
        <CompanionIcon companion={companion} level={companionLevel} label={true} />
      </div>
      <input type="number" name="" id="" value={level} onChange={handleLevelChange} className="w-20 z-10 -mt-3" />
    </div>
  )
}


export const CompanionSelection = () => {
  const companions: any[] = getData("companions");

  const companionBoxes = companions.map((companion) => {
    return (
      <CompanionBox companion={companion} key={companion.id} />
    )
  })

  return (
    <>
      <div className="container-dark-inner">
        <h1 className="text-xl">
          Companion Selection
        </h1>
        <div className="flex flex-row gap-2 flex-wrap justify-center">
          {companionBoxes}
        </div>
      </div>
    </>
  )
}
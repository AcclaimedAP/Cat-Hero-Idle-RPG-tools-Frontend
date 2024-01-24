import { companions } from "data/companions/companions"
import { useEffect, useState } from "react"
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon"
import { ICompanion } from "src/types/ICompanion"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from 'src/config/redux/slices/collectionDisplaySlice'

const CompanionBox = ({ companion }: { companion: ICompanion }) => {
  const dispatch = useDispatch();
  const selectedCompanions = useSelector((state: RootState) => state.collectionDisplay.companionsList)
  const isSelected = selectedCompanions.some((obj) => obj.id === companion.id)
  const companionFromList = selectedCompanions.find((obj) => obj.id === companion.id)

  const [level, setLevel] = useState(1)
  const [selected, setSelected] = useState(isSelected)
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(event.target.value))
    const updatedCompanionList = selectedCompanions.map((obj) => obj.id === companion.id ? { id: companion.id, level: parseInt(event.target.value) } : obj)
    dispatch(setCompanionsList(updatedCompanionList));
  }
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (companionFromList) {
        dispatch(setCompanionsList(selectedCompanions.map((obj) => obj.id === companion.id ? { id: companion.id, level: level } : obj)));
      } else {
        dispatch(setCompanionsList([...selectedCompanions, { id: companion.id, level: level }]));
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

  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <CompanionIcon companion={companion} level={level} label={true} />
      </div>
      <input type="number" name="" id="" value={level} onChange={handleLevelChange} className="w-full z-10 -mt-3" />
    </div>
  )
}


export const CompanionSelection = () => {

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
        <div className="flex flex-wrap gap-1">
          {companionBoxes}
        </div>
      </div>
    </>
  )
}
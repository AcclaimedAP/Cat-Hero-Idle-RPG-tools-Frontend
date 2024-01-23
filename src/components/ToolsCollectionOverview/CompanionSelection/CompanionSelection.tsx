import { companions } from "data/companions/companions"
import { useEffect, useState } from "react"
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon"
import { ICompanion } from "src/types/ICompanion"
import { ISelectedCompanion } from "types/ICollection"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from 'src/config/redux/slices/collectionDisplaySlice'

const CompanionBox = ({ companion, isSelected, add, remove, update }: { companion: ICompanion, isSelected: { selected: boolean, level: number }, add: (companion: ISelectedCompanion) => void, remove: (companion: ISelectedCompanion) => void, update: (companion: ISelectedCompanion) => void }) => {
  const [level, setLevel] = useState(isSelected.level)
  const [selected, setSelected] = useState(isSelected.selected)
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(event.target.value))
    update({ id: companion.id, level: parseInt(event.target.value) })
  }
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      add({ id: companion.id, level: level })
    } else {
      remove({ id: companion.id, level: level })
    }
  }, [selected])

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
  const selectedCompanions = useSelector((state: RootState) => state.collectionDisplay.companionsList)
  const dispatch = useDispatch();


  const addToList = (companion: ISelectedCompanion) => {
    dispatch(setCompanionsList([...selectedCompanions, companion]));
  }

  const removeFromList = (companion: ISelectedCompanion) => {
    dispatch(setCompanionsList(selectedCompanions.filter((obj) => obj.id !== companion.id)));
  }

  const updateList = (companion: ISelectedCompanion) => {
    dispatch(setCompanionsList(selectedCompanions.map((obj) => obj.id === companion.id ? companion : obj)));
  }
  const isSelected = (id: number) => {
    const companion = selectedCompanions.find((companion) => companion.id === id)
    if (!companion) return { selected: false, level: 1 };
    return { selected: true, level: companion.level }
  }

  const companionBoxes = companions.map((companion) => {
    const isSelectedBool = isSelected(companion.id)
    return (
      <CompanionBox add={addToList} isSelected={isSelectedBool} remove={removeFromList} update={updateList} companion={companion} key={companion.id} />
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
import { ISelectedCompanion } from "types/ICollection";
import { companions } from "src/data/companions/companions";
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from 'src/config/redux/slices/equipmentDisplaySlice'

const CompanionBox = ({ companion, add, remove, isEquipped }: { companion: ISelectedCompanion, add: (companion: ISelectedCompanion) => void, remove: (companion: ISelectedCompanion) => void, isEquipped: boolean }) => {

  const [selected, setSelected] = useState(isEquipped)
  const selectedClass = selected ? "brightness-125 selected-shadow" : ""
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

  if (!companion.id) return null
  return (
    <div className={`${selectedClass} flex flex-col justify-center items-center w-14`} key={companion.id} onClick={handleSelect}>
      {selected && <span className="absolute z-10 right-0 top-0 text-2xl">🗸</span>}
      <CompanionIcon companion={getCompanion(companion.id)} level={companion.level} label={true} />
    </div>
  )
}

export const CompanionCollection = () => {
  const companionsList = useSelector((state: RootState) => state.collectionDisplay.companionsList)
  const dispatch = useDispatch();
  const equippedCompanions = useSelector((state: RootState) => state.equipmentDisplay.companionsList)

  const sortById = (a: ISelectedCompanion, b: ISelectedCompanion) => {
    if (!a.id || !b.id) return 0
    return a.id - b.id
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
    dispatch(setCompanionsList(equippedCompanions.filter((obj) => obj.id !== companion.id)));
  }

  const isEquipped = (id: number) => {
    return equippedCompanions.some((companion) => companion.id === id)
  }

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Companions</h3>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {companionsList.toSorted(sortById).map((companion, index) => {
          if (!companion.id) return null
          const isEquippedBool = isEquipped(companion.id)
          return (
            <CompanionBox companion={companion} add={addToList} remove={removeFromList} key={index} isEquipped={isEquippedBool} />
          )
        })}
      </div>
    </div>
  );
};
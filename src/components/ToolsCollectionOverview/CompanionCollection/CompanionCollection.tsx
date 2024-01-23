import { ISelectedCompanion } from "../CompanionSelection/CompanionSelection";
import { companions } from "src/data/companions/companions";
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon";
import { useEffect, useState } from "react";

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


  return (
    <div className={`${selectedClass} flex flex-col justify-center items-center w-14`} key={companion.id} onClick={handleSelect}>
      {selected && <span className="absolute z-10 right-0 top-0 text-2xl">🗸</span>}
      <CompanionIcon companion={getCompanion(companion.id)} level={companion.level} label={true} />
    </div>
  )
}

export const CompanionCollection = ({ companionsList, updateEquipped }: { companionsList: ISelectedCompanion[], updateEquipped: (type: string, list: ISelectedCompanion[]) => void }) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem("equipped")
    if (local) {
      return JSON.parse(local).companionsList
    }
    return []
  }
  const [equippedCompanions, setEquippedCompanions] = useState<ISelectedCompanion[]>(getLocalStorage())

  const sortById = (a: ISelectedCompanion, b: ISelectedCompanion) => {
    return a.id - b.id
  }
  companionsList.sort(sortById);

  const addToList = (companion: ISelectedCompanion) => {
    const equippedCompanionList = [...equippedCompanions, companion]
    if (equippedCompanionList.length > 6) {
      equippedCompanionList.shift()
    }
    setEquippedCompanions(equippedCompanionList)
  }

  const removeFromList = (companion: ISelectedCompanion) => {
    setEquippedCompanions(equippedCompanions.filter((obj) => obj.id !== companion.id))
  }

  const isEquipped = (id: number) => {
    return equippedCompanions.some((companion) => companion.id === id)
  }

  useEffect(() => {
    updateEquipped("companion", equippedCompanions)
  }, [equippedCompanions])

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Companions</h3>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {companionsList.map((companion) => {
          const isEquippedBool = isEquipped(companion.id)
          return (
            <CompanionBox companion={companion} add={addToList} remove={removeFromList} key={companion.id} isEquipped={isEquippedBool} />
          )
        })}
      </div>
    </div>
  );
};
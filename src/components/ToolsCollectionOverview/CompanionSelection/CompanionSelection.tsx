import { companions } from "data/companions/companions"
import { useEffect, useState } from "react"
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon"
import { ICompanion } from "src/types/ICompanion"

export interface ISelectedCompanion {
  id: number,
  level: number
}
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


export const CompanionSelection = ({ setCompanionList }: { setCompanionList: (companionList: ISelectedCompanion[]) => void }) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem("companionsList")
    if (local) {
      return JSON.parse(local).companionsList
    }
    return []
  }
  const [selectedCompanions, setSelectedCompanions] = useState<ISelectedCompanion[]>(getLocalStorage())

  const addToList = (companion: ISelectedCompanion) => {
    setSelectedCompanions([...selectedCompanions, companion])
    localStorage.setItem("companionsList", JSON.stringify({ companionsList: [...selectedCompanions, companion] }))
  }

  const removeFromList = (companion: ISelectedCompanion) => {
    setSelectedCompanions(selectedCompanions.filter((comp) => comp.id !== companion.id))
    localStorage.setItem("companionsList", JSON.stringify({ companionsList: selectedCompanions.filter((comp) => comp.id !== companion.id) }))
  }

  const updateList = (companion: ISelectedCompanion) => {
    setSelectedCompanions(selectedCompanions.map((comp) => {
      if (comp.id === companion.id) {
        return companion
      }
      return comp
    }))
    localStorage.setItem("companionsList", JSON.stringify({ companionsList: selectedCompanions.map((comp) => { if (comp.id === companion.id) { return companion } return comp }) }))
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


  useEffect(() => {
    setCompanionList(selectedCompanions)
  }, [selectedCompanions]);


  return (
    <>
      <div className="container-dark-inner">
        <h1 className="text-xl" onClick={() => { console.log(selectedCompanions) }}>
          Companion Selection
        </h1>
        <div className="flex flex-wrap gap-1">
          {companionBoxes}
        </div>
      </div>
    </>
  )
}
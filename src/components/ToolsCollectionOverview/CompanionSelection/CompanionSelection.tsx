import { companions } from "data/companions/companions"
import { useEffect, useState } from "react"
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon"
import { ICompanion } from "src/types/ICompanion"

export interface ISelectedCompanion {
  id: number,
  level: number
}
const CompanionBox = ({ companion, add, remove, update }: { companion: ICompanion, add: (companion: ISelectedCompanion) => void, remove: (companion: ISelectedCompanion) => void, update: (companion: ISelectedCompanion) => void }) => {
  const [level, setLevel] = useState(1)
  const [selected, setSelected] = useState(false)
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
  const [selectedCompanions, setSelectedCompanions] = useState<ISelectedCompanion[]>([])

  const addToList = (companion: ISelectedCompanion) => {
    setSelectedCompanions([...selectedCompanions, companion])
  }

  const removeFromList = (companion: ISelectedCompanion) => {
    setSelectedCompanions(selectedCompanions.filter((comp) => comp.id !== companion.id))
  }

  const updateList = (companion: ISelectedCompanion) => {
    setSelectedCompanions(selectedCompanions.map((comp) => {
      if (comp.id === companion.id) {
        return companion
      }
      return comp
    }))
  }

  const companionBoxes = companions.map((companion) => {
    return (
      <CompanionBox add={addToList} remove={removeFromList} update={updateList} companion={companion} key={companion.id} />
    )
  })
  useEffect(() => {
    setCompanionList(selectedCompanions)
  }, [selectedCompanions]);


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
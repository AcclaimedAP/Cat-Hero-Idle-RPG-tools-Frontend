import { runes } from "data/runes/runes"
import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IRune } from "src/types/IRune"

export interface ISelectedSubRune {
  id: number
}
const RuneBox = ({ rune, isSelected, add, remove }: { rune: IRune, isSelected: { selected: boolean }, add: (rune: ISelectedSubRune) => void, remove: (rune: ISelectedSubRune) => void }) => {
  const [selected, setSelected] = useState(isSelected.selected)
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      add({ id: rune.id })
    } else {
      remove({ id: rune.id })
    }
  }, [selected])

  const selectedClass = selected ? "" : "brightness-50"

  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <RuneIcon rune={rune} label={true} />
      </div>
    </div>
  )
}


export const SubRuneSelection = ({ setSubRuneList }: { setSubRuneList: (subRuneList: ISelectedSubRune[]) => void }) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem("subRunesList")
    if (local) {
      return JSON.parse(local).subRunesList
    }
    return []
  }
  const [selectedRunes, setSelectedRunes] = useState<ISelectedSubRune[]>(getLocalStorage())

  const addToList = (rune: ISelectedSubRune) => {
    setSelectedRunes([...selectedRunes, rune])
    localStorage.setItem("subRunesList", JSON.stringify({ subRunesList: [...selectedRunes, rune] }))
  }

  const removeFromList = (rune: ISelectedSubRune) => {
    setSelectedRunes(selectedRunes.filter((obj) => obj.id !== rune.id))
    localStorage.setItem("subRunesList", JSON.stringify({ subRunesList: selectedRunes.filter((obj) => obj.id !== rune.id) }))
  }

  const isSelected = (id: number) => {
    const rune = selectedRunes.find((rune) => rune.id === id)
    if (!rune) return { selected: false };
    return { selected: true }
  }

  const runeBoxes = runes.map((rune) => {
    if (rune.type !== "Sub") return null;
    const isSelectedBool = isSelected(rune.id)
    return (
      <RuneBox add={addToList} isSelected={isSelectedBool} remove={removeFromList} rune={rune} key={rune.id} />
    )
  })
  useEffect(() => {
    setSubRuneList(selectedRunes)
  }, [selectedRunes]);


  return (
    <>
      <div className="container-dark-inner">
        <h1 className="text-xl">
          Rune Selection
        </h1>
        <div className="flex flex-wrap gap-1">
          {runeBoxes}
        </div>
      </div>
    </>
  )
}
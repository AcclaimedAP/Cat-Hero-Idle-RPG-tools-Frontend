import { runes } from "data/runes/runes"
import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IRune } from "src/types/IRune"

export interface ISelectedMainRune {
  id: number
}
const RuneBox = ({ rune, isSelected, add, remove }: { rune: IRune, isSelected: { selected: boolean }, add: (rune: ISelectedMainRune) => void, remove: (rune: ISelectedMainRune) => void }) => {
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


export const MainRuneSelection = ({ setMainRuneList }: { setMainRuneList: (mainRuneList: ISelectedMainRune[]) => void }) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem("mainRunesList")
    if (local) {
      return JSON.parse(local).mainRunesList
    }
    return []
  }
  const [selectedRunes, setSelectedRunes] = useState<ISelectedMainRune[]>(getLocalStorage())

  const addToList = (rune: ISelectedMainRune) => {
    setSelectedRunes([...selectedRunes, rune])
    localStorage.setItem("mainRunesList", JSON.stringify({ mainRunesList: [...selectedRunes, rune] }))
  }

  const removeFromList = (rune: ISelectedMainRune) => {
    setSelectedRunes(selectedRunes.filter((obj) => obj.id !== rune.id))
    localStorage.setItem("mainRunesList", JSON.stringify({ mainRunesList: selectedRunes.filter((obj) => obj.id !== rune.id) }))
  }

  const isSelected = (id: number) => {
    const rune = selectedRunes.find((rune) => rune.id === id)
    if (!rune) return { selected: false };
    return { selected: true }
  }

  const runeBoxes = runes.map((rune) => {
    if (rune.type !== "Main") return null;
    const isSelectedBool = isSelected(rune.id)
    return (
      <RuneBox add={addToList} remove={removeFromList} isSelected={isSelectedBool} rune={rune} key={rune.id} />
    )
  })




  useEffect(() => {
    setMainRuneList(selectedRunes)
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
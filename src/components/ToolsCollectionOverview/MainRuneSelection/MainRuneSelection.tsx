import { runes } from "data/runes/runes"
import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IRune } from "src/types/IRune"

export interface ISelectedMainRune {
  id: number
}
const RuneBox = ({ rune, add, remove }: { rune: IRune, add: (rune: ISelectedMainRune) => void, remove: (rune: ISelectedMainRune) => void }) => {
  const [selected, setSelected] = useState(false)
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
  const [selectedRunes, setSelectedRunes] = useState<ISelectedMainRune[]>([])

  const addToList = (rune: ISelectedMainRune) => {
    setSelectedRunes([...selectedRunes, rune])
  }

  const removeFromList = (rune: ISelectedMainRune) => {
    setSelectedRunes(selectedRunes.filter((obj) => obj.id !== rune.id))
  }

  const runeBoxes = runes.map((rune) => {
    if (rune.type !== "Main") return null;
    return (
      <RuneBox add={addToList} remove={removeFromList} rune={rune} key={rune.id} />
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
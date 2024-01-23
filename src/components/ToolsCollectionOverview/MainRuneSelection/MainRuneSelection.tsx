import { runes } from "data/runes/runes"
import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IRune } from "src/types/IRune"
import { ISelectedMainRune } from "types/ICollection"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/collectionDisplaySlice'

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


export const MainRuneSelection = () => {
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.mainRuneList)
  const dispatch = useDispatch();

  const addToList = (rune: ISelectedMainRune) => {
    dispatch(setMainRuneList([...selectedRunes, rune]));
    localStorage.setItem("mainRunesList", JSON.stringify({ mainRunesList: [...selectedRunes, rune] }))
  }

  const removeFromList = (rune: ISelectedMainRune) => {
    dispatch(setMainRuneList(selectedRunes.filter((obj) => obj.id !== rune.id)));
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
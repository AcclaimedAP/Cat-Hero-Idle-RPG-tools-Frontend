import { runes } from "data/runes/runes"
import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IRune } from "src/types/IRune"
import { ISelectedSubRune } from "types/ICollection"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/collectionDisplaySlice'

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


export const SubRuneSelection = () => {
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.subRuneList)
  const dispatch = useDispatch();

  const addToList = (rune: ISelectedSubRune) => {
    dispatch(setSubRuneList([...selectedRunes, rune]));
  }

  const removeFromList = (rune: ISelectedSubRune) => {
    dispatch(setSubRuneList(selectedRunes.filter((obj) => obj.id !== rune.id)));
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
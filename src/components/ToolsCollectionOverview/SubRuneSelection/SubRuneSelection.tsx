import { runes } from "data/runes/runes"
import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IRune } from "src/types/IRune"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/collectionDisplaySlice'

const RuneBox = ({ rune }: { rune: IRune }) => {
  const dispatch = useDispatch();
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.subRuneList)
  const isSelected = selectedRunes.some((obj) => obj.id === rune.id)
  const runeFromList = selectedRunes.find((obj) => obj.id === rune.id)
  const [selected, setSelected] = useState(isSelected)
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (runeFromList) {
        dispatch(setSubRuneList(selectedRunes.map((obj) => obj.id === rune.id ? { id: rune.id } : obj)));
      } else {
        dispatch(setSubRuneList([...selectedRunes, { id: rune.id }]));
      }
    } else {
      dispatch(setSubRuneList(selectedRunes.filter((obj) => obj.id !== rune.id)));
    }
  }, [selected])

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

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

  const runeBoxes = runes.map((rune) => {
    if (rune.type !== "Sub") return null;
    return (
      <RuneBox rune={rune} key={rune.id} />
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
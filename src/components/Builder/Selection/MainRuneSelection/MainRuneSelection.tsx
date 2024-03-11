import { useEffect, useState } from "react"
import { RuneIcon } from "src/components/RuneIcon/RuneIcon"
import { IMainRune } from "src/types/IRune"
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/collectionDisplaySlice'
import { setMainRuneList as setEquippedRunes } from "src/config/redux/slices/equipmentDisplaySlice"
import { getData } from "src/utility/data/getData"

const RuneBox = ({ rune }: { rune: IMainRune }) => {
  const dispatch = useDispatch();
  const selectedRunes = useSelector((state: RootState) => state.collectionDisplay.mainRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)
  const isSelected = selectedRunes.some((obj) => obj.id === rune.id)
  const runeFromList = selectedRunes.find((obj) => obj.id === rune.id)
  const [selected, setSelected] = useState(isSelected)
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      if (runeFromList) {
        dispatch(setMainRuneList(selectedRunes.map((obj) => obj.id === rune.id ? { id: rune.id } : obj)));
      } else {
        dispatch(setMainRuneList([...selectedRunes, { id: rune.id }]));
      }
    } else {
      dispatch(setMainRuneList(selectedRunes.filter((obj) => obj.id !== rune.id)));
      dispatch(setEquippedRunes(equippedRunes.map((obj) => obj.id === rune.id ? {} : obj)));
    }
  }, [selected])

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  const selectedClass = selected ? "" : "brightness-50"

  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`}>
      <div onClick={handleSelect}>
        <RuneIcon type={"main"} rune={rune} label={false} />
      </div>
    </div>
  )
}


export const MainRuneSelection = () => {
  const runes: IMainRune[] = getData('mainRunes');
  const runeBoxes = runes.map((rune) => {
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
        <div className="flex flex-row gap-1 flex-wrap justify-center">
          {runeBoxes}
        </div>
      </div>
    </>
  )
}
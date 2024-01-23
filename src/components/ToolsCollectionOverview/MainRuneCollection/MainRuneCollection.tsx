import { ISelectedMainRune } from "types/ICollection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'


const MainRuneBox = ({ rune, add, remove, isEquipped }: { rune: ISelectedMainRune, add: (rune: ISelectedMainRune) => void, remove: (rune: ISelectedMainRune) => void, isEquipped: boolean }) => {
  const [selected, setSelected] = useState(isEquipped)
  const selectedClass = selected ? "brightness-125" : ""
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

  const getRune = (id: number) => {
    return runes.find((rune) => rune.id === id)
  }
  useEffect(() => {
    setSelected(isEquipped)
  }, [isEquipped])

  return (
    <div className={`flex flex-col ${selectedClass} justify-center items-center w-14`} onClick={handleSelect}>
      {selected && <>
        <span className="absolute z-10 right-0 -top-1 text-2xl">🗸</span>
        <div className=" rounded-[50%] selected-shadow-circle border-2 border-red-400 w-14 h-14 top-0 absolute"></div>
      </>}
      <RuneIcon rune={getRune(rune.id)} label={true} />
    </div>
  )

}


export const MainRuneCollection = () => {
  const dispatch = useDispatch();
  const runesList = useSelector((state: RootState) => state.collectionDisplay.mainRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)

  const sortById = (a: ISelectedMainRune, b: ISelectedMainRune) => {
    return a.id - b.id
  }

  const addToList = (rune: ISelectedMainRune) => {
    if (equippedRunes.some((obj) => obj.id === rune.id)) return
    const equippedRuneList = [...equippedRunes, rune]
    if (equippedRuneList.length > 3) {
      equippedRuneList.shift()
    }
    dispatch(setMainRuneList(equippedRuneList));
  }
  const removeFromList = (rune: ISelectedMainRune) => {
    dispatch(setMainRuneList(equippedRunes.filter((obj) => obj.id !== rune.id)));
  }
  const isEquipped = (id: number) => {
    return equippedRunes.some((rune) => rune.id === id)
  }

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Main Runes</h3>
      <div className="flex flex-row gap-1 flex-wrap justify-center">
        {runesList.toSorted(sortById).map((rune, index) => {
          const isEquippedBool = isEquipped(rune.id)
          return (
            <MainRuneBox add={addToList} remove={removeFromList} isEquipped={isEquippedBool} rune={rune} key={index} />
          )
        })}
      </div>
    </div>
  );
};
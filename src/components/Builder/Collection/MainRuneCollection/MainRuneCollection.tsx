import { ISelectedMainRune } from "types/ICollection";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setMainRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { IMainRune } from "src/types/IRune";


const MainRuneBox = ({ rune, add, remove, isEquipped }: { rune: ISelectedMainRune, add: (rune: ISelectedMainRune) => void, remove: (rune: ISelectedMainRune) => void, isEquipped: boolean }) => {
  const runes: IMainRune[] = getData('mainRunes');
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

  const getRune = (id: number | undefined) => {
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
      <RuneIcon type="main" rune={getRune(rune.id)} label={true} />
    </div>
  )

}


export const MainRuneCollection = () => {
  const runes: IMainRune[] = getData('mainRunes');
  const dispatch = useDispatch();
  const runesList = useSelector((state: RootState) => state.collectionDisplay.mainRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.mainRuneList)

  const sortById = (a: ISelectedMainRune, b: ISelectedMainRune) => {
    if (!a.id || !b.id) return 0
    return a.id - b.id
  }

  const addToList = (rune: ISelectedMainRune) => {
    if (equippedRunes.some((obj) => obj.id === rune.id)) return
    const equippedRuneList = [...equippedRunes]
    const indexOfEmpty = equippedRuneList.findIndex((obj) => !obj.id)
    if (indexOfEmpty === -1) {
      equippedRuneList.shift()
      equippedRuneList.push(rune)
    } else {
      equippedRuneList[indexOfEmpty] = rune
    }
    dispatch(setMainRuneList(equippedRuneList));
  }
  const removeFromList = (rune: ISelectedMainRune) => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((obj) => obj.id === rune.id)
    if (index === -1) return
    equippedRuneList[index] = {}
    dispatch(setMainRuneList(equippedRuneList));
  }
  const isEquipped = (id: number) => {
    return equippedRunes.some((rune) => rune.id === id)
  }
  const doesRuneExist = (id: number) => {
    return runes.some((rune) => rune.id === id)
  }

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Main Runes</h3>
      <div className="flex flex-row gap-1 flex-wrap justify-center">
        {runesList.toSorted(sortById).map((rune, index) => {
          if (rune.id === undefined || !doesRuneExist(rune.id)) return null
          const isEquippedBool = isEquipped(rune.id)
          return (
            <MainRuneBox add={addToList} remove={removeFromList} isEquipped={isEquippedBool} rune={rune} key={index} />
          )
        })}
      </div>
    </div>
  );
};
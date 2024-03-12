import { ISelectedSubRune } from "types/ICollection";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSubRuneList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISubRune } from "src/types/IRune";


const SubRuneBox = ({ rune, add, remove, isEquipped }: { rune: ISelectedSubRune, add: (rune: ISelectedSubRune) => void, remove: (rune: ISelectedSubRune) => void, isEquipped: boolean }) => {
  const runes: ISubRune[] = getData('subRunes');
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
        <div className=" rounded-[50%] selected-shadow-circle border-2 border-red-400 w-14 h-14 top-1 absolute"></div>
      </>
      }
      <RuneIcon type="sub" rune={getRune(rune.id)} label={true} />
    </div>
  )

}


export const SubRuneCollection = () => {
  const dispatch = useDispatch();
  const runesList = useSelector((state: RootState) => state.collectionDisplay.subRuneList)
  const equippedRunes = useSelector((state: RootState) => state.equipmentDisplay.subRuneList)
  const runes: ISubRune[] = getData('subRunes');
  const sortById = (a: ISelectedSubRune, b: ISelectedSubRune) => {
    if (!a.id || !b.id) return 0
    return a.id - b.id
  }


  const addToList = (rune: ISelectedSubRune) => {
    if (equippedRunes.some((obj) => obj.id === rune.id)) return
    const equippedRuneList = [...equippedRunes]
    const indexOfEmpty = equippedRuneList.findIndex((obj) => !obj.id)
    if (indexOfEmpty === -1) {
      equippedRuneList.shift()
      equippedRuneList.push(rune)
    } else {
      equippedRuneList[indexOfEmpty] = rune
    }
    dispatch(setSubRuneList(equippedRuneList));
  }
  const removeFromList = (rune: ISelectedSubRune) => {
    const equippedRuneList = [...equippedRunes]
    const index = equippedRuneList.findIndex((obj) => obj.id === rune.id)
    if (index === -1) return
    equippedRuneList[index] = {}
    dispatch(setSubRuneList(equippedRuneList));
  }
  const isEquipped = (id: number) => {
    return equippedRunes.some((rune) => rune.id === id)
  }
  const doesRuneExist = (id: number) => {
    return runes.some((rune) => rune.id === id)
  }

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Sub Runes</h3>
      <div className="flex flex-row gap-1 flex-wrap justify-center">
        {runesList.toSorted(sortById).map((rune, index) => {
          if (rune.id === undefined || !doesRuneExist(rune.id)) return null
          const isEquippedBool = isEquipped(rune.id)
          return (
            <SubRuneBox add={addToList} remove={removeFromList} isEquipped={isEquippedBool} rune={rune} key={index} />
          )
        })}
      </div>
    </div>
  );
};
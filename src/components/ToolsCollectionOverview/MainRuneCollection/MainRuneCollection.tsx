import { ISelectedMainRune } from "../MainRuneSelection/MainRuneSelection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { useEffect, useState } from "react";


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


export const MainRuneCollection = ({ runesList, updateEquipped }: { runesList: ISelectedMainRune[], updateEquipped: (type: string, list: ISelectedMainRune[]) => void }) => {

  const getLocalStorage = () => {
    const local = localStorage.getItem("equipped")
    if (local) {
      return JSON.parse(local).mainRuneList
    }
    return []
  }
  const [equippedRunes, setEquippedRunes] = useState<ISelectedMainRune[]>(getLocalStorage())

  const sortById = (a: ISelectedMainRune, b: ISelectedMainRune) => {
    return a.id - b.id
  }
  runesList.sort(sortById);

  const addToList = (rune: ISelectedMainRune) => {
    const equippedRuneList = [...equippedRunes, rune]
    if (equippedRuneList.length > 3) {
      equippedRuneList.shift()
    }
    setEquippedRunes(equippedRuneList)
  }
  const removeFromList = (rune: ISelectedMainRune) => {
    setEquippedRunes(equippedRunes.filter((obj) => obj.id !== rune.id))
  }
  const isEquipped = (id: number) => {
    return equippedRunes.some((rune) => rune.id === id)
  }
  useEffect(() => {
    updateEquipped("mainRune", equippedRunes)
  }, [equippedRunes])

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <h3 className="text-center min-w-48">Main Runes</h3>
      <div className="flex flex-col lg:flex-row gap-1 flex-wrap justify-center">
        {runesList.map((rune) => {
          const isEquippedBool = isEquipped(rune.id)
          return (
            <MainRuneBox add={addToList} remove={removeFromList} isEquipped={isEquippedBool} rune={rune} key={rune.id} />
          )
        })}
      </div>
    </div>
  );
};
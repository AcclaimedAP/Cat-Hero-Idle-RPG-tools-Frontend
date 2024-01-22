import { ISelectedSubRune } from "../SubRuneSelection/SubRuneSelection";
import { runes } from "data/runes/runes";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { useEffect, useState } from "react";


const SubRuneBox = ({ rune, add, remove, isEquipped }: { rune: ISelectedSubRune, add: (rune: ISelectedSubRune) => void, remove: (rune: ISelectedSubRune) => void, isEquipped: boolean }) => {
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
        <div className=" rounded-[50%] selected-shadow-circle border-2 border-red-400 w-14 h-14 top-2 absolute"></div>
      </>
      }
      <RuneIcon rune={getRune(rune.id)} label={true} />
    </div>
  )

}


export const SubRuneCollection = ({ runesList, updateEquipped }: { runesList: ISelectedSubRune[], updateEquipped: (type: string, list: ISelectedSubRune[]) => void }) => {
  const [equippedRunes, setEquippedRunes] = useState<ISelectedSubRune[]>([])

  const sortById = (a: ISelectedSubRune, b: ISelectedSubRune) => {
    return a.id - b.id
  }
  runesList.sort(sortById);

  const addToList = (rune: ISelectedSubRune) => {
    const equippedRuneList = [...equippedRunes, rune]
    if (equippedRuneList.length > 6) {
      equippedRuneList.shift()
    }
    setEquippedRunes(equippedRuneList)
  }
  const removeFromList = (rune: ISelectedSubRune) => {
    setEquippedRunes(equippedRunes.filter((obj) => obj.id !== rune.id))
  }
  const isEquipped = (id: number) => {
    return equippedRunes.some((rune) => rune.id === id)
  }
  useEffect(() => {
    updateEquipped("subRune", equippedRunes)
  }, [equippedRunes])

  return (
    <div className="container-dark-inner">
      <h3 className="text-center min-w-48">Sub Runes</h3>
      <div className="flex flex-col lg:flex-row gap-1 flex-wrap">
        {runesList.map((rune) => {
          const isEquippedBool = isEquipped(rune.id)
          return (
            <SubRuneBox add={addToList} remove={removeFromList} isEquipped={isEquippedBool} rune={rune} key={rune.id} />
          )
        })}
      </div>
    </div>
  );
};
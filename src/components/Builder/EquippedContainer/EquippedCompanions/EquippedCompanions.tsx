import { ISelectedCompanion } from "types/ICollection";
import { companions } from "data/companions/companions";
import { CompanionIcon } from "components/CompanionIcon/CompanionIcon";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCompanionsList } from "src/config/redux/slices/equipmentDisplaySlice";



const CompanionBox = ({ companion }: { companion: ISelectedCompanion }) => {
  const dispatch = useDispatch();
  const equippedCompanions = useSelector((state: RootState) => state.equipmentDisplay.companionsList)

  const getCompanion = (id: number) => {
    return companions.find((companion) => companion.id === id)
  }
  const removeCompanionFromList = () => {
    const equippedCompanionList = [...equippedCompanions]
    const index = equippedCompanionList.findIndex((equippedCompanion) => equippedCompanion.id === companion.id)
    equippedCompanionList[index] = {}
    dispatch(setCompanionsList(equippedCompanionList));
  }

  if (!companion.id) return null
  return (
    <>
      <div onClick={removeCompanionFromList} className="scale-[.8] sm:scale-100  -translate-x-[0.4rem] -translate-y-[0.35rem] sm:-translate-x-0 sm:-translate-y-0 relative min-h-8 sm:min-h-12">
        <div className="absolute">
          <CompanionIcon companion={getCompanion(companion.id)} level={companion.level} border={false} stars={false} />
        </div>
      </div>
    </>
  )
}

const EmptySlot = () => {
  return (
    <>
      <div className="w-8 h-8 sm:w-12 sm:h-12 container-dark-inner"></div>
    </>
  )
}

export const EquippedCompanions = () => {
  const equipped = useSelector((state: RootState) => state.equipmentDisplay.companionsList)

  return (
    <>
      <div className="grid grid-cols-6 gap-4 max-w-96 m-2">
        {equipped.map((companion, index) => {
          if (!companion.id) return <EmptySlot key={index} />
          return (
            <CompanionBox key={index} companion={companion} />
          )
        })
        }
      </div>
    </>
  )
}
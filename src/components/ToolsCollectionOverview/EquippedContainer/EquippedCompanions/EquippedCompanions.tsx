import { ISelectedCompanion } from "../../CompanionSelection/CompanionSelection";
import { companions } from "data/companions/companions";
import { CompanionIcon } from "components/CompanionIcon/CompanionIcon";


const CompanionBox = ({ companion }: { companion: ISelectedCompanion }) => {

  const getCompanion = (id: number) => {
    return companions.find((companion) => companion.id === id)
  }
  return (
    <>
      <CompanionIcon companion={getCompanion(companion.id)} level={companion.level} />
    </>
  )
}

const EmptySlot = () => {
  return (
    <>
      <div className="w-12 h-12 container-dark-inner"></div>
    </>
  )
}

export const EquippedCompanions = ({ equipped }: { equipped: ISelectedCompanion[] }) => {




  return (
    <>
      <div className="grid grid-cols-6 gap-0">
        {equipped.map((companion, index) => {
          return (
            <CompanionBox key={index} companion={companion} />
          )
        })
        }
        {
          Array(6 - equipped.length).fill(0).map((_, index) => {
            return (
              <EmptySlot key={index} />
            )
          })
        }
      </div>
    </>
  )
}
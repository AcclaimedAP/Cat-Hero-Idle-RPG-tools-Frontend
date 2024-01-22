import { ISelectedCompanion } from "../CompanionSelection/CompanionSelection";
import { companions } from "src/data/companions/companions";
import { CompanionIcon } from "src/components/CompanionIcon/CompanionIcon";


export const CompanionCollection = ({ companionsList }: { companionsList: ISelectedCompanion[] }) => {
  const getCompanion = (id: number) => {
    return companions.find((companion) => companion.id === id)
  }
  const sortById = (a: ISelectedCompanion, b: ISelectedCompanion) => {
    return a.id - b.id
  }
  companionsList.sort(sortById);

  return (
    <div className="container-dark-inner">
      <div className="flex flex-col lg:flex-row gap-1">
        {companionsList.map((companion) => {
          return (
            <div className="flex flex-col justify-center items-center w-14 m-auto" key={companion.id}>
              <CompanionIcon companion={getCompanion(companion.id)} level={companion.level} label={true} />
            </div>
          )
        })}
      </div>
    </div>
  );
};
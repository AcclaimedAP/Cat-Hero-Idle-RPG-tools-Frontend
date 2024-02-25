import { useState } from "react";
import { companions } from "src/data/companions/companions";
import { useSelector } from "react-redux";
import { RootState } from "src/config/redux/store";


export const EquippedMana = () => {
  const [mana, setMana] = useState(0);
  const [maxMana, setMaxMana] = useState(30);
  const [helpBox, setHelpBox] = useState(false);
  const equipment = useSelector((state: RootState) => state.equipmentDisplay)

  const handleMaxManaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 20 || Number(e.target.value) > 37) {
      return;
    }
    setMaxMana(Number(e.target.value));
  }

  const handleManaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      return;
    }
    if (Number(e.target.value) > maxMana) {
      setMana(maxMana);
      return;
    }
    setMana(Number(e.target.value));
  }

  const calculateMana = () => {
    let newMana = 0;
    let companionsArray = equipment.companionsList;
    let companionsList = companionsArray.map((companion) => {
      if (!companion.hasOwnProperty("id") || companion.id === undefined) {
        return null;
      }
      return companions[companion.id];
    });
    companionsList.forEach((companion) => {
      if (companion === null) {
        return;
      }
      let mpReduced = 0;
      companion.specialEffect.forEach((effect) => {
        let selfMpReduction = 0;
        effect.tiers.forEach((tier) => {
          if (tier.hasOwnProperty("selfMpReduction")) {
            const companionLevel = companionsArray.find((companion) => {
              return companion.id === companion.id;
            })?.level;
            if (companionLevel === undefined) {
              return;
            }
            if (companionLevel >= tier.requiredLevel) {
              selfMpReduction = tier.selfMpReduction;
            }
          }
        });
        mpReduced += selfMpReduction;
      });
      newMana += companion.manaCost - mpReduced;
    });


    setMana(newMana);

  }

  return (
    <>
      <div className="m-1 w-full">

        <progress className="w-full border-2 border-solid bg-slate-800 border-zinc-800" max={maxMana} value={mana}></progress>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 text-center">
            <button className="text-xs text-outline" onClick={calculateMana}>Calculate</button>
            <div className="rounded-2xl bg-blue-700 text-outline w-4 text-[0.6rem] h-4 cursor-pointer" title="This will attempt to calculate your current mana based on the data that is currently added in the app, however this doesn't take into account everything due to missing data, and thus you may have to manually change the numbers by clicking on the and inputting them yourself." onClick={() => { setHelpBox(true) }}>?</div>
          </div>
          <div>
            <span><input type="text" value={mana} onChange={(e) => { handleManaChange(e) }} className="text-outline mx-1 w-10 text-center rounded-2xl bg-transparent hover:bg-opacity-45 hover:bg-slate-800 focus:bg-opacity-75 focus:bg-slate-800" /></span>
            <span>/</span>
            <span><input type="text" value={maxMana} onChange={(e) => { handleMaxManaChange(e) }} className="text-outline w-10 text-center rounded-2xl bg-transparent hover:bg-opacity-45 hover:bg-slate-800 focus:bg-opacity-75 focus:bg-slate-800" />MP</span>
          </div>
        </div>
        {helpBox && <div className="w-full p-2 text-xs bg-gray-600" onClick={() => { setHelpBox(false) }}>
          <span>
            This will attempt to calculate your current mana based on the data that is currently added in the app, however this doesn't take into account everything due to missing data, and thus you may have to manually change the numbers by clicking on the and inputting them yourself.
          </span>
        </div>}
      </div>
    </>
  );
}
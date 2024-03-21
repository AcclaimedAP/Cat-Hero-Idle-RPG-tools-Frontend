import { ISelectedSkill } from "types/ICollection";
import { SkillIcon } from "src/components/SkillIcon/SkillIcon";
import { useEffect, useState } from "react";
import type { RootState } from 'src/config/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillList } from 'src/config/redux/slices/equipmentDisplaySlice'
import { getData } from "src/utility/data/getData";
import { ISkill } from "src/types/ISkill";
import { FilterQuery } from "../../FilterQuery/FilterQuery";
import { HoverBox } from "src/components/HoverBox/SkillHoverBox";
import { IHoverBox } from "src/types/IHoverBox";
import React from "react";
import { getDeviceType } from "src/utility/device/getDevice";

const SkillBox = ({ skill, add, remove, isEquipped, filterString }: { skill: ISelectedSkill, add: (skill: ISelectedSkill) => void, remove: (skill: ISelectedSkill) => void, isEquipped: boolean, filterString: string }) => {
  if (!skill.id) return null
  const skills: ISkill[] = getData('skills');
  const [selected, setSelected] = useState(isEquipped);
  const ref = React.createRef<IHoverBox>();
  const handleSelect = () => {
    setSelected(!selected)
  }
  useEffect(() => {
    if (selected) {
      add({ id: skill.id, level: skill.level })
    } else {
      remove({ id: skill.id, level: skill.level })
    }
  }, [selected])

  const getSkill = (id: number) => {
    return skills.find((skill) => skill.id === id)
  }
  useEffect(() => {
    setSelected(isEquipped)
  }, [isEquipped])
  const skillData = getSkill(skill.id)
  if (!skillData) return null

  const filterItem = (skill: ISkill) => {
    const filterWords = filterString.split(' ')
    const types = skill.types.join(' ')
    const nameAndTypes = skill.name + ' ' + types + skill.rarity

    for (let i = 0; i < filterWords.length; i++) {
      if (!nameAndTypes.toLowerCase().includes(filterWords[i].toLowerCase())) {
        return false
      }
    }
    return true
  }
  const filtered = filterItem(skillData)
  const brightness = () => {
    if (filterString.length > 0) {
      if (filtered) {
        return "brightness-125"
      }
      if (selected) {
        return "brightness-75"
      }
      return "brightness-50"
    }
    if (selected) {
      return "brightness-125"
    }
    return "brightness-75"
  }

  const handleMouseEnter = () => {
    ref.current?.show()
  }
  const handleMouseLeave = () => {
    ref.current?.hide()
  }
  const device = getDeviceType();
  return (
    <>
      <div className="flex flex-col items-center" onTouchStart={() => {
        if (device !== 'desktop') {
          handleMouseEnter()
        }
      }} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <HoverBox skill={skillData} ref={ref} />
        </div>
        <div className={`${brightness()} flex flex-col justify-center items-center w-14`} onClick={handleSelect} >

          {selected && <span className="absolute z-10 right-0 -top-1 text-2xl">🗸</span>}
          <SkillIcon skill={getSkill(skill.id)} level={skill.level} label={true} />
        </div>
      </div>
    </>
  )
}

export const SkillCollection = () => {
  const dispatch = useDispatch();
  const skillsList = useSelector((state: RootState) => state.collectionDisplay.skillList)
  const equippedSkills = useSelector((state: RootState) => state.equipmentDisplay.skillList)
  const [filter, setFilter] = useState('')
  const sortById = (a: ISelectedSkill, b: ISelectedSkill) => {
    if (!a.id || !b.id) return 0
    return a.id - b.id
  }

  const addToList = (skill: ISelectedSkill) => {
    if (equippedSkills.some((obj) => obj.id === skill.id)) return
    const equippedSkillList = [...equippedSkills]
    const indexOfEmpty = equippedSkillList.findIndex((obj) => !obj.id)
    if (indexOfEmpty === -1) {
      equippedSkillList.shift()
      equippedSkillList.push(skill)
    } else {
      equippedSkillList[indexOfEmpty] = skill
    }
    dispatch(setSkillList(equippedSkillList));
  }

  const removeFromList = (skill: ISelectedSkill) => {
    const equippedSkillList = [...equippedSkills]
    const index = equippedSkillList.findIndex((obj) => obj.id === skill.id)
    if (index === -1) return
    equippedSkillList[index] = {}
    dispatch(setSkillList(equippedSkillList));
  }

  const isEquipped = (id: number) => {
    return equippedSkills.some((skill) => skill.id === id)
  }

  const updateFilter = (query: string) => {
    setFilter(query)
  }

  return (
    <div className="container-dark-inner flex flex-col gap-3">
      <div className="flex flex-row md:flex-col lg:flex-row justify-between items-center container-dark">
        <h3 className="text-center min-w-24 text-lg">Skills</h3>
        <FilterQuery updateFilter={updateFilter} />
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {skillsList.toSorted(sortById).map((skill, index) => {
          if (!skill.id) return null
          const isEquippedBool = isEquipped(skill.id)
          return (
            <SkillBox filterString={filter} add={addToList} remove={removeFromList} skill={skill} key={index} isEquipped={isEquippedBool} />
          )
        })}
      </div>
    </div >
  );
};
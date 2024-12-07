import { ISubRune } from "./IRune"
import { IMainRune } from "./IRune"
import { ICompanion } from "./ICompanion"
import { ISkill } from "./ISkill"
import { ICollection, ISelectedCompanion, ISelectedMainRune, ISelectedSkill, ISelectedSubRune, IEquipment, ICompanionBoxProps, ISkillBoxProps, IMainRuneBoxProps, ISubRuneBoxProps } from "./ICollection"


namespace Game {
  export namespace Rune {
    export type SubRune = ISubRune
    export type MainRune = IMainRune
  }
  export type Companion = ICompanion
  export type Skill = ISkill
  export namespace Collection {
    export type Full = ICollection
    export type Companion = ISelectedCompanion
    export type MainRune = ISelectedMainRune
    export type Skill = ISelectedSkill
    export type SubRune = ISelectedSubRune
    export type Equipment = IEquipment
    export namespace Props {
      export type Companion = ICompanionBoxProps
      export type Skill = ISkillBoxProps
      export type MainRune = IMainRuneBoxProps
      export type SubRune = ISubRuneBoxProps
    }
  }
}

export default Game

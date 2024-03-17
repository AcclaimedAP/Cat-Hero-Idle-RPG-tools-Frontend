import { CatBuild } from "components/Builds/Builds/Meta/CatBuild";

/**
 * @name IBuildGuide
 * @deprecated This interface is not used in the project.
 */
export interface IBuildGuide {
  title: string;
  category: string;
  content: () => JSX.Element;
  authors: string[];
}

/**
 * @name buildList
 * @deprecated This constant is not used in the project.
 */

export const buildList: IBuildGuide[] = [
  {
    title: "Cat Build",
    category: "Meta",
    content: function () { return <CatBuild /> },
    authors: ["Alexus"]
  }
]
import { CatBuild } from "components/Builds/Builds/Meta/CatBuild";

export interface IBuildGuide {
  title: string;
  category: string;
  content: () => JSX.Element;
  authors: string[];
}

export const buildList: IBuildGuide[] = [
  {
    title: "Cat Build",
    category: "Meta",
    content: function () { return <CatBuild /> },
    authors: ["Alexus"]
  }
]
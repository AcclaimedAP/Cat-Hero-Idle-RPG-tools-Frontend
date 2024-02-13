import { CollectionDisplay } from "src/components/Tools/Tools/Structure/CollectionOverview/CollectionDisplay";
export interface ITools {
  title: string;
  category: string;
  content: () => JSX.Element;
  authors: string[];
}

export const toolsList: ITools[] = [
  {
    title: "Collection Display",
    category: "Structure",
    content: function () { return <CollectionDisplay /> },
    authors: ["Alexus"]
  }
]
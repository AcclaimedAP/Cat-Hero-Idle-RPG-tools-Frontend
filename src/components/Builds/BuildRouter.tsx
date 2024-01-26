import { CatBuild } from "./CatBuild/CatBuild"

export const BuildRouter = ({ buildName }: { buildName: string }) => {

  switch (buildName) {
    case 'cat-build':
      return <CatBuild></CatBuild>
    default:
      return <CatBuild></CatBuild>
  }

}
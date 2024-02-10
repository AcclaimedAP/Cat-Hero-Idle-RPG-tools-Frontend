import { CatBuild } from "./CatBuild/CatBuild"

/**
 * @param buildName 
 * @returns corresponding build component
 * @example
 * BuildRouter('cat-build');
 * // returns <CatBuild></CatBuild>
 */

export const BuildRouter = ({ buildName }: { buildName: string }) => {

  switch (buildName) {
    case 'cat-build':
      return <CatBuild></CatBuild>
    default:
      return <CatBuild></CatBuild>
  }

}
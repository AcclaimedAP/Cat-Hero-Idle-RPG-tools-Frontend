import { useParams } from "react-router-dom";
import { BuildRouter } from "src/components/Builds/BuildRouter";
import { SubNavigationBar } from "src/components/SubNavigationBar/SubNavigationBar";
import { navigationBuilds } from "./subMenuData";


export const Builds = () => {
  const { buildName } = useParams<{ buildName: string }>();
  console.log(buildName);


  return (
    <>
      <SubNavigationBar navigationData={navigationBuilds} />
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          {buildName ? <><BuildRouter buildName={buildName} /></> :
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-3xl font-bold'>Builds</h1>
              <p className='text-xl'>Coming soon</p>
            </div>
          }
        </div>
      </div>

    </>
  );
};

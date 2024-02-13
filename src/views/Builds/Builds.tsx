import { useParams } from "react-router-dom";
import { ContentRouter } from "src/components/CotentRouter/ContentRouter";
import { buildList } from "components/Builds/BuildsCollection/BuildsList";


export const Builds = () => {
  const { buildName } = useParams<{ buildName: string }>();
  console.log(buildName);


  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Builds</h1>
          </div>
        </div>
        <div className="container-light flex flex-col gap-2">
          <ContentRouter contentList={buildList} />
        </div>
      </div>

    </>
  );
};

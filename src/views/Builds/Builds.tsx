import { ContentRouter } from "src/components/ContentRouter/ContentRouter";
import { buildList } from "components/Builds/BuildsCollection/BuildsList";


export const Builds = () => {

  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Builds</h1>
          </div>
        </div>
          <ContentRouter contentList={buildList} />
        </div>


    </>
  );
};

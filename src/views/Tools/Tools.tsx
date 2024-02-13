import { ContentRouter } from "components/CotentRouter/ContentRouter";
import { toolsList } from "components/Tools/ToolsCollection/ToolsList";
export const Tools = () => {
  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Tools</h1>
          </div>
        </div>
        <ContentRouter contentList={toolsList} />
      </div>

    </>

	);
};

import { BuilderTool } from "components/Builder/BuilderTool";
export const Builder = () => {

  document.title = 'CHIRPG Tools | Builder';

  return (
    <>
      <div className='container-dark'>
        <div className='flex justify-center container-light'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Builder</h1>
          </div>
        </div>
        <BuilderTool />
      </div>

    </>

  );
};

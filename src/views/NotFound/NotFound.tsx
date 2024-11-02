import { Link } from 'react-router-dom';

export const NotFound = () => {

  document.title = 'CHIRPG Tools | Not Found';
  return (
    <div className='w-full h-svh flex justify-center items-center bg-slate-200'>
      <div className='bg-slate-100 border-2 border-slate-300 border-solid shadow-2xl w-96 flex justify-center flex-col items-center rounded-xl'>
        <h1 className='m-4 text-xl'>Nothing here except you</h1>
        <Link to='/' className='hover:text-slate-500 underline text-sm m-4'>Return to Home</Link>
      </div>
    </div>
  );
};

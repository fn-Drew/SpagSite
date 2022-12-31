import burger from './images/burger_white.png'
import { useState } from 'react';

const App = () => {

  // const [showSidebar, setShowSidebar] = useState(false);
  // return (
  //   <div className='flex justify-around px-2 py-8 text-4xl text-right text-white duration-500 ease-in-out bg-black font-spaghettica'>
  //     {showSidebar ? (
  //       <div className='flex items-center '>
  //         <button onClick={() => setShowSidebar(!showSidebar)}><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
  //       </div>
  //     ) : (
  //       <div className='flex items-center'>
  //         <button className="z-50" onClick={() => setShowSidebar(!showSidebar)}><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
  //         <div className="fixed grid justify-evenly top-0 left-0 z-40 h-full p-10 pl-20 text-white  bg-black w-[80%]">
  //           <h3 className="mt-20 text-4xl font-semibold text-white">Discord</h3>
  //           <h3 className="mt-20 text-4xl font-semibold text-white">Twitter</h3>
  //           <h3 className="mt-20 text-4xl font-semibold text-white">Donate</h3>
  //         </div>
  //       </div>
  //     )}
  //     <div>
  //       Spaghetti Dan
  //     </div>
  //   </div>
  // )
  //
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(showSidebar)
  return (
    <div className='w-screen h-screen bg-zinc-900'>

      <div className={`flex justify-around px-2 py-8 text-4xl text-right text-white  bg-black font-spaghettica`}>
        <div className='flex items-center '>
          <button className='z-20' onClick={() => setShowSidebar(!showSidebar)}><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
        </div>
        <div className='z-20'>
          Spaghetti Dan
        </div>
      </div>

      <div>
        <div className={`fixed grid z-10 bg-slate-black justify-evenly top-0 left-0 h-full p-10 pl-20 text-white ease-in-out duration-150 ${showSidebar ? "translate-x-0" : "translate-x-[-100%]"} bg-black w-[80%]`}></div>
      </div>

    </div>
  )
}

export default App
import chainz from './images/chainz.png'
import burger from './images/burger_white.png'
import flannel from './images/flannel.png'
import sleep from './images/sleep_upscaled.png'
import earbert from './images/earbert_slim.png'
import dwayne from './images/dwayne.png'
import pain from './images/pain.png'
import { useState } from 'react';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='w-screen h-screen bg-zinc-900'>

      {/* header shadow-lg shadow-zinc-700 */}
      <div className={`flex justify-around items-center h-[20%] text-center text-4xl text-white bg-black font-spaghettica`}>
        <div className='flex items-center '>
          <button onClick={() => setShowSidebar(!showSidebar)}><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
        </div>
        <div>
          Spaghetti Dan
        </div>
      </div>

      <div className={`fixed grid bg-slate-black justify-evenly bottom-0 left-0 p-10 pl-20 text-white ease-in-out duration-150 bg-black h-[80%] w-[80%] ${showSidebar ? "translate-x-0" : "translate-x-[-100%]"}`}>
        <img src={chainz} alt='chainz' className='w-full h-auto' />
      </div>

      <div className='grid grid-cols-3 text-white inset-4 bg-zinc-800'>
        <img src={flannel} className='w-full row-span-2' />
        <img src={sleep} className='w-full col-span-2' />
        <img src={earbert} className='w-full h-64 col-span-3' />
        <img src={dwayne} className='w-full col-span-2' />
        <img src={pain} className='w-full col-span-2' />

      </div>

      <div>

      </div>

    </div>
  )
}

export default App
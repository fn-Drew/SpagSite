import { useState } from "react"
import burger from '../images/burger_white.png'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  showSidebar ? (
    <div className='flex items-center'>
      <button onClick={console.log("burger click")}><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
    </div>
  ) : (
    <div className='flex items-center'>
      <button onClick={console.log("burger click")}><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
    </div>
  )
}

export default Sidebar
import './index.css';
import burger from './images/burger_white.png';

function App() {
  return (
    <div className='flex justify-around px-2 py-8 text-4xl text-right text-white bg-black font-spaghettica'>
      <div className='flex items-center'>
        <button><img src={burger} alt='hamburger' className='w-6 h-6' /></button>
      </div>
      <div>
        Spaghetti Dan
      </div>
    </div>
  );
}

export default App;

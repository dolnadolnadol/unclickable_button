import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [click, setClick] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({
    left: '55%',
    top: '65%',
  });

  useEffect(() => {
    document.title = 'IF YOU PRESS NO, YOU\'LL DIE BY MY HAND';
    const button = document.getElementById('btn');
    const buttonY = document.getElementById('btnY');

    const handleMouseOver = () => {
      setButtonPosition({
        left: `${Math.ceil(Math.random() * 90)}%`,
        top: `${Math.ceil(Math.random() * 90)}%`,
      });
    };

    const handleClick = () => {
      if (click > 0) {
        alert('I DONT LOVE YOU ANYMORE!');
      } else {
        alert('YOU DARE TO CLICK ME?!');
      }
      setClick(1);
    };
    const handleClickYes = () => {
      alert('I Love You!!');
    };

    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('click', handleClick);
    buttonY.addEventListener('click', handleClickYes);

    return () => {
      button.removeEventListener('mouseover', handleMouseOver);
      button.removeEventListener('click', handleClick);
      buttonY.removeEventListener('click', handleClickYes);
    };
  }, [click]);

  return (
    <div className='flex justify-center items-center bg-red-200 h-screen'>
      <div className='text-7xl mb-32 font-bold rounded-2xl'>
        <p className='flex justify-center font-bold text-green-200 md:text-6xl font-mono italic select-none sm:text-4xl transition-all'>
          Hello LYON.&nbsp;
        </p>
        <p className='flex justify-center text-red-800 md:text-7xl sm:text-5xl transition-all select-none'>Am I CUTE?</p>

        <div className='relative flex justify-center items-center'>
          <div className='flex justify-center items-center w-screen'>
            <div className='flex justify-center h-full'>
              <img src='https://media.tenor.com/nHGAzFhUaI4AAAAi/pig.gif' className='md:w-full sm:w-[30vw] select-none justify-center' alt='cute piggy'></img>
            </div>
          </div>
        </div>
        
        <button 
        id = "btnY"
        className="absolute right-[55%] top-[65%] btn btn-primary w-[15vw] text-xl font-mono bg-pink-500 border-0 text-white transition-all hover:bg-orange-400">
              Yes!
        </button>
        <div className='flex justify-center mt-5'>
            <button
              id='btn'
              style={{ position: 'absolute', left: buttonPosition.left, top: buttonPosition.top }}
              className="btn btn-primary w-[15vw] text-xl font-mono bg-red-700 hover:bg-red-700 border-0 text-white transition-all">
              NO!
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;

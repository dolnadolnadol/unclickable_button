import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [click, setClick] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({
    left: '70%',
    top: '45%',
  });

  useEffect(() => {
    const button = document.getElementById('btn');

    const handleMouseOver = () => {
      setButtonPosition({
        left: `${Math.ceil(Math.random() * 100)}%`,
        top: `${Math.ceil(Math.random() * 100)}%`,
      });
    };

    const handleClick = () => {
      if (click > 0) {
        alert('I DONT LOVE YOU ANYMORE!');
      }else{
        alert('YOU DARE TO CLICK ME?!');
      }
      setClick(1);
    };

    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseover', handleMouseOver);
      button.removeEventListener('click', handleClick);
    };
  }, [click]);

  return (
      <div className='flex justify-center items-center bg-red-200 h-screen'>
        <div className='text-7xl mb-32 font-bold rounded-2xl'>
          <p className='font-bold text-green-200 text-6xl font-mono italic select-none'>
            Hello LYON.&nbsp;
          <a className='text-red-800 text-7xl'>Am I CUTE?</a></p>
          
          <div className='relative flex items-center'>
            <div className='flex items-center mt-5'>
              <button className="relative left-[35%] btn btn-primary w-[10vw] text-xl font-mono bg-pink-500 border-0 text-white hover:bg-orange-400">
                Definitely!
              </button>
            </div>
            <div className='relative left-[10%] flex justify-center h-full'>
              <img src='https://media.tenor.com/nHGAzFhUaI4AAAAi/pig.gif' className='select-none justify-center' alt='cute piggy'></img>
            </div>
            <div className='flex justify-center mt-5'>
              <button
                id='btn'
                style={{ position: 'absolute', left: buttonPosition.left, top: buttonPosition.top }}
                className="btn btn-primary w-[10vw] text-xl font-mono bg-red-700 hover:bg-red-700 border-0 text-white transition-all">
                NO!
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

import React from 'react';
import './index.css'
import waves from '../../img/waves.png';
import staniceGenius from '../../img/staniceGenius.png';
import waterDrop from '../../img/water-drop.svg';

const NaseReseni = () => {
  return (
    <div className='flex' style={{ backgroundImage: `url(${waves})`, backgroundSize: "cover" }}>
      <div className='w-1/2 flex justify-center items-center'>
        <img src={staniceGenius} className='h-4/5'/>
      </div>
      <div className='flex items-center'>
        <ul className='text-white text-2xl list-disc font-bold bg-black px-48 py-20 bg-opacity-75 rounded-xl'>
          <li>Výhoda 1</li>
          <li>Výhoda 2</li>
          <li>Výhoda 3</li>
          <li>Výhoda 4</li>
        </ul>
      </div>
    </div>
  );
};

export default NaseReseni;
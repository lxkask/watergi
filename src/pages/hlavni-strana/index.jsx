import React from 'react';
import placeholder from '../../img/placeholder.mp4';
import stanice1 from '../../img/stanice1.png'
import stanice2 from '../../img/stanice2.png';
import beach2 from '../../img/beach2.png';

const HlavniStrana = () => {
  return (
    <div>
      <div class="relative flex h-[80vh] shrink-0 flex-col items-center justify-center">
        <video muted autoPlay loop playsInline disablePictureInPicture className="w-full h-full absolute -z-10 object-cover">
          <source src={placeholder} type='video/mp4' />
       </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className='text-6xl font-bold text-purple text-center z-10'>PŘEDSTAVUJEME JEDNODUCHOU INOVACI <br />WATERGI HYDRATAČNÍ STANICI</h1>
        <p className='text-5xl text-purple text-center mt-4 z-10  '>EKOLOGICKÝ PITNÝ REŽIM S FILTROVANOU VODOU BEZ OBALU</p>
      </div>
      <div className='flex'>
        <div className='w-1/2 bg-cover bg-left' style={{ backgroundImage: `url(${stanice1})` }}>
          <div className='flex h-screen items-end justify-center text-white'>
            <h2 className='font-bold text-5xl pb-10'>NAŠE STANICE</h2>
          </div>
        </div>
        <div className='w-1/2 bg-cover bg-right' style={{ backgroundImage: `url(${stanice2})` }}>
          <div className='flex h-full items-end justify-center text-white'>
            <h2 className='font-bold text-5xl pb-10'>NAŠE PRODUKTY</h2>
          </div>
        </div>
      </div>
      <div className='flex bg-darkPurple flex-col justify-center items-center h-64 text-center  '>
        <h2 className='text-white font-bold text-4xl mb-6'>JAKOU MÁŠ MOŽNOST VOLBY, KDYŽ JSI V TERÉNU A MÁŠ ŽÍZEŇ?</h2>
        <p className='text-white text-3xl mb-6'>Jdeš a koupíš si balenou vodu v jednorázovém obalu?</p>
        <h2 className='text-green font-bold text-4xl'>WATERGI MĚNÍ HRU, <br/>PŘINÁŠÍME NOVOU VOLBU</h2>
      </div>
      <div className='flex text-white text-4xl font-bold text-center h-96'>
        <div className='flex w-1/4 bg-green justify-center items-center'>
          <h2>TOČENÁ <br />FILTROVANÁ <br />VODA <br />DO VLASTNÍ <br />LÁHVE</h2>
        </div>
        <div className='flex w-1/4 bg-purple justify-center items-center'>
          <h2>NOVÁ CESTA <br />HYDRATACE, <br />KDYŽ JSI V <br />TERÉNU A MÁŠ <br />ŽÍZEŇ</h2>
        </div>
        <div className='flex w-1/4 bg-pink justify-center items-center'>
          <h2>EKOLOGICKÝ <br />PITNÝ REŽIM <br />BEZ ZÁTĚŽE <br />ŽIVOTNÍHO <br />PROSTŘEDÍ</h2>
        </div>
        <div className='flex w-1/4 bg-green justify-center items-center'>
          <h2>PERLIVÁ <br />NEPERLIVÁ <br />CHLAZENÁ <br />NECHLAZENÁ <br />PRÉMIOVÁ CHUŤ</h2>
        </div>
      </div>
      <div className='flex bg-cover w-screen h-96 items-center justify-center text-center text-white pt-20' style={{ backgroundImage: `url(${beach2})` }}>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-5xl '>JEDNORÁZOVÉ PLASTY <br />NEJSOU BUDOUCNOST</h2>
          <button className='bg-button text-white font-bold text-2xl mt-20 py-2 px-2 rounded-full w-72'>PŘIDEJ SE K NÁM</button>
        </div>
      </div>
    </div> 
  );
};

export default HlavniStrana;
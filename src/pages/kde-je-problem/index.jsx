import React from 'react';  
import ocean from '../../assets/ocean.png';
import beach from '../../assets/beach.png';
import beach2 from '../../assets/beach2.png';

const KdeJeProblem = () => {
  return (
    <div className="container mx-auto px-0">
      <div className="flex">
        {/* Levá kostka */}
        <div className="w-1/2 bg-purple text-white p-8 flex justify-center text-center flex-col h-screen">
          <h2 className="font-bold text-7xl mb-4">1 MINUTA <br /> = <br />1 MILION</h2>
          <p className="text-4xl">
            Každou minutu se celosvětově <br />spotřebuje <br />1 milion jednorázových plastových <br />lahví.
          </p>
        </div>
        {/* Pravá kostka */}
        <div className="w-1/2 bg-cover bg-right" style={{ backgroundImage: `url(${ocean})` }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white font-bold text-4xl text-center">
              ROK 2050, V <br /> OCEÁNECH BUDE <br /> PLAVAT VÍCE PLASTŮ <br />NEŽ RYB
            </h2>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Levá kostka */}
        <div className="w-1/2 bg-green text-white p-8 flex justify-center text-center flex-col h-screen">
          <h2 className="font-bold text-7xl mb-4">JEN V ČESKU SE <br /> ROČNĚ VYROBÍ <br />60 TISÍC TUN <br /> PETEK</h2>
          <p className="text-4xl">
            K recyklaci se dostane takřka <br />polovina.
          </p>
        </div>
        {/* Pravá kostka */}
        <div className="w-1/2 bg-cover bg-right" style={{ backgroundImage: `url(${beach})` }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white font-bold text-4xl text-center">
              VĚTŠINU Z <br />PLASTOVÝCH ODPADŮ, <br />TVOŘÍ PRÁVĚ BALENÁ <br />VODA
            </h2>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Levá kostka */}
        <div className="w-1/2 bg-purple text-white p-8 flex justify-center text-center flex-col h-screen">
          <h2 className="font-bold text-7xl mb-4">JE NA ČASE NĚCO <br />ZMĚNIT</h2>
          <p className="text-4xl">Jednorázové plasty nejsou <br />budoucnost.
          </p>
        </div>
        {/* Pravá kostka */}
        <div className="w-1/2 bg-cover bg-right" style={{ backgroundImage: `url(${beach2})` }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white font-bold text-4xl text-center">
              OHROMUJÍCÍCH 91% <br />JEDNORÁZOVÝCH PLASTŮ <br />NEBYLO NIKDY RECYKLOVÁNO, <br />VĚTŠINA Z NICH KONČÍ NA <br />SKLÁDKÁCH NEBO V OCEÁNU
            </h2>
          </div>
        </div>
      </div>
      <div className='bg-pink text-white text-center'>
        <h2 className="text-4xl font-bold py-10">Pokud nezměníme naše kulturní návyky <br />a paradigmata k jednorázovým plastům, <br />dopad bude fatální.
        </h2>
      </div>
    </div>
  );
};

export default KdeJeProblem;
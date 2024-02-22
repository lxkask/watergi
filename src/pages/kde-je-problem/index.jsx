import React from 'react';

const KdeJeProblem = () => {
  return (
    <div className="container mx-auto px-0">
      <div className="flex">
        {/* Levá kostka */}
        <div className="w-1/2 bg-violet-600 text-white p-8 flex justify-center text-center flex-col h-screen">
          <h2 className="font-bold text-6xl mb-4">1 MINUTA = 1 MILION</h2>
          <p className="text-lg">
            Každou minutu se celosvětově spotřebuje 1 milion jednorázových plastových lahví.
          </p>
        </div>
        {/* Pravá kostka */}
        <div className="w-1/2 bg-cover bg-right" style={{ backgroundImage: 'url(/path/to/ocean-image.jpg)' }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white font-bold text-2xl text-center">
              ROK 2050, V OCEÁNECH BUDE PLAVAT VÍCE PLASTŮ NEŽ RYB
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KdeJeProblem;
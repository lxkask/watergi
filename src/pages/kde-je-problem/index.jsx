import React from 'react';
import Navbar from "../../components/navbar";

const KdeJeProblem = () => {
  return (
    <div>
    <Navbar />
      <div className="container mx-auto">
        {/* Obsah stránky "Co děláme" */}
        <h1 className="text-2xl font-bold mt-8">Kde je problém</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,
          mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
          eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
        </p>
      </div>
    </div>
  );
};

export default KdeJeProblem;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white h-16 flex items-center justify-between px-8">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-10" /> {/* Přidejte cestu k logu */}
        <ul className="flex space-x-4 ml-8">
          <li>
            <a
              href="/co-delame"
              className="text-a984f0 hover:text-724aeb transition-colors duration-300"
            >
              Co děláme
            </a>
          </li>
          <li>
            <a
              href="/kde-je-problem"
              className="text-a984f0 hover:text-724aeb transition-colors duration-300"
            >
              Kde je problém
            </a>
          </li>
          <li>
            <a
              href="/nase-reseni"
              className="text-a984f0 hover:text-724aeb transition-colors duration-300"
            >
              Naše řešení
            </a>
          </li>
          <li>
            <a
              href="/pridej-se-k-nam"
              className="text-a984f0 hover:text-724aeb transition-colors duration-300"
            >
              Přidej se k nám
            </a>
          </li>
          <li>
            <a
              href="/kontakt"
              className="text-a984f0 hover:text-724aeb transition-colors duration-300"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
      <button className="bg-7047eb text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white hover:text-7047eb">
        Přidej se k nám
      </button>
    </nav>
  );
};

export default Navbar;
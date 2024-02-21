import React from 'react';
import HlavniStrana from './pages/hlavni-strana';
import CoDelame from './pages/co-delame';
import KdeJeProblem from './pages/kde-je-problem';
import Kontakt from './pages/kontakt';
import NaseReseni from './pages/nase-reseni/index';
import PridejSeKNam from './pages/pridej-se-k-nam';
import NaviBar from './components/naviBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <NaviBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HlavniStrana />} />
            <Route path='/co-delame' element={<CoDelame />} />
            <Route path='/kde-je-problem' element={<KdeJeProblem />} />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path='/nase-reseni' element={<NaseReseni />} />
            <Route path='/pridej-se-k-nam' element={<PridejSeKNam />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

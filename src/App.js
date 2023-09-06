import './App.css';
import React from 'react';

import Breeds from './components/breeds/Breeds';
import Voting from './components/voting/Voting';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Body } from './components/body/Body';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Body />} />
            <Route path='/breeds' element={<Breeds />} />
            <Route path='/voting' element={<Voting />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

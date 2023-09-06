import './App.css';
import React from 'react';

import Breeds from './components/breeds/Breeds';
import Voting from './components/voting/Voting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Body } from './components/body/Body';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Body />} />
            <Route path='/breeds' element={<Breeds />} />
            <Route path='/voting' element={<Voting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

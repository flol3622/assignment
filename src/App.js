import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home, Recent, Nearby, Favorite, Add} from './pages'
import LabelBottomNavigation from './components/LabelBottomNavigation'
import BasicSpeedDial from './components/BasicSpeedDial';
import Footer from './components/Footer';
import React from 'react';


function App() {
  return (
    <BrowserRouter>  
      <BasicSpeedDial/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/recent" element={<Recent/>}/>
        <Route path="/nearby" element={<Nearby/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
      <LabelBottomNavigation/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

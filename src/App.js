import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home, Recent, Nearby, Favorite} from './pages'
import LabelBottomNavigation from './components/LabelBottomNavigation'
import BasicSpeedDial from './components/BasicSpeedDial';
import Footer from './components/Footer';
import FooterArrow from './components/FooterArrow';
import './App.css';


function App() {
  return (
    <BrowserRouter>  
      <BasicSpeedDial/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/recent" element={<Recent/>}/>
        <Route path="/nearby" element={<Nearby/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
      <FooterArrow/>
      <LabelBottomNavigation/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

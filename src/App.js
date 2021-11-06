import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home, Recent, Nearby, Favorite} from './pages'
import LabelBottomNavigation from './components/LabelBottomNavigation'
import './App.css';

function App() {
  return (
      <BrowserRouter>        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/recent" element={<Recent/>}/>
          <Route path="/nearby" element={<Nearby/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
        </Routes>
        <LabelBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;

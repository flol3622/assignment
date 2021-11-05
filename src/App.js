import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home, Recent} from './pages'
import LabelBottomNavigation from './components/LabelBottomNavigation'


function App() {
  return (
      <BrowserRouter>        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/recent" element={<Recent/>}/>
        </Routes>
        <LabelBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home, Recent} from './pages'
import navbarBeneden from './components/navbarBeneden'

function App() {
  return (
      <BrowserRouter>
        <navbarBeneden/>
         <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/recent" element={<Recent/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
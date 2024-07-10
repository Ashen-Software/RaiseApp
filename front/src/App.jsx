import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Explore from './views/Explore/Explore';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/Login" element = {<Login />}/>
        <Route path='/Explore' element = {<Explore />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

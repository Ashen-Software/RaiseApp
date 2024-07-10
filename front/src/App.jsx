import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para el formulario de inicio de sesión */}
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

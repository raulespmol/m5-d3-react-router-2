import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import NotFound from './views/NotFound'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemons"
          element={<Pokemons />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App

import { createContext, useState, useEffect } from "react"

export const PokeContext = createContext()

const PokeProvider = ({children}) => {
  const [pokes, setPokes] = useState([])

  const getPokes = () => {
    const url = 'https://pokeapi.co/api/v2/pokedex/2/'
    fetch(url)
    .then(response => response.json())
    .then(data => setPokes(data.pokemon_entries))
  }

  useEffect(() => {
    getPokes()
  }, [])

  return (
    <PokeContext.Provider value={{pokes, setPokes}}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider
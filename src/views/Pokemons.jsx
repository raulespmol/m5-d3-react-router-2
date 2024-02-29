import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"

const Pokemons = () => {
  const {pokes} = useContext(PokeContext)

  return (
    <div>
      <select>
        {pokes.map( poke => {
          return (
            <option value={poke.entry_number}>{poke.pokemon_species.name}</option>
          )
        } )}
      </select>
    </div>
  )
}

export default Pokemons
import { useContext, useState } from "react"
import { PokeContext } from "../context/PokeContext"
import { useNavigate } from "react-router-dom"

const Pokemons = () => {
  const {pokes} = useContext(PokeContext)
  const [selectedPoke, setSelectedPoke] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    const {value} = e.target
    setSelectedPoke(value)
  }

  const handleClick = () => {
    if(selectedPoke){
      navigate(`/pokemons/${selectedPoke}`)
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        {pokes.map((poke) => {
          return (
            <option
              key={poke.entry_number}
              value={poke.entry_number}
            >
              {poke.pokemon_species.name}
            </option>
          )
        } )}
      </select>
      <button onClick={handleClick}>Ver detalles</button>
    </div>
  )
}

export default Pokemons
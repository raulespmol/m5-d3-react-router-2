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

  const formatName = nombre => {
    return nombre[0].toUpperCase() + nombre.slice(1)
  }

  return (
    <div>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Selecciona un Pokemon</option>
        {pokes ?
        pokes.map((poke) => {
          const {name} = poke
          return (
            <option
              key={name}
              value={name}
            >
              {formatName(name)}
            </option>
          )
        } ) : (
          <option disabled>Cargando...</option>
        )}
      </select>
      <button onClick={handleClick}>Ver detalles</button>
    </div>
  )
}

export default Pokemons
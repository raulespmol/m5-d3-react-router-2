import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const PokemonInfo = () => {
  const [PokeInfo, setPokeInfo] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  const handleClick = () => {
    navigate('/pokemons')
  }

  const getPokeInfo = () => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => setPokeInfo(data))
  }

  useEffect(() => {
    getPokeInfo
  })

  return (
    <>
      <div>PokemonInfo {id}</div>
      <button onClick={handleClick}>Volver</button>
    </>
  )
}

export default PokemonInfo
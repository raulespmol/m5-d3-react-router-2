import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PokeCard from "../components/PokeCard"


const PokemonInfo = () => {
  const [pokeInfo, setPokeInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { name } = useParams()

  const handleClick = () => {
    navigate('/pokemons')
  }

  const getPokeInfo = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPokeInfo(data)
      setIsLoading(false)
    } catch(error) {
      console.log('Error al consultar la API', error);
    }
  }

  useEffect(() => {
    getPokeInfo()
  }, [])

  if(isLoading){
    return <h3>Cargando...</h3>
  } else {
    return (
      <>
        <h2>{pokeInfo.name}</h2>
        <PokeCard pokemon={pokeInfo}/>
        <button onClick={handleClick}>Volver</button>
      </>
    )
  }
}

export default PokemonInfo
import { useNavigate } from "react-router-dom"


const PokemonInfo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/pokemons')
  }

  return (
    <>
      <div>PokemonInfo</div>
      <button onClick={handleClick}>Volver</button>
    </>
  )
}

export default PokemonInfo
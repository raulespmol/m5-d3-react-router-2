import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const PokemonInfo = () => {
  const [pokeInfo, setPokeInfo] = useState({})
  const navigate = useNavigate()
  const { name } = useParams()

  const handleClick = () => {
    navigate('/pokemons')
  }

  const getPokeInfo = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => setPokeInfo(data))
  }

  useEffect(() => {
    getPokeInfo()
  })

  return (
    <>
      <h2>Pokemon Info {pokeInfo.name}</h2>
      {pokeInfo ? (
        <div>
          <figure>
            <img src={pokeInfo.sprites.other.home.front_default} alt="" />
          </figure>
          <div>
            <ul>
              {/* { pokeInfo.stats.map( (s, index) => {
                return (
                  <li key={index}>
                    {s.stat.name}: {s.base_stat}
                  </li>
                )}
              )} */}
            </ul>
          </div>
        </div>
      ) : (
        'Cargando...'
      )}
      <button onClick={handleClick}>Volver</button>
    </>
  )
}

export default PokemonInfo
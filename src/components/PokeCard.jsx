
const PokeCard = ({pokemon}) => {
  return (
    <div>
      <figure>
        <img src={pokemon.sprites.other.home.front_default} alt="" />
      </figure>
      <div>
        <ul>
          {pokemon.stats.map( (s, index) => {
            return (
              <li key={index}>
                {s.stat.name}: {s.base_stat}
              </li>
            )}
          )}
        </ul>
      </div>
    </div>
  )
}

export default PokeCard
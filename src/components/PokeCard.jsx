import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const PokeCard = ({pokemon}) => {
  const formatName = nombre => {
    return nombre[0].toUpperCase() + nombre.slice(1)
  }

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img src={pokemon.sprites.other.home.front_default}  />
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>{formatName(pokemon.name)}</Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              {pokemon.stats.map( (s, index) => {
                return (
                  <li key={index}>
                    {s.stat.name}: {s.base_stat}
                  </li>
                )}
              )}
            </ul>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {pokemon.types.map( t => t.type.name )}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <div>
        
      </div>
    </div>
  )
}

export default PokeCard
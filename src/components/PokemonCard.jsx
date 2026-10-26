import FlipCard from './FlipCard.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import TypeBadge from './TypeBadge.jsx';
import { artwork, formatId, statLabels } from '../utils/pokemonSelectors.js';

export default function PokemonCard({ pokemon, flipped, onFlip, statMax }) {
  const heading = <><span className="card-number">{formatId(pokemon.id)} <span aria-hidden="true">✦</span></span><strong className="card-name">{pokemon.name}</strong><TypeBadge types={pokemon.types} /></>;
  return <FlipCard id={`pokemon-${pokemon.id}`} name={pokemon.name} flipped={flipped} onFlip={onFlip} className={`pokemon-card accent-${pokemon.types[0]?.name.toLowerCase() || 'neutral'}`}
    front={<><span className="card-number">{formatId(pokemon.id)}<span aria-hidden="true">◇</span></span><span className="artwork-stage"><ImageWithFallback src={artwork(pokemon.id)} alt={pokemon.name} /></span><strong className="card-name">{pokemon.name}</strong><TypeBadge types={pokemon.types} /><span className="card-hint">↻ Clique para virar</span></>}
    back={<>{heading}<span className="stats">{Object.entries(statLabels).map(([key, label]) => <span className="stat" key={key}><span className="stat-heading"><span>{label}</span><strong>{pokemon.stats[key]}</strong></span><span className="stat-track"><span style={{ width: `${pokemon.stats[key] / statMax * 100}%` }} /></span></span>)}</span><span className="card-hint">↻ Clique para desvirar</span></>} />;
}

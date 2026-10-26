import { useState } from 'react';
import data from './data/pokedex-data.json';
import Header from './components/Header.jsx';
import PokemonToolbar from './components/PokemonToolbar.jsx';
import PokemonCard from './components/PokemonCard.jsx';
import { globalStatMax, selectPokemon } from './utils/pokemonSelectors.js';
import './css/tokens.css';
import './css/global.css';
import './css/cards.css';
const statMax = globalStatMax(data.pokemon);
export default function App() {
  const [tab, setTab] = useState('pokemon');
  const [filters, setFilters] = useState({ query: '', type: '', sort: 'id', direction: 'asc' });
  const [flipped, setFlipped] = useState(new Set());
  const results = selectPokemon(data.pokemon, filters);
  const clear = () => setFilters(previous => ({ ...previous, query: '', type: '' }));
  function flip(id) { setFlipped(previous => { const next = new Set(previous); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }
  return <><a className="skip-link" href="#main">Ir para o conteúdo</a><Header tab={tab} onTab={setTab} theme="light" onTheme={() => {}} pokemonCount={data.pokemon.length} trainerCount={data.trainers.length} /><main id="main"><div className="intro"><div><span className="eyebrow">Explore. Descubra. Colecione histórias.</span><h1>{tab === 'pokemon' ? 'Seu álbum Pokémon' : 'Os treinadores'}</h1><p>Uma carta, uma descoberta. Vire para conhecer cada detalhe.</p></div><span className="album-tag">✦ Região de Kanto · 001—151</span></div>{tab === 'pokemon' ? <><PokemonToolbar filters={filters} onChange={(key, value) => setFilters(previous => ({ ...previous, [key]: value }))} types={data.types} count={results.length} total={data.pokemon.length} onClear={clear} /><div className="grid">{results.map(p => <PokemonCard key={p.id} pokemon={p} flipped={flipped.has(p.id)} onFlip={() => flip(p.id)} statMax={statMax} />)}</div>{!results.length && <section className="empty-state"><h2>Nenhum Pokémon encontrado</h2><p>Tente outro nome, número ou tipo.</p><button className="text-button" onClick={clear}>Limpar filtros</button></section>}</> : <p>Conheça os {data.trainers.length} treinadores da coleção.</p>}</main><footer>Pokédex · Um álbum para explorar o mundo Pokémon.</footer></>;
}

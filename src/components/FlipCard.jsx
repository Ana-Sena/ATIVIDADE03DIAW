export default function FlipCard({ id, name, flipped, onFlip, front, back, className = '', style }) {
  return <button id={id} type="button" className={`flip-card ${className} ${flipped ? 'is-flipped' : ''}`} style={style} aria-label={`${name}: ${flipped ? 'ocultar detalhes' : 'ver detalhes'}`} aria-pressed={flipped} onClick={onFlip}>
    <span className="card-rotator">
      <span className="card-face card-front" aria-hidden={flipped} inert={flipped}>{front}</span>
      <span className="card-face card-back" aria-hidden={!flipped} inert={!flipped}>{back}</span>
    </span>
  </button>;
}

// Adicione retratos em src/assets/images/trainers/<id>.png (ou jpg/webp/svg).
const files = import.meta.glob(
  '../assets/images/trainers/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, query: '?url', import: 'default' },
);
export const trainerImages = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    Number(path.split('/').pop().split('.')[0]),
    url,
  ]),
);
export const trainerFallback = '/images/trainer-fallback.svg';

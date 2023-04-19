import './style.css';

interface MusicGroup {
  name: string;
  year: number;
  active: boolean;
  genre: string;
}

const titleStyle =
  'background-color: lightgreen; font-size:20px; font-weight: bold';

const groupA: MusicGroup = {
  name: 'The Beatles',
  year: 1960,
  active: false,
  genre: '🎵 Pop Rock'
};

const groupB: MusicGroup = {
  name: 'Queen',
  year: 1970,
  active: false,
  genre: '🎸 Rock'
};

const groupC: MusicGroup = {
  name: 'AC DC',
  year: 1973,
  active: true,
  genre: '🤘 Hard Rock'
};

const groupD: MusicGroup = {
  name: 'Ludwig van Beethoven',
  year: 1770,
  active: false,
  genre: ' 🎼 Clásica'
};

const groupE: MusicGroup = {
  name: 'The Rolling Stones',
  year: 1962,
  active: true,
  genre: '🎸 Rock'
};

console.log(`%c${groupA.name}`, titleStyle);
console.log(`El grupo se fundó en ${groupA.year}`);
console.log(`Están activos: ${groupA.active}`);
console.log(`Estilo musical: ${groupA.genre}`);
console.log('----------------------------');
console.log(`%c${groupB.name}`, titleStyle);
console.log(`El grupo se fundó en ${groupB.year}`);
console.log(`Están activos: ${groupB.active}`);
console.log(`Estilo musical: ${groupB.genre}`);
console.log('----------------------------');
console.log(`%c${groupC.name}`, titleStyle);
console.log(`El grupo se fundó en ${groupC.year}`);
console.log(`Están activos: ${groupC.active}`);
console.log(`Estilo musical: ${groupC.genre}`);
console.log('----------------------------');
console.log(`%c${groupD.name}`, titleStyle);
console.log(`Nació en ${groupD.year}`);
console.log(`Está activo: ${groupD.active}`);
console.log(`Estilo musical: ${groupD.genre}`);
console.log('----------------------------');
console.log(`%c${groupE.name}`, titleStyle);
console.log(`El grupo se fundó en ${groupE.year}`);
console.log(`Están activos: ${groupE.active}`);
console.log(`Estilo musical: ${groupE.genre}`);
console.log('----------------------------');

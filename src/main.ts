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
console.log(`Año de fundación: ${groupA.year}`);
console.log(`Activo: ${groupA.active}`);
console.log(`Género musical: ${groupA.genre}`);
console.log('----------------------------');
console.log(`%c${groupB.name}`, titleStyle);
console.log(`Año de fundación: ${groupB.year}`);
console.log(`Activo: ${groupB.active}`);
console.log(`Género musical: ${groupB.genre}`);
console.log('----------------------------');
console.log(`%c${groupC.name}`, titleStyle);
console.log(`Año de fundación: ${groupC.year}`);
console.log(`Activo: ${groupC.active}`);
console.log(`Género musical: ${groupC.genre}`);
console.log('----------------------------');
console.log(`%c${groupD.name}`, titleStyle);
console.log(`Año de fundación: ${groupD.year}`);
console.log(`Activo: ${groupD.active}`);
console.log(`Estilo musical: ${groupD.genre}`);
console.log('----------------------------');
console.log(`%c${groupE.name}`, titleStyle);
console.log(`Año de fundación: ${groupE.year}`);
console.log(`Activo: ${groupE.active}`);
console.log(`Género musical: ${groupE.genre}`);
console.log('----------------------------');

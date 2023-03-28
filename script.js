// Desenvolvi este projeto com a ajuda dos colegas Guilherme Azevedo, Imar Mendes e Tiago Zardo.;

const boardSize = document.querySelector('#board-size');
const pixelsBoard = document.getElementById('pixel-board');
const formButton = document.querySelector('#generate-board');
const clearBoardButton = document.querySelector('#clear-board');
const colorPallet = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const colors = [
  'aqua',
  'blue',
  'fuchsia',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'purple',
  'red',
  'silver',
  'teal',
  'yellow',
  'orange',
];

const makePositions = () => {
  const positions = [];
  for (let position = 0; positions.length < 4; position += 1) {
    const number = Math.floor(Math.random() * 14);
    if (!positions.includes(number)) {
      positions.push(number);
    }
  }

  return positions;
};

const createPaletteColors = () => {
  const positions = makePositions();
  colorPallet[0].style.backgroundColor = 'black';
  for (let index = 1; index < 4; index += 1) {
    colorPallet[index].style.backgroundColor = colors[positions[index - 1]];
  }
};

const addEventToElements = (array, func) => {
  for (let index = 0; index < array.length; index += 1) {
    array[index].addEventListener('click', func);
  }
};

function changeSelectedColor(event) {
  const takeSelcted = document.querySelector('.selected');
  takeSelcted.classList.remove('selected');
  event.target.classList.add('selected');
}

const changePixelColor = (event) => {
  const selectedColor = window
    .getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const pixelToChangeColor = event.target;
  pixelToChangeColor.style.backgroundColor = selectedColor;
};

clearBoardButton.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

const createPrimaryDiv = (inputedSize, inputedBoard) => {
  for (let index = 0; index < inputedSize; index += 1) {
    const item = document.createElement('div');
    item.classList.add('pixel-line');
    inputedBoard.appendChild(item);
  }
};

const createSecundaryDiv = (pixelLine) => {
  const divLine = document.querySelectorAll('.pixel-line');
  console.log('dentro da function', divLine);
  for (let x = 0; x < divLine.length; x += 1) {
    for (let index = 0; index < pixelLine; index += 1) {
      const item = document.createElement('div');
      item.classList.add('pixel');
      console.log('pixel-line', divLine);
      divLine[x].appendChild(item);
    }
  }
};

const remakeBoard = () => {
  if (boardSize.value === '') return window.alert('Board inválido!');
  if (boardSize.value >= 1 && boardSize.value < 5) {
    pixelsBoard.innerHTML = '';
    createPrimaryDiv(5, pixelsBoard);
    createSecundaryDiv(5);
    return;
  }
  if (boardSize.value > 50) {
    pixelsBoard.innerHTML = '';
    createPrimaryDiv(50, pixelsBoard);
    createSecundaryDiv(50);
    return;
  }
  pixelsBoard.innerHTML = '';
  createPrimaryDiv(boardSize.value, pixelsBoard);
  createSecundaryDiv(boardSize.value);
};

const formButtonAction = (event) => {
  event.preventDefault();
  remakeBoard();
  addEventToElements(pixels, changePixelColor);
};

formButton.addEventListener('click', formButtonAction);

createPaletteColors();
addEventToElements(colorPallet, changeSelectedColor);
addEventToElements(pixels, changePixelColor);

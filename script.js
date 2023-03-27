// Desenvolvi este projeto com a ajuda dos colegas Guilherme Azevedo, Imar Mendes e Tiago Zardo.;

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

const colorPallet = document.getElementsByClassName('color');

addEventToElements(colorPallet, changeSelectedColor);

const pixels = document.getElementsByClassName('pixel');

addEventToElements(pixels, changePixelColor);

const clearBoardButton = document.querySelector('#clear-board');

clearBoardButton.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

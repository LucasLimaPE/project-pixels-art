// Desenvolvi este projeto com a ajuda dos colegas Guilherme Azevedo, Imar Mendes e Tiago Zardo.;

// const createButton = document.createElement('button');

// createButton.innerText = 'Limpar';

// const createH1dois = document.createElement('h1');

// createH1dois.innerText = 'Quadro de Pixels';

// createH1dois.id = 'quadroPixels';

// document.body.appendChild(createH1dois);

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

const colorPallet = document.getElementsByClassName('color');

addEventToElements(colorPallet, changeSelectedColor);

const changePixelColor = (event) => {
  const selectedColor = window
    .getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const pixelToChangeColor = event.target;
  pixelToChangeColor.style.backgroundColor = selectedColor;
};

const pixels = document.getElementsByClassName('pixel');

addEventToElements(pixels, changePixelColor);

// addEventInPixel(pixels);

// createButton.addEventListener('click', () => {
//   for (let index = 0; index < takeDivChild.length; index += 1) {
//     takeDivChild[index].style.backgroundColor = 'white';
//   }
// });

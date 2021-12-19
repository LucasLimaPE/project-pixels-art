
const createHeader = document.createElement('header');
createHeader.id = 'takeHeader';
document.body.appendChild(createHeader);

const createH1 = document.createElement('h1');
createH1.innerText = 'Paleta de Cores';
createH1.id = 'title';
createHeader.appendChild(createH1);

const createSection = document.createElement('section');
createSection.id = 'color-palette';
document.body.appendChild(createSection);

const createColorPalette = ['black', 'orange', 'green', 'yellow'];

// Criei essa estrutura para fazer os requisitos 2 e 3, e com a ajuda do colega Guilherme Azevedo o otimizei para que funcionasse perfeitamente.

for (let index = 0; index < createColorPalette.length; index +=1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.borderWidth = '1px';
    createDiv.style.borderStyle = 'solid';
    createDiv.style.borderColor = 'black';
    createDiv.style.backgroundColor = createColorPalette[index];
    createDiv.style.display = 'inline-block';
    createDiv.style.width = '40px';
    createDiv.style.height = '40px';
    createSection.appendChild(createDiv);
   }
   const takeCreateDiv = document.querySelectorAll('.color');
   takeCreateDiv[0].classList.add('selected');

   const createH1dois = document.createElement('h1'); 
   createH1dois.innerText = 'Quadro de Pixels';
   createH1dois.id = 'quadroPixels';
   document.body.appendChild(createH1dois);

   const createSection2 = document.createElement('section');
createSection2.id = 'pixel-board';
document.body.appendChild(createSection2);

for (let index = 0; index < 5; index += 1) {
    let createDivMae = document.createElement('div');
    let takeSection = document.querySelector('#pixel-board');
    for (let index = 0; index < 5; index += 1) {
        let createDivChild = document.createElement('div');
        createDivChild.style.border = '1px solid black';
        createDivChild.style.width = '40px';
        createDivChild.style.height = '40px';
        createDivChild.style.display = 'inline-block';
        createDivChild.classList.add('pixel');
        createDivMae.appendChild(createDivChild);
        takeSection.appendChild(createDivMae);
    }
}
const takeDivChild = document.querySelectorAll('.pixel');

for (let index = 0; index < takeDivChild.length; index += 1) {
    takeDivChild[index].addEventListener('click', changeColor);
};
function changeColor(event) {
    event.target.style.backgroundColor = 'black';
}
















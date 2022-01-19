// Desenvolvi este projeto com a ajuda dos colegas Guilherme Azevedo, Imar Mendes e Tiago Zardo.

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

const createButton = document.createElement('button');

createButton.id = 'clear-board';

createButton.innerText = 'Limpar';

document.body.appendChild(createButton);

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
        createDivChild.style.marginLeft = '-1px';
        createDivChild.style.marginTop = '-5px';
        createDivChild.style.backgroundColor = 'white';
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

let takeCreateDiv0 = takeCreateDiv[0];

let takeCreateDiv1 = takeCreateDiv[1];

let takeCreateDiv2 = takeCreateDiv[2];

let takeCreateDiv3 = takeCreateDiv[3];

function changeColor2(event) {
    const takeSelcted = document.querySelector('.selected');
    takeSelcted.classList.remove('selected');
    event.target.classList.add('selected');
}
// 
takeCreateDiv0.addEventListener('click', changeColor2);

takeCreateDiv1.addEventListener('click', changeColor2);

takeCreateDiv2.addEventListener('click', changeColor2);

takeCreateDiv3.addEventListener('click', changeColor2);

function changeColor3(event) {
    event.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
};
                        
for (let index = 0; index < takeDivChild.length; index += 1) {
    takeDivChild[index].addEventListener('click', changeColor3);
};
    
createButton.addEventListener('click', function() {
        for (let index = 0 ; index < takeDivChild.length; index += 1) {
            takeDivChild[index].style.backgroundColor = 'white';
        }
    });
    
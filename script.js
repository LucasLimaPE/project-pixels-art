
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

for (let index = 0; index < createColorPalette.length; index +=1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.borderWidth = '1px';
    createDiv.style.borderStyle = 'solid';
    createDiv.style.borderColor = 'black';
    createDiv.style.backgroundColor = createColorPalette[index];
    createDiv.style.display = 'inline-block';
    createDiv.style.width = '70px';
    createDiv.style.height = '70px';

    createSection.appendChild(createDiv);
   }





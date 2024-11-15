const container = document.getElementById('container');
const containerSize = 960;

const defaultGrid = 256;
const squareSize = 60;
let userGrid; 

for (let i = 0; i < defaultGrid; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.borderRadius = '5px';
    div.style.backgroundColor = 'blue';
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div)
}
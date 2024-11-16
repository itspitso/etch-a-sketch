const container = document.getElementById('container');
const containerSize = 512;

const defaultGrid = 256;
const squareSize = 56;
let userGrid; 

/*for (let i = 0; i < defaultGrid; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.borderRadius = '5px';
    div.style.backgroundColor = 'blue';
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div)
}*/

const gridSize = 16;
const sizeOfSquare = (512 / gridSize) - 2;

// Create column containers that will house the squares
for (let i = 0; i < gridSize; i++) {
    const columnContainer = document.createElement('div');
    columnContainer.style.width = containerSize;
    columnContainer.style.padding = '1px';
    columnContainer.style.display = 'flex';
    columnContainer.style.flexDirection = 'row';
    container.appendChild(columnContainer)

    // Creating the squares in the column container
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.className = 'squares';
        console.log(div.className);
        //div.style.border = '0.5px solid black';
        //div.style.borderRadius = '5px';
        div.style.backgroundColor = '#111111';
        div.style.width = `${sizeOfSquare}px`;
        div.style.height = `${sizeOfSquare}px`;
        div.style.marginLeft = '0.5px';
        div.style.marginRight = '0.5px';
        columnContainer.appendChild(div);
        div.onmouseover = changeColour;
        function changeColour() {
            div.style.backgroundColor = 'yellow';
        }
    }
}
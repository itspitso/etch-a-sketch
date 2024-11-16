const container = document.getElementById('container');
const containerSize = 512;

const defaultGrid = 16;
let gridSize = 16;
let sizeOfSquare = (containerSize / gridSize) - 2;
createGrid(defaultGrid);

// Create column containers that will house the squares
function createGrid(gridSize) {
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
            div.style.backgroundColor = '#f5f5f5';
            div.style.width = `${sizeOfSquare}px`;
            div.style.height = `${sizeOfSquare}px`;
            div.style.marginLeft = '1px';
            div.style.marginRight = '1px';
            columnContainer.appendChild(div);
            div.onmouseover = changeColour;
            function changeColour() {
                div.style.backgroundColor = 'yellow';
            }
            const gridButton = document.getElementById('grid-size');    
            gridButton.onclick = defineGridSize;

            function defineGridSize() {
            gridSize = Number(prompt('Enter the number of squares per side for the new grid. The maximum is 100'));
            if (gridSize > 100) {
                container.replaceChildren();
                container.innerText = "Maximum is 100. Try again";
                container.style.textAlign = 'center';
            } else {
            container.replaceChildren();
            sizeOfSquare = (containerSize / gridSize) - 2;
            createGrid(gridSize);
                }
            }
        }
        
    }
}

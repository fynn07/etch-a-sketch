let isMouseDown = false;
let dimensions = 16;
let color = 'red';
const widthOfPixel = (100 / dimensions);

//This changes isMouseDown var to 1 if mouse is held


//Initial Creation of 16 X 16 Grid
const grid = document.querySelector('.grid-container');
for(row = 0; row < dimensions; row++){
    for(column = 0; column < dimensions; column++){
        const pixelOnGrid = document.createElement('div');
        pixelOnGrid.setAttribute('draggable', false);
        pixelOnGrid.style.cssText= `background-color: rgb(255, 255, 255, .3); flex: 1 0 ${widthOfPixel}%; margin: 0px; padding: 0px;`;
        pixelOnGrid.addEventListener('mouseover', (e) => {
            e.target.style.background = `${color}`;
        })
        grid.appendChild(pixelOnGrid);
    }
}
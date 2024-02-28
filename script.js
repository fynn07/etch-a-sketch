let color = 'red';
let isMouseDown = false;



//This changes isMouseDown var to 1 if mouse is held
document.body.onmousedown = function(){
    isMouseDown = true;
}
document.body.onmouseup = function(){
    isMouseDown = false;
}


//Initial Creation of 16 X 16 Grid
const grid = document.querySelector('.grid-container');
createGrid(16);

//Takes a parameter of dimensions and creates a grid of divs with "dimensions X dimensions"
function createGrid(dimensions){
    let widthOfPixel = (100 / dimensions);
    for(row = 0; row < dimensions; row++){
        for(column = 0; column < dimensions; column++){
            const pixelOnGrid = document.createElement('div');
            pixelOnGrid.setAttribute('draggable', false);
            pixelOnGrid.style.cssText= `background-color: rgb(255, 255, 255, .3); flex: 1 0 ${widthOfPixel}%; margin: 0px; padding: 0px;`;
            pixelOnGrid.addEventListener('mouseover', (e) => {
                if(isMouseDown){
                    e.target.style.background = `${color}`;
                }
            })
            grid.appendChild(pixelOnGrid); 
        }
    }
}


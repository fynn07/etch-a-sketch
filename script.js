//Iinitial Variables
let color = 'black';
let prev_color;
let isMouseDown = false;
let prev_dimension;

//This changes isMouseDown var to 1 if mouse is held
document.body.onmousedown = function(){
    isMouseDown = true;
}
document.body.onmouseup = function(){
    isMouseDown = false;
}

//Initial Creation of 16 X 16 Grid
const grid = document.querySelector('.grid-container');
createGrid(64);

//Takes a parameter of dimensions and creates a grid of divs with "dimensions X dimensions"
function createGrid(dimensions){
    prev_dimension = dimensions;
    let widthOfPixel = (100 / dimensions);
    for(row = 0; row < dimensions; row++){
        for(column = 0; column < dimensions; column++){
            const pixelOnGrid = document.createElement('div');
            pixelOnGrid.setAttribute('draggable', false);
            pixelOnGrid.style.cssText= `background-color: rgb(255, 255, 255, .3); flex: 1 0 ${widthOfPixel}%; margin: 0px; padding: 0px; transition:0.1s;`;
            pixelOnGrid.addEventListener('mouseover', (e) => {
                if(isMouseDown){
                    e.target.style.background = `${color}`;
                }
            })
            grid.appendChild(pixelOnGrid); 
        }
    }
}

//function changes the color variable to the color of choice
button_color = document.querySelector('#apply-color-button');
button_color.addEventListener('click', (e) => {
    changeColorOfGridPixelOnHover();
    e.target.style.cssText = `transition: 0.2s; background-color: ${color}; color: white`;
    eraser_button.style.cssText = "background-color: white; color: black";
});

function changeColorOfGridPixelOnHover(){
    color = document.querySelector('#color-picker').value;
}

//Clicking on color wheel image will focus on hidden color input and opens color pallette
color_wheel = document.querySelector('#color-wheel-image');
color_wheel.addEventListener('click', () => {
    let color_picker = document.querySelector('#color-picker');
    color_picker.focus();
    color_picker.click();
});

//Clears the Grid and creates another Grid with the values of the number text box
let apply_tiles_button = document.querySelector('#apply-tile-dimensions');
apply_tiles_button.addEventListener('click', () => {
    let dimensions_text = document.querySelector('#number-of-tiles').value;
    if(dimensions_text > 100 || !(dimensions_text % 1 === 0)){
        alert("bad");
        return;
    }
    clearGrid();
    createGrid(dimensions_text);
});

//test
//removes every child of Grid, clearing the Grid
function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

//clears the grid while creating another grid of the previous dimensions
let reset_button = document.querySelector('#reset-button');
reset_button.addEventListener('click', () => {
    clearGrid();
    createGrid(prev_dimension);
})

let eraser_button = document.querySelector("#toggle-eraser-button");
eraser_button.addEventListener('click', (e) => {
    if(color == "rgb(255, 255, 255, .3)"){
        color = prev_color;
        e.target.style.cssText = "transition: 0.2s; background-color: white; color: black";
        button_color.style.cssText = `transition 0.2s; background-color: ${color}; color: white`;
        return;
    }
    e.target.style.cssText = "transition: 0.2s; background-color: black; color: white"; 
    button_color.style.cssText = "transition 0.2s; background-color: white; color: black";
    prev_color = color;
    color = "rgb(255, 255, 255, .3)";
})
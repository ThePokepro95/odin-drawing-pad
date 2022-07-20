let gridSize = 16;
let selectedColor = "black";
padCreator(gridSize);





function padCreator(size){
    const drawingPad = document.querySelector('#drawing-pad')
    for(let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            let borderOffset = size * 2;
            square.style.width = ((600 - borderOffset) / size) + "px";
            square.style.height = ((600 - borderOffset) / size) + "px";
            drawingPad.appendChild(square);
        }
    }
    document.querySelectorAll('.square').forEach(function(item) {
        item.addEventListener('mouseover', function(){
            item.classList.add('activated');
        });
    });
}

function clearPad(){
    document.querySelectorAll('.square').forEach(square => {
        square.remove();
    });
}

document.getElementById('grid-generator').addEventListener('click', () => {
    gridSize = document.getElementById('grid-input').value;
    if (gridSize < 1 || gridSize > 100){
        alert("Please enter a value between 1 and 100");
        return;
    }
    clearPad();
    padCreator(gridSize);
});

document.querySelectorAll('.color').forEach(function(item){
    console.log(item.getAttributeNames());
    item.addEventListener('click', function(){
        let currentlySelected = document.querySelector('.selected-color');
        currentlySelected.classList.remove('selected-color');
        item.classList.add('selected-color');
        const selectedColor = document.querySelector(':root');
        selectedColor.style.setProperty('--current-color', item.getAttribute('id'));
    });
});
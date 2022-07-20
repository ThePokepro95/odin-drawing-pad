let gridSize = 16;
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
}

document.querySelectorAll('.square').forEach(function(item) {
    item.addEventListener('mouseover', function(){
        item.classList.add('activated');
    });
});


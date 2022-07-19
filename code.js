function padCreator(){
    const drawingPad = document.querySelector('#drawing-pad')
    for(let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.width = '35px';
            square.style.height = '35px';
            drawingPad.appendChild(square);
        }
    }
}

padCreator();
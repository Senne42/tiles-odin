document.addEventListener("DOMContentLoaded", function(){
    const slider = document.getElementById('gridSize')
    const sliderNumber = document.getElementById('sliderNumber')
    const tiles = document.getElementById('tiles')

    slider.addEventListener('input', function(){
        const selectedValue = slider.value;
        sliderNumber.innerText = `${selectedValue} x ${selectedValue}`
        tiles.style.gridTemplateColumns = (`repeat(${selectedValue}, ${selectedValue}fr)`)
        fillGrid(selectedValue)
    })
    cleanGrid()
    fillGrid(slider.value)

})

function cleanGrid () {
    while (tiles.firstChild) {
        tiles.removeChild(tiles.firstChild)
    }
}

function fillGrid (size) {
    size = size * size
    cleanGrid()
    for (let a=1; a <= size; a++) {       
        const box = document.createElement('div');
        box.setAttribute('class', 'tileTeste')
        tiles.appendChild(box)
    }
}




/*
Criar a caixa
Append na tiles
repetir X vezes
*/


/*
Mexer no slider zera os tiles
botao reset
*/
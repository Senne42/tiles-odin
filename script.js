document.addEventListener("DOMContentLoaded", function(){
    const slider = document.getElementById('gridSize')
    const sliderNumber = document.getElementById('sliderNumber')
    const tiles = document.getElementById('tiles')

    slider.addEventListener('input', function(){
        const selectedValue = slider.value;
        sliderNumber.innerText = `${selectedValue} x ${selectedValue}`
        tiles.style.gridTemplateColumns = (`repeat(${selectedValue}, ${selectedValue}fr)`)

    })
})




function fillGrid (size) {
    let box = ""
    for (let a=0; a <= size; a++) {

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
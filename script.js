document.addEventListener("DOMContentLoaded", function(){
    const slider = document.getElementById('gridSize')
    const sliderNumber = document.getElementById('sliderNumber')
    const tiles = document.getElementById('tiles')
    
    const selectedValue = slider.value;
    fillGrid(selectedValue)
    tiles.style.gridTemplateColumns = (`repeat(${selectedValue}, ${selectedValue}fr)`)

    slider.addEventListener('input', function(){
        const selectedValue = slider.value;
        sliderNumber.innerText = `${selectedValue} x ${selectedValue}`
        tiles.style.gridTemplateColumns = (`repeat(${selectedValue}, ${selectedValue}fr)`)
        fillGrid(selectedValue)
        const tilePaint = Array.from(document.querySelectorAll('.tileTeste'))
        tilePaint.forEach(box => box.addEventListener('mouseover', paintTile))
    })
    
    
})

function paintTile (e) {
    const boxId = e.target.id;
    const box = document.getElementById(boxId)
    paint(box)
    
}


function paint(box){
    let brushColor = document.getElementById('brushColor')
    
    if (box.getAttribute('style')){
        let opctValueArray = box.getAttribute('style').split(" ")
        let opctValue = opctValueArray[opctValueArray.length - 1]
        let value =  parseInt(opctValue.slice(0, -2))
        
        if (value < 100) {
            value = value + 10
            console.log(value)
            box.setAttribute('style', `background-color: ${brushColor.value}; opacity: ${value}%;`)
        }
    }
    else {
        box.setAttribute('style', `background-color: ${brushColor.value}; opacity: 10%;`)
    }
}

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
        box.setAttribute('id', `box${a}`)
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
arrumar tiles iniciais
*/
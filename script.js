var container = document.getElementById("container");
let black = document.querySelector("#black")
let erase = document.querySelector("#erase")
let rainbow = document.querySelector("#rainbow")
let colorPicker = document.querySelector("#colorpicker")
let color = `hsl(0,0%,0%)`;
let gridRange = document.querySelector(".gridrange")


let value = document.querySelector("#value")

black.addEventListener("click", function () {
color = `hsl(0,0%,0%)` ;
})

gridRange.addEventListener("mouseup", function() {
    let gridValue = gridRange.value
    container.innerHTML = "";
    grid(gridValue)
    value.textContent = gridValue + " x " + gridValue;
    
})

erase.addEventListener("mouseover", function () {
    color = "erase";

})
rainbow.addEventListener("mouseover", function () {
    color = "rainbow";

})

colorPicker.addEventListener("input", function () {
   
    color = colorPicker.value;
})






function grid(gridNumber) {
    
    let gridArea = gridNumber * gridNumber;

    for (let i = 0; i < gridArea; i++) {
        let cell = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        cell.innerHTML = "";
        cell.classList.add("cell")
        container.appendChild(cell);
    }
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", colorGen));

}

function colorGen() {
    function randomHsl() {
        return Math.floor(Math.random() * 360);
    }
    let rainbow = `hsl(${randomHsl()}, 100%, 50%)`

    let erase = `#FFFFFF`;

    if (color == "rainbow") {
        this.style.backgroundColor = rainbow;
    } else if (color == "erase") {
        this.style.backgroundColor = erase;
    } else {
        this.style.backgroundColor = color;
    }

}


grid(2)
var container = document.getElementById("container");
let gridNumber = 2; 
let gray = document.querySelector("#gray")
let rainbow = document.querySelector("#rainbow")
let colorPicker = document.querySelector("#colorpicker")
let color = `hsl(0,0%,0%)`;
let gridRange = document.querySelector(".gridrange")


let value = document.querySelector("#value")

gridRange.addEventListener("change", function() {
    let gridValue = gridRange.value;
    value.textContent = gridValue;
    
    gridNumber = gridValue;
    
})

gray.addEventListener("mouseover", function () {
    color = "gray";

})
rainbow.addEventListener("mouseover", function () {
    color = "rainbow";

})

colorPicker.addEventListener("input", function () {
    let selectedColor = colorPicker.value;
    color = selectedColor;
})






function grid() {
    
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

    let gray = `rgba(108, 91, 100, 0.94)`;

    if (color == "rainbow") {
        this.style.backgroundColor = rainbow;
    } else if (color == "gray") {
        this.style.backgroundColor = gray;
    } else {
        this.style.backgroundColor = color;
    }

}


grid()
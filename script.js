var container = document.getElementById("container");
let gridNumber = 8;

let playerselection = "rainbow";

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
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", function (event) {
        // highlight the mouseover target
        this.style.backgroundColor = colorGen()
    }));

}

function colorGen() {
    function randomHsl() {
        return Math.floor(Math.random() * 360);
    }
    let rainbow = `hsl(${randomHsl()}, 100%, 50%)`
    
    let gray = `hsl(294, 4%, 41%)`;

}


grid() = true;


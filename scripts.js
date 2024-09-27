let blockSize;
let gridSize;
const gridContainer = document.getElementById("grid-container");
const newBtn = document.getElementById("new-button");

function buildGrid() {
  gridContainer.innerHTML = "";
  gridSize = prompt("Enter a number from 12-100");

  for (let col = 0; col < gridSize; col++) {
    //loop to create rows of divs
    let row = document.createElement("div");
    row.classList.add("grid-row");
    gridContainer.appendChild(row);

    //loop to create blocks in the row
    for (let i = 0; i < gridSize; i++) {
      //create a grid block
      let block = document.createElement("div");
      block.classList.add("grid-block");
      //change background color of grid item on mouse hover, using arrow function for second parameter 
      block.addEventListener("mouseover", () => {
        block.classList.add("draw-color");
      });
      //Append gridblock to container
      row.appendChild(block);

      //other thoughts:
      //construct a row of blocks
      //Build several rows of blocks (loop rows)
    }
  }
}

function makeGrid() {}

newBtn.addEventListener("click", buildGrid);

let blockSize;
let gridSize = 64;
const gridContainer = document.getElementById("grid-container");

function buildGrid() {

  for (let col = 0; col < gridSize; col++) {

    //loop to create rows of divs
    let row = document.createElement("div");
    row.classList.add("grid-row");
    gridContainer.appendChild(row);

    //loop to create blocks in row
    for (let i = 0; i < gridSize; i++) {
      //create a grid block
      let block = document.createElement("div");
      block.classList.add("grid-block");
      block.addEventListener("mouseover", function() {
        block.classList.add("draw-color")
      }
    )
      //Append gridblock to container 
      row.appendChild(block);

    //other thoughts:
    //construct a row of blocks
    //Build several rows of blocks (loop rows)

    }
  }
}

buildGrid();





//change background color of grid item on mouse hover

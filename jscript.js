
// implementing the popup button

const button = document.getElementById('popup');

// Add an event listener to the button that listens for the click event
button.addEventListener('click', function() {
 
  
  // Display the prompt when the button is clicked
  const userInput = prompt('Please enter the number of squares per side for the new grid:');
  if (userInput < 100 && userInput > 0){
    //changeCSS(number);
    createGridCells(userInput);
  }
  else {
    alert("number failed");
  }
});


function createGridCells(number) {
    const grid = document.querySelector('.grid');
    
    // Clear any existing cells
    grid.innerHTML = '';

    // Set cell size to 50px
    const cellSize = 50; // Fixed size for each cell

    // Calculate grid container dimensions
    let initNumber = cellSize * number;
    const gridSize = initNumber + initNumber*0.05 ; // Set grid dimensions based on number of cells
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;

    // Use nested loops to create cells
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            grid.appendChild(cell);
        }
    }

    hoverOver();
}

function hoverOver() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function(e) { 
            e.target.style.backgroundColor = 'black';
        });
    });
}






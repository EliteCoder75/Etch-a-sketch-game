
// implementing the popup button

const button = document.getElementById('popup');

// Add an event listener to the button that listens for the click event
button.addEventListener('click', function() {
  // Display the prompt when the button is clicked
  const userInput = prompt('Please enter the number of squares per side for the new grid:');
  if (userInput < 100 && userInput > 0){
    createGridCells(userInput);
  }
  else {
    alert("number failed");
  }
});



function createGridCells (number) {
    const grid = document.querySelector('.grid');
    // Use a nested for loop to create the grid cells
    for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    }

    hoverOver();
}    


function hoverOver (){
    // hover over function
    const cell = document.querySelectorAll(".cell")

    cell.forEach(function(myBox) {
    //const color = window.getComputedStyle(myBox).getPropertyValue('background-color'); //grabs the css background color
    myBox.addEventListener('mouseover', (e) => { 
        e.target.style.backgroundColor = 'black';
    });
    });
}


 // modules
const gameBoard = (() => {
        const boardCells = document.querySelectorAll(".cell");
        const boardArray = Array.from(boardCells);
  
        // Dynamically generate index for board cells
        boardArray.forEach( (cell, index) =>{
          cell.dataset.index = index;
        });

        // Allow boardCells to be accessesible outside this function
        const getCells = () => boardCells;
    
        const clearBoard = function(){
          boardArray.forEach(function(item){
            item.textContent = "";
          })

        }

        return {
          getCells,
          clearBoard

        }

  })();

  const displayController = (() => {
    const circleMark = "O";
    const xMark = "X";
    let circleTurn; 

    const applyMark = function(e) {
      const cell = e.target;
      const currentMark = circleTurn ? circleMark : xMark;
      placeMark (cell, currentMark);
      changeTurns();
    }

    const placeMark = function(cell, currentMark) {
      cell.textContent = currentMark;
    }

    const changeTurns = () => {
      circleTurn = !circleTurn;
    }

      // Event listener for board clicks
      gameBoard.getCells().forEach(boardCells =>{
        boardCells.addEventListener('click', applyMark, {once: true});
      })

  //  return {
  //    applyMark,
  //    placeMark
  //  }

  

  })();


// factories
    // const player1


    // const player2

    // const cpu





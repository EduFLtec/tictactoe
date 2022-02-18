 // modules
const gameBoard = (() => {
        const boardCells = document.querySelectorAll(".cell");
        const boardArray = Array.from(boardCells);
  
        // Dynamically generate index for board cells
        boardArray.forEach( (cell, index) =>{
          cell.dataset.index = index;
        });

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
    //add event listeners for clicks
   
    
    gameBoard.getCells().forEach(boardCells =>{
      boardCells.addEventListener('click', (e) => console.log(boardCells.dataset.index));
    })


  })();
 






// factories
    // const player1


    // const player2

    // const cpu





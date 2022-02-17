 // modules
const gameBoard = (() => {
        const boardCells = document.querySelectorAll(".cell");
        const boardArray = Array.from(boardCells);
        
        const getBoard = () => boardArray;
    
        const clearBoard = function(){
          boardArray.forEach(function(item){
            item.textContent = "";
          })

        }

        return {
          getBoard,
          clearBoard

        }

  })();

// const displayController 
  //add event listeners for clicks






// factories
    // const player1


    // const player2

    // const cpu





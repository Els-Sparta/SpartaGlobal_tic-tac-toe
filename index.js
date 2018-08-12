//To keep the script line at the top of the html
$(function(event){
  //assign a variable for what turn it is
  var turn = 0;
  //the minimum possible amount fo turns it takes to win is 5
  var minWinningTurn = 5;
  //all the possible winning conditions
  var playerCross = [];
  var playerNought = [];
  var winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7 ,8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]
  //whenever a div with the class 'square' is clicked the 'this' stores data about it and assigns it a value.
  $(".square").each(function(index){
    $(this).data("square", index);
  })
  //This only allows a div to be clicked once and depending on the turn will denote that div as nought or cross
  $(".square").one("click", function(){
    $(this).data("square");
    //adds 1 to the value of turn each time there is a click
    turn++;
    //gives a variable to the current item clicked
    var currentTurn = $(this);
    //if the varaible had an even number it would be nought and odd would be cross
    if(turn % 2) {
      //this changes the clicked elements class, so background-color
      currentTurn.addClass('cross');
      //this one adds an "x" to the element clicked
      currentTurn.append("X")
      //stores the number of the square clicked to that player
      playerCross += currentTurn.data("square");
      //logs the square numbers of that player
      console.log(playerCross);
    }
    else{
      //changes the background-color of the element clicked
      currentTurn.addClass('nought');
      //adds an "O" to the element clicked
      currentTurn.append("O");
      //stores the squareNumber clicked tot that specific player
      playerNought += currentTurn.data("square");
      //logs the square number of that player
      console.log(playerNought);
    }

    // function playerWins(playerCross){
    //   return winningCondition.some(function(threeInARow){
    //     return threeInARow.every(function (square){
    //       return board[square] === playerCross;
    //
    //     });
    //   });
    //
    //   var xWins = playerWins('X')
    // }

    // function winningCondition(){
    //
    // }
    //
    // if (turn >= minWinningTurn) {
    //   check winningCondition();
    // }
  })
})




// function winningCondition(){
//   var gameWinner = '?';
//   return winner(0,1,2)
//       || winner(3,4,5)
//       || winner(6,7,8)
//       || winner(0,3,6)
//       || winner(1,4,7)
//       || winner(2,5,8)
//       || winner(0,4,8)
//       || winner(6,4,2)
//       || stalemate();
// }
//
// function winner(a1, a2, a3){
//   var s = winnerString;
//
// }

  // $(squares).on("click", function(index, square){
  //   console.log(square);
  // })


  // })

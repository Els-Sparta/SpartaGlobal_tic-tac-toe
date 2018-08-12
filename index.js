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
  $(".square").on("click", function(){
    $(this).data("square");
    if($(this).hasClass("cross") || $(this).hasClass("nought")){
      alert("Really?");
    }
    else{
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
        playerCross.push(currentTurn.data("square"));
        //logs the square numbers of that player
        console.log(playerCross);
      }
      else{
        //changes the background-color of the element clicked
        currentTurn.addClass('nought');
        //adds an "O" to the element clicked
        currentTurn.append("O");
        //stores the squareNumber clicked tot that specific player
        playerNought.push(currentTurn.data("square"));
        //logs the square number of that player
        console.log(playerNought);
      }
      //check if the turn is 5, because that is the minumum required turns taken for someone to win
      if (turn >= 4){
        winningCondition(playerCross, winningConditions);
        if (winningCondition(playerCross, winningConditions)) {
          console.log("playerCross wins");
        }
        winningCondition(playerNought, winningConditions);
        if (winningCondition(playerNought, winningConditions)){
          console.log("playerNought wins");
        }
      }
      //call for stalemate
      checkStalemate();
    }
  })
  //the function to determined the winning condition with a player and a winning condiditon
  function winningCondition(player, threeInARow){
    //loop over all possible winning coniditions
    for (var i = 0; i < threeInARow.length; i++){
      //add a counter/increment for each correct element within array
      var increment = 0;
      //loop over each individual array within the winning condition
      for (var j = 0; j < (threeInARow[i]).length; j++) {
        //if the value of that element is not equal to -1
        //Checking if j(current value of players move) is a subset of i(a winning condition)
        if(threeInARow[i].indexOf(player[j]) !== -1){
          //if it is true, add 1 to increment
          increment++;
        }
      }
      //if the increment value is 3, then a player has one
      if (increment == 3){
        return true;
      }
    }
    //if the increment is not true this includes all wining conditions, return false
    return false;
  }
  //the functiont to check if it is a stalemate
  function checkStalemate(){
    //check if statement is true for both, if its turn 7 and if winndingCondition isn't true
    if (turn > 7 && (!winningCondition(playerCross, winningConditions) && !winningCondition(playerNought, winningConditions))){
      //log nobody wins
      console.log("nobody wins");
    }
  }
})

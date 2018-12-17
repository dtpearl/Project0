const gameboard = {
  player1: [],
  player2: [],
  currentPlayer: 'p1',
  takeTurn: function() {

  },
  checkWin: function() {
    // this.player one or two contains (win conditions)

    /*
    Win conditions
    123
    456
    789
    147
    258
    369
    159
    357

    */
  }

}


const clickSquare = function (num) {
  if (gameboard.currentPlayer === 'p1') {
  gameboard.player1.push(num);
  gameboard.currentPlayer = 'p2';
  gameboard.checkWin();
} else {
  gameboard.player2.push(num);
  gameboard.currentPlayer = 'p1';
  gameboard.checkWin();
}
};

$(document).ready(function(){

$('.squares').on('click', function(){
  const squareClicked = +$(this).attr('id').slice(2);
  console.log(squareClicked);
  // const number = Number(squareClicked.slice(2));
  // clickSquare(number);
  // console.log(number);
});

});

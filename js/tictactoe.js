const gameboard = {
  player1: [],
  player2: [],
  playedNumbers: [],
  currentPlayer: 'pl1',
  takeTurn: function (num) {
    if ( !this.playedNumbers.includes(num) ){
      if ( gameboard.currentPlayer === 'pl1' ) {
      this.player1.push( num );
      this.playedNumbers.push( num );
      this.checkWin( this.player1 );
      this.currentPlayer = 'pl2';
      } else {
      this.player2.push( num );
      this.playedNumbers.push( num );
      this.checkWin( this.player2 );
      this.currentPlayer = 'pl1';
      }
    }
    updateGameboard();
  },
  checkWin: function( playersArray ) {

    const checkAgainst = playersArray.sort().join('');
    console.log( checkAgainst );
    if (
      (/123/.test( checkAgainst )) ||
      (/456/.test( checkAgainst )) ||
      (/789/.test( checkAgainst )) ||
      (/1/.test( checkAgainst ) && /4/.test( checkAgainst ) && /7/.test( checkAgainst )) ||
      (/2/.test( checkAgainst ) && /5/.test( checkAgainst ) && /8/.test( checkAgainst )) ||
      (/3/.test( checkAgainst ) && /6/.test( checkAgainst ) && /9/.test( checkAgainst )) ||
      (/1/.test( checkAgainst ) && /5/.test( checkAgainst ) && /9/.test( checkAgainst )) ||
      (/3/.test( checkAgainst ) && /5/.test( checkAgainst ) && /7/.test( checkAgainst ))

    ) {
      console.log(`${ this.currentPlayer } is the winner`);
      declareWinner( this.currentPlayer );
    } else if ( this.playedNumbers.length === 9 ) {
      declareDraw();
    }
  }

}

const updateGameboard = function () {
  $( '.squares' ).html( '' );
  for ( let i = 0; i < gameboard.player1.length; i++ ) {
    $( `#sq${gameboard.player1[i]}` ).html( 'X' );
  }
  for ( let j = 0; j < gameboard.player2.length; j++ ) {
    $( `#sq${gameboard.player2[j]}` ).html( 'O' );
  }
  $('.player-box').removeClass('highlight');
  if (gameboard.currentPlayer === 'pl1'){
    $('#pb1').addClass('highlight');
  } else {
    $('#pb2').addClass('highlight');
  }
};

const declareWinner = function ( player ) {
  $( '#gameover' ).css("background-image", "");
  $( '#gameover' ).show( 600 );
  const winner = $(`#${ player }`).text();
  if (winner === 'Bill Murray') {
    $( '#gameover' ).css("background-image", "url(https://fillmurray.com/600/600)");
  }
  if (winner === 'Nicolas Cage') {
    $( '#gameover' ).css("background-image", "url(http://www.placecage.com/610/610)");
  }
  console.log( winner );
  $( '#winner' ).html( `The winner is ${ winner }!` );
}

const declareDraw = function () {
  $( '#gameover' ).show( 600 );
  $( '#winner' ).html( `It's a draw!` );
}

const resetGame = function () {
  $( '.squares' ).removeClass( 'reset' );
  gameboard.player1 = [];
  gameboard.player2 = [];
  gameboard.playedNumbers = [];
  updateGameboard();
  $( '#gameover' ).hide( 600 );
  $( '.squares' ).addClass( 'reset' );
};

$(document).ready( function(){

$( '.squares' ).on( 'click', function() {
  const squareClicked = +$( this ).attr( 'id' ).slice(2);
  console.log( squareClicked );
  gameboard.takeTurn( squareClicked );
});

$( '#reset-game' ).on( 'click', function () {
  resetGame();
});

$( '#player1' ).on( 'keyup', function () {
  $( '#pl1' ).text( $( '#player1' ).val() );
})

$( '#player2' ).on( 'keyup', function () {
  $( '#pl2' ).text( $( '#player2' ).val() );
})
});



/*  //(win conditions)


  Win conditions
  123
  456
  789
  147
  258
  369
  159
  357

  gameboard.player1.sort().join('')
  .includes('123')
  .includes('456')
  .includes('789')
  .includes('1' && '4' && '7')
  .includes('2' && '5' && '8')
  .includes('3' && '6' && '9')
  .includes('1' && '5' && '9')
  .includes('3' && '5' && '7')

  regex1 = /123/
  regex2 = /456/
  regex3 = /789/
  regex4 = /1.4.7/
  regex5 = /2.5.8/
  regex6 = /3.6.9/
  regex7 = /1.5.9/
  regex8 = /3.5.7/

  checkAgainst.includes('1' && '2' && '3') ||
  checkAgainst.includes('4' && '5' && '6') ||
  checkAgainst.includes('7' && '8' && '9') ||
  checkAgainst.includes('1' && '4' && '7') ||
  checkAgainst.includes('2' && '5' && '8') ||
  checkAgainst.includes('3' && '6' && '9') ||
  checkAgainst.includes('1' && '5' && '9') ||
  checkAgainst.includes('3' && '5' && '7')



(/123/.test(checkAgainst)) ||
(/456/.test(checkAgainst)) ||
(/789/.test(checkAgainst)) ||
(/1/.test(checkAgainst) && /4/.test(checkAgainst) && /7/.test(checkAgainst)) ||
(/2/.test(checkAgainst) && /5/.test(checkAgainst) && /8/.test(checkAgainst)) ||
(/3/.test(checkAgainst) && /6/.test(checkAgainst) && /9/.test(checkAgainst)) ||
(/1/.test(checkAgainst) && /5/.test(checkAgainst) && /9/.test(checkAgainst)) ||
(/3/.test(checkAgainst) && /5/.test(checkAgainst) && /7/.test(checkAgainst))
  */

// -------------------- DOM Manipulation -------------------

// Updates the gameboard for each move made.
const updateGameboard = function () {
  $(".squares").html("");
  for (let i = 0; i < gameboard.player1.length; i++) {
    $(`#sq${gameboard.player1[i]}`).html("X");
  }
  for (let j = 0; j < gameboard.player2.length; j++) {
    $(`#sq${gameboard.player2[j]}`).html("O");
  }
  $(".player-box").removeClass("highlight");

  if (gameboard.currentPlayer === "pl1") {
    $("#pb1").addClass("highlight");
  } else {
    $("#pb2").addClass("highlight");
  }
};

// Declares the winner and updates DOM with the winning player's name.
const declareWinner = function (player) {
  $("#gameover").css("background-image", "");
  $("#gameover").show(600);
  const winner = $(`#${player}`).text();

  if (winner === "Bill Murray") {
    $("#gameover").css(
      "background-image",
      "url(https://fillmurray.lucidinternets.com/600/600)"
    );
  }
  if (winner === "Nicolas Cage") {
    $("#gameover").css(
      "background-image",
      "url(http://placecage.lucidinternets.com/610/610)"
    );
  }
  $("#winner").html(`The winner is ${winner}!`);
};

const declareDraw = function () {
  $("#gameover").show(600);
  $("#winner").html(`It's a draw!`);
};

// Resets the game by setting the player and playedNumbers arrays back to empty arrays.
// Preserves player turn.
const resetGame = function () {
  $(".squares").removeClass("reset");
  gameboard.player1 = [];
  gameboard.player2 = [];
  gameboard.playedNumbers = [];
  updateGameboard();
  $("#gameover").hide(600);
  $(".squares").addClass("reset");
};

$(document).ready(function () {
  $(".squares").on("click", function () {
    const squareClicked = +$(this).attr("id").slice(2);
    gameboard.takeTurn(squareClicked);
  });

  $("#reset-game").on("click", function () {
    resetGame();
  });

  $("#player1").on("keyup", function () {
    $("#pl1").text($("#player1").val());
    if ($("#player1").val() === "") {
      $("#pl1").text("Player 1");
    }
  });

  $("#player2").on("keyup", function () {
    $("#pl2").text($("#player2").val());
    if ($("#player2").val() === "") {
      $("#pl2").text("Player 2");
    }
  });
}); // End of $(document).ready

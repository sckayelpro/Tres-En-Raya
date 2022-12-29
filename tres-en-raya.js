const imgContainer = document.querySelectorAll(".img-container");
const squares = document.querySelectorAll("img");

const scorePlayer1 = document.querySelector("#score-player-1");
const scorePlayer2 = document.querySelector("#score-player-2");

const rutasImagenes = ["a", "b", "c","d","e","f","g","h","i"];

const reset = document.querySelector("#reset-button");

var turn = 0;
var filledSquares = 0;

var score1 = 0;
var score2 = 0;

function showPick() {
  filledSquares++;
  // Si la casilla ya ha sido seleccionada, terminar la función sin hacer nada.
  if (this.querySelector("img").src =="https://www.pngmart.com/files/14/X-Letter-PNG-HD.png" || this.querySelector("img").src =="https://static.vecteezy.com/system/resources/previews/001/191/843/non_2x/circle-png.png") {
    return;
  }
  if (turn % 2 == 0) {
    this.querySelector("img").style.display = "block";
    this.querySelector("img").src =
      "https://www.pngmart.com/files/14/X-Letter-PNG-HD.png";
    turn++;
    // Primer caso: verificamos si las tres primeras casillas están llenas con el mismo icono.
    if (squares[0].src == squares[1].src && squares[0].src == squares[2].src) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Segundo caso: verificamos si las tres casillas siguientes están llenas con el mismo icono.
    else if (
      squares[3].src == squares[4].src &&
      squares[3].src == squares[5].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Tercer caso: verificamos si las tres últimas casillas están llenas con el mismo icono.
    else if (
      squares[6].src == squares[7].src &&
      squares[6].src == squares[8].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Cuarto caso: verificamos si la primera, cuarta y séptima casillas están llenas con el mismo icono.
    else if (
      squares[0].src == squares[3].src &&
      squares[0].src == squares[6].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Quinto caso: verificamos si la segunda, quinta y octava casilla están llenas con el mismo icono
    else if (
      squares[1].src == squares[4].src &&
      squares[1].src == squares[7].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Sexto caso: verificamos si la tercera, sexta y novena casilla están llenas con el mismo icono
    else if (
      squares[2].src == squares[5].src &&
      squares[2].src == squares[8].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Septimo caso: verificamos si la primera, quinta y novena casilla están llenas con el mismo icono
    else if (
      squares[0].src == squares[4].src &&
      squares[0].src == squares[8].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Octavo caso: verificamos si la tercera, quinta y septima casilla están llenas con el mismo icono
    else if (
      squares[2].src == squares[4].src &&
      squares[2].src == squares[6].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 1`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 1;
      filledSquares = 0;
      score1++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    if (filledSquares == 9) {
      // Ningún jugador ha ganado y todas las casillas están ocupadas, lo que significa que hay un empate.
      setTimeout(() => alert(`EMPATE`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      filledSquares = 0;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    } 
  }  
  else {
    this.querySelector("img").style.display = "block";
    this.querySelector("img").src =
      "https://static.vecteezy.com/system/resources/previews/001/191/843/non_2x/circle-png.png";
    turn++;
    // Primer caso: verificamos si las tres primeras casillas están llenas con el mismo icono.
    if (squares[0].src == squares[1].src && squares[0].src == squares[2].src) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Segundo caso: verificamos si las tres casillas siguientes están llenas con el mismo icono.
    else if (
      squares[3].src == squares[4].src &&
      squares[3].src == squares[5].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Tercer caso: verificamos si las tres últimas casillas están llenas con el mismo icono.
    else if (
      squares[6].src == squares[7].src &&
      squares[6].src == squares[8].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Cuarto caso: verificamos si la primera, cuarta y séptima casillas están llenas con el mismo icono.
    else if (
      squares[0].src == squares[3].src &&
      squares[0].src == squares[6].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Quinto caso: verificamos si la segunda, quinta y octava casilla están llenas con el mismo icono
    else if (
      squares[1].src == squares[4].src &&
      squares[1].src == squares[7].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Sexto caso: verificamos si la tercera, sexta y novena casilla están llenas con el mismo icono
    else if (
      squares[2].src == squares[5].src &&
      squares[2].src == squares[8].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Septimo caso: verificamos si la primera, quinta y novena casilla están llenas con el mismo icono
    else if (
      squares[0].src == squares[4].src &&
      squares[0].src == squares[8].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    // Octavo caso: verificamos si la tercera, quinta y septima casilla están llenas con el mismo icono
    else if (
      squares[2].src == squares[4].src &&
      squares[2].src == squares[6].src
    ) {
      setTimeout(() => alert(`GANA EL JUGADOR 2`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      turn = 0;
      filledSquares = 0;
      score2++;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
    if (filledSquares == 9) {
      // Ningún jugador ha ganado y todas las casillas están ocupadas, lo que significa que hay un empate.
      setTimeout(() => alert(`EMPATE`), 100);
      setTimeout(() => cambiarSrcImagenes(), 1000);
      filledSquares = 0;
      scorePlayer1.textContent=score1;
      scorePlayer2.textContent=score2;
    }
  }
}
imgContainer.forEach(function (container) {
  container.addEventListener("click", showPick);
});

function cambiarSrcImagenes(nuevoSrc) {
  let imagenes = document.querySelectorAll("img");

imagenes.forEach((imagen, indice) => {
  imagen.src = rutasImagenes[indice];
});
}
reset.addEventListener("click", function (){
  window.location.reload()
})
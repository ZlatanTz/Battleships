import Player from "./Player.js";
import { Battleship, Carrier, Cruiser, Destroyer } from "./Ship.js";

const player1 = new Player()
const player2 = new Player();


const destroyer = new Destroyer();
const cruiser = new Cruiser();
const battleship = new Battleship();
const carrier = new Carrier();

player1.playerBoard.placeShip(0, 0, 'x', destroyer);
player1.playerBoard.placeShip(1, 0, 'x', cruiser);
player1.playerBoard.placeShip(3, 2, 'x', battleship);
player1.playerBoard.placeShip(4, 4, 'x', carrier);

player2.playerBoard.placeShip(0, 0, 'x', destroyer);
player2.playerBoard.placeShip(1, 0, 'x', cruiser);
player2.playerBoard.placeShip(3, 2, 'x', battleship);
player2.playerBoard.placeShip(5, 4, 'x', carrier)



const boardPlayer1 = document.querySelector('.board-player1');
const boardPlayer2 = document.querySelector('.board-player2');


player1.playerBoard.board.forEach(row => {
    row.forEach(cell =>{
        boardPlayer1.innerHTML += updateCell(cell);
    })
})

player2.playerBoard.board.forEach(row => {
    row.forEach(cell =>{
        boardPlayer2.innerHTML += updateCell(cell);
    })
})



function updateCell(cell) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    
   


    return cellElement.outerHTML;
}







export default class Gameboard{
    constructor(){
        this.size = 10;
        this.board = Array.from({ length: this.size }, () => Array(this.size).fill(null));

    }

    placeShip(x, y, orientation, shipType){
        if (orientation === 'x' && y + shipType.length > this.size) {
            throw new Error('Ship does not fit horizontally on the board');
        }
        if (orientation === 'y' && x + shipType.length > this.size) {
            throw new Error('Ship does not fit vertically on the board');
        }


        if (orientation === 'x') {
            for (let i = 0; i < shipType.length; i++) {
                if (this.board[x][y + i] !== null) {
                    throw new Error('Position already occupied');
                }
            }
        } else if (orientation === 'y') {
            for (let i = 0; i < shipType.length; i++) {
                if (this.board[x + i][y] !== null) {
                    throw new Error('Position already occupied');
                }
            }
        } else {
            throw new Error('Invalid orientation');
        }



        if (orientation === 'x') {
            for (let i = 0; i < shipType.length; i++) {
                this.board[x][y + i] = shipType;
            }
        } else if (orientation === 'y') {
            for (let i = 0; i < shipType.length; i++) {
                this.board[x + i][y] = shipType;
            }
        }
    }
    recieveAttack(x, y) {
        if (x >= this.size || y >= this.size || x < 0 || y < 0) {
            throw new Error('Coords outside board');
        }
    
        if (this.board[x][y] === null) {
            this.board[x][y] = 'miss';
            return { x, y, result: 'miss' };
        }
    
        let aimedShip = this.board[x][y];

        aimedShip.hit();

        this.board[x][y] = { ship: aimedShip, hit: true };
    
        return { x, y, result: 'hit', ship: aimedShip };
    }

    everyShipSunk() {
        for (let row of this.board) {
            for (let cell of row) {
                if (cell && typeof cell.isSunk === "function" && !cell.isSunk()) {
                    return false;   
                }
            }
        }
        return true;
    }   
    

    printBoard() {
        console.log(
            this.board.map(row =>
                row.map(cell => {
                    if (cell?.result === 'miss') return 'o'; // Missed shot
                    if (cell && typeof cell === 'object') {
                        return cell?.hit === true ? 'x' : cell?.name?.charAt(0); 
                    }
                    return '.'; // Empty space
                }).join(' ')
            ).join('\n')
        );
    }
    

}


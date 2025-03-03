import Gameboard from '../scripts/Gameboard.js'
import Ship, { Battleship, Carrier, Cruiser, Destroyer} from '../scripts/Ship.js'


describe('Gameboard class', () => {
    let gameboard;

     beforeEach(() => {
        gameboard = new Gameboard();
    })

    test('should throw error if ship doesn\'t fit horizontally', () => {
        const carrier = new Carrier()
        expect(() => gameboard.placeShip(0, 8, 'x', carrier)).toThrow('Ship does not fit horizontally on the board');
    });

    test('should throw error if ship doesn\'t fit vertically', () => {
        const carrier = new Carrier()
        expect(() => gameboard.placeShip(8, 0, 'y', carrier)).toThrow('Ship does not fit vertically on the board');
    });

    test('should throw error if occupied horizontally', () =>{
        const carrier = new Carrier()
        const destroyer = new Destroyer
        gameboard.placeShip(5, 3, 'y', carrier)
        expect(() => gameboard.placeShip(5, 3, 'x', destroyer)).toThrow('Position already occupied')
    })

    test('invalid orientation', () => {
        const carrier = new Carrier();

        expect(() => gameboard.placeShip(5, 3, 'a', carrier)).toThrow('Invalid orientation')
    })

    test('place ship places horizontally', () =>{
        const carrier = new Carrier();
        let x = 0;
        let y = 0;
        let orientation = 'x'
        gameboard.placeShip(x, y, orientation, carrier)

       for (let i = 0; i < carrier.length; i++) {
           expect(gameboard.board[x][y + i]).toBe(carrier) 
    }
        
    })

    test('hit logic', () => {
        let carrier = new Carrier();
        gameboard.placeShip(1, 1, 'y', carrier)
        gameboard.recieveAttack(1, 1)
        expect(gameboard.board[1][1].hit).toBe(true)
        gameboard.recieveAttack(2, 2)
        expect(gameboard.board[2][2]).toBe('miss')

        gameboard.recieveAttack(2, 1)
        gameboard.recieveAttack(3, 1)
        gameboard.recieveAttack(4, 1)
        gameboard.recieveAttack(5, 1)

        gameboard.printBoard()

        expect(carrier.isSunk()).toBe(true)


    })
    test('all ships sunk', () => {
        let carrier = new Carrier()
        let battleship = new Battleship()
        
        gameboard.placeShip(1, 1, 'y', carrier)
        gameboard.recieveAttack(1, 1)
        gameboard.recieveAttack(2, 1)
        gameboard.recieveAttack(3, 1)
        gameboard.recieveAttack(4, 1)
        gameboard.recieveAttack(5, 1)

        gameboard.placeShip(3, 3, 'y', battleship)
        gameboard.recieveAttack(3, 3)
        gameboard.recieveAttack(4, 3)
        gameboard.recieveAttack(5, 3)
        gameboard.recieveAttack(6, 3)
        expect(gameboard.everyShipSunk()).toBe(true)


    })

})


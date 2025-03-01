export default class Ship {
    constructor(length, name) {
        if(length < 1){
            throw new Error('Invalid Length')
        }
        this.name = name || 'Unnamed Ship'
        this.length = length
        this.timesHit = 0;
        this.sunk = false;
    }

    hit() {
        if (this.timesHit < this.length) {
            this.timesHit++;
        }
    }

    isSunk() {
        if (this.timesHit >= this.length) {
            this.sunk = true;
        }
        return this.sunk;
    }
}

class Destroyer extends Ship {
    constructor() {
        super(3, 'Destroyer');
    }
}

class Cruiser extends Ship {
    constructor() {
        super(3, 'Cruiser');
    }
}

class Battleship extends Ship {
    constructor() {
        super(4, 'Battleship');
    }
}

class Carrier extends Ship {
    constructor() {
        super(5, 'Carrier');
    }
}

export { Destroyer, Cruiser, Battleship, Carrier };


class Plane {
    constructor(capacity = 4, stormLevel = 5) {
        this.airport = [] //seperate into another class
        this._capacity = capacity
        this.stormLevel = stormLevel
    }
    land(plane) {
        if (this.stormLevel >= 10) {
            return 'Storm levels too high, too dangeous to land'
        }
        if (this.airport.includes(plane)) {
            return `${plane} has already landed`
        }
        if (this.airport.length === this._capacity) {
            return `Sorry airport is full.`
        } else {
            this.airport.push(plane)
            return this.airport
        }
    }
    takeOff(plane) {
        if (this.stormLevel >= 10) {
            return 'Storm levels too high, too dangeous to fly'
        }
        if (!this.airport.includes(plane)) {
            return `${plane} is already flying`
        } else {
            let index = this.airport.indexOf(plane);
            if (index !== -1) {
                this.airport.splice(index, 1);
                return `${plane} has taken off successfully.`
            }
        }
    }
    changeCap(newCapacity) {
        this._capacity = newCapacity
        return `This airport can now hold ${newCapacity}`

    }

    isFull() {
        return this.airport.length >= this._capacity
    }
    isStormyFlying() {
        if (this.stormLevel <= 2) {
            return 'Storm levels too high, too dangeous to fly'
        } else {
            return 'Safe to take off'
        }

    }
    isStormyLanding() {
        if (this.stormLevel <= 2) {
            return 'Storm levels too high, too dangeous to land'
        } else {
            return 'Safe to land'
        }
    }

    countPlanes() {
        return this.airport.length
    }
}





module.exports = Plane;
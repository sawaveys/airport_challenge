const Plane = require('../src/plane.js')

describe("landing", function() {
    it("Plane lands in airport", function() {
        let plane = new Plane

        expect(plane.land('plane 1')).toEqual(['plane 1'])
    })
    it("Plane doesn't lane if airport is full", function() {
        let plane = new Plane

        plane.land('plane 1')
        plane.land('plane 2')
        plane.land('plane 3')
        plane.land('plane 4')

        expect(plane.land('plane 5')).toEqual(`Sorry airport is full.`)
    })
})

describe("take off", function() {
    it("Plane successfully takes off", function() {
        let plane = new Plane

        plane.land('Plane 1')

        expect(plane.takeOff('Plane 1')).toEqual('Plane 1 has taken off successfully.')
    })
    it("Cant take off if the plane is already flying", function() {
        let plane = new Plane

        expect(plane.takeOff('Plane 1')).toEqual('Plane 1 is already flying')
    })
})

describe("Changing the Capacity", function() {
    it("Airport can actually hold the new capacity", function() {
        let plane = new Plane(10)

        plane.land('plane')
        plane.land('plane 1')
        plane.land('plane 2')
        plane.land('plane 3')
        plane.land('plane 4')
        plane.land('plane 5')
        plane.land('plane 6')

        expect(plane.land('plane 7')).toEqual(['plane', 'plane 1', 'plane 2', 'plane 3', 'plane 4', 'plane 5', 'plane 6', 'plane 7'])
    })
})
describe("Can check if the aiport capacity is full", function() {
    it("true when the capacity is full", function() {
        let plane = new Plane

        plane.land('plane 1')
        plane.land('plane 2')
        plane.land('plane 3')
        plane.land('plane 4')
        plane.land('plane 5')
        plane.land('plane 6')
        plane.land('plane 7')
        plane.land('plane 8')
        plane.land('plane 9')
        plane.land('plane 10')

        expect(plane.isFull()).toEqual(true)
    })

    it("false when the capacity is not full", function() {
        let plane = new Plane

        expect(plane.isFull()).toEqual(false)
    })
})

describe('plane wont land if storm levels are high', function() {
    it('plane wont take land if its stormy', function() {
        let plane = new Plane(4, 10)
        expect(plane.land('plane 1')).toEqual('Storm levels too high, too dangeous to land')
    })
    it('plane will land when its not stormy', function() {
        let plane = new Plane()

        expect(plane.land('plane 1')).toEqual(['plane 1'])
    })
})

describe('plane wont fly if storm levels are high', function() {
    it('plane wont fly if its stormy', function() {
        let plane = new Plane(4, 10)
        expect(plane.takeOff('plane 1')).toEqual('Storm levels too high, too dangeous to fly')
    })
    it('plane will land when its not stormy', function() {
        let plane = new Plane()
        plane.land('plane 1')

        expect(plane.takeOff('plane 1')).toEqual('plane 1 has taken off successfully.')
    })
})

describe('counting planes', function() {
    it('Air traffic controller can count planes landed in airport', function() {
        let plane = new Plane

        plane.land('plane 1')
        plane.land('plane 2')
        plane.land('plane 3')
        plane.land('plane 4')

        expect(plane.countPlanes()).toEqual(4)
    })
})
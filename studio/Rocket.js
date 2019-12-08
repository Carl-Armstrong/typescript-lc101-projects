"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // returns the sum of all items using each's massKg property
        var runningSum = 0;
        for (var i = 0; i < items.length; i++) {
            runningSum += items[i].massKg;
        }
        return runningSum;
    };
    Rocket.prototype.currentMassKg = function () {
        // uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        // returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        //uses this.canAdd() to see if another item can be added
        //if true, adds cargo to this.cargoItems and returs true
        //if false, returns false
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // this.canAdd() to see if another astronaut can be added
        // if true, adds astronaut to this.astronauts and returns true
        // if false, returns false
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;

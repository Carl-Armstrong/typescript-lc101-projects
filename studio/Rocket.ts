import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        // returns the sum of all items using each's massKg property
        let runningSum: number = 0;
        for (let i = 0; i < items.length; i++) {
            runningSum += items[i].massKg;
        }
        
        return runningSum;
    }

    currentMassKg(): number {
        // uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        // returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }

    addCargo(cargo: Cargo) {
        //uses this.canAdd() to see if another item can be added
        //if true, adds cargo to this.cargoItems and returs true
        //if false, returns false
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut) {
        // this.canAdd() to see if another astronaut can be added
        // if true, adds astronaut to this.astronauts and returns true
        // if false, returns false
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
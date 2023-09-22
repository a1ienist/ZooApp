class SleepAndWalk {
    constructor() {
        this.animals = [];
    }
    addAnimalToSleepAndWalkGroup(animal) {
        this.animals.push(animal);
    }
    sleep() {
        for (const animal of this.animals) {
            console.log | ('${animal.getName()} is sleeping');
        }
    }
    ;
    walk() {
        for (const animal of this.animals) {
            console.log | ('${animal.getName()} is walking');
        }
    }
    ;
}
export { SleepAndWalk };

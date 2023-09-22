class SwimAndHunt {
    constructor() {
        this.animals = [];
    }
    addAnimalToSwimAndHuntGroup(animal) {
        this.animals.push(animal);
    }
    swim() {
        for (const animal of this.animals) {
            console.log('${animal.getName()} is swimming ');
        }
    }
    ;
    hunt() {
        for (const animal of this.animals) {
            console.log('${animal.getName()} is hunting ');
        }
    }
    ;
}
export { SwimAndHunt };

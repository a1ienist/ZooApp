class JumpAndRun {
    constructor() {
        this.animals = [];
    }
    addAnimalToJumpAndRunGroup(animal) {
        this.animals.push(animal);
    }
    jump() {
        for (const animal of this.animals) {
            console.log(`${animal.getName()} is jumping`);
        }
    }
    ;
    run() {
        for (const animal of this.animals) {
            console.log(`${animal.getName()} is running`);
        }
    }
    ;
}
export { JumpAndRun };

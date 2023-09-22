import { Animal } from '../animal';
class Elephant extends Animal {
    constructor(name, age, weight) {
        super(name, age);
        this.weight = weight;
    }
}
export { Elephant };

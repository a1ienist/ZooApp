import { Animal } from '../animal';
class Zebra extends Animal {
    constructor(name, age, maxSpeed, origin) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
}
export { Zebra };

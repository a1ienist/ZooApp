import { Animal } from '../animal';
class Tiger extends Animal {
    constructor(name, age, wasOutsideLast8Hours) {
        super(name, age);
        this.wasOutsideLast8Hours = wasOutsideLast8Hours;
    }
}
export { Tiger };

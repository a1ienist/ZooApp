import { Animal } from '../animal';

class Elephant  extends Animal{
    private weight: number;

    constructor(name: string, age: number, weight: number){
        super(name, age)
        this.weight = weight;
    }
    
}


export { Elephant };
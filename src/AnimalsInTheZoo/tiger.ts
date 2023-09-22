import { Animal } from '../animal';

class Tiger extends  Animal {
   private wasOutsideLast8Hours: boolean;

    constructor(name: string, age: number, wasOutsideLast8Hours: boolean ){
        super(name, age)
        this.wasOutsideLast8Hours = wasOutsideLast8Hours;
    }
    
  
}


export { Tiger };
import { Animal } from '../animal';

class JumpAndRun {
  private animals: Animal [] = [];

  addAnimalToJumpAndRunGroup (animal:Animal){
    this.animals.push(animal);
  }
jump(): void{
    for ( const animal of this.animals){
        console.log(`${animal.getName()} is jumping`)
    }
};

run(): void{
    for ( const animal of this.animals){
        console.log (`${animal.getName()} is running`)
    }
};
}


export { JumpAndRun };
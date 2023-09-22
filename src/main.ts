import { Zebra } from './AnimalsInTheZoo/zebra';
import { Tiger } from './AnimalsInTheZoo/tiger';
import { Elephant } from './AnimalsInTheZoo/elephant';
import { Zookeeper } from './zookeeper';

const zookeeper = new Zookeeper();
const elephant = new Elephant('Dumbo', 5, 200);
const tiger = new Tiger('Shere Khan', 7, true);
const zebra = new Zebra('bimbo', 6, 20, 'dadasdas');

zookeeper.feedAnimalTime(elephant);
zookeeper.feedAnimalTime(tiger);
zookeeper.feedAnimalTime(zebra);


import { Character } from './index';

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public kingdomAges: number
  ) {
    super(name, family, age);
    this.kingdomAges = kingdomAges;
  }

  greetings() {
    super.greetings();
    return 'You are going to die';
  }
}

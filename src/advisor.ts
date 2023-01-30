import { Character } from './index';

export class Advisor extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public advisedPerson: string
  ) {
    super(name, family, age);
    this.advisedPerson = advisedPerson;
  }

  greetings() {
    super.greetings();
    return 'I do not know why, but I think that I am going to die earlier';
  }
}

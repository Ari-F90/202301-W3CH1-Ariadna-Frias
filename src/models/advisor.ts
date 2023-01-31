/* eslint-disable no-unused-vars */
import { Character } from './character';
import { King } from './king';
import { Fighter } from './fighter';
import { Squire } from './squire';

export class Advisor extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public advisedPerson: string
  ) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return 'I do not know why, but I think that I am going to die earlier';
  }
}

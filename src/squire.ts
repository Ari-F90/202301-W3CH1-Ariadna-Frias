import { Character } from './character';

export class Squire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public servePersonTo: string,
    public servility: number
  ) {
    super(name, family, age);
    this.servePersonTo = servePersonTo;
    this.servility = servility;
  }

  greetings() {
    super.greetings();
    return 'I am a loser';
  }
}

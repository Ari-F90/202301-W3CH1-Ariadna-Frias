export class Character {
  private isLive: boolean;
  constructor(public name: string, public family: string, public age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isLive = true;
  }

  greetings() {
    return `Hello, I am ${this.name}`;
  }

  die() {
    this.isLive = false;
  }
}

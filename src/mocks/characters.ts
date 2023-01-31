import { Character } from '../models/character';
import { King } from '../models/king';
import { Fighter } from '../models/fighter';
import { Advisor } from '../models/advisor';
import { Squire } from '../models/squire';

export const characters: Character[] = [
  new King('Joffrey', 'Baratheon', 34, 10),
  new Fighter('Jaime', 'Lannister', 45, 'sword', 5),
  new Fighter('Daenerys', 'Targaryen', 25, 'hammer', 7),
];

characters.push(new Advisor('Tyrion', 'Lannister', 45, characters[2].name));
characters.push(new Squire('Bronn', 'Garcia', 44, characters[1].name, 7));

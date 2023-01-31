import { Advisor } from './advisor';

describe('Given the class Character', () => {
  describe('When we have the subclass Advisor', () => {
    test('If we ask if we have "name" property, it should return true', () => {
      const advisor1 = new Advisor('Tyrion', 'Lannister', 31, 'fighter');
      const expected = 'name';
      expect(advisor1).toHaveProperty(expected);
    });
    test('If we ask if we have "family" property, it should return true', () => {
      const advisor1 = new Advisor('Tyrion', 'Lannister', 31, 'fighter');
      const expected = 'family';
      expect(advisor1).toHaveProperty(expected);
    });
    test('If we ask if we have "age" property, it should return true', () => {
      const advisor1 = new Advisor('Tyrion', 'Lannister', 31, 'fighter');
      const expected = 'age';
      expect(advisor1).toHaveProperty(expected);
    });
    test('If we ask if we have "advisedPerson" property, it should return true', () => {
      const advisor1 = new Advisor('Tyrion', 'Lannister', 31, 'fighter');
      const expected = 'advisedPerson';
      expect(advisor1).toHaveProperty(expected);
    });
  });
});

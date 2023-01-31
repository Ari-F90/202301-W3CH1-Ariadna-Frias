import { Fighter } from './fighter';

describe('Given the class Character', () => {
  describe('When we have the subclass Fighter', () => {
    test('If we ask if we have "name" property, it should return true', () => {
      const fighter1 = new Fighter('Arya', 'Stark', 25, 'sword', 8);
      const expected = 'name';
      expect(fighter1).toHaveProperty(expected);
    });
    test('If we ask if we have "family" property, it should return true', () => {
      const fighter1 = new Fighter('Arya', 'Stark', 25, 'sword', 8);
      const expected = 'family';
      expect(fighter1).toHaveProperty(expected);
    });
    test('If we ask if we have "age" property, it should return true', () => {
      const fighter1 = new Fighter('Arya', 'Stark', 25, 'sword', 8);
      const expected = 'age';
      expect(fighter1).toHaveProperty(expected);
    });
    test('If we ask if we have "weapon" property, it should return true', () => {
      const fighter1 = new Fighter('Arya', 'Stark', 25, 'sword', 8);
      const expected = 'weapon';
      expect(fighter1).toHaveProperty(expected);
    });
    test('If we ask if we have "skill" property, it should return true', () => {
      const fighter1 = new Fighter('Arya', 'Stark', 25, 'sword', 8);
      const expected = 'skill';
      expect(fighter1).toHaveProperty(expected);
    });
  });
});

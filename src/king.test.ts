import { King } from './king';

describe('Given the class Character', () => {
  describe('When we have the subclass King', () => {
    test('If we ask if we have "name" property, it should return true', () => {
      const king1 = new King('John', 'Snow', 35, 0);
      const expected = 'name';
      expect(king1).toHaveProperty(expected);
    });
    test('If we ask if we have "family" property, it should return true', () => {
      const king1 = new King('John', 'Snow', 35, 0);
      const expected = 'family';
      expect(king1).toHaveProperty(expected);
    });
    test('If we ask if we have "age" property, it should return true', () => {
      const king1 = new King('John', 'Snow', 35, 0);
      const expected = 'age';
      expect(king1).toHaveProperty(expected);
    });
    test('If we ask if we have "kingdomAges" property, it should return true', () => {
      const king1 = new King('John', 'Snow', 35, 0);
      const expected = 'kingdomAges';
      expect(king1).toHaveProperty(expected);
    });
  });
});

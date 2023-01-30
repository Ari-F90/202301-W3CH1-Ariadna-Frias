import { Squire } from './squire';

describe('Given the class Character', () => {
  describe('When we have the subclass Squire', () => {
    test('If we ask if we have "name" property, it should return true', () => {
      const squire1 = new Squire('Bronn', 'Stark', 53, 'Jaime', 5);
      const expected = 'name';
      expect(squire1).toHaveProperty(expected);
    });
    test('If we ask if we have "family" property, it should return true', () => {
      const squire1 = new Squire('Bronn', 'Stark', 53, 'Jaime', 5);
      const expected = 'family';
      expect(squire1).toHaveProperty(expected);
    });
    test('If we ask if we have "age" property, it should return true', () => {
      const squire1 = new Squire('Bronn', 'Stark', 53, 'Jaime', 5);
      const expected = 'age';
      expect(squire1).toHaveProperty(expected);
    });
    test('If we ask if we have "servePersonTo" property, it should return true', () => {
      const squire1 = new Squire('Bronn', 'Stark', 53, 'Jaime', 5);
      const expected = 'servePersonTo';
      expect(squire1).toHaveProperty(expected);
    });
    test('If we ask if we have "servility" property, it should return true', () => {
      const squire1 = new Squire('Bronn', 'Stark', 53, 'Jaime', 5);
      const expected = 'servility';
      expect(squire1).toHaveProperty(expected);
    });
  });
});

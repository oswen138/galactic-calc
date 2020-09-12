import PlanetAge from '../src/js/age.js';

describe('age on planet', () => {
  let calcAge = new PlanetAge(15);

  test('should calculate the age in Mercury years', () => {
       expect(calcAge.ageMercury()).toEqual(62.5);
  });

  test("should calculate the age in Venus years", () => {
       expect(calcAge.ageVenus()).toEqual(24);
  });

  test("should calculate the age in Mars years",() => {
       expect(calcAge.ageMars()).toEqual(8);
  });

  test("should calculate the age in Jupiter years",() => {
       expect(calcAge.ageJupiter()).toEqual(1);
  });
});




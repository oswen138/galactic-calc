import PlanetAge from '../src/js/age.js';

describe('age on planet', () => {
  let calcAge;
  beforeEach(() => {
       calcAge = new PlanetAge(100, 15);
  })
  
  test('should calculate the age in Mercury years', () => {
       expect(calcAge.ageMercury()).toEqual(62);
  });

  test("should calculate the age in Venus years", () => {
       expect(calcAge.ageVenus()).toEqual(24);
  });

  test("should calculate the age in Mars years",() => {
       expect(calcAge.ageMars()).toEqual(7);
  });

  test("should calculate the age in Jupiter years",() => {
       expect(calcAge.ageJupiter()).toEqual(1);
  });

test('should determine how many earth years a user has to live on each planet', ()=> {
     calcAge.planetLeft();
     expect(calcAge.mercLeft).toEqual(38);
     expect(calcAge.venusLeft).toEqual(76);
     expect(calcAge.marsLeft).toEqual(93);
     expect(calcAge.jupLeft).toEqual(99);
   });
 });


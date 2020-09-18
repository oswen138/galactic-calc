import PlanetAge from '../src/js/age.js';

describe('age on planet', () => {
  let calcAge;
  beforeEach(() => {
       calcAge = new PlanetAge(15);
  })
  
  test('should calculate the age in Mercury years', () => {
       expect(calcAge.ageMercury()).toEqual("62.5");
  });

  test("should calculate the age in Venus years", () => {
       expect(calcAge.ageVenus()).toEqual("24.2");
  });

  test("should calculate the age in Mars years",() => {
       expect(calcAge.ageMars()).toEqual("8.0");
  });

  test("should calculate the age in Jupiter years",() => {
       expect(calcAge.ageJupiter()).toEqual("1.3");
  });

  test('should determine how many earth years a user has to live on Mercury', ()=> {
     expect(calcAge.mercLifeLeft()).toEqual("354.2")
  });

  test('should determine how many earth years a user has to live Venus', ()=> {
     expect(calcAge.venLifeLeft()).toEqual("137.1")
  });

  test('should determine how many earth years a user has to live Mars', ()=> {
     expect(calcAge.marsLifeLeft()).toEqual("45.2")
  });

  test('should determine how many earth years a user has to live Jupiter', ()=> {
     expect(calcAge.jupLifeLeft()).toEqual("7.2")
  });
 });

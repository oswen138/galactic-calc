import PlanetAge from '../src/js/age.js';

describe('age on planet', function(){

  let calcAge;

  beforeEach(function(){
   calcAge = new PlanetAge(15);
  });

  test('should calculate the age in Mercury years', function(){
       expect(calcAge.ageMercury()).toEqual(100);
  });

  test("should calculate the age in Venus years", function() {
       expect(age.ageVenus()).toEqual(24);
  });

  test("should calculate the age in Mars years", function() {
       expect(age.ageMars()).toEqual(8);
  });

  test("should calculate the age in Jupiter years", function() {
       expect(age.ageJupiter()).toEqual(1);
  });
});



// import {lifeExpectancy} from '../src/js/expectancy.js';

// describe('lifeExpectancy', () => {
//   let lifeExpectancy;
  


//   test("should determine how many years a user has left to live on each planet", function() {
//     let yearsLeft = ((Math.floor((this.age)/.24)/88));    //Age convert to planet age, then divide by planet year, ex-88 days = 1 year      
//     expect(yearsLeft).toEqual(5);
//   });
//   test("should return the number of years they have lived past the life expectancy", function() {
//     let yearsPast = (Math.floor((this.age)/.24)-100);     //300 years old in planet years - 100 (max life expectancy)
//     expect(yearsPast).toEqual(1150);
//   });
// });


import {planetAge} from './../src/js/age.js';

describe('inputAge', () => {
  
  test("should calculate the inputted age in Mercury years", function() {
    let mercuryAge = Math.floor((this.age)/.24);
    expect(mercuryAge).toEqual(83);
  });

  test("should calculate the inputted age in Venus years", function() {
    let venusAge = Math.floor((this.age)/.62);
    expect(venusAge).toEqual(32);
  });

  test("should calculate the inputted age in Mars years", function() {
    let venusAge = Math.floor((this.age)/1.88);
    expect(venusAge).toEqual(11);
  });

  test("should calculate the inputted age in Jupiter years", function() {
    let venusAge = Math.floor((this.age)/11.86);
    expect(venusAge).toEqual(2);
  });
  test("should determine how many years a user has left to live on each planet", function() {
    let yearsLeft = ((Math.floor((this.age)/.24)/88));    //Age convert to planet age, then divide by planet year, ex-88 days = 1 year      
    expect(yearsLeft).toEqual(5);
  });
  test("should return the number of years they have lived past the life expectancy", function() {
    let yearsPast = (Math.floor((this.age)/.24)-100);     //300 years old in planet years - 100 (max life expectancy)
    expect(yearsPast).toEqual(1150);
  });
});

import {lifeExpectancy} from '../src/js/expectancy.js';

describe('yearsCount', () => {

  test("should determine how many years a user has left to live on each planet", function() {
    let yearsLeft = ((Math.floor((this.age)/.24)/88));    //Age convert to planet age, then divide by planet year, ex-88 days = 1 year      
    expect(yearsLeft).toEqual(5);
  });
  test("should return the number of years they have lived past the life expectancy", function() {
    let yearsPast = (Math.floor((this.age)/.24)-100);     //300 years old in planet years - 100 (max life expectancy)
    expect(yearsPast).toEqual(1150);
  });
});


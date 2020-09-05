import {planetAge} from './../src/js/age.js';

describe('planetAge', () => {
  
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
});

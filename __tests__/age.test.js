import {planetAge} from './../src/js/age.js';

describe('inputAge', () => {
  
  test("should calculate the inputted age in Mercury years", function() {
    let mercuryAge = Math.floor((this.age)/.24);
    expect(mercuryAge).toEqual(32);
  });

  test("should calculate the inputted age in Venus years", function() {
    let venusAge = Math.floor((this.age)/.62);
    expect(venusAge).toEqual(32);
  });

  test("should calculate the inputted age in Mars years", function() {
    let venusAge = Math.floor((this.age)/1.88);
    expect(venusAge).toEqual(32);
  });

  test("should calculate the inputted age in Jupiter years", function() {
    let venusAge = Math.floor((this.age)/11.86);
    expect(venusAge).toEqual(32);
  });
  test("should determine how many years a user has left to live on each planet", function() {
    let venusAge = Math.floor((this.age)/11.86);
    expect(venusAge).toEqual(32);
  });
  test("should return the number of years they have lived past the life expectancy", function() {
    let venusAge = Math.floor((this.age)/11.86);
    expect(venusAge).toEqual(32);
  });


});
//   test('should calcuate the age inputted in mercury years, function() => {
//     let mercuryAge = math.floor(this.age/.24);
//     expect(mercuryAge).toEqual();
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });

//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isocTriangle = new Triangle(5,5,7)
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });

//   test('should correctly determine whether three lengths make an scalene triangle', () => {
//     const scalTriangle = new Triangle(2,3,4)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });

//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });

// });


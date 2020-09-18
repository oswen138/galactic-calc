
export default class PlanetAge {

  constructor(earthAge)  {
    this.lifeExpectancy = 100;
    this.earthAge = earthAge;
  }
//notes from code review > refactor, use .toFixed(), leave conversion in methods, update a property, update tests
//Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
  ageMercury() {
    return (this.earthAge / 0.24).toFixed(1);    
  }
  // Returns their age in Venus years. (A Venus year is .62 Earth years.)
  ageVenus() {
    return (this.earthAge / 0.62).toFixed(1);
  }
  // Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
  ageMars() {
    return (this.earthAge / 1.88).toFixed(1);
  }
  // Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  ageJupiter() {
    return (this.earthAge / 11.86).toFixed(1);
  }

  // Determines how many years a user has left to live on each planet

  mercLifeLeft(){
    return ((this.lifeExpectancy - this.earthAge) / .24).toFixed(1);
  }
  venLifeLeft(){
    return ((this.lifeExpectancy - this.earthAge) / .62).toFixed(1);
  }
  marsLifeLeft(){
    return ((this.lifeExpectancy - this.earthAge) / 1.88).toFixed(1);
  }
  jupLifeLeft(){
    return ((this.lifeExpectancy - this.earthAge) / 11.86).toFixed(1);
  }
}
  





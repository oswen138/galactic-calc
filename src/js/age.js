
export default class PlanetAge {

  constructor(lifeExpectancy, earthAge)  {
    this.lifeExpectancy = lifeExpectancy;
    this.earthAge = earthAge;
    this.mercAge = Math.floor(this.earthAge /.24);
    this.venusAge = Math.floor(this.earthAge /.62);
    this.marsAge = Math.floor(this.earthAge /1.88);
    this.jupAge = Math.floor(this.earthAge /11.86);
    this.mercLeft;
    this.venusLeft;
    this.marsLeft;
    this.jupLeft;
  }

//Returns their age in Mercury years. (A Mercury year is .24 Earth years.)

  ageMercury() {
    let mercAge = Math.floor(this.earthAge /.24);
    return mercAge;
  }
  // Returns their age in Venus years. (A Venus year is .62 Earth years.)
  ageVenus() {
    let venAge = Math.floor(this.earthAge /.62);
    return venAge;
  }
  // Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
  ageMars() {
    let marsAge = Math.floor(this.earthAge /1.88);
    return marsAge;
  }
  // Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  ageJupiter() {
    let jupAge = Math.floor(this.earthAge /11.86);
    return jupAge;
  }

  // Determines how many years a user has left to live on each planet

  planetLeft() {
    this.mercLeft = this.lifeExpectancy - this.mercAge;
    this.venusLeft = this.lifeExpectancy - this.venusAge;
    this.marsLeft = this.lifeExpectancy - this.marsAge;
    this.jupLeft = this.lifeExpectancy - this.jupAge;


  }
}
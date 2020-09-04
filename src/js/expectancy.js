import planetAge from "./age";

export default class lifeExpectancy {
  constructor(earthAge, stayPlanet, planetAge) {
    this.earthAge = 100;
    this.planetAge = planetAge;
    this.stayPlanet = stayPlanet;

  }

  checkType() {
    if (this.earthAge == 100) {
      return this.planetAge/88;
    } else if (this.age == this.planet == this.venus) {
      return this.age/.62;
    }  else if (this.age == this.planet == this.mars) {
      return this.age/1.88;
    }  else if (this.age == this.planet == this.jupiter) {
      return this.age/11.86;
    } else {
      return "you have no age";
    }
  }    
}

//expectancy file does not work
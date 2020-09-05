import planetAge from "./age";

export default class lifeExpectancy {
  constructor(earthAge, stayPlanet, planetAge) {
    this.earthAge = 100;
    this.planetAge = planetAge;
    this.stayPlanet = stayPlanet;

  }

  getyearsLeft() {
    if (this.planetAge > 100) {
      return ((Math.floor((this.age)/.24)/88));
    }
  getyearsPast() {
    if (this.earthAge == 100 )
      return (Math.floor((this.age)/.24)-100); 
    }

  

export default class planetAge {

  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
    this.mercury = math.floor(this.age/.24);
    this.venus = math.floor(this.age/.62);
    this.mars = math.floor(this.age/1.88);
    this.jupiter = math.floor(this.age/11.86);
  }

  //calculate age on planet
  calcAge(planet, planetAge) {
  }
  mercuryAge() {
   this.age = this.age/.24;
   return this.age;
  }
  venusAge() {
   this.age = this.age/.62;
   return this.age;
  }
  marsAge() {
   this.age = this.age/1.88;
   return this.age;
  }
  jupiterAge() {
   this.age = this.age/11.86;
   return this.age;
  }
}
    if 
  }
    if (this.planet == this.mercury)




  checkType() {
    if ((this.planet === mercury) {
      return "";
    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
      return "scalene triangle";
    }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return "equilateral triangle";
    } else {
      return "isosceles triangle";
    }
  }    
}
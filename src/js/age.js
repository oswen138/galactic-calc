export default class planetAge {

  //calculate age on planet
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
    this.mercury = math.floor(this.age/.24);
    this.venus = math.floor(this.age/.62);
    this.mars = math.floor(this.age/1.88);
    this.jupiter = math.floor(this.age/11.86);

  }

  checkType() {
    if (this.age == this.planet == this.mercury) {
      return this.age/.24;
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










  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
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
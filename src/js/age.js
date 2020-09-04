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








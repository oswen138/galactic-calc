
export default class PlanetAge {

  constructor(birthdate, lifeExpectancy, gender, food, earthAge)  {
    this.birthdate = birthdate;
    this.lifeExpectancy = lifeExpectancy;
    this.gender = gender; 
    this.food = food;
    this.earthAge = earthAge;
  }

  earthAge(){
    let earthAge = this.birthdate;
    return earthAge;
  }

//Returns their age in Mercury years. (A Mercury year is .24 Earth years.)

  ageMercury() {
    let mercAge = Math.floor(this.earthAge()/.24);
    return mercAge;
  }
  // Returns their age in Venus years. (A Venus year is .62 Earth years.)
  ageVenus() {
    let venAge = Math.floor(this.earthAge()/.62);
    return venAge;
  }
  // Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
  ageMars() {
    let marsAge = Math.floor(this.earthAge()/1.88);
    return marsAge;
  }
  // Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  ageJupiter() {
    let jupAge = Math.floor(this.earthAge()/11.86);
    return jupAge;
  }

  // Determines how many years a user has left to live on each planet

  endLifeOnEarth () {
    let planetAverage = 100;
    if (this.gender === 'female') {
      planetAverage += 5;
    } else {
      planetAverage -= 2;
    }
    if (this.food === 'coke') {
      planetAverage -= 3;
    } else {
      planetAverage += 1;
    }
    return planetAverage;
  }

  endLifeOnMercury() {
    let mercAge = this.mercAge();
    let mercuryLife = (this.lifeExpectancy - mercAge);
    return mercuryLife;
  }
  endLifeOnVenus() {
    let venAge = this.venAge();
    let venusLife = (this.lifeExpectancy - venAge);
    return venusLife;
  }
  endLifeOnMars() {
    let marsAge = this.marsAge();
    let marsLife = (this.lifeExpectancy - marsAge);
    return marsLife;
  }
  endLifeOnJupiter() {
    let jupAge = this.jupAge();
    let jupiterLife = (this.lifeExpectancy - jupAge);
    return jupiterLife;
  }

  // return the number of years they have lived past the life expectancy

  lifePastMercury() {
    let mercAge = mercAge();
    let pastMercAge = (mercAge()-(100-(this.earthAge)));
    return pastMercAge;
  }
  lifePastVenus() {
    let venAge = venAge();
    let pastVenAge = (venAge()-(100-(this.earthAge)));
    return pastVenAge;
  }
  lifePastMars() {
    let marsAge = marsAge();
    let marsLife = marsLife();
    let pastMarsAge = (marsAge()-(100-(this.earthAge)));
    return pastMarsAge;
  }
  lifePastJupiter() {
    let jupAge = jupAge();
    let jupiterLife = jupiterLife();
    let pastJupAge = (jupAge()-(100-(this.earthAge)));
    return pastJupAge;
  }

}
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import planetAge from './js/age.js';
import lifeExpectancy from './js/expectancy.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const namePlanet = $('#name-planet').val();
    const earthAge = parseInt($('#earth-age').val());
    const planetAge = new planetAge(namePlanet, earthAge);
    const response = planetAge.checkType();
    $('#response').append(`<p>${response}</p>`);
  });

  $('#expectancy-form').submit(function(event) {
    event.preventDefault();
    const planetStay = parseInt($('#planet-stay').val());
    const diet1 = $('#diet1').val();
    const diet2 = $('#diet2').val();
    const lifeExpectancy = new lifeExpectancy(planetStay, diet1, diet2);
    const response = planet.getAge();
    $('#response2').append(`<p> You have only this much time to live: ${response}.</p>`);
  });
});



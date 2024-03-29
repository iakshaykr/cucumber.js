const assert = require('assert');

const { Given, When, Then } = require('cucumber');

 

function isItFriday(today) {

  // We'll leave the implementation blank for now

}

 

Given('today is Sunday', function () {

  this.today = 'Sunday';

});

 

When('I ask whether it\'s Friday yet', function () {

  this.actualAnswer = isItFriday(this.today);

});

 

Then('I should be told {string}', function (expectedAnswer) {

  assert.equal(this.actualAnswer, expectedAnswer);

});
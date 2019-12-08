// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var miles = kilometersAway * milesPerKilometer;
    var hours = miles / speedMph;
    var days = hours / 24;
    return days;
}
;
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(spacecraftName + " will reach Mars in " + getDaysToLocation(kilometersToMars) + " days.");
console.log(spacecraftName + " will reach the Moon in " + getDaysToLocation(kilometersToTheMoon) + " days.");

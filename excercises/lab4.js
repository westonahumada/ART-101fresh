let myCommutes = ["mustang", "roller skates", "friends prius", "city bus"];
let myFavouriteCommute = {
    vehicle: "car",
    year: "2004",
    color: "grey",
    drivers: "weston",
    speeds: ["Here", "There", "Gone"]


};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[2] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: vehicle - " + myFavouriteCommute.vehicle + ", year " + myFavouriteCommute.year + ", the best speed: " + myFavouriteCommute.speeds[0] + "</p>";


$("#output").html(megaSentence);

var day = 0;
var colors = ["Orange", "Aqua", "Pink", "Grey"];



let myCharacters = ["three legged dog", "2D chain"];
let aliveCharacter = {
    species: "pitbull",
    dimension: "3D",
    medium: "paper",
    friends: ["weston", "the chain"]
};

$(document).ready(function(){
  $("p").hover(function(){
    $(this).css("background-color", "magenta");
    }, function(){
    $(this).css("background-color", "aqua");
  });
});
$(document).mousemove(function(event) {
  $("#rusty").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});

let megaText;
megaText = "<p>The subjects of Chain World are: " + myCharacters[0]+ ", " + myCharacters[1] + "</p>"

megaText = megaText + "<p>My alive subject posseses such attributes and appointments such as: species - " + aliveCharacter.species + ", dimension " + aliveCharacter.dimension + ", friends with: " + aliveCharacter.friends[0] + "</p>";

$("#output").append(megaText);

let count = 0;

$("#needy-button").click(function () {
    $("body").css("background-color", colors[count]);
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[count] );


    count++;

   if (count === colors.length) {
        count = 0; 
    }
});
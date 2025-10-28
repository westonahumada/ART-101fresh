var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


function makeImage (eagle) { //figure out why image is not showing up

 if (colors[colorCount] == "eagle") {
       $("body").append("<img width=50 src='images/" + eagle + ".jpg'>");
   }

}
function changeBack (newColor) { //finish this code 
    $("body").css("background-color", newColor);
}
  $("body").css("background-color", colors[colorCount]);

  $(".color-button").click( function() {

  changeBack(this.id);

  });
// the button part
$("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   $("body").css("background-color", colors[colorCount]);

changeBack( colors[colorCount]);

   makeImage("eagle"); 

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});


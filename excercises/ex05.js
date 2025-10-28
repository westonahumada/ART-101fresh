
let count = 0;
let colorCount=0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line to add


$("#needy-button").click(function () {

    if ( count < 5) { mood = "fresh and happy" ; }
    else if ( (count >=5) && (count <10)) {mood="keeppushingmf"; } 
    else {mood = "so tired" ; }

    let reminder=count % colors.length;

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] ); 
   

$("body").css("background-color", colors[colorCount]);

$("body").append("<img width=50" src= 'images/eagle.jpg'>);


    count = count + 1;
colorCount = colorCount + 1;

    if (colorCount == 4) { colorCount = 0; }
    

});
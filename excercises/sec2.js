let count = 0;
let colors =["Red", "purple", "green", "blue"];

$("needy-button").click(function (){

    let reminder=count % colors.length;

$("needy-button").html("Clicks: " + count + "Color: " + colors[count])

$("body").css("background-color", colors[reminder]);

count = count +1;
});
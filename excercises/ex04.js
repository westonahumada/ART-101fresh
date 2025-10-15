
let totalNumber =0;

// add a button titled click me

$ ("#needy-button").click(function(){
totalNumber = totalNumber + 4.5;
let sentence="Dont click me or ill clik u ";
let sentencetwo = "Dam it "
let totalNumbers= sentence + totalNumber + sentencetwo;

$("#needy-button").html(totalNumbers);
})

// when the button is clicked 
// add one to the total number

// show the total number
// on our button
// show "clicked total number times"


// a top limit
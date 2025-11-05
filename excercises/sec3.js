var score = 0;
let randomScore = 0;
var moods = ["Green", "Black", "Purple"]



function checkMood(score) {

  }

  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

if (score > 7)

    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood(moods[randomScore]);

    score = score + 1;
   randomScore = randomScore + 1;
   if (randomScore == 4) { randomScore = 0; }
  });

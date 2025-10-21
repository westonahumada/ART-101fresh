let myCharacters = ["three legged dog", "2D chain"];
let aliveCharacter = {
    species: "pitbull",
    dimension: "3D",
    medium: "paper",
    friends: ["weston", "the chain"]
};

let megaText;
megaText = "<p>The subjects of Chain World are: " + myCharacters[0]+ ", " + myCharacters[1] + "</p>"

megaText = megaText + "<p>My alive subject posseses such attributes and appointments such as: species - " + aliveCharacter.species + ", dimension " + aliveCharacter.dimension + ", friends with: " + aliveCharacter.friends[0] + "</p>";

$("#output").append(megaText);
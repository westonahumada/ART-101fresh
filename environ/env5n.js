
let day = 0; 
const colors = ["Orange", "Aqua", "Pink", "Grey"];

const myCharacters = ["three legged dog", "2D chain"];

const aliveCharacter = {
    species: "pitbull",
    dimension: "3D",
    medium: "paper",
    friends: ["weston", "the chain"]
};

$(document).ready(() => {

    
    const $paragraphs = $("p");
    const $output = $("#output");
    const $button = $("#needy-button");

    
    $paragraphs.hover(
        function () { $(this).css("background-color", "magenta"); },
        function () { $(this).css("background-color", "aqua"); }
    );

    
    const megaText = `
        <p>
            The subjects of Chain World are: 
            ${myCharacters.join(", ")}
        </p>
        <p>
            My alive subject possesses attributes such as: 
            species - ${aliveCharacter.species}, 
            dimension - ${aliveCharacter.dimension}, 
            friends with: ${aliveCharacter.friends[0]}
        </p>
    `;

    
    $output.append(megaText);

    
    let colorIndex = 0;

    $button.click(() => {
        $("body").css("background-color", colors[colorIndex]);
        $button.html(`Clicks: ${colorIndex} | Color: ${colors[colorIndex]}`);

        colorIndex = (colorIndex + 1) % colors.length; 
    });
});

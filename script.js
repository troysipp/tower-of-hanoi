/* I think the game would work better by
appending divs to the three different areas
and then moving them with the DOM */

// Make discs appear on first Pole

const firstPole = $(".first");

function createDiscs() {
  firstPole.append(
    "<div class='big disc'></div>",
    "<div class='medium disc'></div>",
    "<div class='small disc'></div>"
  );
}

createDiscs();

// User should be able to select a div and select a location
// Div should disappear from first location and reappear at second location

// Smaller divs are unable to have larger divs stacked upon them
//    If this is attempted, the div should remain at its previous position

// Under that constraint, the user should be able to make any moves he/she chooses

// If the user gets all three divs to the rightmost tower, he/she should get a display that they beat the game

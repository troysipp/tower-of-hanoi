$(document).ready(function() {
  const firstPole = $(".first");
  const secondPole = $(".second");
  const thirdPole = $(".third");
  const areaOfPlay = $(".areaOfPlay");
  const firstPoleList = [3, 2, 1];
  const secondPoleList = [];
  const thirdPoleList = [];
  const smallDisc = $("<div class='small disc'></div>");
  const mediumDisc = $("<div class='medium disc'></div>");
  const bigDisc = $("<div class='big disc'></div>");
  let currentDisc = null;
  let currentPole = null;
  let poleNumber = null;
  let discNumber = null;
  let previousPole = null;

  // Make discs appear on first pole

  function createDiscs() {
    firstPole.append(smallDisc, mediumDisc, bigDisc);
  }

  createDiscs();
  selectFirstPole();
  selectSecondPole();
  // selectThirdPole();

  // User should be able to select a div and select a location
  // Div should disappear from first location and reappear at second location

  function selectFirstPole() {
    firstPole.on("click", function(e) {
      if ($(e.target).hasClass("disc")) {
        currentDisc = e.target;
      } else if ($(e.target).hasClass("pole")) {
        currentPole = e.target;
      }
      // set discNumber
      whichDiscNumber(currentDisc);
      if (previousPole === null && firstPoleList.length > 0) {
        previousPole = this;
        currentNumber = firstPoleList[firstPoleList.length - 1];
        firstPoleList.pop();
        console.log(discNumber);
        console.log(secondPoleList[secondPoleList.length - 1]);
        console.log(firstPoleList[firstPoleList.length - 1]);
      } else {
        if (
          (previousPole !== null && firstPoleList.length === 0) ||
          (previousPole !== null &&
            discNumber < firstPoleList[firstPoleList.length - 1])
        ) {
          firstPoleList.push(discNumber);
          currentDisc.remove();
          firstPole.prepend(currentDisc);
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
        } else {
          currentNumber = null;
          currentDisc = null;
          currentPole = null;
          discNumber = null;
          previousPole = null;
        }
      }
    });
  }

  //if there's no input
  /* make currentPole something
make currentNumber something
make currentDisc something */

  //else there is an input
  /* remove currentDisc from its parent div
pop currentNumber from its old array
Add it to its new array
Append currentDisc to new pole
reset currentPole to null
reset currentNumber to null
reset currentDisc to null */

  function selectSecondPole() {
    secondPole.on("click", function(e) {
      if ($(e.target).hasClass("disc")) {
        // Abstract out as function which is current disc
        currentDisc = e.target;
      } else if ($(e.target).hasClass("pole")) {
        currentPole = e.target;
      }
      whichDiscNumber(currentDisc);
      if (previousPole === null && secondPoleList.length > 0) {
        previousPole = this;
        currentNumber = secondPoleList[secondPoleList.length - 1];
        secondPoleList.pop();
        console.log(
          secondPoleList[secondPoleList.length - (secondPoleList.length - 1)]
        );
        console.log(
          firstPoleList[firstPoleList.length - (firstPoleList.length - 1)]
        );
      } else {
        if (
          (previousPole !== null && secondPoleList.length === 0) ||
          (previousPole !== null &&
            discNumber > secondPoleList[secondPoleList.length - 1])
        ) {
          secondPoleList.push(discNumber);
          currentDisc.remove();
          secondPole.prepend(currentDisc);
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
        } else {
          currentDisc = null;
          currentPole = null;
          discNumber = null;
          previousPole = null;
          currentNumber = null;
        }
      }
    });
  }

  // Select first pole
  // If pole not empty, allow selection
  // Select other pole
  // If other pole has no numbers smaller than top of first pole, allow selection
  // function move disc

  function whichDiscNumber(currentDisc) {
    if ($(currentDisc).hasClass("small")) {
      discNumber = 1;
      return currentDisc;
    } else if ($(currentDisc).hasClass("medium")) {
      discNumber = 2;
      return currentDisc;
    } else if ($(currentDisc).hasClass("big")) {
      discNumber = 3;
      return currentDisc;
    } else {
      return;
    }
  }

  // if you click a disc
  // its parent should lose that disc as a child element
});

// Smaller divs are unable to have larger divs stacked upon them
//    If this is attempted, the div should remain at its previous position

// Under that constraint, the user should be able to make any moves he/she chooses

// If the user gets all three divs to the rightmost tower, he/she should get a display that they beat the game

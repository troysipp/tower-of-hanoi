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
  let currentNumber = null;
  let poleNumber = null;
  let discNumber = null;
  let previousPole = null;
  let previousPoleList = [];

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
      currentPole = this;
      // if ($(e.target).hasClass("disc")) {
      //   currentDisc = e.target;
      // } else if ($(e.target).hasClass("pole")) {
      // currentPole = e.target;
      // }
      // // set discNumber
      // whichDiscNumber(currentDisc);
      if (previousPole === null && firstPoleList.length > 0) {
        currentNumber = firstPoleList[firstPoleList.length - 1];
        if ($(currentPole).hasClass("first")) {
          currentDisc = $(".first")
            .children()
            .first();
        }
        previousPole = this;
        // currentNumber = firstPoleList[firstPoleList.length - 1];
        console.log(currentNumber);
        // firstPoleList.pop();
        previousPoleList = firstPoleList;
        // console.log(secondPoleList[secondPoleList.length - 1]);
      } else {
        if (
          (previousPole !== null && firstPoleList.length === 0) ||
          (previousPole !== null &&
            currentNumber < firstPoleList[firstPoleList.length - 1])
        ) {
          firstPoleList.push(discNumber);
          currentDisc.remove();
          firstPole.prepend(currentDisc);
          if (previousPoleList.length !== 0) {
            previousPoleList.pop();
          }
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
          previousPoleList = [];
          console.log(firstPoleList);
          console.log(firstPoleList[firstPoleList.length - 1]);
          console.log(secondPoleList);
        } else {
          currentNumber = null;
          currentDisc = null;
          currentPole = null;
          discNumber = null;
          previousPole = null;
          previousPoleList = [];
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
      currentPole = this;
      whichPole(currentPole);
      // if ($(e.target).hasClass("disc")) {
      //   // Abstract out as function which is current disc
      // currentDisc = e.target;
      // } else if ($(e.target).hasClass("pole")) {
      //   currentPole = e.target;
      // }
      // // whichDiscNumber(currentDisc);
      if (previousPole === null && secondPoleList.length > 0) {
        if ($(currentPole).hasClass("second")) {
          currentDisc = $(".second")
            .children()
            .first();
          console.log(currentNumber);
          console.log(currentDisc);
        }
        currentNumber = secondPoleList[secondPoleList.length - 1];
        previousPole = this;
        // currentNumber = secondPoleList[secondPoleList.length - 1];
        // secondPoleList.pop();
        previousPoleList = secondPoleList;
        console.log(currentNumber);
      } else {
        if (
          (previousPole !== null && secondPoleList.length === 0) ||
          (previousPole !== null &&
            currentNumber < secondPoleList[secondPoleList.length - 1])
        ) {
          console.log(currentNumber);
          secondPoleList.push(currentNumber);
          currentDisc.remove();
          secondPole.prepend(currentDisc);
          if (previousPoleList.length !== 0) {
            previousPoleList.pop();
          }
          console.log(previousPoleList);
          console.log(firstPoleList);
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
          previousPoleList = [];
          console.log(secondPoleList);
          console.log(secondPoleList[secondPoleList.length - 1]);
          console.log(firstPoleList);
        } else {
          currentDisc = null;
          currentPole = null;
          discNumber = null;
          previousPole = null;
          currentNumber = null;
          previousPoleList = [];
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

  function whichPole(currentPole) {
    if ($(currentPole).hasClass("first")) {
      currentDisc = $(".first")
        .children()
        .first();
      console.log(currentNumber);
      console.log(currentDisc);
    } else if ($(currentPole).hasClass("second")) {
      // currentDisc = $(".second:first-child");
      return currentNumber;
    } else if ($(currentPole).hasClass("third")) {
      currentNumber = thirdPoleList[thirdPoleList.length - 1];
      currentDisc = $(".third:first-child");
      return currentNumber;
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

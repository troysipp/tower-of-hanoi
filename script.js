$(document).ready(function() {
  // Set constant variables
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
  // Set variables that update with disc and pole selection
  let currentDisc = null;
  let currentPole = null;
  let currentNumber = null;
  let poleNumber = null;
  let previousPole = null;
  let previousPoleList = [];
  // Set move counter variables
  let moveCount = 0;
  // Set modal variables
  let modal = $(".modal");

  // Make discs appear on first pole

  function createDiscs() {
    firstPole.append(smallDisc, mediumDisc, bigDisc);
  }
  createDiscs();

  // Call all listener events

  selectFirstPole();
  selectSecondPole();
  selectThirdPole();

  // Add move counter

  function moveCounter() {
    moveCount += 1;
    $(".moveCounter").text(moveCount);
    console.log(moveCount);
  }

  // User should be able to select a div and select a location
  // Div should disappear from first location and reappear at second location

  function selectFirstPole() {
    // Add event listener on first pole
    firstPole.on("click", function(e) {
      currentPole = this;
      // The choosing-a-disc-to-move case
      if (previousPole === null && firstPoleList.length > 0) {
        // Set variables to relevent values
        currentNumber = firstPoleList[firstPoleList.length - 1];
        if ($(currentPole).hasClass("first")) {
          currentDisc = $(".first")
            .children()
            .first();
        }
        previousPole = this;
        previousPoleList = firstPoleList;
      } else {
        if (
          // The choosing-a-spot-to-put-a-disc case
          // Condition saying you can put any disc on an empty pole
          (previousPole !== null && firstPoleList.length === 0) ||
          // Condition that ensures bigger disc can't go on top of smaller ones
          (previousPole !== null &&
            currentNumber < firstPoleList[firstPoleList.length - 1])
        ) {
          // Update JS data-accounting and DOM to mimic
          firstPoleList.push(currentNumber);
          currentDisc.remove();
          firstPole.prepend(currentDisc);
          if (previousPoleList.length !== 0) {
            previousPoleList.pop();
          }
          moveCounter();
          // Then reset variables that change every time to defaults
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
          previousPoleList = [];
        } else {
          // The something-went-wrong case where all the variables reset to their defaults
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

  function selectSecondPole() {
    secondPole.on("click", function(e) {
      currentPole = this;
      if (previousPole === null && secondPoleList.length > 0) {
        if ($(currentPole).hasClass("second")) {
          currentDisc = $(".second")
            .children()
            .first();
        }
        currentNumber = secondPoleList[secondPoleList.length - 1];
        previousPole = this;
        previousPoleList = secondPoleList;
      } else {
        if (
          (previousPole !== null && secondPoleList.length === 0) ||
          (previousPole !== null &&
            currentNumber < secondPoleList[secondPoleList.length - 1])
        ) {
          secondPoleList.push(currentNumber);
          currentDisc.remove();
          secondPole.prepend(currentDisc);
          if (previousPoleList.length !== 0) {
            previousPoleList.pop();
          }
          moveCounter();
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
          previousPoleList = [];
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

  function selectThirdPole() {
    thirdPole.on("click", function(e) {
      currentPole = this;
      if (previousPole === null && thirdPoleList.length > 0) {
        currentNumber = thirdPoleList[thirdPoleList.length - 1];
        if ($(currentPole).hasClass("third")) {
          currentDisc = $(".third")
            .children()
            .first();
        }
        previousPole = this;
        previousPoleList = thirdPoleList;
      } else {
        if (
          (previousPole !== null && thirdPoleList.length === 0) ||
          (previousPole !== null &&
            currentNumber < thirdPoleList[thirdPoleList.length - 1])
        ) {
          thirdPoleList.push(currentNumber);
          currentDisc.remove();
          thirdPole.prepend(currentDisc);
          if (previousPoleList.length !== 0) {
            previousPoleList.pop();
          }
          moveCounter();
          currentDisc = null;
          currentPole = null;
          currentNumber = null;
          previousPole = null;
          discNumber = null;
          previousPoleList = [];
          if (thirdPoleList.length === 3) {
            modal.style.display = "block";
            // alert("You won the game!");
          }
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
});

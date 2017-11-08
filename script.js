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
  // Set variables that update with each new move
  let currentDisc = null;
  let currentPole = null;
  let currentNumber = null;
  let poleNumber = null;
  let previousPole = null;
  let previousPoleList = [];
  // Set move counting variables
  let moveCount = 0;
  // Set modal variables
  const modal = $(".modal");

  // Good job grouping all variable declarations together at the top

  // Make discs appear on first pole

  function createDiscs() {
    firstPole.append(smallDisc, mediumDisc, bigDisc);
  }
  createDiscs();

  // Think about how you might modify `createDiscs` to allow for a dynamic number of
  // discs each with dynamic styling. Something like:

  // function createDiscs (count) {
  //   for (let i = 0; i < count; i++) {
  //     let newDisc = $(`<div class='disc' data-size='${i}' style='width: ${...calculate}'></div>`)
  //     newDisc.on('click', function () {
  //       // ...
  //     })
        // set the event listeners on generation
  //     firstPole.append(newDisc)
  //   }
  // }

  // Call all listener events

  selectFirstPole();
  selectSecondPole();
  selectThirdPole();

  // If you set the event listeners as part of the disc generation process, you won't
  // need to set up functions like the ones above to do this
  // Add move counter

  function moveCounter() {
    moveCount += 1;
    $(".counter").text(moveCount);
  }

  // User should be able to select a div and select a location
  // Div should disappear from first location and reappear at second location

  function selectFirstPole() {
    // Add event listener on first pole
    firstPole.on("click", function(e) {
      currentPole = this;
      // The choosing-a-disc-to-move case
      if (previousPole === null && firstPoleList.length > 0) {

        // the code block below could be abstracted into a `setSourcePole` function or something similar
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
          // this rule checking code could be in a `checkRules` function
          // The choosing-a-spot-to-put-a-disc case
          // Condition saying you can put any disc on an empty pole
          (previousPole !== null && firstPoleList.length === 0) ||
          // Condition that ensures bigger disc can't go on top of smaller ones
          (previousPole !== null &&
            currentNumber < firstPoleList[firstPoleList.length - 1])
        ) {

          // this code that actually executes the move could be in a `moveDisc` function
          // Update JS data-accounting and DOM to mimic
          firstPoleList.push(currentNumber);
          currentDisc.remove();
          firstPole.prepend(currentDisc);
          if (previousPoleList.length !== 0) {
            previousPoleList.pop();
          }
          moveCounter();
          // Then reset variables that change every time to defaults

          // a `resetMoves` function
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
  // Definitely think about two things with your select functions:
  // - How can you abstract this function to simply be `selectPole`
  // and have it internally determine which pole to select / modify
  // based on some parameter:
  // ```
  //   function selectPole (pole) {
  //     // ...
  //   }
  // ```
  // - Also, look into how you can break this one, huge function up into individual,
  // more targeted functions that can be called form within `selectPole`

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
            $(".modal").css("display", "block");
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

// Really solid approach, organization, and semantic naming. However, you definitely want
// to break your code up into smaller functions much more. Remember, ideally, a function should be
// focused on doing **one** thing very well. You then can have top-level functions that run
// the procedures of the game by calling other functions. The end result of doing this is that
// you won't have as much repetitive code (i.e. selectFirstPole vs selectThirdPole) and the code
// will be more readable / mantainable. Overall, really excellent work here though.

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

  // Make discs appear on first pole

  function createDiscs() {
    firstPole.append(smallDisc, mediumDisc, bigDisc);
  }

  createDiscs();
  selectFirstPole();

  // User should be able to select a div and select a location
  // Div should disappear from first location and reappear at second location

  function selectFirstPole(discNumber) {
    firstPole.on("click", function(e) {
      currentPole = this;
      poleNumber = "first"
      if (discNumber === undefined && firstPoleList.length > 0) {
        selectOtherPole(firstPoleList[firstPoleList.length - 1]);
        currentDisc = e.target;
        firstPoleList.pop()
        console.log(firstPoleList)
      } else if (firstPoleList.length > 0) {
        firstPoleList.push(discNumber);
        whichDisc(discNumber);
        firstPole.append(currentDisc);
        currentDisc = null;
      }
    });
  }

  function selectSecondPole(discNumber) {
    secondPole.on("click", function(e) {
      currentPole = this;
      if (discNumber === undefined && secondPoleList.length > 0) {
        selectOtherPole(secondPoleList[secondPoleList.length - 1]);
        currentDisc = e.target;
      } else {
        currentPole.remove(currentDisc)
        console.log(currentPole)
        secondPoleList.push(discNumber);
        console.log(secondPoleList)
        // whichDisc(discNumber);
        secondPole.append(currentDisc);
        console.log(secondPole)
        console.log($('areaOfPlay'))
        currentDisc = null;
        currentPole = null
      }
    });
  }

  function selectOtherPole(discNumber) {
    if (poleNumber === "first") {
      selectSecondPole();
      // selectThirdPole()
    } else if (poleNumber === "second"){
      selectFirstPole()
      selectThirdPole()
    } else {
      selectFirstPole()
      selectSecondPole()
    }
  }

  // Select first pole
  // If pole not empty, allow selection
  // Select other pole
  // If other pole has no numbers smaller than top of first pole, allow selection
  // function move disc

  function whichDisc(discNumber) {
    if (discNumber === 1) {
      currentDisc = smallDisc;
      return currentDisc;
    } else if (discNumber === 2) {
      currentDisc = mediumDisc;
      return currentDisc;
    } else  if (discNumber === 3) {
      currentDisc = bigDisc;
      return currentDisc;
    } else {
      break
    }
  }

  // if you click a disc
  // its parent should lose that disc as a child element
});

// Smaller divs are unable to have larger divs stacked upon them
//    If this is attempted, the div should remain at its previous position

// Under that constraint, the user should be able to make any moves he/she chooses

// If the user gets all three divs to the rightmost tower, he/she should get a display that they beat the game

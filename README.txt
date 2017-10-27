Description

This project is a basic version of the game “Tower(s) of Hanoi.” It involves moving an ordered stack of discs from the leftmost pole to the rightmost pole, one disc at a time.  The primary condition of play is that discs can only be placed on top of larger discs or on empty poles.

User stories:

MVP
User should see three areas in which to stack divs
User should see a title and brief explanation of the game
User should be able to select a div and select a location
Div should disappear from first location and reappear at second location
Smaller divs are unable to have larger divs stacked upon them
   If this is attempted, the div should remain at its previous position
Under that constraint, the user should be able to make any moves he/she chooses
If the user gets all three divs to the rightmost tower, he/she should get a display that they beat the game
User would like at least some pretty colors


MVP +
The game should include a reset button without having to refresh the page


Silver
Highlight selected divs and maybe where they could move them
User should see a display of how many moves it took for he/she to complete puzzle
User should see a display of minimal number of moves to compare their count to
User should be able to drag divs between areas
User can choose to display a timer as they make progress that reports their speed at the end of the game

Gold
User should be able to increase the number of blocks
User should be able to change the decorative style of the game
User should be able to chart progress in terms of time and number of moves over time


To accomplish these goals, I used the jQuery language in addition to HTML, CSS, and Javascript.

Please contribute through my Github repo:
https://github.com/troysipp/tower-of-hanoi

Or play the game!
https://troysipp.github.io/tower-of-hanoi/
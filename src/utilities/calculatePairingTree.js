/*
Start with a given monster species you want. Also, all monster data entries will have a 
value called rarity that represents how hard they are to obtain, based on things like if
 they are directly catchable, at what point in the game, etc. Less rare monsters have a higher score. 

Additionally, I want to allow players to check off which traveler's gates are open to them
 and what class they have cleared in the arena.

1. Look at all the possible pairings that can create that monster. (Should be less than 500
     total pairings per monster, give or take a couple hundred.)

2. Score the pairings.
a. Add the two parent monsters rarity scores and use as a base pairing score.
b. Check if the player already owns the parents. Add +1 to the pairing score for each owned monster.
c. For unowned monsters, check if they are currently obtainable based on what traveler's gates 
    are available and which arena class has been cleared. If one parent is currently unobtainable,
    reduce the pairing score to 0.
c1. Do this by first checking if a needed parent is directly catchable in any available traveler's gate.
c2. If it is not, then check if it can be obtained through currently available monster pairings.

3. Return the pairing that has the highest score.

4. Determine if the pairing should be an end node
a. Are the parent monsters both either owned or directly catchable based on available traveler's gates?
    If yes then it is an end node and should be precluded from recursive checks. If no, then recursively 
    check for the best pairing for the parent monster(s) that are not currently owned or directly catchable.
*/

// GLOBAL LIBRARY OF CHARACTERS
// ----------------------------

// obi-wan object
    // name
    // image
    // HP
    // attack power
    // counter attack power

// luke object
    // name
    // image
    // HP
    // attack power
    // counter attack power    

// darth sidious object
    // name
    // image
    // HP
    // attack power
    // counter attack power   

// darth maul object
    // name
    // image
    // HP
    // attack power
    // counter attack power

// chosen character object
    // props created/updated with functions

// enemy character object
    // props created/updated with functions


// FUNCTIONS
// ----------------------------

// initialize game ()
    // fill the 4 character select divs with base characters
    // clear other divs (player, available enemies, chosen enemy, combat log)
    // clear chosen character and chosen enemy object props

// player select ()
    // copy values into chosen character object
    // clear character select divs
    // fill chosen character div
    // move other three to fill available enemies divs

// enemy select ()
    // copy values into chosen enemy object
    // clear chosen enemy from available enemies div
    // fill chosen enemy div

// attack ()
    // hit enemy for player's attack value
    // add base attack value to player attack value

    // IF enemy health above 0
        // hit player for enemy's counter attack value
        // combat log the results

    // IF player health drops to 0 
        // call game over function

    // IF enemy health drops to 0
        // call enemy defeated function
    
// game over ()
    // combat log GAME OVER
    // restart button appears, which calls INITIALIZE

// enemy defeated ()
    // clear chosen enemy object props
    // clear chosen enemy div
    // combat log victory
    // IF all enemies defeated
        // combat log you win
        // restart button appears, which calls INITIALIZE


// CALLS
// ----------------------------

// initialize automatically to start with

// (insert all the on click functions with conditionals to control game flow)
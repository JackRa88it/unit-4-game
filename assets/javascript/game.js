// GLOBAL LIBRARY OF CHARACTERS/VARIABLES
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

// player char object
    // props created/updated with functions

// enemy char object
    // props created/updated with functions

// var playerSelected = false
// var enemySelected = false
// var gameOver = false


// FUNCTIONS
// ----------------------------

// initialize ()
    // fill the 4 char select divs with base chars
    // clear other divs (player char, available enemies, enemy char, combat log)
    // clear player char and enemy char object props

// player select ()
    // copy values into player char object
    // clear char select divs
    // fill player char div
    // move other three to fill available enemies divs
    // playerSelected = true

// enemy select ()
    // copy values into enemy char object
    // clear enemy char from available enemies div
    // fill enemy char div
    // enemySelected = true

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
    // gameOver = true
    // restart button appears

// enemy defeated ()
    // clear enemy char object props
    // clear enemy char div
    // combat log victory
    // enemySelected = false
    // IF all enemies defeated
        // call game over function
        // combat log you win


// CALLS
// ----------------------------

// initialize automatically to start with

// on click char select divs
    // IF playerSelected = false
        // call playerSelect()

// on click available enemies divs
    // IF playerSelected = true && enemySelected = false
        // call enemySelect()

// on click attack button
    // IF playerSelected = true && enemySelected = true
        // call attack()

// on click restart button
    // IF gameOver = true
        // call initialize()
// GLOBAL LIBRARY OF CHARACTERS/VARIABLES
// ----------------------------

var knight = {
    name: "The Knight",
    image: "assets/images/swords12knight.jpg",
    HP: 120,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var knave = {
    name: "The Fool",
    image: "assets/images/00fool.jpg",
    HP: 100,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var emperor = {
    name: "The Emperor",
    image: "assets/images/04emperor.jpg",
    HP: 150,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var justice = {
    name: "Justice",
    image: "assets/images/11justice.jpg",
    HP: 180,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var playerChar;
var enemyChar;
var playerSelected = false;
var enemySelected = false;
var enemiesRemaining;
var gameIsOver = false;


// FUNCTIONS
// ----------------------------

function pasteDiv(char, className, containerID) {

    var div = $("<div>");
    div.attr({"class":className});
    div.data(char);
    var name = $("<p>");
    name.attr("class","pName")
    name.text(char.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:char.image, alt:"character img"})
    div.append(image);
    var HP = $("<p>");
    HP.attr("class", (className + "HP pHP"))
    HP.text(char.HP);
    div.append(HP);
    $(containerID).append(div);

};


function initialize() {

    $("#playerSelectContainer").empty();
    $("#enemySelectContainer").empty();
    $("#playerCharContainer").empty();
    $("#enemyCharContainer").empty();
    $("#combatLog").text("Choose your champion...");
    playerSelected = false;
    enemySelected = false;
    gameIsOver = false;
    $("#playerCharContainer").attr("style","display:none");
    $("#playerSelectContainer").attr("style","display:block");
    $("#restartButton").attr("style","display:none");
    $("#attackButton").attr("style","display:none");
    pasteDiv(knight, "playerSelectChar", "#playerSelectContainer");
    pasteDiv(knave, "playerSelectChar", "#playerSelectContainer");
    pasteDiv(emperor, "playerSelectChar", "#playerSelectContainer");
    pasteDiv(justice, "playerSelectChar", "#playerSelectContainer");

};

function playerSelect(chosen) {

    playerChar = {
        name: chosen.name,
        image: chosen.image,
        HP: chosen.HP,
        baseAttack: chosen.baseAttack,
        attack: chosen.attack,
        counter: chosen.counter,
    };

    pasteDiv(playerChar, "playerChar", "#playerCharContainer");

    $('#playerSelectContainer').children(".playerSelectChar").each(function () {

        var charName = $(this).data();
        
        if (charName !== chosen) { 
            pasteDiv(charName, "enemySelectChar", "#enemySelectContainer");
        };

    });

    playerSelected = true;
    enemiesRemaining = 3;
    $("#playerSelectContainer").empty();
    $("#playerSelectContainer").attr("style","display:none");
    $("#playerCharContainer").attr("style","display:block");
    $("#combatLog").text("Choose your opponent...");

};

function enemySelect(chosen) {

    enemyChar = {
        name: chosen.name,
        image: chosen.image,
        HP: chosen.HP,
        baseAttack: chosen.baseAttack,
        attack: chosen.attack,
        counter: chosen.counter,
    };

    pasteDiv(enemyChar, "enemyChar", "#enemyCharContainer");
    enemySelected = true;
    $("#attackButton").attr("style","display:block");
    $("#combatLog").empty();

};

function attack() {

    $("#combatLog").empty();
    enemyChar.HP -= playerChar.attack;
    $("#combatLog").append("You attacked " + enemyChar.name + " for " + playerChar.attack + " damage. ");
    playerChar.attack += playerChar.baseAttack;

    if (enemyChar.HP > 0) {
        playerChar.HP -= enemyChar.counter;
        $("#combatLog").append(enemyChar.name + " attacked you for " + enemyChar.counter + " damage.");
    };

    if (playerChar.HP <= 0) {
        gameOver();
    };

    if (enemyChar.HP <= 0) {
        enemyDefeat();
    }; 

    $(".playerCharHP").text(playerChar.HP);
    $(".enemyCharHP").text(enemyChar.HP);

};

function enemyDefeat() {

    $("#enemyCharContainer").empty();
    enemySelected = false;
    enemiesRemaining--;

    if (enemiesRemaining == 0) {
        victory();
    }

    else {
        $("#combatLog").text("You have defeated " + enemyChar.name + "! Choose your next opponent...");
    };

};

function gameOver() {
    gameIsOver = true;
    $("#combatLog").text("GAME OVER");
    $("#attackButton").attr("style","display:none");
    $("#restartButton").attr("style","display:block");
};

function victory() {
    gameIsOver = true;
    $("#combatLog").text("You have emerged victorious! Revel in your accomplishment.");
    $("#attackButton").attr("style","display:none");
    $("#restartButton").attr("style","display:block");
};


// CALLS
// ----------------------------

// initialize automatically to start with
initialize();


$("#playerSelectContainer").on("click", ".playerSelectChar", function() {
    if (playerSelected == false) {
        playerSelect($(this).data());
    };
});

$("#enemySelectContainer").on("click", ".enemySelectChar", function() {
    if ((playerSelected == true) && (enemySelected == false)) {
        enemySelect($(this).data());
        $(this).remove();
    };
});

$("#attackButton").on("click", function() {
    if ((playerSelected == true) && (enemySelected == true) && (gameIsOver == false)) {
        attack();
    };
});

$("#restartButton").on("click", function() {
    if (gameIsOver == true) {
        initialize();
    };
});

// IDEAS
// wake up in a dark room with only a table and a hooded figure seated opposite
// you must play a card game to the death
// animate cards bouncing and flipping
// animate attack with cards moving towards each other and a flash of light

// TO DO
// background image (table?)
// card images
// card text font
// switch layout so your cards are at the bottom
// create separate html files for intro, maybe ending
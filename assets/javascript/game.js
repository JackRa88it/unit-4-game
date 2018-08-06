// GLOBAL LIBRARY OF CHARACTERS/VARIABLES
// ----------------------------

var obiWan = {
    name: "Obi-Wan Kenobi",
    image: "assets/images/obiwan.png",
    HP: 120,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var luke = {
    name: "Luke Skywalker",
    image: "assets/images/luke.jpg",
    HP: 100,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var darthSidious = {
    name: "Darth Sidious",
    image: "assets/images/sidious.jpg",
    HP: 150,
    baseAttack: 6,
    attack: 6,
    counter: 10,
};

var darthMaul = {
    name: "Darth Maul",
    image: "assets/images/maul.jpg",
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
    name.text(char.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:char.image, alt:"character img"})
    div.append(image);
    var HP = $("<p>");
    HP.attr("class", (className + "HP"))
    HP.text(char.HP);
    div.append(HP);
    $(containerID).append(div);

};


function initialize() {

    $("#playerSelectContainer").empty();
    $("#enemySelectContainer").empty();
    $("#playerCharContainer").empty();
    $("#enemyCharContainer").empty();
    $("#combatLog").empty();
    playerSelected = false;
    enemySelected = false;
    gameIsOver = false;
    $("#restartButton").attr("style","display:none");
    pasteDiv(obiWan, "playerSelectChar", "#playerSelectContainer");
    pasteDiv(luke, "playerSelectChar", "#playerSelectContainer");
    pasteDiv(darthSidious, "playerSelectChar", "#playerSelectContainer");
    pasteDiv(darthMaul, "playerSelectChar", "#playerSelectContainer");

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

    $("#playerSelectContainer").empty();
    playerSelected = true;
    enemiesRemaining = 3;

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
    $("#combatLog").text("You have defeated " + enemyChar.name + "!");
    enemySelected = false;
    enemiesRemaining--;

    if (enemiesRemaining == 0) {
        victory();
    };

};

function gameOver() {
    gameIsOver = true;
    $("#combatLog").text("GAME OVER");
    $("#restartButton").attr("style","display:initial");
};

function victory() {
    gameIsOver = true;
    $("#combatLog").text("You have emerged victorious! Revel in your accomplishment.");
    $("#restartButton").attr("style","display:initial");
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
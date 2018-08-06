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

// function pasteDiv(char, type, where) {
//     var div = $("<div>");
//     div.attr({"class":type});
//     div.data(char);
//     var name = $("<p>");
//     name.text(char.name);
//     div.append(name);
//     var image = $("<img>");
//     image.attr({src:char.image, alt:"character img"})
//     div.append(image);
//     var HP = $("<p>");
//     HP.text(char.HP);
//     div.append(HP);
//     $(where).append(div);
// };


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

    var div = $("<div>");
    div.attr({"class":"playerSelectChar"});
    div.data(obiWan);
    var name = $("<p>");
    name.text(obiWan.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:obiWan.image, alt:"Obi-Wan img"})
    div.append(image);
    var HP = $("<p>");
    HP.text(obiWan.HP);
    div.append(HP);
    $("#playerSelectContainer").append(div);

    var div = $("<div>");
    div.attr("class", "playerSelectChar");
    div.data(luke);
    var name = $("<p>");
    name.text(luke.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:luke.image, alt:"Luke Skywalker img"})
    div.append(image);
    var HP = $("<p>");
    HP.text(luke.HP);
    div.append(HP);
    $("#playerSelectContainer").append(div);

    var div = $("<div>");
    div.attr("class", "playerSelectChar");
    div.data(darthSidious);
    var name = $("<p>");
    name.text(darthSidious.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:darthSidious.image, alt:"Darth Sidious img"})
    div.append(image);
    var HP = $("<p>");
    HP.text(darthSidious.HP);
    div.append(HP);
    $("#playerSelectContainer").append(div);

    var div = $("<div>");
    div.attr("class", "playerSelectChar");
    div.data(darthMaul);
    var name = $("<p>");
    name.text(darthMaul.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:darthMaul.image, alt:"Darth Maul img"})
    div.append(image);
    var HP = $("<p>");
    HP.text(darthMaul.HP);
    div.append(HP);
    $("#playerSelectContainer").append(div);

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

    var div = $("<div>");
    div.attr("id", "playerChar");
    var name = $("<p>");
    name.text(playerChar.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:playerChar.image, alt:"Player Char img"})
    div.append(image);
    var HP = $("<p>");
    HP.attr("id", "playerHP")
    HP.text(playerChar.HP);
    div.append(HP);
    $("#playerCharContainer").append(div);

    // move other three to fill available enemies divs
    $('#playerSelectContainer').children(".playerSelectChar").each(function () {

        var charName = $(this).data();
        
        if (charName !== chosen) { 
            var div = $("<div>");
            div.attr({"class":"enemySelectChar"});
            div.data(charName);
            var name = $("<p>");
            name.text(charName.name);
            div.append(name);
            var image = $("<img>");
            image.attr({src:charName.image, alt:"Obi-Wan img"})
            div.append(image);
            var HP = $("<p>");
            HP.text(charName.HP);
            div.append(HP);
            $("#enemySelectContainer").append(div);
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

    var div = $("<div>");
    div.attr("id", "enemyChar");
    var name = $("<p>");
    name.text(enemyChar.name);
    div.append(name);
    var image = $("<img>");
    image.attr({src:enemyChar.image, alt:"Enemy Char img"})
    div.append(image);
    var HP = $("<p>");
    HP.attr("id", "enemyHP")
    HP.text(enemyChar.HP);
    div.append(HP);
    $("#enemyCharContainer").append(div);

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

    $("#playerHP").text(playerChar.HP);
    $("#enemyHP").text(enemyChar.HP);

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

// TUTORING NOTES
// reduce div pasting into a function with multiple params (chosen, whereToPutIt)
// make the char divs img alts not all be "obiWan"

// IDEAS
// wake up in a dark room with only a table and a hooded figure seated opposite
// you must play a card game to the death
// animate cards bouncing and flipping
// animate attack with cards moving towards each other and a flash of light
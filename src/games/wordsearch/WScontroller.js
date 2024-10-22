"use strict";

/* 
Sets up the word search game and button functions (all variables are strings)

Parameters:
gameId ID - the word search game div (where the actual grid of letters goes)
listId ID - the div where the list of words to find goes
solveId ID - button to solve the puzzle
newGameId ID - button to start a new game
themeId ID - part of the h3 heading (to show the theme of the word search)
challengeId - button to begin Race the Clock
timeID - shows the time left
*/


function WordSearchController(gameId, listId, solveId, newGameId, themeId, challengeId, timerId) {

    //an object containing various themes/words for the game
    var searchTypes = {

        "Copyright!": [["Copyright", "pixels", "algorithm", "highscore"],
        ["donkey kong", "quarter", "scoreboard", "space invaders"],
        ["tron", "gameover", "leaderboard", "galaga"],
        ["defender", "powerup", "sprite", "frogger"],
        ["joystick", "asteriods", "pacman", "centipede"]],

        "Patent!": [["patent", "canada", "brazil", "germany"],
        ["france", "italy", "united kingdom", "australia"],
        ["south korea", "mexico", "argentina", "spain"],
        ["japan", "china", "india", "russia"],
        ["south africa", "egypt", "turkey", "saudi arabia"]],

        "Trademark!✨": [["trademark", "AAAAAAAAAA", "cinderella", "pixar"],
        ["frozen", "aladdin", "little mermaid", "goofy"],
        ["donald duck", "snow white", "mulan", "moana"],
        ["jungle book", "pocahontas", "pinocchio", "General hux"],
        ["lion king", "dumbo", "jack sparrow", "buzz lightyear"]],

        "Tradesecret!🪼": [["tradesecret", "dolphin", "shark", "octupus"],
        ["reef", "jellyfish", "seahorse", "whale"],
        ["squid", "seaweed", "starfish", "clam"],
        ["mantee", "lobster", "crab", "eel"],
        ["manta ray", "algae", "tide", "sea turtle"]],
    };

    //variables to store game logic, it's view, and AI logic
    var game;
    var view;
    var AIlogic;


    // Declare timerInterval in a broader scope and game states
    let timerInterval;
    let isFirstRound = true;
    let continueGame = true;


    // Function to start the timer
    function startTimer() {
        let timeLeft = isFirstRound ? 40 : 20;

        timerInterval = setInterval(function () {
            //checks if continueGame is false
            //if it is false then the timer will stop -> meaning all words have been found
            //console.log('during');
            if (!continueGame) {
                $(timerId).text('Game Over'); //might need to fix!
                clearInterval(timerInterval);
                return; // Exit the interval callback function

            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                AIlogic.logic();

                if (continueGame) {
                    isFirstRound = false;
                    startTimer();
                }
            } else {
                $(timerId).text(`Time Left: ${timeLeft}s`);
                timeLeft--;
            }
            //console.log('last')
        }, 1000);
    }



    // Function to reset the game state
    function resetGame() {
        // Stop the timer
        clearInterval(timerInterval);

        // Reset the timer display to 30 seconds
        $(timerId).text('Time Left: 40s');

        // Reset the round state and the game continuation state
        isFirstRound = true;
        continueGame = true;

        // Clear the timer reference
        timerInterval = null;
    }

    //function call to start the word search game
    setUpWordSearch();

    //randomly selects a word theme
    function setUpWordSearch() {

        let wordsFound = [];

        //generates a random theme 
        var searchTypesArray = Object.keys(searchTypes); //converts theme object to array
        // var randIndex = Math.floor(Math.random()*searchTypesArray.length); //generates random number/index

        let wordSearchName;
        const urlParams = new URLSearchParams(window.location.search);
        const wordSearchType = urlParams.get('type')?.toLowerCase();

        console.log(wordSearchType);

        var randIndex = 0
        if (wordSearchType === "tradesecret") {
            randIndex = 3
        } else if (wordSearchType === "copyright") {
            randIndex = 0
        } else if (wordSearchType === "patent") {
            randIndex = 1
        } else if (wordSearchType === "trademark") {
            randIndex = 2
        } else {
            randIndex = 0
        }

        var listOfWords = searchTypes[searchTypesArray[randIndex]]; //retrieves the matrix of words from random index

        //converts letters to uppercase
        convertToUpperCase(listOfWords);

        //sets the headings to reflect the instructions and themes
        updateHeadings(searchTypesArray[randIndex]);

        //runs the logic of the game using a close of the word list (to avoid the actual object being altered)
        game = new WordSearchLogic(gameId, listOfWords.slice());
        game.setUpGame();

        //generates the view of the game and sets up mouse events for clicking and dragging
        view = new WordSearchView(game.getMatrix(), game.getListOfWords(), gameId, listId, wordsFound, timerInterval, timerId);
        view.setUpView();
        view.triggerMouseDrag();

        // Function to update game state
        function updateGameState(newState) {
            continueGame = newState;
        }


        //generates the AI logic
        AIlogic = new WordSearchAILogic(updateGameState, timerId, game.getListOfWords(), wordsFound, game.getWordLocations());
    }

    //converts a given 2D array of words to all uppercase
    function convertToUpperCase(wordList) {
        for (var i = 0; i < wordList.length; i++) {
            for (var j = 0; j < wordList[i].length; j++) {
                wordList[i][j] = wordList[i][j].toUpperCase();
            }
        }
    }

    //updates the theme heading
    function updateHeadings(theme) {
        $(themeId).text(theme);
    }

    //solves the word search puzzle when the solve button is clicked
    $(solveId).click(function () {

        view.solve(game.getWordLocations(), game.getMatrix());

        // Stop the timer if started
        clearInterval(timerInterval);

        $(timerId).text('Game Over!');
    });

    //empties the games and list divs and replaces them with a new setup
    $(newGameId).click(function () {
        //add hide class for timer display 
        $(timerId).addClass('hide');

        // Stop the timer if started
        clearInterval(timerInterval);

        //empties the game and list elements, as well as the h3 theme span element
        $(gameId).empty();
        $(listId).empty();
        $(themeId).empty();

        document.getElementById('gameInfo').textContent = 'Click-and-Drag to select words! Or press Race the Clock for a Challenge!';
        //calls the set up to create a new word search game
        setUpWordSearch();

    })

    //starts the timer and AI logic along with emptying the games and listing divs and replacing them with a new setup
    $(challengeId).click(function () {
        resetGame(); // Reset everything

        //remove hide class for timer display 
        $(timerId).removeClass('hide');

        startTimer(); // Start the timer again

        //empties the game and list elements, as well as the h3 theme span element
        $(gameId).empty();
        $(listId).empty();
        $(themeId).empty();

        document.getElementById('gameInfo').textContent = 'Click-and-Drag to select words! Or press Race the Clock for a Challenge!';
        //calls the set up to create a new word search game
        setUpWordSearch();

    });
}
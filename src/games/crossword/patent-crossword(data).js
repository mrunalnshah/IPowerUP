(function ($) {
    $(function () {
        var puzzleData = [
            // {
            //   clue: "A government grant to an inventor, his heirs,or assigns,for a stated period of time conferring excludsive right to make,use,license or vend an invention, process etc.",
            //   answer: "patent",
            //   position: 1,
            //   orientation: "down",
            //   startx: 6,
            //   starty: 4,
            // },
            // {
            //   clue: "How many types of patents are there?",
            //   answer: "three",
            //   position: 2,
            //   orientation: "across",
            //   startx: 3,
            //   starty: 7,
            // },
            // {
            //   clue: "Granted to anyone who invents or discovers any new and useful process ,machine,article of manufacture or any new or useful improvement.",
            //   answer: "utility",
            //   position: 3,
            //   orientation: "down",
            //   startx: 11,
            //   starty: 1,
            // },
            // {
            //   clue: "Granted to anyone who invents a new,original and ornamental design for an article for manufacture.",
            //   answer: "design",
            //   position: 4,
            //   orientation: "across",
            //   startx: 9,
            //   starty: 1,
            // },
            // {
            //   clue: "Granted to anyone who invents or discovers and discovers and asexually reproduces any distinct and new variety of plant.",
            //   answer: "plant",
            //   position: 5,
            //   orientation: "down",
            //   startx: 13,
            //   starty: 5,
            // },
            // {
            { clue:"How many types of patents are there?","answer": "three", "startx": 11, "starty": 3, "orientation": "down", "position": 1 },
            { clue:"A government grant to an inventor, his heirs,or assigns,for a stated period of time conferring excludsive right to make,use,license or vend an invention, process etc.","answer": "patent", "startx": 9, "starty": 1, "orientation": "down", "position": 2 }, 
            { clue:"Granted to anyone who invents a new,original and ornamental design for an article for manufacture.","answer": "design", "startx": 10, "starty": 7, "orientation": "across", "position": 3 }, 
            { clue:"Granted to anyone who invents or discovers any new and useful process ,machine,article of manufacture or any new or useful improvement.","answer": "utility", "startx": 1, "starty": 7, "orientation": "across", "position": 4 }, 
            { clue:"Granted to anyone who invents or discovers and discovers and asexually reproduces any distinct and new variety of plant.","answer": "plant", "startx": 13, "starty": 1, "orientation": "down", "position": 5 }, 
            { clue:"For how many years does patent permission lasts?","answer": "twenty", "startx": 7, "starty": 2, "orientation": "down", "position": 6 }, 
            { clue:"Alexander Graham Bell got patent for what?","answer": "telephone", "startx": 6, "starty": 4, "orientation": "across", "position": 7 }, 
            { clue:"The word patent is originated from which language?","answer": "latin", "startx": 13, "starty": 2, "orientation": "across", "position": 8 }, 
            { clue:"Wright brothers got patent for what?","answer": "airplane", "startx": 4, "starty": 3, "orientation": "down", "position": 9 }, 
            { clue:"Thomas edison got patent for what?","answer": "lightbulb", "startx": 1, "starty": 1, "orientation": "down", "position": 10 }
        ];

        $("#puzzle-wrapper").crossword(puzzleData);
    });
})(jQuery);

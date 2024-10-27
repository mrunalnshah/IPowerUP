(function ($) {
    $(function () {
        var puzzleData = [
            // Trademark
            [
                { "clue": "What do you call a legal process in which a trademark owner seeks to enforce their rights against infringers?", "answer": "Litigation", "startx": 8, "starty": 2, "orientation": "across", "position": 1 },
                { "clue": "What do you call a trademark that has lost its distinctiveness due to generic use?", "answer": "Generic", "startx": 2, "starty": 3, "orientation": "across", "position": 2 },
                { "clue": "What is the name of the fashion designer known for the LV monogram and luxury handbags?", "answer": "LouisVuitton", "startx": 2, "starty": 5, "orientation": "across", "position": 3 },
                { "clue": "What is the process of legally protecting a brand or mark in India, ensuring it cannot be used without permission?", "answer": "Obtainment", "startx": 3, "starty": 10, "orientation": "across", "position": 4 },
                { "clue": "Once registered, a trademark in India is valid for how many years?", "answer": "ten", "startx": 1, "starty": 11, "orientation": "across", "position": 5 },
                { "clue": "What is the maximum number of years a trademark can be renewed in India before it must be reassessed for renewal?", "answer": "Eighteen", "startx": 11, "starty": 1, "orientation": "down", "position": 6 },
                { "clue": "What is the process called when a trademark is declared invalid in India due to lack of distinctiveness?", "answer": "Revocation", "startx": 3, "starty": 2, "orientation": "down", "position": 7 },
                { "clue": "What is the term for a logo that is protected as a trademark, such as the Nike swoosh?", "answer": "Icon", "startx": 9, "starty": 5, "orientation": "down", "position": 8 },
                { "clue": "What is the brand known for its iconic swoosh logo and athletic footwear?", "answer": "Nike", "startx": 13, "starty": 5, "orientation": "down", "position": 9 }
            ],
            // Copyright
            [
                { "clue": "What is the term for the exclusive legal right of authors to reproduce, publish, and sell their original works?", "answer": "Copyright", "startx": 6, "starty": 1, "orientation": "across", "position": 1 },
                { "clue": "What is the term for an unauthorized use of copyrighted material?", "answer": "Encroach", "startx": 14, "starty": 5, "orientation": "across", "position": 2 },
                { "clue": "What term describes a legal exemption allowing limited use of copyrighted material, often for commentary or education?", "answer": "General", "startx": 1, "starty": 5, "orientation": "across", "position": 3 },
                { "clue": "What term refers to a copyright violation that results from copying someone else's work?", "answer": "Plagiarism", "startx": 6, "starty": 8, "orientation": "across", "position": 4 },
                { "clue": "What is the term for the unauthorized use of copyrighted material that can lead to legal action?", "answer": "Infringe", "startx": 1, "starty": 14, "orientation": "across", "position": 5 },
                { "clue": "What is the exclusive right granted to authors for their creative works?", "answer": "Title", "startx": 14, "starty": 1, "orientation": "down", "position": 6 },
                { "clue": "What is the term for the payment made to a copyright holder for the use of their work?", "answer": "Royalty", "startx": 11, "starty": 5, "orientation": "down", "position": 7 },
                { "clue": "What is the term for an author's exclusive right to publish, produce, and sell their creative work?", "answer": "License", "startx": 14, "starty": 3, "orientation": "down", "position": 8 },
                { "clue": "What term refers to the act of making a derivative work based on a copyrighted book, such as a movie adaptation?", "answer": "Adaptation", "startx": 6, "starty": 5, "orientation": "down", "position": 9 }
            ],
            // Patent
            [
                { clue: "How many types of patents are there?", "answer": "three", "startx": 11, "starty": 3, "orientation": "down", "position": 1 },
                { clue: "A government grant to an inventor, his heirs,or assigns,for a stated period of time conferring excludsive right to make,use,license or vend an invention, process etc.", "answer": "patent", "startx": 9, "starty": 1, "orientation": "down", "position": 2 },
                { clue: "Granted to anyone who invents a new,original and ornamental design for an article for manufacture.", "answer": "design", "startx": 10, "starty": 7, "orientation": "across", "position": 3 },
                { clue: "Granted to anyone who invents or discovers any new and useful process ,machine,article of manufacture or any new or useful improvement.", "answer": "utility", "startx": 1, "starty": 7, "orientation": "across", "position": 4 },
                { clue: "Granted to anyone who invents or discovers and discovers and asexually reproduces any distinct and new variety of plant.", "answer": "plant", "startx": 13, "starty": 1, "orientation": "down", "position": 5 },
                { clue: "For how many years does patent permission lasts?", "answer": "twenty", "startx": 7, "starty": 2, "orientation": "down", "position": 6 },
                { clue: "Alexander Graham Bell got patent for what?", "answer": "telephone", "startx": 6, "starty": 4, "orientation": "across", "position": 7 },
                { clue: "The word patent is originated from which language?", "answer": "latin", "startx": 13, "starty": 2, "orientation": "across", "position": 8 },
                { clue: "Wright brothers got patent for what?", "answer": "airplane", "startx": 4, "starty": 3, "orientation": "down", "position": 9 },
                { clue: "Thomas edison got patent for what?", "answer": "lightbulb", "startx": 1, "starty": 1, "orientation": "down", "position": 10 }
            ],
            // Tradesecret
            [
                { "clue": "What term refers to the process of making sure that only authorized personnel have access to trade secrets?", "answer": "Access", "startx": 6, "starty": 1, "orientation": "across", "position": 1 },
                { "clue": "What is the term for a legal action taken by a trade secret owner against someone who improperly acquires or discloses their secret?", "answer": "Misappropriation", "startx": 1, "starty": 4, "orientation": "across", "position": 2 },
                { "clue": "Which famous recipe is often cited as an example of a valuable trade secret?", "answer": "Coca-Cola", "startx": 5, "starty": 12, "orientation": "across", "position": 3 },
                { "clue": "What term refers to a legal claim involving the theft or misuse of trade secrets?", "answer": "Violation", "startx": 1, "starty": 9, "orientation": "across", "position": 4 },
                { "clue": "What is the term for the value that a trade secret holds due to its confidential nature?", "answer": "Economic", "startx": 1, "starty": 11, "orientation": "across", "position": 5 },

                { "clue": "What is the term for the process of keeping trade secrets confidential through policies and practices?", "answer": "Secrecy", "startx": 10, "starty": 1, "orientation": "down", "position": 6 },
                { "clue": "What type of agreement is often used to protect trade secrets when sharing information with employees or partners?", "answer": "NDA", "startx": 4, "starty": 2, "orientation": "down", "position": 7 },
                { "clue": "What is the term for a formal policy that outlines how a company protects its trade secrets?", "answer": "Policy", "startx": 15, "starty": 3, "orientation": "down", "position": 8 },
                { "clue": "What is the term for a legal framework that safeguards trade secrets in various jurisdictions?", "answer": "Protection", "startx": 6, "starty": 4, "orientation": "down", "position": 9 }
            ]
        ];
        const urlParams = new URLSearchParams(window.location.search);
        const wordSearchType = urlParams.get('type')?.toLowerCase();

        var randomIndex = 0
        if (wordSearchType === "trademark") {
            randomIndex = 0
            document.getElementById("gameType").innerHTML = "Trademark";
        } else if (wordSearchType === "copyright") {
            randomIndex = 1
            document.getElementById("gameType").innerHTML = "Copyright";
        } else if (wordSearchType === "patent") {
            randomIndex = 2
            document.getElementById("gameType").innerHTML = "Patent";
        } else if (wordSearchType === "tradesecret") {
            randomIndex = 3
            document.getElementById("gameType").innerHTML = "Tradesecret";
        } else {
            randomIndex = 0
            document.getElementById("gameType").innerHTML = "Trademark";
        }
        localStorage.setItem("crosswordType", randomIndex);
        $("#puzzle-wrapper").crossword(puzzleData[randomIndex]);
    });
})(jQuery);

let divs = document.querySelectorAll(".keyboard div");
let hintDiv= document.querySelector(".hint p");
let letters= document.querySelector(".letters");
let guesses= document.querySelector(".guesses p")
let hangManImg=document.querySelector(".hangman img");
let game_modal=document.querySelector(".game-modal");
let playAgn_btn= document.querySelector(".game-modal button");
let correctWord= document.querySelector(".game-modal b");
let modalPara= document.querySelector(".game-modal p");
let modalImg= document.querySelector(".game-modal img");
let game_modalCnt= document.querySelector(".game-modal-content");
let modalH4= document.querySelector(".game-modal h4");
let heading = document.querySelector(".heading");
let headingBtn= document.querySelector(".heading button");
let nextBtn= document.querySelector(".next-word button");
let how_to_play= document.querySelector(".how-to-play");
let got_itBtn= document.querySelector(".how-to-play button");

const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];

let wrongGuesses=0; 
let wordNo=0;
let word='';
let hint='';

headingBtn.addEventListener("click", ()=> {
    heading.style.display="none";
    how_to_play.style.display="flex";
})

got_itBtn.addEventListener("click", ()=> {
    how_to_play.style.display="none";
})

let ascii = 65; // Starting ASCII value
for (let div of divs) {
    let keys = div.querySelectorAll("button"); // Select buttons within this div
    for (let key of keys) {
        key.innerHTML = String.fromCharCode(ascii);
        ascii += 1;
    }
}

let generateWord= () =>{
    guesses.innerHTML="";
    wrongGuesses=0;
    guesses.innerHTML=wrongGuesses+"/7";
    wordNo=(Math.floor(Math.random()*wordList.length));
    word = wordList[wordNo].word;
    hint= wordList[wordNo].hint;
    hintDiv.innerHTML=hint;
    letters.innerHTML = '';
    for(let i=0; i<word.length; i++){
        let letter= document.createElement("p");
        letters.appendChild(letter);
    }
}
    
let wordGuess= (ltr,key) => {
    let correctGuess = false;
    for(let i=0; i<word.length; i++){
        if(word[i]==ltr){
            letters.children[i].textContent=ltr;
            correctGuess=true;
        }
    }
    if(!correctGuess){
        wrongGuesses++;
        guesses.innerHTML=wrongGuesses+"/7";
        hangManImg.src="image-removebg-preview ("+wrongGuesses+").png"
    }
        
    let guessedWord= "";
    for(let i=0; i<word.length; i++){
        guessedWord+=letters.children[i].innerText;
    }

    if(guessedWord===word){
        game_modal.style.display="flex";
        modalH4.innerHTML="Congo! You Won"
        correctWord.innerHTML=word;
        modalImg.src="happy.gif";
        game_modalCnt.style.backgroundColor="#f8f9f7";
    }else if(wrongGuesses==7) {
        game_modal.style.display="flex";
        modalH4.innerHTML="Game Over! You Lost"
        modalImg.src="https://media.tenor.com/925LDfyVUGEAAAAj/cute-sad.gif";
        correctWord.innerHTML=word;
    }
    key.disabled=true;
}

for (let div of divs) {
    let keys = div.querySelectorAll("button"); // Select buttons within this div
    for (let key of keys) {
        key.addEventListener("click", ()=>wordGuess(key.innerText.toLowerCase(),key));
    }
}

let resetGame= ()=>{
    hintDiv.innerHTML=""; 
    hangManImg.src="image-removebg-preview (0).png";
    wrongGuesses=0;
    guesses.innerHTML=wrongGuesses+"/7";
    for (let div of divs) {
        let keys = div.querySelectorAll("button"); // Select buttons within this div
        for (let key of keys) {
            key.disabled=false;
        }
    }
    generateWord();
}

nextBtn.addEventListener("click", ()=> resetGame());

playAgn_btn.addEventListener("click",()=>{
    game_modal.style.display="none";
    resetGame();
})


generateWord();









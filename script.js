/* =========================================
   QUIZNOVA — COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   QUIZ DATA
========================================= */

const quizData = {

    general: [
        {
            question: "What is the capital of France?",
            options: [
                "London",
                "Paris",
                "Berlin",
                "Madrid"
            ],
            answer: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Earth",
                "Venus",
                "Mars",
                "Jupiter"
            ],
            answer: 2
        },
        {
            question: "How many continents are there?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2
        },
        {
            question: "Which is the largest ocean?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: 2
        },
        {
            question: "Which language is primarily spoken in Brazil?",
            options: [
                "Spanish",
                "Portuguese",
                "French",
                "English"
            ],
            answer: 1
        }
    ],


    programming: [
        {
            question: "Which language is commonly used for web development?",
            options: [
                "JavaScript",
                "Photoshop",
                "Excel",
                "PowerPoint"
            ],
            answer: 0
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            options: [
                "#",
                "//",
                "<!-- -->",
                "**"
            ],
            answer: 1
        },
        {
            question: "Which keyword declares a constant in JavaScript?",
            options: [
                "var",
                "let",
                "const",
                "constant"
            ],
            answer: 2
        },
        {
            question: "Which language is known for its simple and readable syntax?",
            options: [
                "Python",
                "Assembly",
                "Machine Code",
                "Binary"
            ],
            answer: 0
        },
        {
            question: "Which data structure follows FIFO?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            answer: 1
        }
    ],


    web: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },
        {
            question: "Which language is used to style web pages?",
            options: [
                "HTML",
                "CSS",
                "Python",
                "SQL"
            ],
            answer: 1
        },
        {
            question: "Which HTML tag creates a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },
        {
            question: "Which CSS property changes text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],
            answer: 2
        },
        {
            question: "Which technology adds interactivity to web pages?",
            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],
            answer: 2
        }
    ],


    science: [
        {
            question: "What is the chemical formula for water?",
            options: [
                "CO2",
                "H2O",
                "O2",
                "NaCl"
            ],
            answer: 1
        },
        {
            question: "Which planet is closest to the Sun?",
            options: [
                "Venus",
                "Earth",
                "Mercury",
                "Mars"
            ],
            answer: 2
        },
        {
            question: "What force keeps us on Earth?",
            options: [
                "Magnetism",
                "Gravity",
                "Friction",
                "Electricity"
            ],
            answer: 1
        },
        {
            question: "What gas do humans need to breathe?",
            options: [
                "Carbon Dioxide",
                "Nitrogen",
                "Oxygen",
                "Hydrogen"
            ],
            answer: 2
        },
        {
            question: "What is the basic unit of life?",
            options: [
                "Atom",
                "Cell",
                "Tissue",
                "Organ"
            ],
            answer: 1
        }
    ],


    technology: [
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],
            answer: 0
        },
        {
            question: "Which company developed Android?",
            options: [
                "Microsoft",
                "Apple",
                "Google",
                "IBM"
            ],
            answer: 2
        },
        {
            question: "What does AI stand for?",
            options: [
                "Automated Internet",
                "Artificial Intelligence",
                "Advanced Information",
                "Automatic Interface"
            ],
            answer: 1
        },
        {
            question: "Which device is used to store data permanently?",
            options: [
                "RAM",
                "CPU",
                "SSD",
                "Monitor"
            ],
            answer: 2
        },
        {
            question: "What does USB stand for?",
            options: [
                "Universal Serial Bus",
                "United System Board",
                "Universal System Backup",
                "User Serial Block"
            ],
            answer: 0
        }
    ],


    entertainment: [
        {
            question: "Which industry is commonly associated with Hollywood?",
            options: [
                "Technology",
                "Film",
                "Agriculture",
                "Automobile"
            ],
            answer: 1
        },
        {
            question: "Which instrument has black and white keys?",
            options: [
                "Guitar",
                "Violin",
                "Piano",
                "Drums"
            ],
            answer: 2
        },
        {
            question: "Which medium is primarily used for watching movies online?",
            options: [
                "Streaming",
                "Printing",
                "Scanning",
                "Typing"
            ],
            answer: 0
        },
        {
            question: "Which of these is a musical instrument?",
            options: [
                "Camera",
                "Guitar",
                "Projector",
                "Keyboard Monitor"
            ],
            answer: 1
        },
        {
            question: "Which award is associated with the film industry?",
            options: [
                "Oscar",
                "Nobel",
                "Pulitzer",
                "Grammy"
            ],
            answer: 0
        }
    ]

};

/* =========================================
   QUIZ STATE
========================================= */

let currentQuiz = [];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;

let currentCategory = "";

let timeLeft = 30;

let timerInterval;


/* =========================================
   DOM ELEMENTS
========================================= */

const quizSection =
    document.querySelector(".quiz-section");

const resultSection =
    document.querySelector(".result-section");

const questionText =
    document.querySelector(".question-card h3");

const questionCategory =
    document.querySelector(".question-category");

const answersContainer =
    document.querySelector(".answers");

const nextButton =
    document.querySelector(".next-btn");

const progressFill =
    document.querySelector(".progress-fill");

const questionNumber =
    document.querySelector(".progress-info span:first-child");

const questionProgress =
    document.querySelector(".progress-info span:last-child");

const timerDisplay =
    document.querySelector(".timer strong");

const quizTitle =
    document.querySelector(".quiz-top h2");


/* =========================================
   NAVIGATION
========================================= */

const menuButton =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-menu");


if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("open");

        }
    );

}


document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (navMenu) {
                    navMenu.classList.remove("open");
                }

            }
        );

    });


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }
);


/* =========================================
   CATEGORY CARDS
========================================= */

document.querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                if (quizData[category]) {

                    startQuiz(category);

                }

            }
        );

    });


/* =========================================
   START QUIZ
========================================= */

function startQuiz(category) {

    currentCategory = category;

    currentQuiz =
        [...quizData[category]];

    currentQuestion = 0;

    score = 0;

    selectedAnswer = false;


    if (quizSection) {

        quizSection.classList.add("active");

    }


    if (resultSection) {

        resultSection.classList.remove("active");

    }


    if (quizTitle) {

        quizTitle.textContent =
            `${getCategoryName(category)} Quiz`;

    }


    loadQuestion();


    if (quizSection) {

        setTimeout(() => {

            quizSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }

}
/* =========================================
   HOME - START QUIZ BUTTON
========================================= */

const startQuizBtn = document.getElementById("startQuizBtn");

if (startQuizBtn) {

    startQuizBtn.addEventListener("click", () => {

        const categoriesSection =
            document.getElementById("categories");

        if (categoriesSection) {

            categoriesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        } else {

            console.error("Categories section not found.");

        }

    });

}


/* =========================================
   CATEGORY NAME
========================================= */

function getCategoryName(category) {

    const names = {

        html: "HTML",

        css: "CSS",

        javascript: "JavaScript",

        python: "Python",

        sql: "SQL",

        general: "General Knowledge"

    };

    return names[category] || "Quiz";

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    selectedAnswer = false;

    if (nextButton) {

        nextButton.disabled = true;

    }


    const question =
        currentQuiz[currentQuestion];


    if (!question) return;


    if (questionText) {

        questionText.textContent =
            question.question;

    }


    if (questionCategory) {

        questionCategory.textContent =
            getCategoryName(currentCategory);

    }


    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1}`;

    }


    if (questionProgress) {

        questionProgress.textContent =
            `${currentQuestion + 1} / ${currentQuiz.length}`;

    }


    if (progressFill) {

        const progress =
            ((currentQuestion + 1) /
                currentQuiz.length) * 100;

        progressFill.style.width =
            `${progress}%`;

    }


    if (!answersContainer) return;


    answersContainer.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";


            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="answer-text">
                    ${option}
                </span>
            `;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    startTimer();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (selectedAnswer) return;


    selectedAnswer = true;


    const correctIndex =
        currentQuiz[currentQuestion].answer;


    const allAnswers =
        document.querySelectorAll(".answer");


    allAnswers.forEach(
        button => {

            button.classList.add("disabled");

        }
    );


    if (selectedIndex === correctIndex) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("wrong");

        if (allAnswers[correctIndex]) {

            allAnswers[correctIndex]
                .classList.add("correct");

        }

    }


    if (nextButton) {

        nextButton.disabled = false;

    }


    clearInterval(timerInterval);

}


/* =========================================
   NEXT QUESTION
========================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            if (!selectedAnswer) return;


            currentQuestion++;


            if (
                currentQuestion >=
                currentQuiz.length
            ) {

                finishQuiz();

            } else {

                loadQuestion();

            }

        }
    );

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);


    timeLeft = 30;


    updateTimer();


    timerInterval =
        setInterval(
            () => {

                timeLeft--;


                updateTimer();


                if (timeLeft <= 0) {

                    clearInterval(timerInterval);

                    handleTimeUp();

                }

            },
            1000
        );

}


/* =========================================
   UPDATE TIMER
========================================= */

function updateTimer() {

    if (!timerDisplay) return;


    timerDisplay.textContent =
        timeLeft;


    if (timeLeft <= 10) {

        timerDisplay.classList.add(
            "warning"
        );

    } else {

        timerDisplay.classList.remove(
            "warning"
        );

    }

}


/* =========================================
   TIME UP
========================================= */

function handleTimeUp() {

    if (selectedAnswer) return;


    selectedAnswer = true;


    const correctIndex =
        currentQuiz[currentQuestion].answer;


    const allAnswers =
        document.querySelectorAll(".answer");


    allAnswers.forEach(
        button => {

            button.classList.add("disabled");

        }
    );


    if (allAnswers[correctIndex]) {

        allAnswers[correctIndex]
            .classList.add("correct");

    }


    if (nextButton) {

        nextButton.disabled = false;

    }

}


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    clearInterval(timerInterval);


    if (quizSection) {

        quizSection.classList.remove("active");

    }


    if (resultSection) {

        resultSection.classList.add("active");

    }


    showResults();


    if (resultSection) {

        setTimeout(() => {

            resultSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {

    const total =
        currentQuiz.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    /* -----------------------------------------
       MAIN SCORE
    ----------------------------------------- */

    const scoreElement =
        document.querySelector(
            ".score-inner strong"
        );


    const totalElement =
        document.querySelector(
            ".score-inner span"
        );


    if (scoreElement) {

        scoreElement.textContent =
            score;

    }


    if (totalElement) {

        totalElement.textContent =
            `/${total}`;

    }


    /* -----------------------------------------
       RESULT TITLE
    ----------------------------------------- */

    const resultTitle =
        document.querySelector(
            ".result-container h2"
        );


    const resultMessage =
        document.querySelector(
            ".result-message"
        );


    if (percentage >= 80) {

        if (resultTitle) {

            resultTitle.textContent =
                "Excellent!";

        }

        if (resultMessage) {

            resultMessage.textContent =
                "Outstanding performance. Keep learning!";

        }

    }

    else if (percentage >= 60) {

        if (resultTitle) {

            resultTitle.textContent =
                "Great Job!";

        }

        if (resultMessage) {

            resultMessage.textContent =
                "You have a solid understanding. Keep practicing!";

        }

    }

    else if (percentage >= 40) {

        if (resultTitle) {

            resultTitle.textContent =
                "Good Attempt!";

        }

        if (resultMessage) {

            resultMessage.textContent =
                "You're getting there. A little more practice will help.";

        }

    }

    else {

        if (resultTitle) {

            resultTitle.textContent =
                "Keep Practicing!";

        }

        if (resultMessage) {

            resultMessage.textContent =
                "Don't give up. Every attempt makes you better.";

        }

    }


    /* -----------------------------------------
       RESULT STATISTICS
       FIXES DUPLICATE NUMBERS
    ----------------------------------------- */

    const resultStats =
        document.querySelectorAll(
            ".result-stat"
        );


    if (resultStats.length >= 3) {

        resultStats[0].innerHTML = `
            <span class="stat-number">
                ${score}
            </span>

            <small>
                Correct
            </small>
        `;


        resultStats[1].innerHTML = `
            <span class="stat-number">
                ${total - score}
            </span>

            <small>
                Wrong
            </small>
        `;


        resultStats[2].innerHTML = `
            <span class="stat-number">
                ${percentage}%
            </span>

            <small>
                Accuracy
            </small>
        `;

    }

}


/* =========================================
   RETRY QUIZ
========================================= */

const retryButton =
    document.querySelector(
        ".result-buttons .primary-btn"
    );


if (retryButton) {

    retryButton.addEventListener(
        "click",
        () => {

            startQuiz(
                currentCategory
            );

        }
    );

}


/* =========================================
   CHOOSE CATEGORY
========================================= */

const backButton =
    document.querySelector(
        ".result-buttons .secondary-btn"
    );


if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            if (resultSection) {

                resultSection.classList.remove(
                    "active"
                );

            }


            const categories =
                document.querySelector(
                    "#categories"
                );


            if (categories) {

                categories.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================
   KEYBOARD SHORTCUTS
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !quizSection ||
            !quizSection.classList.contains("active")
        ) {

            return;

        }


        /* -------------------------------------
           1 / 2 / 3 / 4 = ANSWERS
        ------------------------------------- */

        if (
            ["1", "2", "3", "4"]
                .includes(event.key)
        ) {

            const index =
                Number(event.key) - 1;


            const answers =
                document.querySelectorAll(
                    ".answer"
                );


            if (
                answers[index] &&
                !selectedAnswer
            ) {

                answers[index].click();

            }

        }


        /* -------------------------------------
           ENTER = NEXT
        ------------------------------------- */

        if (
            event.key === "Enter" &&
            nextButton &&
            !nextButton.disabled
        ) {

            nextButton.click();

        }

    }
);


/* =========================================
   BACK TO TOP
========================================= */

const topButton =
    document.querySelector(
        ".top-btn"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!topButton) return;


        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    }
);


if (topButton) {

    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =========================================
   INITIAL MESSAGE
========================================= */

console.log(
    "🚀 QuizNova loaded successfully!"
);
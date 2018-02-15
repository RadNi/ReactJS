(function() {
    const myQuestions = [
        {
            question: "Hello",
            answers: {

            },
            correctAnswer: "جنت آباد"
        },
        {
            question: "کابینت زیر سینک ظرف شویی",
            answers: {

            },
            correctAnswer: "شاون پاول"
        },
        {
            question: "Cong سوال بعد",
            answers: {

            },
            correctAnswer: "پنیر خامه ای"
        },
        {
            question: "فرش اتاق تخت دار",
            answers: {
                a: "S"
            },
            correctAnswer: "رامسر"
        }
        ,
        {
            question: "آفرین",
            answers: {
                a: "S"
            },
            correctAnswer: "تصادف"
        },
        {
            question: "آفرین",
            answers: {
                a: "S"
            },
            correctAnswer: "صدف کوچولو"
        },
        {
            question: "کمد دم در",
            answers: {
                a: "S"
            },
            correctAnswer: "هاسکی"
        },
        {
            question: "آفرین",
            answers: {
                a: "S"
            },
            correctAnswer: "پپسی"
        },
        {
            question: "زیر میز حال",
            answers: {
                a: "S"
            },
            correctAnswer: "تاریخ"
        },
        {
            question: "آفرین",
            answers: {
                a: "S"
            },
            correctAnswer: "نیما"
        },
        {
            question: "پشت توالت فرنگی",
            answers: {
                a: "S"
            },
            correctAnswer: "کیمیا"
        },
        {
            question: "زحمت کشیدی انتر",
            answers: {
                a: "S"
            },
            correctAnswer: "کون گشاد"
        },
        {
            question: "تو کمد لحاف دشک",
            answers: {
                a: "S"
            },
            correctAnswer: "عطر"
        },
        {
            question: "آفرین",
            answers: {
                a: "S"
            },
            correctAnswer: "نویر"
        },
        {
            question: "محفظه زیر اجاق گاز",
            answers: {
                a: "S"
            },
            correctAnswer: "عجیجم"
        },
        {
            question: "",
            answers: {
                a: "S"
            },
            correctAnswer: "بنفش"
        },
        {
            question: "ماکروفر",
            answers: {
                a: "S"
            },
            correctAnswer: "نریمان"
        },
        {
            question: "",
            answers: {
                a: "S"
            },
            correctAnswer: "جانورشناسی"
        },
        {
            question: "کشوی تلویزیون",
            answers: {
                a: "S"
            },
            correctAnswer: "تیک می تو چرچ"
        },
        {
            question: "",
            answers: {
                a: "S"
            },
            correctAnswer: "طوسی"
        },
        {
            question: "",
            answers: {
                a: "S"
            },
            correctAnswer: "خونه دایی"
        },
        {
            question: "",
            answers: {
                a: "S"
            },
            correctAnswer: "56"
        },
        {
            question: "",
            answers: {
                a: "S"
            },
            correctAnswer: "25"
        },
        {
            question: "تبریک! کمد اتاق تخت دار",
            answers: {
                a: "S"
            },
            correctAnswer: "25"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input name="question${questionNumber}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }
    questionNumber=0;
    function showNextSlide() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        //myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === myQuestions[questionNumber].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
                questionNumber++;
                showSlide(currentSlide + 1);
                // color the answers green;
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                showSlide(currentSlide);

                answerContainers[questionNumber].style.color = "red";
            }
          //  });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    //submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", function() {
        showResults();
        showNextSlide();
    });
})();

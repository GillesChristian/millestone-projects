// Accessing HTML element using varibles
const quizBlock = document.querySelector('.questionBlock');
const submitButton = document.querySelector('#submit');
const unansweredMessage = document.querySelector('.unansweredMessage');

const listQuestion = questions.map((element) => {
    // HTML template to display questions
    return `
        <h3>${element.question}</h3>
        <div class="list">
            <input type="radio" name="${element.name}" id="${element.idOpt1}">
            <label for="${element.idOpt1}">${element.opt1}</label>
        </div>
        <div class="list">
            <input type="radio" name="${element.name}" id="${element.idOpt2}">
            <label for="${element.idOpt2}">${element.opt2}</label>
        </div>
        <div class="list">
            <input type="radio" name="${element.name}" id="${element.idOpt3}">
            <label for="${element.idOpt3}">${element.opt3}</label>
        </div>
        <span class="questionResult"></span>
    `;
}).join('');

quizBlock.innerHTML = listQuestion;

// Function to calculate and display the Quiz result
const displayResult = () => {
    const radioInputs = document.querySelectorAll('input[type="radio"]:checked');
    const questionResultElements = document.querySelectorAll('.questionResult');

    const answers = [];
    const radioOn = [];
    let score = 0;
    let count = 0;
    let totalScore = 0;

    // Collecting the correct answers from questions.js
    questions.forEach(function (ques) {
        answers.push(ques.ans);
    });

    // Collecting user answers from the form
    radioInputs.forEach(function (radioInput) {
        radioOn.push(radioInput.id.toString());
    });

    // Checking if all questions are answered
    if (radioOn.length !== answers.length) {
        unansweredMessage.textContent = 'Some questions are unanswered, please answer all the Questions.';
    } else {
        unansweredMessage.textContent = '';
        answers.forEach((answer, index) => {

            // Checking Correct answers
            if (answer === radioOn[index]) {
                questionResultElements[index].textContent = 'Correct!';
                questionResultElements[index].classList.add('correct');
                score++;
            } else {
                questionResultElements[index].textContent = 'Incorrect!';
                questionResultElements[index].classList.add('incorrect');
            }
        });

        // Displaying the quiz score
        unansweredMessage.classList.add('percentage');
        totalScore = ( score / answers.length) * 100;
        const timer = setInterval( () => {
            unansweredMessage.textContent = `Score : ${count} % `;
            if(count === totalScore)
                clearInterval(timer);
            else
                count++;
        },50)
            
    }
};

submitButton.addEventListener('click', displayResult);


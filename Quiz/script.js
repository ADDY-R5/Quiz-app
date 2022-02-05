const QuizData = [
    {
        question: 'Which was the most used programming language used in 2020?',
        a: 'Java',
        b: 'Python',
        c: 'C++',
        d: 'JavaScript',
        correct: 'c'
    }, {
        question: 'Special quantity whose value does not change during whole pogram is classified as:',
        a: 'variable',
        b: 'constant',
        c: 'string',
        d: 'float',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup language',
        b: 'Hypertext Makeup language',
        c: 'Hypertext Mock logistics',
        d: 'None of the above',
        correct: 'a'
    }, {
        question: 'Program subroutines are called by:',
        a: 'other programs',
        b: 'fixed variables',
        c: 'dafault constants',
        d: 'other systems',
        correct: 'a'
    }, {
        question: 'When was java developed?',
        a: 'early 1980s',
        b: 'early 2000s',
        c: 'early 1970s',
        d: 'early 1990s',
        correct: 'd'
    }
]

const ansels = document.querySelectorAll(".ans");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question")
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const c1 = document.getElementById("c1");
const d1 = document.getElementById("d1");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectans();
    const currentQuizData = QuizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a1.innerText = currentQuizData.a;
    b1.innerText = currentQuizData.b;
    c1.innerText = currentQuizData.c;
    d1.innerText = currentQuizData.d;
}

function getSelected(){
    const ansels = document.querySelectorAll(".ans");

    let ans = undefined;

    ansels.forEach((ansel) =>{
        if(ansel.checked){
            ans = ansel.id;
        }
    });

    return ans;
}

function deselectans(){
    ansels.forEach((ansel) =>{
        ansel.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const ans = getSelected();


    if(ans){
        if(ans === QuizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < QuizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML =`<h2>You have scored at total ${score}/${QuizData.length} questions</h2> <button onclick="location.reload()">Retake</button>`;
        }
    }
});
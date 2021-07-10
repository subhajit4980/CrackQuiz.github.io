const quizData=[
{   question: "What will a UPS be used for in a building?*",
     a:" To provide power to essential equipment",
     b:" To monitor building electricity use",
     c:" To carry messages between departments",
     d:" To control lighting and power systems",
    correct:'a'
},
{   question: "The most common format for a home video recorder is VHS. VHS stands for...?*",
     a:" Video Home System",
     b:" Very high speed",
     c:" Video horizontal standard",
     d:" Voltage house standard",
    correct:'a'
},
{   question: "'OS' computer abbreviation usually means ?*",
     a:" Order of Significance",
     b:" Open Software",
     c:" Operating System",
     d:" Optical Sensor",
    correct:'c'
},
{   question: "Who developed Yahoo?*",
     a:"Dennis Ritchie & Ken Thompson",
     b:"David Filo & Jerry Yang",
     c:"Vint Cerf & Robert Kahn",
     d:"Steve Case & Jeff Bezos",
    correct:'b'
},
{   question: "What is part of a database that holds only one type of information?*",
     a:" Report",
     b:" Field",
     c:" Record",
     d:"File",
    correct:'b'
}
]
const quiz=document.getElementById("quiz");
const answerE1s= document.querySelectorAll(".answer");
const questionE1=document.getElementById('question');
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const a_text =document.getElementById("a_text");
const d_text =document.getElementById("d_text");
const submitbtn=document.getElementById('submit');
let currentQuiz=0;
let score=0;
loadQuiz();
function loadQuiz(){
deselect();
const currentQuizData=quizData[currentQuiz];
questionE1.innerText=currentQuizData.question;
a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;
}
function getSelected(){
    let answer=undefined;
    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
            answer= answerE1.id;
        }
    });
    return answer;
}
function deselect(){
    answerE1s.forEach((answerE1) => {
        answerE1.checked=false;
    });
}
submitbtn.addEventListener('click',()=>
{   const answer= getSelected();
    console.log(answer)

    if(answer)
    {
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
    
    if(currentQuiz<quizData.length)
    {
        loadQuiz();
    }
    else{
        // alert("you successfully finished all questions");

        // quiz.innerHTML=`<h2> Result:<br> You answered correctly at <b>${score}/${quizData.length}</b><br>Thanks for your response🎉🎊</h2>`;
        if(score==5){
            quiz.innerHTML=`<h2> Result:<br> You answered correctly at <b>${score}/${quizData.length}</b><br>Thanks for your response🎉🎊<br>You won gold🥇</h2>`;
        
        }
        else if(score>=3 && score<=4){
            quiz.innerHTML=`<h2> Result:<br> You answered correctly at <b>${score}/${quizData.length}</b><br>Thanks for your response🎉🎊<br>You won silver🥈</h2>`;
       
        }
        else if(score>=1 && score<=2){
            quiz.innerHTML=`<h2> Result:<br> You answered correctly at <b>${score}/${quizData.length}</b><br>Thanks for your response🎉🎊<br>You won bronze🥉</h2>`;
       
        }
        else{
            quiz.innerHTML=`<h2> Result:<br> You answered correctly at <b>${score}/${quizData.length}</b><br>Thanks for your response🎉🎊<br>Sorry you failed!❌</h2>`;
       
        }
    }
}
});
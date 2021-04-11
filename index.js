var readlineSync = require('readline-sync');

var userName = readlineSync.question("During School Computer Classes, There existed a competition among my friends to write our name before than others. Join the competition and let's see how fast you can write yours: ");
console.log('-----')
console.log(`Thanks ${userName}, even though you knew it was a pathetic way to ask someone to enter their name You did that. Bravo! `);
console.log('-----')
console.log("Let's begin HOW WELL DO YOU KNOW ANURAG?");

var score = 0;

//function 
const checkAnswer = (question,answer) => {
  var userAnswer = readlineSync.question(question);
  console.log(`Your answer is ${userAnswer}`);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log(`Correct!`);
    score++;
  }
  else{
    console.log(`Wrong! the right answer is ${answer}`)
  }
  console.log(`Your current score: ${score}`);
  console.log('----------');
}

//question
const questionList = [
  {question:"What is Anurag's full name? ",answer:'Anurag Singh'},
  {question:'What college Anurag is in? ',answer:'NIT Goa'}
]

//for loop
for(let i=0;i<questionList.length;i++){
  let currentQuestion = questionList[i];
  checkAnswer(currentQuestion.question,currentQuestion.answer)
}

console.log(`Your final score is ${score}`)


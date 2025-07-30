//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];
const button = document.getElementById('submit');
const result = document.getElementById('score');
const score = +localStorage.getItem('score');
result.innerText = `Your score is ${score} out of 5`;

 const userAnswers = JSON.parse(sessionStorage.getItem('progress')) || null;
 const selected = Array(questions.length).fill(-1);
console.log(userAnswers)
if(userAnswers!==null){
  for(let i=0;i<userAnswers.length;i++){
	  selected[i] = userAnswers[i];
  }
}
const mainQuizDiv = document.getElementById('questions');
// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
	 
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (selected[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }

		
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
	   choiceElement.onclick = (e)=>{
		  const {name,value} = e.target;
		   selected[i] = value;
		   sessionStorage.setItem('progress',JSON.stringify(selected))
		  console.log(sessionStorage)
	  }
    }
	  
	mainQuizDiv.appendChild(questionElement);
  }
}
button.onclick = ()=>{
	let newscore = 0;
	questions.forEach((question,index)=>{
		if(question.answer === selected[index])
			newscore++;
	})
	console.log("score :",newscore)
	localStorage.setItem('score',newscore);
	result.innerText = ""
	result.innerText=`Your score is ${newscore} out of 5`;
	
}
renderQuestions();



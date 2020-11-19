import React, { useState, useEffect } from 'react';
import styles from "./Quiz.module.scss";

const App = () => {
	const questions = [
    {
      questionText: 'Where do Leeds United play their home fixtures?',
      answerOptions: [
        // { answerText: 'Old Trafford', isCorrect: false },
        { answerText: 'Elland Road', isCorrect: true },
        // { answerText: 'City of Leeds Stadium', isCorrect: false },
      ],
    },
		{
			questionText: 'What sport do the Cleveland Cavaliers play?',
			answerOptions: [
				{ answerText: 'American Football', isCorrect: false },
				{ answerText: 'Basketball', isCorrect: true },
				{ answerText: 'Hockey', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the current England Manager?',
			answerOptions: [
				{ answerText: 'Gareth Southgate', isCorrect: true },
				{ answerText: 'Roy Hodgson', isCorrect: false },
				{ answerText: 'Stuart Pearce', isCorrect: false },
			],
		},
		{
			questionText: 'What is older, Bruce Forsyth or Sliced Bread?',
			answerOptions: [
				{ answerText: 'Sliced Bread', isCorrect: false },
				{ answerText: 'Brucey', isCorrect: true },
			],
		},
	];
const [currentQ, setCurrentQ] = useState(0)

const [showScore, setShowScore] = useState(false);

const ontoNextQuestion = () => {
  const nextQuestion = currentQ +1;
  if(nextQuestion < questions.length){
    setCurrentQ(nextQuestion)
  } else {
    setShowScore(true)
  }
  setCurrentQ(nextQuestion);
}
// userInput = userInput.value
// const correctAnswer = () =>{
//   if (userInput == (answerOptions.answerText)) {
//     print("you are correct")
//   } else {
//     print("Not Quite Keep Trying")
//   }
// }
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored (code to determine score){questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
              <h1>Test your Quizzing Knowledge</h1>
						</div>
						<div className='question-text'>{questions[currentQ].questionText}</div>
					</div>
					<div className='answer-section'> 
            <input type="text"name="userInput"/>
            {questions[currentQ].answerOptions.map((answerOptions) => (
            <button onClick= {ontoNextQuestion}>{answerOptions.answerText}</button> ))}
					</div>
				</>
			)}
		</div>
	);
}
export default App;
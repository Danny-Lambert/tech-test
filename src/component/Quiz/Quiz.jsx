import React, { useState } from 'react';
import styles from "./Quiz.module.scss";

export default function App() {
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
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
const [currentQ, setCurrentQ] = useState(0)

const ontoNextQuestion = () => {
  const nextQuestion = currentQ +1;
  setCurrentQ(nextQuestion);
}
userInput = userInput.value
const correctAnswer = () =>{
  if (userInput == (answerOptions.answerText)) {
    print("you are correct")
  } else {
    print("Not Quite Keep Trying")
  }
}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
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
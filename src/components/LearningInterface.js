import React, { useState } from 'react';
import './LearningInterface.css';

function LearningInterface({ data }) {
  const [quizData, setQuizData] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const handleQuizClick = (topic, questions) => {
    setQuizData({ topic, questions });
  };

  const handleCheckAnswer = (index, correctAnswer) => {
    const userAnswer = document.getElementById(`answer-${index}`).value.trim();
    const feedbackElement = document.getElementById(`feedback-${index}`);

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.backgroundColor = "#e6ffe6";
      setCorrectAnswers(correctAnswers + 1);
    } else {
      feedbackElement.textContent = `Incorrect! The correct answer is "${correctAnswer}".`;
      feedbackElement.style.backgroundColor = "#fff0e6";
      setIncorrectAnswers(incorrectAnswers + 1);
    }
  };

  return (
    <div className="learning-interface">
      <h1>Learning Interface</h1>
      <div id="tree">
        {data.treeData.children.map((node, index) => (
          <div key={index}>
            <h2>{node.label}</h2>
            {node.children && node.children.map((child, i) => (
              <div key={i}>
                <p onClick={() => handleQuizClick(child.label, child.questions)}>{child.label}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div id="quiz">
        {quizData && (
          <div className="quiz">
            <h3>Questions on {quizData.topic}</h3>
            {quizData.questions.map((q, index) => (
              <div key={index}>
                <p><strong>{q.q}</strong></p>
                <div className="input-answer">
                  <input type="text" id={`answer-${index}`} placeholder="Your answer" />
                  <button onClick={() => handleCheckAnswer(index, q.a)}>Check</button>
                </div>
                <div id={`feedback-${index}`} className="feedback"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div id="score">
        <p>Correct: {correctAnswers}</p>
        <p>Incorrect: {incorrectAnswers}</p>
      </div>
    </div>
  );
}

export default LearningInterface;

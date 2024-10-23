import React, { useState } from 'react';

const PHQ9TestComponent = () => {
  const [answers, setAnswers] = useState(Array(9).fill(0));
  const [score, setScore] = useState(null);

  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself or that you're a failure",
    "Trouble concentrating on things",
    "Moving or speaking slowly or being restless",
    "Thoughts of being better off dead or hurting yourself"
  ];

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(value);
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((sum, current) => sum + current, 0);
    setScore(totalScore);
  };

  const getRecommendation = () => {
    if (score === null) return '';
    if (score <= 4) return "Minimal depression. Monitor your mental health.";
    if (score <= 9) return "Mild depression. Consider self-help or a counselor.";
    if (score <= 14) return "Moderate depression. Speak with a mental health professional.";
    if (score <= 19) return "Moderately severe depression. Professional help recommended.";
    return "Severe depression. Seek immediate help.";
  };

  return (
    <div>
      <h2>PHQ-9 Depression Test</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <select onChange={(e) => handleAnswerChange(index, e.target.value)} className='border'>
            <option value="0">Not at all</option>
            <option value="1">Several days</option>
            <option value="2">More than half the days</option>
            <option value="3">Nearly every day</option>
          </select>
        </div>
      ))}
      <button onClick={calculateScore}>Submit</button>

      {score !== null && (
        <div>
          <h3>Your Score: {score}</h3>
          <p>{getRecommendation()}</p>
        </div>
      )}
    </div>
  );
};

export default PHQ9TestComponent;

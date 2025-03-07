import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as questions from "./data.js";

function Mono() {
  const { id } = useParams();
  const questionsToUse = questions[`allQuestions${id}`] || [];

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const [questionsState, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [quizOver, setQuizOver] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");
  const [userAnswered, setUserAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const progressPercentage = originalQuestions.length > 0 ? (score / originalQuestions.length) * 100 : 0;

  useEffect(() => {
    if (questionsToUse.length > 0) {
      const processedQuestions = questionsToUse.map((question) => {
        const correct = { answerText: question.correctAnswer, isCorrect: true };
        const incorrect = question.incorrectAnswers.map((answer) => ({ answerText: answer, isCorrect: false }));
        const answerOptions = shuffleArray([correct, ...incorrect]);
        return { ...question, answerOptions: answerOptions };
      });

      const shuffledQuestions = shuffleArray(processedQuestions);
      setQuestions(shuffledQuestions);
      setOriginalQuestions(shuffledQuestions);
    }
  }, [questionsToUse]);

  const handleAnswerClick = (option) => {
    if (userAnswered) return;

    setSelectedOption(option);
    setUserAnswered(true);

    if (option.isCorrect) {
      setScore(score + 1);
      setFeedbackMessage("Correct! Great job!");
      setFeedbackColor("bg-green-600");
    } else {
      const correctAnswer = questionsState[currentQuestionIndex]?.answerOptions.find((opt) => opt.isCorrect)?.answerText;
      setFeedbackMessage(`Incorrect. The correct answer is: ${correctAnswer}`);
      setFeedbackColor("bg-red-600");
      setIncorrectQuestions((prev) => [...prev, questionsState[currentQuestionIndex]]);
    }
  };

  const goToNextQuestion = () => {
    setFeedbackMessage("");
    setUserAnswered(false);

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questionsState.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else if (incorrectQuestions.length > 0) {
      setQuestions((prev) => [...prev, ...incorrectQuestions]);
      setIncorrectQuestions([]);
      setCurrentQuestionIndex(questionsState.length);
    } else {
      setQuizOver(true);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 relative font-poppins">
      {/* Quiz Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 md:mb-6">Deutsch: #{id}</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-200 rounded-full h-3 md:h-4 mb-4 md:mb-6">
        <div
          className="h-3 md:h-4 rounded-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Progress Info */}
      <div className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
        <p>
          <span className="font-semibold">{score}</span> / {originalQuestions.length}
        </p>
      </div>

      {/* Ensure questions are loaded before rendering */}
      {questionsState.length === 0 ? (
        <p className="text-center text-xl text-gray-700">Loading questions...</p>
      ) : quizOver ? (
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-green-600">Quiz Completed!</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">Your final score is: <span className="font-bold text-green-600">{score} / {originalQuestions.length}</span></p>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Return Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-700 text-center">{questionsState[currentQuestionIndex]?.questionText}</h2>

          {/* Display Multiple Choice Question */}
          <div className="grid grid-cols-1 gap-3 md:gap-4 w-full">
            {questionsState[currentQuestionIndex].answerOptions.map((option, index) => {
              let buttonClassName = `w-full py-2 md:py-3 px-3 md:px-4 rounded-lg border-2 font-semibold hover:bg-blue-100 focus:outline-none focus:shadow-md transition-colors duration-300 text-sm md:text-base`;

              if (userAnswered) {
                if (option.isCorrect) {
                  buttonClassName += ' bg-green-200 border-green-500 text-green-800';
                } else if (selectedOption && selectedOption === option && !option.isCorrect) {
                  buttonClassName += ' bg-red-200 border-red-500 text-red-800';
                } else if (questionsState[currentQuestionIndex].answerOptions.find((opt) => opt.isCorrect) === option) {
                  buttonClassName += ' border-green-500';
                }
                else {
                  buttonClassName += ' bg-white text-blue-800 border-blue-300';
                }
              } else {
                buttonClassName += ' bg-white text-blue-800 border-blue-300';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={userAnswered}
                  className={buttonClassName}
                >
                  {option.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Feedback Message at the bottom */}
      {feedbackMessage && (
        <div className={`absolute bottom-0 left-0 w-full p-4 md:p-6 text-white text-center z-50 ${feedbackColor} transition-all duration-500`}>
          <p className="text-xl md:text-2xl">{feedbackMessage}</p>

          {/* Next Question Button in Feedback Section */}
          <button
            onClick={goToNextQuestion}
            className={`mt-4 md:mt-6 p-2 md:p-3 w-full max-w-md text-white rounded-lg text-lg md:text-xl font-semibold hover:opacity-90 focus:outline-none focus:shadow-outline ${feedbackColor === 'bg-green-600' ? 'bg-green-500' : 'bg-red-500'}`}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default Mono;

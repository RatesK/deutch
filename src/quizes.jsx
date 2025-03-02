import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as questions from "./file.js";

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

  const shuffleAnswerOptions = (question) => {
    if (!question.answerOptions) return [];
    return shuffleArray(question.answerOptions);
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

  const progressPercentage = originalQuestions.length > 0 ? (score / originalQuestions.length) * 100 : 0;

  useEffect(() => {
    if (questionsToUse.length > 0) {
      const shuffledQuestions = shuffleArray(questionsToUse).map((question) => ({
        ...question,
        answerOptions: shuffleAnswerOptions(question),
      }));
      setQuestions(shuffledQuestions);
      setOriginalQuestions(shuffledQuestions);
    }
  }, [questionsToUse]);

  const handleAnswerClick = (selectedOption) => {
    if (userAnswered) return;

    if (selectedOption.isCorrect) {
      setScore(score + 1);
      setFeedbackMessage("Correct");
      setFeedbackColor("bg-green-600");
    } else {
      const correctAnswer = questionsState[currentQuestionIndex]?.answerOptions.find((opt) => opt.isCorrect)?.answerText;
      setFeedbackMessage(`Answer is: ${correctAnswer}`);
      setFeedbackColor("bg-red-600");
      setIncorrectQuestions((prev) => [...prev, questionsState[currentQuestionIndex]]);
    }
    setUserAnswered(true);
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
    <div className="flex flex-col items-center h-screen bg-[#F4F6F6] p-4 relative font-poppins">
      {/* Quiz Title */}
      <h1 className="text-4xl font-semibold mb-4 text-[#212121]">Deutsch: #{id}</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-300 rounded-full h-3 mb-4">
        <div
          className="h-3 rounded-full bg-[#00B0FF]"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Progress Info */}
      <div className="text-2xl mb-6 text-[#212121]">
        <p>{score} / {originalQuestions.length}</p>
      </div>

      {/* Ensure questions are loaded before rendering */}
      {questionsState.length === 0 ? (
        <p className="text-center text-xl text-gray-700">Loading questions...</p>
      ) : quizOver ? (
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4 text-[#212121]">Quiz Completed!</h3>
          <a href="/" className="text-[#00B0FF] hover:underline text-xl">
            Return Home
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#212121]">{questionsState[currentQuestionIndex]?.questionText}</h2>

          {/* Display Multiple Choice Question */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {questionsState[currentQuestionIndex].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={userAnswered} // Disable button when an answer is selected
                className="p-4 bg-[#00B0FF] text-white rounded-lg text-xl disabled:bg-gray-300 hover:bg-[#00A1E8]"
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Feedback Message at the bottom */}
      {feedbackMessage && (
        <div className={`absolute bottom-0 left-0 w-full p-6 text-white text-5xl text-center z-50 ${feedbackColor}`}>
          <p>{feedbackMessage}</p>

          {/* Next Question Button in Feedback Section */}
          <button
            onClick={goToNextQuestion}
            className={`mt-6 p-4 w-80 text-white rounded-lg text-xl ${feedbackColor === 'bg-green-600' ? 'bg-green-500 border-3 border-green-400' : 'bg-red-500 border-3 border-red-400'}`}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default Mono;

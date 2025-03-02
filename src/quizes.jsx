import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { allQuestions1, allQuestions2, allQuestions3, allQuestions4, allQuestions5, allQuestions6, allQuestions7, allQuestions8} from "./file.js"; 

function Mono() {
  const { id } = useParams(); 
  const questionsToUse = id === "1" ? allQuestions1 :
  id === "2" ? allQuestions2 :
  id === "3" ? allQuestions3 :
  id === "5" ? allQuestions5 :
  id === "6" ? allQuestions6 :
  id === "7" ? allQuestions7 :
  id === "8" ? allQuestions8 :
  id === "4" ? allQuestions4 : [];

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

  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [quizOver, setQuizOver] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [userAnswered, setUserAnswered] = useState(false);

  const progressPercentage = originalQuestions.length > 0 ? (score / originalQuestions.length) * 100 : 0; 
  
  useEffect(() => {
    if (questionsToUse.length > 0) {
      const shuffledQuestions = shuffleArray(questionsToUse).map(question => ({
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
      setFeedbackMessage("Correct!");
    } else {
      const correctAnswer = questions[currentQuestionIndex]?.answerOptions.find(opt => opt.isCorrect)?.answerText;
      setFeedbackMessage(`Wrong! The correct answer is: ${correctAnswer}.`);
      setIncorrectQuestions((prev) => [...prev, questions[currentQuestionIndex]]);
    }
    setUserAnswered(true);
  };

  const handleTypingAnswerSubmit = () => {
    if (userAnswered) return;

    const correctAnswer = questions[currentQuestionIndex]?.correctAnswer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(score + 1);
      setFeedbackMessage("✅ Correct!");
    } else {
      setFeedbackMessage(`❌ Wrong! The correct answer is: ${correctAnswer}. You'll see this question again.`);
      setIncorrectQuestions((prev) => [...prev, questions[currentQuestionIndex]]);
    }
    setUserAnswered(true);
    setUserAnswer("");
  };

  const goToNextQuestion = () => {
    setFeedbackMessage("");
    setUserAnswered(false);
    setUserAnswer("");

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else if (incorrectQuestions.length > 0) {
      setQuestions((prev) => [...prev, ...incorrectQuestions]);
      setIncorrectQuestions([]);
      setCurrentQuestionIndex(questions.length);
    } else {
      setQuizOver(true);
    }
  };

  return (
    <div className="bg-blue-100 text-center max-w-3xl mx-auto my-4 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-blue-800 mb-4">Deutsch: #{id}</h1>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-3xl h-4 mx-4 my-2">
        <div className="h-full bg-green-600 rounded-4xl transition-all" style={{ width: `${progressPercentage}%` }} />
      </div>

      {/* Progress Info */}
      <div className="text-xl mt-2 text-gray-700">
        <p>{score} / {originalQuestions.length}</p>
      </div>

      {/* Ensure questions are loaded before rendering */}
      {questions.length === 0 ? (
        <p className="text-xl text-gray-500">Loading questions...</p>
      ) : quizOver ? (
        <div>
          <h3 className="text-3xl font-bold text-green-600 mb-4">Quiz Completed!</h3>
          <a
            className="bg-amber-400 text-black p-3 rounded-xl inline-block text-xl"
            href="/"
          >
            Return Home
          </a>
        </div>
      ) : (
        <div className="my-10">
          <h2 className="text-5xl text-gray-800 font-medium">{questions[currentQuestionIndex]?.questionText}</h2>

          {questions[currentQuestionIndex]?.type === "multiple-choice" ? (
            <div className="mt-8">
              {questions[currentQuestionIndex].answerOptions.map((option, index) => (
                <button
                  className="bg-amber-400 text-black mx-3 p-3 my-2 rounded-xl text-xl transition hover:bg-amber-500 disabled:bg-gray-300"
                  key={index} 
                  onClick={() => handleAnswerClick(option)}
                  disabled={userAnswered}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          ) : questions[currentQuestionIndex]?.type === "typing" ? (
            <div className="mt-8">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer"
                disabled={userAnswered}
                className="p-3 rounded-xl text-xl w-80 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button 
                className="bg-amber-400 text-black p-3 rounded-xl mt-4 text-xl transition hover:bg-amber-500 disabled:bg-gray-300"
                onClick={handleTypingAnswerSubmit} 
                disabled={userAnswered}
              >
                Submit
              </button>
            </div>
          ) : null}

          {userAnswered && <button className="bg-amber-400 text-black p-3 mt-6 rounded-xl text-xl transition hover:bg-amber-500" onClick={goToNextQuestion}>Next Question</button>}

          {feedbackMessage && <h3 className="text-3xl mt-4 text-gray-800">{feedbackMessage}</h3>}
        </div>
      )}
    </div>
  );
}

export default Mono;

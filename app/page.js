'use client';
import React, { useState, useEffect } from "react";
import quizData from "./data"; // your 1000 MCQs

export default function QuizApp() {
  const [questions, setQuestions] = useState([]); // store 20 random MCQs
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]); // store wrong answers

  // 🔹 Shuffle and select 20 unique MCQs when quiz starts
  useEffect(() => {
    const shuffled = [...quizData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20);
    setQuestions(shuffled);
  }, []);

  // Wait until 20 questions are loaded
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white">
        <h1 className="text-2xl font-bold">Loading Quiz...</h1>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      // Save the wrong answer details
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: currentQuestion.question,
          selected: selectedOption,
          correct: currentQuestion.correctAnswer,
        },
      ]);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    const reshuffled = [...quizData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20);
    setQuestions(reshuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setWrongAnswers([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 px-4 py-10">
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl w-full sm:w-[400px] md:w-[600px] p-8 text-white">
        {!isFinished ? (
          <>
            {/* Header */}
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
                🚀 PTCL Optical Quiz
              </h1>
              <p className="text-sm opacity-80 mt-1">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mb-6">
              <div
                className="bg-green-400 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Question */}
            <h2 className="text-lg font-semibold text-white leading-relaxed mb-6">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`rounded-xl border border-white/30 px-4 py-3 cursor-pointer text-sm sm:text-base transition-all duration-200
                    ${
                      selectedOption === option
                        ? "bg-green-500 text-white border-green-400 shadow-lg"
                        : "hover:bg-white/10 hover:border-white/50"
                    }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`mt-8 w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 
                ${
                  selectedOption
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-white/20 text-gray-300 cursor-not-allowed"
                }`}
            >
              {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </>
        ) : (
          <>
            {/* ✅ Result Screen */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
                🎉 Quiz Completed!
              </h1>
              <p className="text-lg text-gray-200 mb-2">Your Final Score:</p>
              <p className="text-5xl font-extrabold text-green-400 mb-6 drop-shadow-lg">
                {score} / {questions.length}
              </p>

              <div className="w-full bg-white/20 rounded-full h-2 mb-6">
                <div
                  className="bg-green-400 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${(score / questions.length) * 100}%` }}
                ></div>
              </div>

              <button
                onClick={handleRestart}
                className="px-8 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-300"
              >
                🔄 Restart Quiz
              </button>
            </div>

            {/* ❌ Show Incorrect Answers */}
            {wrongAnswers.length > 0 && (
              <div className="mt-10 bg-white/10 p-4 rounded-xl border border-white/20">
                <h2 className="text-xl font-bold mb-4 text-red-300 text-center">
                  ❌ Questions You Got Wrong
                </h2>
                <ul className="space-y-4 text-sm sm:text-base">
                  {wrongAnswers.map((item, index) => (
                    <li key={index} className="bg-white/5 p-4 rounded-lg">
                      <p className="font-semibold text-white">
                        Q{index + 1}. {item.question}
                      </p>
                      <p className="text-red-400 mt-1">
                        Your Answer: {item.selected || "Not answered"}
                      </p>
                      <p className="text-green-400 mt-1">
                        Correct Answer: {item.correct}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

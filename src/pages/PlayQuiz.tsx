import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Button, Card } from "@/components";
import type { Quiz } from "@/types";

const PlayQuiz = () => {
  // State to track current question index and selected answer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  // ASCII code for 'A' to label options & general variables
  const CHAR_CODE_A = 65;
  const location = useLocation();
  const navigate = useNavigate();

  // Data for the current question and quiz
  const quizId = location.state?.selectedQuiz;
  const allQuizzes = location.state?.allQuizzes;

  // Redirect to join-quiz if no quiz data
  if (!allQuizzes || quizId === undefined || !allQuizzes[quizId]) {
    navigate("/join-quiz");
    return null;
  }

  const currentQuiz: Quiz = allQuizzes[quizId];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  // Navigate to results page if quiz is completed
  const isLastQuestion =
    currentQuestionIndex === currentQuiz.questions.length - 1;

  // Handler for "Next Question" button click
  const handleNextClick = () => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer as number]);
    setSelectedAnswer(null);

    if (isLastQuestion) {
      navigate("/results", {
        state: {
          currentQuiz: currentQuiz,
          quizIndex: quizId,
          allQuizzes: allQuizzes,
          userAnswers: [...userAnswers, selectedAnswer as number],
          correctAnswers: currentQuiz.questions.map(
            (q) => q.correctOptionIndex
          ),
        },
      });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold leading-tight">
          Quiz: {currentQuiz.title}
        </h1>
        <h2 className="text-5xl font-bold leading-tight">
          {currentQuestion.id + 1} - {currentQuestion.text}
        </h2>
        <div className="px-3 flex justify-center gap-4 flex-wrap">
          {currentQuestion.options.map((option, index) => (
            <Card
              key={index}
              title={String.fromCharCode(CHAR_CODE_A + index)}
              copy={option}
              isCorrectAnswer={currentQuestion.correctOptionIndex === index}
              isSelected={selectedAnswer === index}
              disabled={selectedAnswer !== null}
              onSelect={() => setSelectedAnswer(index)}
            />
          ))}
        </div>

        <div className="px-3 gap-4 flex justify-center">
          <Button
            copy={isLastQuestion ? "View Results" : "Next Question"}
            variant="primary"
            disabled={selectedAnswer === null}
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayQuiz;

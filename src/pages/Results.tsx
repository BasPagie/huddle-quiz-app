import { Link, useLocation } from "react-router-dom";
import Confetti from "react-confetti-boom";

import { Button } from "@/components";

const Results = () => {
  const location = useLocation();

  const quizIndex = location.state?.quizIndex;
  const allQuizzes = location.state?.allQuizzes;
  const userAnswers = location.state?.userAnswers || [];
  const correctAnswers = location.state?.correctAnswers || [];

  const finalScore = scoreCalculation(userAnswers, correctAnswers);
  const questionAmount = correctAnswers.length;

  const resultMessage = scoreMessage(finalScore, questionAmount);

  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 pointer-events-none">
        {/* <Confetti
          particleCount={100}
          spreadDeg={50}
          y={0.6}
          x={0.2}
          fadeOutHeight={1}
        /> */}
        <Confetti
          particleCount={100}
          spreadDeg={50}
          y={0.5}
          x={0.5}
          fadeOutHeight={1}
        />
        {/* <Confetti
          particleCount={100}
          spreadDeg={50}
          y={0.8}
          x={0.5}
          fadeOutHeight={1}
        />
        <Confetti
          particleCount={100}
          spreadDeg={50}
          y={0.55}
          x={0.7}
          fadeOutHeight={1}
        /> */}
      </div>
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
        <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
          <h1 className="text-5xl font-bold leading-tight">Results</h1>

          <div className="px-3 flex-col justify-center  gap-4 flex-wrap">
            <h2 className="text-2xl font-medium leading-tight">Score:</h2>
            <h1 className="text-5xl font-bold leading-tight">
              {finalScore} <span className="text-1xl">/ {questionAmount}</span>
            </h1>
            <h2 className="text-3xl p-3 font-medium leading-tight">
              {resultMessage}
            </h2>
          </div>

          <div className="px-3 gap-4 flex justify-center">
            <Link
              to="/play-quiz"
              state={{ selectedQuiz: quizIndex, allQuizzes: allQuizzes }}
            >
              <Button copy="Restart" variant="primary" />
            </Link>
            <Link to="/join-quiz">
              <Button copy="More quizzes" variant="success" />
            </Link>
            <Link to="/">
              <Button copy="Back home" variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const scoreCalculation = (userAnswers: number[], correctAnswers: number[]) => {
  let score = 0;

  userAnswers.forEach((element, index) => {
    if (element === correctAnswers[index]) {
      score++;
    }
  });

  return score;
};

const scoreMessage = (finalScore: number, questionAmount: number) => {
  const questionPercentage = (finalScore / questionAmount) * 100;

  if (questionPercentage === 0) {
    return "Well that's embarrassing!";
  }

  if (questionPercentage > 0 && questionPercentage <= 50) {
    return "Not bad!";
  }

  if (questionPercentage >= 50 && questionPercentage < 99) {
    return "Great job!";
  }

  if (questionPercentage === 100) {
    return "Perfect score, amazing!";
  }

  return "";
};

export default Results;

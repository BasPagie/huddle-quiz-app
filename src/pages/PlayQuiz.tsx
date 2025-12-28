// import cardImage from "../assets/react.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import Quiz from "../data/sampleQuiz.ts";
import { useState } from "react";

const PlayQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number | null
  >(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl lg:wi mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold leading-tight">
          Quiz: {Quiz[0].title}
        </h1>
        <h2 className="text-5xl font-bold leading-tight">
          {Quiz[0].questions[currentQuestionIndex!].id} -{" "}
          {Quiz[0].questions[currentQuestionIndex!].text}
        </h2>
        <div className="px-3 flex justify-center gap-4 flex-wrap">
          {Quiz[0].questions[currentQuestionIndex!].options.map(
            (option, index) => (
              <Card
                key={index}
                title={String.fromCharCode(65 + index)}
                copy={option}
                isCorrectAnswer={
                  Quiz[0].questions[currentQuestionIndex!]
                    .correctOptionIndex === index
                }
                isSelected={selectedAnswer === index}
                disabled={selectedAnswer !== null}
                onSelect={() => {
                  setSelectedAnswer(index);
                }}
              />
            )
          )}
        </div>

        <div className="px-3 gap-4 flex justify-center">
          <Button
            copy={
              currentQuestionIndex !== null &&
              currentQuestionIndex < Quiz[0].questions.length - 1
                ? "Next Question"
                : "View Results"
            }
            variant="primary"
            disabled={selectedAnswer === null}
            onClick={() => {
              setSelectedAnswer(null);
              setCurrentQuestionIndex((prevIndex) =>
                prevIndex !== null && prevIndex < Quiz[0].questions.length - 1
                  ? prevIndex + 1
                  : null
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayQuiz;

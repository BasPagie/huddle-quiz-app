import { Link } from "react-router-dom";
// import cardImage from "../assets/react.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import Quiz from "../data/sampleQuiz.ts";
import { useState } from "react";

const PlayQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(99);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl lg:wi mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">
          Quiz: {Quiz[0].title}
        </h1>
        <h2 className="text-3xl font-bold leading-tight">
          {Quiz[0].questions[0].text}
        </h2>
        <div className="px-3 flex justify-center gap-4 flex-wrap">
          {Quiz[0].questions[0].options.map((option, index) => (
            <Card
              key={index}
              title={String.fromCharCode(65 + index)}
              copy={option}
              isSelected={selectedAnswer === index}
              onSelect={() => {
                setSelectedAnswer(index);
              }}
            />
          ))}
        </div>

        <div className="px-3 gap-4 flex justify-center">
          <Link to="/">
            <Button copy="Next Question" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayQuiz;

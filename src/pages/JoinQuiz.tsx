import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Quiz from "../data/sampleQuiz.ts";

const JoinQuiz = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">Join a quiz!</h1>

        <div className="px-3 flex justify-center gap-4 flex-wrap">
          {Quiz.map((quiz, index) => (
            <Card
              key={quiz.id}
              title={quiz.title}
              copy={"Created by: " + quiz.userName}
              buttonCopy="Play"
              onSelect={() => {
                navigate("/play-quiz", {
                  state: {
                    selectedQuiz: index || 0,
                  },
                });
              }}
            />
          ))}
        </div>

        <div className="px-3 gap-4 flex justify-center">
          <Link to="/">
            <Button copy="Back home" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinQuiz;

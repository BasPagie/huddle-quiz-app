import { Link, useNavigate } from "react-router-dom";
import sampleQuizzes from "../data/sampleQuiz.ts";
import Button from "../components/Button";
import Card from "../components/Card";

// Define a proper Quiz type
interface Quiz {
  id: number;
  title: string;
  userName: string;
  questions: {
    id: number;
    text: string;
    options: string[];
    correctOptionIndex: number;
  }[];
}

const JoinQuiz = () => {
  const navigate = useNavigate();

  const localStorageQuizzes = localStorage.getItem("quizzes");
  const convertedQuizzes = localStorageQuizzes
    ? JSON.parse(localStorageQuizzes)
    : [];

  const allQuizzes = [...sampleQuizzes, ...convertedQuizzes];
  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">Join a quiz!</h1>

        <div className="px-3 flex justify-center gap-4 flex-wrap">
          {allQuizzes &&
            allQuizzes.map((quiz: Quiz, index: number) => (
              <Card
                key={quiz.id}
                title={quiz.title}
                copy={"Questions: " + quiz.questions.length}
                buttonCopy="Play"
                onSelect={() => {
                  navigate("/play-quiz", {
                    state: {
                      allQuizzes: allQuizzes,
                      selectedQuiz: index,
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
          <Button
            copy="Clear Local Storage"
            variant="secondary"
            disabled={convertedQuizzes.length === 0}
            onClick={handleClearLocalStorage}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinQuiz;

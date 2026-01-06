import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Card } from "@/components";
import { sampleQuizzes } from "@/data";
import { loadQuizzes, clearQuizzes } from "@/services";
import type { Quiz } from "@/types";

const JoinQuiz = () => {
  const navigate = useNavigate();
  const [userQuizzes, setUserQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const quizzesFromStorage = loadQuizzes();
    setUserQuizzes(quizzesFromStorage);
  }, []);

  const allQuizzes = [...sampleQuizzes, ...userQuizzes];

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <section className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">Join a quiz!</h1>

        <div className="px-3 flex justify-center gap-4 flex-wrap">
          {allQuizzes &&
            allQuizzes.map((quiz: Quiz, index: number) => (
              <Card
                key={index}
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
            disabled={userQuizzes.length === 0}
            onClick={clearQuizzes}
          />
        </div>
      </section>
    </main>
  );
};

export default JoinQuiz;

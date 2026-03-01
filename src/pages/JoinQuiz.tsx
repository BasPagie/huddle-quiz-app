import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "@/lib/supabaseClient";
import { Button, Card } from "@/components";
import { sampleQuizzes } from "@/data/sampleQuiz";
import { loadQuizzes, clearQuizzes } from "@/services";
import type { Quiz } from "@/types";

type RemoteQuiz = {
  id: string;
  name: string;
  type: string;
  week_number: number;
};

const JoinQuiz = () => {
  const navigate = useNavigate();
  const [userQuizzes] = useState<Quiz[]>(() => loadQuizzes());
  const [quizzes, setQuizzes] = useState<RemoteQuiz[]>([]);

  useEffect(() => {
    async function getQuizzes() {
      const { data } = await supabase.from("Quiz").select(`
        id, name, week_number, type,
        Questions (id, text, order_index,
          Options (id, text, is_correct, order_index)
        )
      `);
      console.log("Fetched quizzes from Supabase:", data);
      if (data) setQuizzes(data);
    }
    getQuizzes();
  }, []);

  const allQuizzes = [...sampleQuizzes, ...userQuizzes];

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <section className="max-w-7xl mx-auto p-8 text-center flex flex-col gap-6">
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

        <ul className="text-left">
          {quizzes.map(({ id, name, type, week_number }) => (
            <ul key={id}>
              <li>{id}</li>
              <li>{name}</li>
              <li>{type}</li>
              <li>week: {week_number}</li>
            </ul>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default JoinQuiz;

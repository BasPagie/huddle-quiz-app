import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuizForm from "@/components/quizEditor/QuizForm";
import SaveQuizModal from "@/components/quizEditor/SaveQuizModal";
import { useQuizForm } from "@/hooks";

const CreateQuiz = () => {
  const LOADING_DELAY = 1000;
  const SUCCESS_MESSAGE_DURATION = 1500;
  const navigate = useNavigate();

  const {
    title,
    questions,
    setTitle,
    handleQuestionUpdate,
    addQuestion,
    removeQuestion,
    saveQuiz,
  } = useQuizForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const runForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const success = saveQuiz();
      if (success) {
        setIsDone(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/join-quiz");
        }, SUCCESS_MESSAGE_DURATION);
      }
    }, LOADING_DELAY);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <QuizForm
        title={title}
        questions={questions}
        onTitleChange={setTitle}
        onQuestionUpdate={handleQuestionUpdate}
        onQuestionRemove={removeQuestion}
        onQuestionAdd={addQuestion}
        runForm={runForm}
      />
      {isLoading && <SaveQuizModal isDone={isDone} />}
    </main>
  );
};

export default CreateQuiz;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sampleQuizzes from "../data/sampleQuiz.ts";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import QuestionEditor from "../components/quizEditor/QuestionEditor";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const initialQuiz = {
    id: 0,
    title: "Enter quiz name...",
    questions: [
      {
        id: 0,
        text: "Enter question text...",
        options: ["Enter option text...", "Enter option text..."],
        correctOptionIndex: 0,
      },
    ],
  };

  const [title, setTitle] = useState(initialQuiz.title);
  const [questions, setQuestions] = useState(initialQuiz.questions);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleQuestionUpdate = (
    questionIndex: number,
    updatedQuestion: (typeof initialQuiz.questions)[0]
  ) => {
    setQuestions(
      questions.map((q, i) => (i === questionIndex ? updatedQuestion : q))
    );
  };

  const addQuestion = () => {
    const newId =
      questions.length > 0 ? Math.max(...questions.map((q) => q.id)) + 1 : 0;
    const newQuestion = {
      id: newId,
      text: "Enter question text...",
      options: ["Enter option text...", "Enter option text..."],
      correctOptionIndex: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (optionIndex: number) => {
    const updatedQuestion = questions.filter((_, i) => i !== optionIndex);
    setQuestions(updatedQuestion);
  };

  const saveQuizLocally = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDone(false);

    const newQuiz = {
      id: sampleQuizzes.length,
      title: title,
      userId: "general-user",
      userName: "General",
      questions: questions,
    };

    const stored = localStorage.getItem("quizzes");
    const existingQuizzes = stored ? JSON.parse(stored) : [];

    const updatedQuizzes = [...existingQuizzes, newQuiz];
    localStorage.setItem(`quizzes`, JSON.stringify(updatedQuizzes));

    // Show loading spinner first
    setTimeout(() => {
      if (localStorage.getItem(`quizzes`) !== null) {
        setIsDone(true);
        // Keep the success message visible for users to read
        setTimeout(() => {
          setIsLoading(false);
          navigate("/join-quiz");
        }, 1500);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-[60%] mx-auto p-8 text-center flex flex-col gap-6 items-center">
        <h1 className="text-2xl font-bold leading-tight">Create a quiz!</h1>
        <form
          onSubmit={saveQuizLocally}
          method="post"
          className="flex flex-col items-center"
        >
          <input
            type="text"
            id="quizTitle"
            name="quizTitle"
            required
            maxLength={100}
            className="text-5xl w-full font-bold text-center mb-5 p-5 pt-4 bg-slate-700 rounded-lg"
            placeholder={initialQuiz.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="flex flex-row flex-wrap gap-6 text-center justify-center w-full mb-6">
            {questions.map((question, index) => (
              <QuestionEditor
                key={index}
                initialQuiz={initialQuiz}
                questionIndex={index}
                question={question}
                onUpdate={handleQuestionUpdate}
                onRemove={removeQuestion}
              />
            ))}
          </div>
          <div className="gap-4 flex justify-between items-center w-full">
            <Link to="/">
              <Button copy="Back home" variant="primary" />
            </Link>
            <Button copy="Submit Quiz" variant="secondary" type="submit" />
            <Button
              copy="Add New Question"
              variant="success"
              onClick={addQuestion}
            />
          </div>
        </form>
      </div>
      {isLoading && (
        <div className="fixed flex justify-center items-center top-0 bg-neutral-900/[0.8] w-full h-full">
          {isDone ? (
            <div className="text-2xl font-bold text-green-200">
              Quiz saved successfully!
            </div>
          ) : (
            <Spinner size="16" />
          )}
        </div>
      )}
    </div>
  );
};

export default CreateQuiz;

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import QuestionEditor from "../components/quizEditor/QuestionEditor";

const CreateQuiz = () => {
  const initialQuiz = {
    id: 0,
    title: "Enter Quiz Name...",
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

  const handleQuestionChange = (
    questionIndex: number,
    updatedQuestion: string
  ) => {
    setQuestions(
      questions.map((q, i) =>
        i === questionIndex ? { ...q, text: updatedQuestion } : q
      )
    );
    console.log("Question text changed to:", updatedQuestion);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6 items-center">
        <h1 className="text-2xl font-bold leading-tight">Create a quiz!</h1>
        <form
          onSubmit={() => {}}
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
              console.log("Quiz title changed to:", title);
            }}
          />

          {questions.map((question, index) => (
            <QuestionEditor
              key={index}
              questionIndex={index}
              question={question}
              initialQuiz={initialQuiz}
              // onUpdate={handleQuestionChange}
            />
          ))}

          <div className="px-5 gap-4 flex justify-center items-center">
            <Link to="/">
              <Button copy="Save Quiz" variant="success" disabled={true} />
            </Link>
          </div>
        </form>

        <div className="px-3 gap-4 flex justify-center">
          <Link to="/">
            <Button copy="Back home" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;

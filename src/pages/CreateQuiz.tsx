import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import QuestionEditor from "../components/quizEditor/QuestionEditor";

const CreateQuiz = () => {
  const initialQuiz = {
    id: 0,
    title: "Enter quiz name...",
    questions: [
      {
        id: 0,
        text: "Enter question text...",
        options: ["1. Enter option text...", "2. Enter option text..."],
        correctOptionIndex: 0,
      },
    ],
  };

  const [title, setTitle] = useState(initialQuiz.title);
  const [questions, setQuestions] = useState(initialQuiz.questions);

  const handleQuestionUpdate = (
    questionIndex: number,
    updatedQuestion: (typeof initialQuiz.questions)[0]
  ) => {
    setQuestions(
      questions.map((q, i) => (i === questionIndex ? updatedQuestion : q))
    );
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
              initialQuiz={initialQuiz}
              questionIndex={index}
              question={question}
              onUpdate={handleQuestionUpdate}
              onOptionButtonClick={() => {}}
            />
          ))}

          <div className="px-5 gap-4 flex justify-center items-center">
            <Button
              copy="Check Current State"
              variant="success"
              disabled={false}
              onClick={() => (
                console.log("Quiz Saved! CURRENT STATE:"),
                console.log("----------------------"),
                console.log("Current Quiz Title:", title),
                questions.map(
                  (q, i) => (
                    console.log(`Question ${i + 1} Title:`, q.text),
                    console.log(`Question ${i + 1} Options:`, q.options)
                  )
                )
              )}
            />
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

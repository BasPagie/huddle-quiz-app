import { Link } from "react-router-dom";
import type { QuizFormProps } from "../../types/quiz.ts";
import Button from "../Button";
import QuizEditor from "./QuizEditor.tsx";
import { initialQuiz } from "../../data/sampleQuiz.ts";

function QuizForm({
  title,
  questions,
  onTitleChange,
  onQuestionUpdate,
  onQuestionAdd,
  onQuestionRemove,
  runForm,
}: QuizFormProps) {
  const MAX_TITLE_LENGTH = 100;

  return (
    <section className="max-w-[60%] mx-auto p-8 text-center flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold leading-tight">Create a quiz!</h1>
      <form
        onSubmit={runForm}
        method="post"
        className="flex flex-col items-center"
      >
        <input
          type="text"
          id="quizTitle"
          name="quizTitle"
          placeholder={initialQuiz.title}
          value={title}
          maxLength={MAX_TITLE_LENGTH}
          className="text-5xl w-full font-bold text-center mb-5 p-5 pt-4 bg-slate-700 rounded-lg"
          required
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <div className="flex flex-row flex-wrap gap-6 text-center justify-center w-full mb-6">
          {questions.map((question, index) => (
            <QuizEditor
              key={question.id}
              questionIndex={index}
              question={question}
              onQuestionUpdate={onQuestionUpdate}
              onQuestionRemove={onQuestionRemove}
            />
          ))}
        </div>
        <div className="gap-4 flex justify-between items-center w-full">
          <Link to="/">
            <Button copy="Back home" variant="primary" />
          </Link>
          <Button
            copy="Add New Question"
            variant="success"
            onClick={onQuestionAdd}
          />
          <Button copy="Submit Quiz" variant="secondary" type="submit" />
        </div>
      </form>
    </section>
  );
}

export default QuizForm;

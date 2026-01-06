import { Button } from "@/components";
import OptionCard from "@/components/quizEditor/OptionCard";
import {
  DEFAULT_NEW_OPTION_TEXT,
  MAX_OPTIONS,
  MAX_QUESTION_TEXT_LENGTH,
  MIN_OPTIONS,
} from "@/constants";
import { initialQuiz } from "@/data/sampleQuiz";
import type { QuizEditorProps } from "@/types";

const QuizEditor = ({
  questionIndex,
  question,
  onQuestionUpdate,
  onQuestionRemove,
}: QuizEditorProps) => {
  const handleQuestionTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQuestion = { ...question, text: e.target.value };
    onQuestionUpdate(questionIndex, updatedQuestion);
  };

  const handleOptionChange = (optionIndex: number, text: string) => {
    const updatedQuestion = {
      ...question,
      options: question.options.map((opt, i) =>
        i === optionIndex ? text : opt
      ),
    };
    onQuestionUpdate(questionIndex, updatedQuestion);
  };

  const setCorrectAnswer = (optionIndex: number) => {
    const updatedQuestion = {
      ...question,
      correctOptionIndex: optionIndex,
    };
    onQuestionUpdate(questionIndex, updatedQuestion);
  };

  const handleAddOption = () => {
    const newOption = DEFAULT_NEW_OPTION_TEXT;
    const updatedQuestion = {
      ...question,
      options: [...question.options, newOption],
    };
    onQuestionUpdate(questionIndex, updatedQuestion);
  };

  const handleRemoveOption = (optionIndex: number) => {
    if (question.options.length <= MIN_OPTIONS) return;
    const updatedQuestion = {
      ...question,
      options: question.options.filter((_, i) => i !== optionIndex),
    };
    onQuestionUpdate(questionIndex, updatedQuestion);
  };

  return (
    <>
      <div
        key={`questionContainer${questionIndex}`}
        className="relative bg-slate-700 p-8 rounded-lg shadow-md flex flex-col gap-6 items-center flex-wrap w-full"
      >
        <div className="absolute top-0 right-0 p-4">
          {questionIndex !== 0 && (
            <Button
              copy="X"
              variant="danger"
              onClick={() => {
                onQuestionRemove(questionIndex);
              }}
            />
          )}
        </div>
        <input
          type="text"
          id={`quiz${initialQuiz.id}Question${questionIndex}`}
          name={`quiz${initialQuiz.id}Question${questionIndex}`}
          required
          maxLength={MAX_QUESTION_TEXT_LENGTH}
          className="text-4xl font-bold text-center p-3 rounded-lg leading-none w-full"
          placeholder={initialQuiz.questions[0].text}
          onChange={(e) => handleQuestionTextChange(e)}
        />
        <div className="flex flex-wrap justify-center items-center gap-4">
          {question.options.map((_, optionIndex) => (
            <OptionCard
              key={optionIndex}
              questionIndex={questionIndex}
              optionIndex={optionIndex}
              isCorrect={question.correctOptionIndex === optionIndex}
              canRemove={
                question.options.length > MIN_OPTIONS &&
                optionIndex >= MIN_OPTIONS
              }
              onTextChange={(text) => handleOptionChange(optionIndex, text)}
              onSetCorrect={() => setCorrectAnswer(optionIndex)}
              onRemove={() => handleRemoveOption(optionIndex)}
            />
          ))}
          {question.options.length < MAX_OPTIONS && (
            <Button copy="+" variant="success" onClick={handleAddOption} />
          )}
        </div>
      </div>
    </>
  );
};

export default QuizEditor;

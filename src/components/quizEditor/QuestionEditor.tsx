import Button from "../../components/Button";

interface QuestionEditorProps {
  questionIndex: number;
  question: {
    id: number;
    text: string;
    options: string[];
    correctOptionIndex: number;
  };
  initialQuiz: {
    id: number;
    title: string;
    questions: {
      id: number;
      text: string;
      options: string[];
      correctOptionIndex: number;
    }[];
  };
  onUpdate: (
    questionIndex: number,
    updatedQuestion: {
      id: number;
      text: string;
      options: string[];
      correctOptionIndex: number;
    }
  ) => void;
  onRemove: (questionIndex: number) => void;
}

const QuestionEditor = ({
  questionIndex,
  question,
  initialQuiz,
  onUpdate,
  onRemove,
}: QuestionEditorProps) => {
  const CHAR_CODE_A = 65;
  const defaultOptionText = "Enter option text...";

  const handleQuestionTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQuestion = { ...question, text: e.target.value };
    onUpdate(questionIndex, updatedQuestion);
    console.log("Question Text changed to:", e.target.value);
  };

  const handleOptionChange = (
    optionIndex: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedQuestion = {
      ...question,
      options: question.options.map((opt, i) =>
        i === optionIndex ? e.target.value : opt
      ),
    };
    onUpdate(questionIndex, updatedQuestion);
  };

  const setCorrectAnswer = (optionIndex: number) => {
    const updatedQuestion = {
      ...question,
      correctOptionIndex: optionIndex,
    };
    onUpdate(questionIndex, updatedQuestion);
  };

  const handleAddOption = () => {
    const newOption = "Add option text...";
    const updatedQuestion = {
      ...question,
      options: [...question.options, newOption],
    };
    onUpdate(questionIndex, updatedQuestion);
  };

  const handleRemoveOption = (optionIndex: number) => {
    if (question.options.length <= 2) return; // Ensure at least 2 options remain
    const updatedQuestion = {
      ...question,
      options: question.options.filter((_, i) => i !== optionIndex),
    };
    onUpdate(questionIndex, updatedQuestion);
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
                onRemove(questionIndex);
              }}
            />
          )}
        </div>
        <input
          key={questionIndex}
          type="text"
          id={`quiz${initialQuiz.id}Question${questionIndex}`}
          name={`quiz${initialQuiz.id}Question${questionIndex}`}
          required
          maxLength={100}
          className="text-4xl font-bold  text-center p-3 rounded-lg leading-none w-full"
          placeholder={initialQuiz.questions[0].text}
          onChange={(e) => handleQuestionTextChange(e)}
        />
        <div className="flex flex-wrap justify-center items-center gap-4">
          {question.options.map((option, optionIndex) => (
            <div
              key={`optionContainer${optionIndex}`}
              className={`option bg-neutral-800 text-white/90 p-6 rounded-lg shadow-md w-60 gap-4 flex flex-col items-center justify-between`}
            >
              <h2 className="text-2xl font-semibold">
                {String.fromCharCode(CHAR_CODE_A + optionIndex)}
              </h2>
              <input
                key={optionIndex}
                type={"text"}
                id={`quiz${initialQuiz.id}Question${questionIndex}Option${optionIndex}`}
                name={`quiz${initialQuiz.id}Question${questionIndex}Option${optionIndex}`}
                className="text-lg font-normal text-center"
                placeholder={defaultOptionText}
                required={true}
                onChange={(e) => handleOptionChange(optionIndex, e)}
              />

              <div className="flex gap-2">
                <Button
                  copy={
                    question.correctOptionIndex === optionIndex
                      ? "Correct Answer"
                      : "Set as Correct"
                  }
                  variant={
                    question.correctOptionIndex === optionIndex
                      ? "success"
                      : "secondary"
                  }
                  onClick={() => setCorrectAnswer(optionIndex)}
                />
                <Button
                  copy="X"
                  variant="danger"
                  disabled={question.options.length <= 2 || optionIndex < 2}
                  onClick={() => handleRemoveOption(optionIndex)}
                />
              </div>
            </div>
          ))}
          {question.options.length < 4 && (
            <Button
              copy="Add Option"
              variant="success"
              onClick={handleAddOption}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionEditor;

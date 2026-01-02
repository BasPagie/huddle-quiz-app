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
  onOptionButtonClick: () => void;
}

const QuestionEditor = ({
  questionIndex,
  question,
  initialQuiz,
  onUpdate,
  onOptionButtonClick,
}: QuestionEditorProps) => {
  const CHAR_CODE_A = 65;
  const buttonStyling = "bg-neutral-800 text-white/90";
  const width = "w-60";

  const handleQuestionTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedQuestion = { ...question, text: e.target.value };
    onUpdate(questionIndex, updatedQuestion);
    console.log("Question Title changed to:", e.target.value);
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

  return (
    <div className="flex flex-row gap-6 text-center w-full max-w-4xl mb-6">
      <div
        key={`questionContainer${questionIndex}`}
        className="bg-slate-700 p-8 rounded-lg shadow-md flex flex-col gap-6 items-center max-w-fit"
      >
        <input
          key={questionIndex}
          type="text"
          id={`quiz${initialQuiz.id}Question${questionIndex}`}
          name={`quiz${initialQuiz.id}Question${questionIndex}`}
          required
          maxLength={100}
          className="text-4xl font-bold  text-center p-3 rounded-lg w-full"
          placeholder={initialQuiz.questions[0].text}
          onChange={(e) => handleQuestionTitleChange(e)}
        />
        <div className="flex justify-between gap-4 flex-wrap items-center w-full">
          {question.options.map((option, optionIndex) => (
            <div
              className={`option ${buttonStyling} p-6 rounded-lg shadow-md ${width} gap-4 flex flex-col items-center justify-between`}
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
                placeholder={initialQuiz.questions[0].options[optionIndex]}
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
                  onClick={onOptionButtonClick}
                />
                <Button
                  copy={"X"}
                  variant="secondary"
                  disabled={true}
                  onClick={onOptionButtonClick}
                />
              </div>
            </div>
          ))}
          <Button
            copy="+"
            variant="success"
            onClick={() => console.log("Add option clicked")}
          />
        </div>
      </div>
      <Button
        copy="+"
        variant="success"
        onClick={() => console.log("Add question clicked")}
      />
    </div>
  );
};

// function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//   event.preventDefault();
//   // const formEl = event.currentTarget;
//   // const formData = new FormData(formEl);
//   // const email = formData.get("email");
// }

export default QuestionEditor;

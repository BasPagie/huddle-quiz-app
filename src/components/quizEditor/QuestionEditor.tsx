import Button from "../../components/Button";
import InputCard from "../../components/InputCard";

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
  onUpdate?: () => void;
}

const QuestionEditor = ({
  questionIndex,
  question,
  initialQuiz,
  onUpdate,
}: QuestionEditorProps) => {
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
          onChange={
            () => {
              onUpdate();
            }
            // handleQuestionTextChange(e.target.value, questionIndex)
          }
        />
        <div className="flex justify-between gap-4 flex-wrap items-center w-full">
          {question.options.map((option, optionIndex) => (
            <InputCard
              key={`question${questionIndex}Option${optionIndex}`}
              id={optionIndex}
              type="text"
              name={`quiz${initialQuiz.id}Question${questionIndex}Option${option}`}
              width="flex-grow"
              copy={initialQuiz.questions[0].options[optionIndex]}
              onChange={
                () => {
                  onUpdate();
                }
                // handleQuestionTextChange(e.target.value, optionIndex)
              }
            />
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

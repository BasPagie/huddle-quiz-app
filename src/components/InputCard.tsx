import type { Input } from "postcss";
import Button from "./Button";

interface InputCardProps {
  type: string;
  id: number;
  name: string;
  copy?: string;
  width?: string;
  buttonCopy?: string;
  isCorrectAnswer?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (option: string, id: number) => void;
  onButtonClick?: () => void;
}

const InputCard = ({
  type,
  id,
  name,
  copy,
  width = "min-w-60",
  buttonCopy = "Select as correct",
  isCorrectAnswer,
  required = true,
  disabled,
  onChange,
  onButtonClick,
}: InputCardProps) => {
  let buttonStyling = "bg-slate-800";
  const CHAR_CODE_A = 65;

  if (isCorrectAnswer) {
    buttonStyling = "bg-green-900";
  } else if (disabled) {
    buttonStyling = "bg-green-900";
  }

  return (
    <div
      className={`option ${buttonStyling} p-6 rounded-lg shadow-md ${width} gap-4 flex flex-col items-center justify-between`}
    >
      <h2 className="text-2xl font-semibold">
        {String.fromCharCode(CHAR_CODE_A + id)}
      </h2>
      <input
        key={id}
        type={type}
        id={name}
        name={name}
        className="text-lg font-normal text-center"
        placeholder={copy}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value, id)}
      />

      <Button
        copy={buttonCopy}
        variant="secondary"
        disabled={disabled}
        onClick={onButtonClick}
      />
    </div>
  );
};

export default InputCard;

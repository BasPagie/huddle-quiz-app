import { Button } from "@/components";
import { CHAR_CODE_A, DEFAULT_OPTION_TEXT } from "@/constants";
import type { OptionCardProps } from "@/types";

const OptionCard = ({
  questionIndex,
  optionIndex,
  isCorrect,
  canRemove,
  onTextChange,
  onSetCorrect,
  onRemove,
}: OptionCardProps) => {
  return (
    <div className="option bg-neutral-800 text-white/90 p-6 rounded-lg shadow-md w-60 gap-4 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-semibold">
        {String.fromCharCode(CHAR_CODE_A + optionIndex)}
      </h2>
      <input
        type="text"
        id={`optionQuestion${questionIndex}Option${optionIndex}`}
        name={`optionQuestion${questionIndex}Option${optionIndex}`}
        className="text-lg font-normal text-center"
        placeholder={DEFAULT_OPTION_TEXT}
        required
        onChange={(e) => onTextChange(e.target.value)}
      />

      <div className="flex gap-2">
        <Button
          copy={isCorrect ? "Correct Answer" : "Set as Correct"}
          variant={isCorrect ? "success" : "secondary"}
          onClick={onSetCorrect}
        />
        <Button
          copy="X"
          variant="danger"
          disabled={!canRemove}
          onClick={onRemove}
        />
      </div>
    </div>
  );
};

export default OptionCard;

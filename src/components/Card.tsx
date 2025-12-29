import Button from "./Button";

interface CardProps {
  title: string;
  copy?: string;
  buttonCopy?: string;
  image?: string;
  isCorrectAnswer?: boolean;
  isSelected?: boolean;
  displayButton?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}

const Card = ({
  title,
  copy,
  image,
  isCorrectAnswer,
  isSelected,
  buttonCopy,
  displayButton,
  disabled,
  onSelect,
}: CardProps) => {
  let buttonStyling = "bg-slate-800";

  if (isSelected && isCorrectAnswer) {
    buttonStyling = "bg-green-900";
  } else if (isSelected && !isCorrectAnswer) {
    buttonStyling = "bg-red-900";
  } else if (!isSelected && isCorrectAnswer && disabled) {
    buttonStyling = "bg-green-900";
  }

  return (
    <div
      className={`option ${buttonStyling} p-6 rounded-lg shadow-md w-60 gap-4 flex flex-col items-center justify-between`}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-lg font-normal">{copy}</p>

      {image && <img src={image} alt={title} className="mx-auto" />}

      {displayButton !== false && (
        <Button
          copy={buttonCopy || "Select"}
          variant="secondary"
          disabled={disabled}
          onClick={onSelect}
        />
      )}
    </div>
  );
};

export default Card;

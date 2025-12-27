import Button from "./Button";

interface CardProps {
  title: string;
  copy?: string;
  image?: string;
  isSelected?: boolean;
  buttonCopy?: string;
  onSelect?: () => void;
}

const Card = ({
  title,
  copy,
  image,
  isSelected,
  buttonCopy,
  onSelect,
}: CardProps) => {
  return (
    <div
      className={`option ${
        isSelected ? "bg-green-900" : "bg-slate-800"
      } p-6 rounded-lg shadow-md w-60 gap-4 flex flex-col items-center justify-between`}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-lg font-normal">{copy}</p>

      {image && <img src={image} alt={title} className="mx-auto" />}
      <Button
        copy={buttonCopy || "Select"}
        variant="secondary"
        onClick={onSelect}
      />
    </div>
  );
};

export default Card;

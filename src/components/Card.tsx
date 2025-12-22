import Button from "./Button";

interface CardProps {
  title: string;
  copy: string;
  image: string;
  onSelect?: () => void;
}

const Card = ({ title, copy, image, onSelect }: CardProps) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-md w-full max-w-md gap-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-lg font-normal">{copy}</p>
      <img src={image} alt={title} className="mx-auto" />
      <Button
        copy="Select"
        variant="secondary"
        onClick={onSelect || (() => console.log("Answer selected:", title))}
      />
    </div>
  );
};

export default Card;

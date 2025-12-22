interface ButtonProps {
  copy: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-violet-500 hover:bg-violet-600",
  secondary: "bg-sky-500 hover:bg-sky-600",
  success: "bg-green-500 hover:bg-green-600",
  danger: "bg-red-500 hover:bg-red-600",
} as const;

const Button = ({ copy, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${variantStyles[variant]} text-white text-lg font-bold py-3 px-5 rounded transition-colors duration-250`}
    >
      {copy}
    </button>
  );
};

export default Button;

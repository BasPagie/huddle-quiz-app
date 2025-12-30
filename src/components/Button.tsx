interface ButtonProps {
  copy: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "success" | "danger";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles = {
  primary: "enabled:bg-violet-500 enabled:hover:bg-violet-600",
  secondary: "enabled:bg-sky-500 enabled:hover:bg-sky-600",
  success: "enabled:bg-green-500 enabled:hover:bg-green-600",
  danger: "enabled:bg-red-500 enabled:hover:bg-red-600",
} as const;

const Button = ({
  copy,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer ${variantStyles[variant]} disabled:bg-gray-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-lg font-bold py-3 px-5 rounded transition-colors duration-250`}
      disabled={disabled}
    >
      {copy}
    </button>
  );
};

export default Button;

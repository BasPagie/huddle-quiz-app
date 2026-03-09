interface ButtonProps {
  copy: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "enabled:bg-[var(--color-orange-main)] enabled:text-neutral-900 enabled:hover:bg-yellow-500",
  secondary:
    "enabled:bg-white enabled:text-neutral-900 enabled:hover:bg-neutral-200",
  tertiary:
    "enabled:bg-transparent enabled:border-2 enabled:border-white enabled:text-white enabled:hover:bg-white/10",
  success: "enabled:bg-green-600 enabled:text-white enabled:hover:bg-green-700",
  danger: "enabled:bg-red-600 enabled:text-white enabled:hover:bg-red-700",
} as const;

const Button = ({
  copy,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer ${fullWidth ? "w-full" : ""} ${variantStyles[variant]} disabled:bg-gray-500 disabled:opacity-40 disabled:cursor-not-allowed text-1xl font-bold py-5 px-6 rounded-[999px] transition-colors duration-250`}
      disabled={disabled}
    >
      {copy}
    </button>
  );
};

export default Button;

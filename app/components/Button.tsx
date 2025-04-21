interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "primary" | "secondary"; 
  }
  
  const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = "button",
    variant = "default",
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-[102px] h-[44px] flex items-center justify-center rounded-[4px] gap-2 px-6 py-3 
          font-Poppins font-semibold text-[14px] leading-[20px] tracking-normal ${
          variant === "default" ? "bg-[#9B59B6] text-white" : ""
        }`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  
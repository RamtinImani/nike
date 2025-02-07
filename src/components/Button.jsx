const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center font-montserrat text-lg leading-none gap-2 px-7 py-4     border rounded-full
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "text-white bg-coral-red border-coral-red"
        }
        ${fullWidth && "w-full"}
        `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full size-5" />}
    </button>
  );
};

export default Button;

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
      <button className={`flex gap-2 px-7 py-4 border font-grotesk text-lg leading-none
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-rich-black text-white border-rich-black'} rounded-[14px] ${fullWidth && "w-full"}`}>
        {label}
  
       {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"/>}
      </button>
    )
  }
  
  export default Button
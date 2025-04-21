import React from "react";

interface SessionBtnProps {
  text: string;
}

const SessionBtn: React.FC<SessionBtnProps> = ({ text }) => {
  return (
    <button
      className="w-[340px] h-[44px] rounded-[4px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px]
       bg-[#9B59B6] text-white font-Poppins font-semibold text-[16px] leading-[24px] flex items-center justify-center"
    >
      {text}
    </button>
  );
};

export default SessionBtn;

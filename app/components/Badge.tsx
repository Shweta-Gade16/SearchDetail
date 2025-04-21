import React from "react";
import { IoMdStar } from "react-icons/io";
import { BiSolidCrown } from "react-icons/bi";

interface BadgeProps {
  type: "newcomer" | "pro" | "expert"; 
  text: string; 
}

const Badge: React.FC<BadgeProps> = ({ type, text }) => {

  const badgeStyles = {
    newcomer: "bg-gradient-to-r from-[#C47F35] to-[#7C4D17] w-[72px] h-[18px] text-white",
    pro: "bg-gradient-to-r from-[#7B91B3] to-[#324A6D] w-[56px] h-[18px] text-white flex items-center justify-center gap-1", 
    expert: "bg-gradient-to-r from-[#F7BC09] to-[#B76200] w-[72px] h-[18px] text-white flex items-center justify-center gap-1", 
  };

  return (
    <div
      className={`flex items-center justify-center py-1.5 px-3 rounded-full ${badgeStyles[type]} gap-2`}
    >
      {type === "pro" && (
        <IoMdStar className="text-[#FFFFFF] w-[8px] h-[8px]" />
      )}
      {type === "expert" && (
        <BiSolidCrown className="text-[#FFFFFF] w-[7.5px] h-[6.666666px] " />
      )}
      <span className="text-xs font-semibold">{text}</span>
    </div>
  );
};

export default Badge;
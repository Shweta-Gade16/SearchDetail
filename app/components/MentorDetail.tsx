'use client';
import React, { useState } from "react";
import Image from "next/image";
import { mentors } from "../data/dummy";
import Badge from "./Badge";
import { IoMdStar } from "react-icons/io";
import { MessageButton } from "./MessageBtn";
import Review from "./Review";
import TradingDetails from "./TradingDetails";
import SideCard from "./SideCard";

const MentorDetail: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-8">
      {mentors.map((mentor) => (
        <div key={mentor.id} className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 w-full lg:w-[684px]">
            <div className="w-full h-full rounded-lg p-4 bg-white flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6">
            <div className="flex-shrink-0">
              <Image
                src={mentor.image || "/placeholder.png"}
                alt={`${mentor.name || "Mentor"} Profile Image`}
                width={213.74}
                height={236}
                className="rounded-md object-cover h-full"
              />
            </div>
            <div className="flex flex-col w-full gap-y-5">
              <div className="flex items-center gap-2">
                <p className="font-Poppins font-semibold text-[18px] text-[#324A6D]">
                  {mentor.name}
                </p>
                <div className="w-[1px] h-5 bg-[#324A6D33]"></div>
                <p className="text-[14px] font-Poppins text-[#324A6D]">
                  {mentor.userId}
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <Badge
                  type={mentor.level.toLowerCase() as "newcomer" | "pro" | "expert"}
                  text={mentor.level}
                />
                <p className="text-[14px] font-Poppins text-[#324A6D]">
                  {mentor.experience}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdStar className="text-[#F0A14D] w-[12px] h-[12px]" />
                <p className="text-[14px] font-Poppins font-semibold text-[#324A6D]">
                  {mentor.rating}
                </p>
                <p className="text-[14px] font-Poppins text-[#324A6D]">
                  ({mentor.reviews} reviews)
                </p>
              </div>
              <p className="text-[14px] font-Poppins text-[#324A6D]">
                Sessions Completed:{" "}
                <span className="font-semibold">{mentor.sessionsCompleted}</span>
              </p>
              <MessageButton text="Message" />
            </div>
          </div>
          <div className="lg:hidden">
            <SideCard />
          </div>
           <div className="w-full h-auto rounded-lg  bg-white flex flex-col gap-[16px]">
              <h2 className="font-Poppins font-semibold text-[20px] text-[#324A6D]">
                About {mentor.name}
              </h2>
              <div
                className="w-full font-Poppins font-normal text-[16px] leading-[24px] text-[#324A6D] whitespace-pre-line"
              >
                {isExpanded ? mentor.about : `${mentor.about.substring(0, 650)}...`}
                {mentor.about.length > 650 && (
                  <div className="pt-4">
                    <button
                      className="font-Poppins font-semibold text-[14px] text-[#9B59B6]"
                      onClick={toggleReadMore}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <TradingDetails />
            <Review />
          </div>
          <div className="hidden lg:block lg:w-[30%]">
            <SideCard />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorDetail;

import React, { useState } from "react";
import SessionBtn from "./SessionBtn";

interface Mentor {
  hasIntroSession: boolean;
  hasMentorshipSession: boolean;
  mentorship: {
    types: string[];
    price: number;
    duration: string;
  };
  intro: {
    price: number;
    duration: string;
  };
}

const SideCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mentorship" | "intro">("mentorship");

  const mentor: Mentor = {
    hasIntroSession: true,
    hasMentorshipSession: true,
    mentorship: {
      types: ["Standard", "Extended"],
      price: 199,
      duration: "30 mins",
    },
    intro: {
      price: 0,
      duration: "10 mins",
    },
  };

  const { hasIntroSession, hasMentorshipSession, mentorship, intro } = mentor;

  return (
    <div className="w-full max-w-[404px] h-auto pt-8 sticky top-0 flex-shrink-0">
      <div className="w-full h-auto rounded-lg border border-[#D6DBE2] flex flex-col">
        <div className="w-full h-16 border-b-[1.5px] border-[#324A6D33] flex items-center justify-between">
          <div
            className={`w-1/2 h-full flex items-center justify-center cursor-pointer ${
              activeTab === "mentorship" ? "border-b-[3px] border-[#1A237E]" : ""
            }`}
            onClick={() => setActiveTab("mentorship")}
          >
            <p
              className={`font-Poppins text-base ${
                activeTab === "mentorship" ? "font-semibold" : "font-medium"
              } text-[#324A6D]`}
            >
              Mentorship
            </p>
          </div>
          {hasIntroSession && (
            <div
              className={`w-1/2 h-full flex items-center justify-center cursor-pointer ${
                activeTab === "intro" ? "border-b-[3px] border-[#1A237E]" : ""
              }`}
              onClick={() => setActiveTab("intro")}
            >
              <p
                className={`font-Poppins text-base ${
                  activeTab === "intro" ? "font-semibold" : "font-medium"
                } text-[#324A6D]`}
              >
                Intro Session
              </p>
            </div>
          )}
        </div>
        <div className="w-full px-4 sm:px-8 py-5 gap-6 flex flex-col">
          {activeTab === "mentorship" && hasMentorshipSession && (
            <>
              <div className="w-full h-11 rounded-md border border-[#D6DBE2] flex">
                {mentorship.types.map((type, index) => (
                  <div
                    key={index}
                    className={`w-1/2 ${
                      index === 0 ? "bg-[#F4F4F4]" : ""
                    } flex items-center justify-center p-2`}
                  >
                    <p
                      className={`font-Poppins ${
                        index === 0 ? "font-semibold" : "font-medium"
                      } text-base text-[#324A6D]`}
                    >
                      {type}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full gap-6 flex flex-col">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-Poppins font-semibold text-lg text-[#324A6D]">
                      Mentorship Session
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-Poppins font-normal text-sm text-[#324A6D]">
                        Duration:
                      </p>
                      <span className="font-Poppins font-medium text-base text-[#324A6D]">
                        {mentorship.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-Poppins font-semibold text-2xl text-[#324A6D]">
                      ${mentorship.price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "intro" && hasIntroSession && (
            <>
              <div className="w-full gap-6 flex flex-col">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-Poppins font-semibold text-lg text-[#324A6D]">
                      Intro Session
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-Poppins font-normal text-sm text-[#324A6D]">
                        Duration:
                      </p>
                      <span className="font-Poppins font-medium text-base text-[#324A6D]">
                        {intro.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-Poppins font-semibold text-2xl text-[#324A6D]">
                      {intro.price === 0 ? "Free" : `$${intro.price}`}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-center">
            <SessionBtn text={"Book a Session"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;

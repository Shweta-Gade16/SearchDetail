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

const mentors: Mentor[] = [
  {
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
  },
  {
    hasIntroSession: false,
    hasMentorshipSession: true,
    mentorship: {
      types: ["Standard", "Extended"],
      price: 199,
      duration: "30 mins",
    },
    intro: {
      price: 0,
      duration: "0 mins",
    },
  },
  {
    hasIntroSession: true,
    hasMentorshipSession: true,
    mentorship: {
      types: ["Standard"],
      price: 199,
      duration: "0 mins",
    },
    intro: {
      price: 0,
      duration: "30 mins",
    },
  },
  {
    hasIntroSession: false,
    hasMentorshipSession: true,
    mentorship: {
      types: ["Standard"],
      price: 199,
      duration: "30 mins",
    },
    intro: {
      price: 0,
      duration: "0 mins",
    },
  },
];

const SideCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mentorship" | "intro">("mentorship");
  const [selectedSessionType, setSelectedSessionType] = useState<string>("Standard");
  const mentorIndex = 0; // Adjust this index for different mentor conditions on SideCard(0,1,2,3)
  const mentor = mentors[mentorIndex];

  const { hasIntroSession, hasMentorshipSession, mentorship, intro } = mentor;

  const selectedMentorshipDetails = 
    selectedSessionType === "Extended"
      ? { price: mentorship.price + 100, duration: "60 mins" } 
      : { price: mentorship.price, duration: mentorship.duration };

  const showIntroTab = hasIntroSession;
  const showMentorshipTab = hasMentorshipSession;

  return (
    <div className="w-full max-w-[404px] h-auto pt-8 sticky top-0 flex-shrink-0">
      <div className="w-full h-auto rounded-lg border border-[#D6DBE2] flex flex-col">

        <div className="w-full h-16 border-b-[1.5px] border-[#324A6D33] flex items-center justify-center">
          <div
            className={`w-${showIntroTab ? "1/2" : "full"} h-full flex items-center justify-center cursor-pointer ${
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
          {showIntroTab && (
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
          {activeTab === "mentorship" && showMentorshipTab && (
            <>
              <div className="w-full h-11 rounded-md border border-[#D6DBE2] flex">
                {mentorship.types.map((type, index) => (
                  <div
                    key={index}
                    className={`flex-1 flex items-center justify-center p-2 cursor-pointer ${
                      type === selectedSessionType ? "bg-[#F4F4F4]" : ""
                    }`}
                    onClick={() => setSelectedSessionType(type)}
                  >
                    <p
                      className={`font-Poppins ${
                        type === selectedSessionType ? "font-semibold" : "font-medium"
                      } text-base text-[#324A6D]`}
                    >
                      {type}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-Poppins font-semibold text-lg text-[#324A6D]">
                    Mentorship Session{selectedSessionType === "Extended" ? " (Extended)" : ""}
                  </p>
                  <p className="font-Poppins font-normal text-sm text-[#324A6D]">
                    Duration:{" "}
                    <span className="font-medium">
                      {selectedMentorshipDetails.duration || "Not Available"}
                    </span>
                  </p>
                </div>
                <p className="font-Poppins font-semibold text-2xl text-[#324A6D]">
                  ${selectedMentorshipDetails.price}
                </p>
              </div>
            </div>
            </>
          )}

          {activeTab === "intro" && hasIntroSession && (
            <>
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-Poppins font-semibold text-lg text-[#324A6D]">Intro Session</p>
                    <p className="font-Poppins font-normal text-sm text-[#324A6D]">
                      Duration: <span className="font-medium">{intro.duration}</span>
                    </p>
                  </div>
                  <p className="font-Poppins font-semibold text-2xl text-[#324A6D]">
                    {intro.price === 0 ? "Free" : `$${intro.price}`}
                  </p>
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
import React from "react";
import SessionBtn from "./SessionBtn"; 

const SideCard: React.FC = () => {
  return (
    <div className="w-full max-w-[404px] h-auto pt-8 sticky top-0 flex-shrink-0">
      <div className="w-full h-auto rounded-lg border border-[#D6DBE2] flex flex-col">
        <div className="w-full h-16 border-b-[1.5px] border-[#324A6D33] flex items-center justify-between">
          <div className="w-1/2 h-full border-b-[3px] border-[#1A237E] flex items-center justify-center">
            <p className="font-Poppins font-semibold text-base text-[#324A6D]">
              Mentorship
            </p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <p className="font-Poppins font-medium text-base text-[#324A6D]">
              Intro Session
            </p>
          </div>
        </div>
        <div className="w-full px-4 sm:px-8 py-5 gap-6 flex flex-col">
          <div className="w-full h-11 rounded-md border border-[#D6DBE2] flex">
            <div className="w-1/2 bg-[#F4F4F4] flex items-center justify-center p-2">
              <p className="font-Poppins font-semibold text-base text-[#324A6D]">
                Standard
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center p-2">
              <p className="font-Poppins font-medium text-base text-[#324A6D]">
                Extended
              </p>
            </div>
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
                    30 mins
                  </span>
                </div>
              </div>
              <div>
                <p className="font-Poppins font-semibold text-2xl text-[#324A6D]">
                  $199
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <SessionBtn text={"Book a Session"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;

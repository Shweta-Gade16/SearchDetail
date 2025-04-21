import React from 'react';
import { mentors } from '../data/dummy';

const TradingDetails: React.FC = () => {
  const mentor = mentors[0];

  return (
    <div className="w-full max-w-[684px] bg-white rounded-lg ">
      <p className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#324A6D] mb-6">
        Trading Details
      </p>
      <div className="flex flex-col gap-4 mb-6">
        <p className="font-Poppins font-semibold text-[16px] leading-[24px] text-[#324A6D]">
          Markets
        </p>
        <div className="flex flex-wrap gap-3">
          {mentor.markets.map((market, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[12px] font-Poppins text-[#324A6D] border border-[#324A6D1A] rounded-md bg-white"
            >
              {market}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <p className="font-Poppins font-semibold text-[16px] leading-[24px] text-[#324A6D]">
          Trading Style
        </p>
        <div className="flex flex-wrap gap-3">
          {mentor.tradingStyle.map((style, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[12px] font-Poppins text-[#324A6D] border border-[#324A6D1A] rounded-md bg-white"
            >
              {style}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <p className="font-Poppins font-semibold text-[16px] leading-[24px] text-[#324A6D]">
          Strategy Focus
        </p>
        <div className="flex flex-wrap gap-3">
          {mentor.strategyFocus.map((strategy, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[12px] font-Poppins text-[#324A6D] border border-[#324A6D1A] rounded-md bg-white"
            >
              {strategy}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <p className="font-Poppins font-semibold text-[16px] leading-[24px] text-[#324A6D]">
          Analysis Method
        </p>
        <div className="flex flex-wrap gap-3">
          {mentor.analysisMethod.map((method, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[12px] font-Poppins text-[#324A6D] border border-[#324A6D1A] rounded-md bg-white"
            >
              {method}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <p className="font-Poppins font-semibold text-[16px] leading-[24px] text-[#324A6D]">
          Automation Level
        </p>
        <div className="flex flex-wrap gap-3">
          {mentor.automationLevel.map((level, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[12px] font-Poppins text-[#324A6D] border border-[#324A6D1A] rounded-md bg-white"
            >
              {level}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-Poppins font-semibold text-[16px] leading-[24px] text-[#324A6D]">
          Market Participation
        </p>
        <div className="flex flex-wrap gap-3">
          {mentor.marketParticipation.map((participation, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[12px] font-Poppins text-[#324A6D] border border-[#324A6D1A] rounded-md bg-white"
            >
              {participation}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingDetails;

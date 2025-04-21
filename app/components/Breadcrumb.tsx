import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi"; 

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string; 
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2 text-[#324A6D] pb-8">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center text-[14px] leading-[20px] font-[Poppins] ${
              index === items.length - 1
                ? "font-semibold" 
                : "font-normal"
            }`}
          >
            {index > 0 && (
              <HiChevronRight className="text-[#324A6D] mx-2" />
            )}
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

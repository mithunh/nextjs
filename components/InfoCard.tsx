import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

interface InfoCardProps {
  title: string;
  description: string;
  bgColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  bgColor = "#0E0E0E",
  gradientFrom = "#006BF1",
  gradientTo = "#00A9DB",
  icon,
}) => {
  return (
    <>
      <Link href="#" className="no-underline">
        <div
          className={`relative p-3 lg:p-6 rounded mx-2 lg:mx-4 pr-12`}
          style={{ backgroundColor: bgColor }}
        >
          <h4 className="text-white text-lg lg:text-xl">{title}</h4>
          <p
            className={`whitespace-nowrap text-transparent bg-clip-text`}
            style={{
              backgroundImage: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {description}
          </p>
          <div className="absolute right-8 top-8">
            {icon || <IoArrowForwardSharp className="-rotate-45" />}
          </div>
        </div>
      </Link>
    </>
  );
};

export default InfoCard;

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg?: "blue" | "purple" | "green" | "orange";
}

const iconBackground = {
  blue: "bg-blue-500/10 text-blue-500",
  purple: "bg-purple-500/10 text-purple-500",
  green: "bg-green-500/10 text-green-500",
  orange: "bg-orange-500/10 text-orange-500",
};

const FeatureCard = ({
  title,
  description,
  icon,
  iconBg = "purple",
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[220px]">
      {/* Icon */}
      <div
        className={`
          h-20
          w-20
          rounded-full
          flex
          items-center
          justify-center
          mb-6
          ${iconBackground[iconBg]}
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-6">{description}</p>
    </div>
  );
};

export default FeatureCard;

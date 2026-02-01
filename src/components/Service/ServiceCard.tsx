"use client";
import clsx from "clsx";
import { ReactNode } from "react";

interface IServiceCardProps {
  icon: ReactNode;
  title: string;
}

export const ServiceCard = ({ icon, title }: IServiceCardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] bg-white rounded-lg transition-all duration-75",
        "hover:shadow-[0_20px_40px_#6366f126] hover:border-primary-100  hover:-translate-y-1 hover:cursor-pointer",
      )}
    >
      {icon}
      <h3 className="text-base text-gray-900 font-semibold capitalize">
        {title}
      </h3>
    </div>
  );
};

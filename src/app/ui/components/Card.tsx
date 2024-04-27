import { ReactNode } from "react";

interface Props {
  background: string;
  description: string;
  title: string;
  icon: ReactNode;
}

const Card = ({background, description, title, icon}:Props) => {
  return (
    <div className="max-w-72 rounded-xl shadow-lg border-solid border-white border-4 bg-white overflow-hidden appear">
      <div className={`card-header ${background}`}>
        {icon}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

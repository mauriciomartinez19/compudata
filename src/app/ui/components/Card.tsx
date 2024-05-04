import { ReactNode } from "react";

interface Props {
  background: string;
  description: string;
  title: string;
  icon: ReactNode;
}

const Card = ({background, description, title, icon}:Props) => {
  return (
    <div className="max-w-72 rounded-xl shadow-lg border-solid border-white border-4 bg-white overflow-hidden appear opacity-100 scale-100">
      <div className={`card-header ${background}`}>
        {icon}
      </div>
      <div className="px-6 py-4 text-black">
        <div className="font-bold text-xl mb-2 ">{title}</div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

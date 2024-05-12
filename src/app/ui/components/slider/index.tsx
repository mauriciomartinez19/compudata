import "./slider.css";
import { CSSProperties, Children } from "react";

interface Props {
  children: React.ReactNode;
}

const Slider = ({ children }: Props) => {
  const style = {
    "--logos-quantity": Children.count(children),
  } as CSSProperties;
  return (
    <div style={style} className="slider-container">
      <div className="slider-wrapper">
        <div className="flex logos-wrapper">
          <div className="slider-first-slide">
            {Children.map(children, (child) => {
              return <div className="logo-box"> {child} </div>;
            })}
          </div>
          <div className="slider-second-slide">
          {Children.map(children, (child) => {
              return <div className="logo-box"> {child} </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

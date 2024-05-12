import "./slider.css";
import { CSSProperties, Children } from "react";

interface Props {
  children: React.ReactNode;
  slideWidth: string;
  slideGap: string;
}

const Slider = ({ children, slideWidth, slideGap }: Props) => {
  const style = {
    "--logos-quantity": Children.count(children),
    "--slider-logo-width": slideWidth,
    "--slider-gap": slideGap
  } as CSSProperties;
  return (
    <div style={style} className="slider-container">
      <div className="slider-wrapper">
        <div className="flex logos-wrapper">
          <div className="slider-first-slide">
            {Children.map(children, (child, index) => {
              return <div key={index} className="logo-box"> {child} </div>;
            })}
          </div>
          <div className="slider-second-slide">
          {Children.map(children, (child, index) => {
              return <div key={index} className="logo-box"> {child} </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

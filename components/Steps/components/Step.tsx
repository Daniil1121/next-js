import ArrowSVG from "../svg/Arrow";
import { IStep } from "../../../next.d.interfaces";

const Step = ({ step, title, descr }: IStep) => {
  return (
    <div className="step step__wrapper">
      <div className="step__arrow">
        <ArrowSVG />
      </div>
      <div className="step__content">
        <h4 className="step__number">Step {step}</h4>
        <h3 className="step__title">{title}</h3>
        <p className="step__descr">{descr}</p>
      </div>
    </div>
  );
};

export default Step;

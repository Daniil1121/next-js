import { IReviewControls } from "../../../next.d.interfaces";
import ArrowSVG from "./../svg/Arrow";

const Controls = ({
  opacity,
  feedbackNumber,
  setOpacity,
  setFeedbackNumber,
}: IReviewControls) => {
  const setNextFeedback = () => {
    setOpacity(0);
    setTimeout(() => {
      if (feedbackNumber >= 3) {
        setFeedbackNumber(1);
        setTimeout(() => setOpacity(1));
      } else {
        setFeedbackNumber((prev) => prev + 1);
        setTimeout(() => setOpacity(1));
      }
    }, 300);
  };

  const setPrevFeedback = () => {
    setOpacity(0);
    setTimeout(() => {
      if (feedbackNumber <= 1) {
        setFeedbackNumber(3);
        setTimeout(() => setOpacity(1));
      } else {
        setFeedbackNumber((prev) => prev - 1);
        setTimeout(() => setOpacity(1));
      }
    }, 300);
  };

  return (
    <div className="review__controls">
      <span
        className={`review__controls__counter ${!!opacity ? "" : "hidden"}`}
      >
        {feedbackNumber}/
        <span className="review__controls__counter__total">3</span>
      </span>
      <div className="review__controls__buttons">
        <button onClick={setPrevFeedback} className="btn-reset btn">
          <ArrowSVG />
        </button>
        <button onClick={setNextFeedback} className="btn-reset btn">
          <ArrowSVG />
        </button>
      </div>
    </div>
  );
};

export default Controls;

import { useState } from "react";
import Controls from "./components/Controls";
import Feedback from "./components/Feedback";

const Review = ({ reviewRef }: { reviewRef: React.RefObject<HTMLElement> }) => {
  const [feedbackNumber, setFeedbackNumber] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);

  return (
    <section ref={reviewRef} className="review">
      <div className="review__container container">
        <h2 className="review__title title">Review</h2>
        <Controls
          opacity={opacity}
          feedbackNumber={feedbackNumber}
          setOpacity={setOpacity}
          setFeedbackNumber={setFeedbackNumber}
        />
        <Feedback opacity={opacity} feedbackNumber={feedbackNumber} />
      </div>
    </section>
  );
};

export default Review;

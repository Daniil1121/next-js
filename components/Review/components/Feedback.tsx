import Image from "next/image";
import { imgArr, textArr, titleArr } from "../data/data";
import BigBorderSVG from "../svg/BigBorder";
import SmallBorderSVG from "../svg/SmallBorder";
import { IReviewFeedback } from "./../../../next.d.interfaces";

const Feedback = ({ opacity, feedbackNumber }: IReviewFeedback) => {
  return (
    <div className={`review__content ${!!opacity ? "" : "hidden"}`}>
      <div className="review__content__feedback">
        <h4 className="review__content__feedback__title">
          {titleArr[feedbackNumber - 1]}
        </h4>
        <p className="review__content__feedback__text">
          {textArr[feedbackNumber - 1]}
        </p>
      </div>

      <div className={`review__content__img-container-big`}>
        <Image
          className="big-image"
          src={imgArr[feedbackNumber - 1]}
          alt="feedback photo"
        />
        <BigBorderSVG />
      </div>
      <div className={`review__content__img-container`}>
        {feedbackNumber >= 3 ? (
          <Image
            className="small-image"
            src={imgArr[feedbackNumber - 3]}
            alt="feedback photo"
          />
        ) : (
          <Image
            className="small-image"
            src={imgArr[feedbackNumber]}
            alt="feedback photo"
          />
        )}

        <SmallBorderSVG />
      </div>
      <div className={`review__content__img-container`}>
        {feedbackNumber + 1 >= 3 ? (
          <Image
            className="small-image"
            src={imgArr[feedbackNumber - 2]}
            alt="feedback photo"
          />
        ) : (
          <Image
            className="small-image"
            src={imgArr[feedbackNumber + 1]}
            alt="feedback photo"
          />
        )}

        <SmallBorderSVG />
      </div>
    </div>
  );
};

export default Feedback;

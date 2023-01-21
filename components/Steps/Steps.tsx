import Step from "./components/Step";
import { stepsArr } from "./data/data";

const Steps = ({ stepsRef }: { stepsRef: React.RefObject<HTMLElement> }) => {
  return (
    <section ref={stepsRef} className="steps">
      <div className="steps__container container">
        <h2 className="steps__title">Steps</h2>
        <div className="steps__list">
          <div className="steps__list__line"></div>
          {stepsArr.map((item, idx) => (
            <Step
              key={item.title + idx}
              title={item.title}
              descr={item.descr}
              step={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

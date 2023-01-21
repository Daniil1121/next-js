import AngularSVG from "./svg/Angular";
import VueSVG from "./svg/Vue";
import ReactSVG from "./svg/React";
import JavaScriptSVG from "./svg/JavaScript";

const Technologies = ({
  technologiesRef,
}: {
  technologiesRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={technologiesRef} className="technologies">
      <div className="technologies__container container">
        <h2 className="technologies__title title">Programming technologies</h2>
        <p className="technologies__subtitle">
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </p>
        <ul className="technologies__list list-reset">
          <li>
            <AngularSVG />
          </li>
          <li>
            <ReactSVG />
          </li>
          <li>
            <VueSVG />
          </li>
          <li>
            <JavaScriptSVG />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Technologies;

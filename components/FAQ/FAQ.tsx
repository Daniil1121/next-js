import FAQItem from "./components/FAQItem";
import QuestionSVG from "./svg/QuestionSVG";

const FAQ = ({ faqRef }: { faqRef: React.RefObject<HTMLElement> }) => {
  return (
    <section ref={faqRef} className="faq">
      <div className="faq__container container">
        <h2 className="faq__title title">Frequently Asked Questions</h2>
        <div className="faq__content">
          <div className="faq__content__logo">
            <p className="faq__content__logo-descr">
              Do you have any kind of questions? <br /> We are here to help.
            </p>
            <div className="faq__content__logo-svg">
              <QuestionSVG />
            </div>
          </div>
          <div className="faq__content__accordion accordion">
            {new Array(5).fill(1).map((item, idx) => (
              <FAQItem key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

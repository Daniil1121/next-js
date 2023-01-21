import Mentors from "./components/Mentors";
import Description from "./components/Description";

const About = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLHeadingElement>;
}) => {
  return (
    <section className="about">
      <div className="about__container container">
        <h2 ref={aboutRef} className="about__title title">
          About Us
        </h2>
        <div className="about__content">
          <Mentors />
          <Description />
        </div>
      </div>
    </section>
  );
};

export default About;

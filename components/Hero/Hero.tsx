const Hero = ({
  contactRef,
}: {
  contactRef: React.RefObject<null | HTMLElement>;
}) => {
  const clickHandler = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__text">
          <h1 className="title">
            Front-End <br /> <span className="title__offset"></span> Developer
          </h1>
          <p className="descr">
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).
          </p>
          <button onClick={clickHandler} className="btn-reset btn">
            Start my career change
          </button>
          <h3 className="last-word">Courses</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;

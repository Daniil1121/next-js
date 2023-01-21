import LogoSVG from "../General/svg/Logo";

export interface IRefProps {
  aboutRef: React.RefObject<null | HTMLHeadingElement>;
  contactRef: React.RefObject<null | HTMLElement>;
  technologiesRef: React.RefObject<null | HTMLElement>;
  stepsRef: React.RefObject<null | HTMLElement>;
  faqRef: React.RefObject<null | HTMLElement>;
}

const Header = ({
  aboutRef,
  contactRef,
  technologiesRef,
  stepsRef,
  faqRef,
}: IRefProps) => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToFAQ = (e: React.MouseEvent) => {
    e.preventDefault();
    faqRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToTechnologies = (e: React.MouseEvent) => {
    e.preventDefault();
    technologiesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToSteps = (e: React.MouseEvent) => {
    e.preventDefault();
    stepsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__logo">
          <LogoSVG />
        </div>
        <div className="header__menu">
          <ul className="menu-list list-reset">
            <li>
              <a onClick={scrollToAbout} href="#">
                About
              </a>
            </li>
            <li>
              <a onClick={scrollToTechnologies} href="#">
                Programs
              </a>
            </li>
            <li>
              <a onClick={scrollToSteps} href="#">
                Steps
              </a>
            </li>
            <li>
              <a onClick={scrollToFAQ} href="#">
                Questions
              </a>
            </li>
            <li>
              <a onClick={scrollToContacts} href="#">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { IFooterRefProps } from "../../next.d.interfaces";
import Menu from "./components/Menu";
import Company from "./components/Company";
import Socials from "./components/Socials";

const Footer = ({
  aboutRef,
  stepsRef,
  faqRef,
  galleryRef,
  reviewRef,
}: IFooterRefProps) => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <Company />
        <Menu
          stepsRef={stepsRef}
          aboutRef={aboutRef}
          galleryRef={galleryRef}
          faqRef={faqRef}
          reviewRef={reviewRef}
        />
        <Socials />
      </div>
    </div>
  );
};

export default Footer;

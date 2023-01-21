import React from "react";
import { IFooterRefProps } from "../../../next.d.interfaces";

const Menu = ({
  aboutRef,
  stepsRef,
  faqRef,
  galleryRef,
  reviewRef,
}: IFooterRefProps) => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToFAQ = (e: React.MouseEvent) => {
    e.preventDefault();
    faqRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToSteps = (e: React.MouseEvent) => {
    e.preventDefault();
    stepsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReview = (e: React.MouseEvent) => {
    e.preventDefault();
    reviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer__menu">
      <h4 className="footer__menu__title footer__title">Company</h4>
      <nav>
        <ul className="footer__menu__list list-reset">
          <li>
            <a onClick={scrollToAbout} href="#">
              About Us
            </a>
          </li>
          <li>
            <a onClick={scrollToReview} href="#">
              Review
            </a>
          </li>
          <li>
            <a onClick={scrollToSteps} href="#">
              Steps
            </a>
          </li>
          <li>
            <a onClick={scrollToGallery} href="#">
              Gallery
            </a>
          </li>
          <li>
            <a onClick={scrollToFAQ} href="#">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

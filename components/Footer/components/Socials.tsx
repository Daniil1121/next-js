import FoxSVG from "./../svg/Fox";
import TwitterSVG from "./../svg/Twitter";
import LinkedInSVG from "./../svg/LinkedIn";
import FaceBookSVG from "./../svg/Facebook";

const Socials = () => {
  return (
    <div className="footer__socials">
      <h4 className="footer__socials__title footer__title">Social media</h4>
      <nav>
        <ul className="list-reset footer__socials__list">
          <li className="footer__socials__item">
            <a target="_blank" href="https://ru-ru.facebook.com/">
              <FaceBookSVG />
            </a>
          </li>
          <li className="footer__socials__item">
            <a target="_blank" href="https://www.mozilla.org/ru/firefox/">
              <FoxSVG />
            </a>
          </li>
          <li className="footer__socials__item">
            <a target="_blank" href="https://twitter.com/">
              <TwitterSVG />
            </a>
          </li>
          <li className="footer__socials__item">
            <a target="_blank" href="http://www.linkedin.com/">
              <LinkedInSVG />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Socials;

import smallImg from "./../../assets/image/gallery/gallery-small.png";
import smallImg2 from "./../../assets/image/gallery/gallery-small-2.png";
import bigImg from "./../../assets/image/gallery/gallery-big.png";
import verticalImg from "./../../assets/image/gallery/gallery-vertical.png";
import Image from "next/image";

const Gallery = ({
  galleryRef,
}: {
  galleryRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={galleryRef} className="gallery">
      <div className="gallery__container container">
        <h2 className="gallery__title">Gallery</h2>
        <ul className="list-reset gallery__list">
          <li className="gallery__list__item--text">
            <p>
              By the end of this course, you will be able to develop and publish
              your very own Google Chrome extension! In this course we will
              focus on coding exercises and projects.
            </p>
          </li>
          <li className="gallery__list__item--big-img">
            <Image
              className="gallery__list__image"
              src={bigImg}
              alt="artistic images"
            />
          </li>
          <li className="gallery__list__item--small-img">
            <Image
              className="gallery__list__image"
              src={smallImg}
              alt="artistic images"
            />
          </li>
          <li className="gallery__list__item--vertical-img">
            <Image
              className="gallery__list__image"
              src={verticalImg}
              alt="artistic images"
            />
          </li>
          <li className="gallery__list__item--big-img-2">
            <Image
              className="gallery__list__image"
              src={smallImg2}
              alt="artistic images"
            />
          </li>
          <li className="gallery__list__item--horisontal-text">
            <p>
              If you would like to learn web development and get a job in the
              tech industry, you are going to LOVE this course! Learn HTML, CSS,
              JavaScript, Bootstrap and more with over 15 hours of HD video
              tutorials! This course was designed to be extremely beginner
              friendly. We will begin with the very basics of HTML and build a
              simple web page.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;

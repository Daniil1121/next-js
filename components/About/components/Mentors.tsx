import WadePhoto from "./../../../assets/image/mentors/Wade_Warren.png";
import KristinPhoto from "./../../../assets/image/mentors/Kristin_Watson.png";
import RobertPhoto from "./../../../assets/image/mentors/Robert_Fox.png";
import Image from "next/image";
import LineSVG from "./../svg/Mentors-line";

const Mentors = () => {
  return (
    <div className="mentors">
      <h3 className="mentors__title">Mentors</h3>
      <div className="mentors__list__container">
        <LineSVG />
        <ul className="mentors__list list-reset">
          <li className="mentors__item">
            <div className="mentor">
              <Image
                className="mentor__photo"
                src={WadePhoto}
                alt="Picture of the author"
              />
              <div className="mentor__information">
                <h4 className="mentor__information-name">Wade Warren</h4>
                <p className="mentor__information-post">
                  Front-end engineers work closely with designers
                </p>
              </div>
            </div>
          </li>
          <li className="mentors__item">
            <div className="mentor">
              <Image
                className="mentor__photo"
                src={KristinPhoto}
                alt="mentor's photo"
              />
              <div className="mentor__information">
                <h4 className="mentor__information-name">Kristin Watson</h4>
                <p className="mentor__information-post">
                  Front-end engineers work closely with designers
                </p>
              </div>
            </div>
          </li>
          <li className="mentors__item">
            <div className="mentor">
              <Image
                className="mentor__photo"
                src={RobertPhoto}
                alt="mentor's photo"
              />
              <div className="mentor__information">
                <h4 className="mentor__information-name">Robert Fox</h4>
                <p className="mentor__information-post">
                  Front-end engineers work closely with designers
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mentors;

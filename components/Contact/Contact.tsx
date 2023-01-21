import React from "react";
import Form from "./components/Form";

const Contact = ({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={contactRef} className="contact">
      <div className="contact__container container">
        <div className="contact__content">
          <h2 className="contact__title">Contact us</h2>
          <p className="contact__subtitle">
            Do you have any kind of help please contact with us.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;

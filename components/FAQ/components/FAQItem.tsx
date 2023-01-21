import React, { useState } from "react";

const FAQItem = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion__item">
      <button
        className="accordion__item__toggle btn-reset"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span></span>
        <span className={`${open ? "open" : ""}`}></span>
      </button>
      <div className="angle"></div>
      <div className="angle-2"></div>
      <div className="accordion__item__text-container">
        <h4 className="accordion__item__title">What is the price?</h4>
        <p className={`accordion__item__answer ${open ? "open" : ""}`}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </p>
      </div>
    </div>
  );
};

export default FAQItem;

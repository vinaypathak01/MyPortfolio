import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        data-aos="fade-right"
        target="_blank"
        href="https://drive.google.com/file/d/1q3cJM__V-VK1fBItKR6soDK0SPU8RSF3/view"
        className="btn"
        rel="noreferrer"
      >
        Resume
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;

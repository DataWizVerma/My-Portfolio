import React from "react";
import Connection from "../../assets/images/connections.svg";
import Facebook from "../../assets/images/socials/Facebook.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
          <a href="mailto:kumarverma2002@gmail.com" target="blank">
              <img src={Facebook} alt="" />
              Kumarverma2002@gmail.com
            </a>
            <a href="https://www.instagram.com/kumar_v_e_r_m_a/" target="blank">
              <img src={Instagram} alt="" />
              kumar_v_e_r_m_a
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-verma2002/"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              kumar-verma2002
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

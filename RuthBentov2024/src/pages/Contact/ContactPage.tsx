import { IoIosArrowRoundUp } from "react-icons/io";
import React from "react";
import "./ContactStyle.scss";
const ContactPage = () => {
  const scrollToHomePage = () => {
    const targetElement = document.getElementById("homePageId");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="contactPageId" className="contactPage">
      <div className="redComp">
        <img className="logo" src="/images/logo2.png" alt="" />
        <h1>GET IN TOUCH!</h1>
        <p>
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email :)
        </p>
        <button
          onClick={() => {
            window.open(
              "mailto:ruttur66@gmail.com?subject=Hello%20Ruth&body=Hello%20Ruth%3A)",
              "_blank"
            );
          }}
          className="emailBtn"
        >
          <img src="/images/email.png" alt="Send Email" />
        </button>
      </div>
      <div className="blackComp">© Ruth Bentov</div>
      <div onClick={scrollToHomePage} className="arrowUp">
        <IoIosArrowRoundUp />
      </div>
    </div>
  );
};

export default ContactPage;

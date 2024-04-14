import React, { useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

const MediaIcons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div data-aos="fade-right" className="mediaIcons">
      < IoLogoLinkedin onClick={()=>window.open("https://www.linkedin.com/in/ruth-bentov-developer/", "_blank")} />
      < FaSquareGithub onClick={()=>{window.open("https://github.com/RuthBenTov?tab=repositories", "_blank");}} />
      < SiDiscord onClick={()=>{window.open(
        "https://discord.com/channels/@me/1217548504604610684",
        "_blank"
      );}} />
      < FaFacebookSquare onClick={()=>{window.open(
        "https://www.facebook.com/profile.php?id=100013842644149&locale=he_IL",
        "_blank"
      );}} />
    </div>
  );
};

export default MediaIcons;

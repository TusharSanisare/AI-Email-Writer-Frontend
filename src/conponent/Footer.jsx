import React from "react";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <h1 class="footer-title">AI Email Writer & Extension</h1>
        <p class="footer-subtitle">
          AI Email Writer & Extension is a personal project and not a production
          ready product. <br />
          It might take time to load because we are using external dependencies,
          APIs, and free hosting. <br />
          For more information contact using links below.
        </p>
        <p class="tushar">
          Created by Tushar <i class="fa-solid fa-heart"></i>
        </p>
        <div class="links">
          <a class="link" href="https://linkedin.com/in/tushar-sanisare">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a class="link" href="https://twitter.com/tushar_sanisare">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a
            class="link"
            href="https://github.com/TusharSanisare/AI-Email-Writer-Chrome-Extension"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a class="link" href="tsanisare@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>

        <p class="Copyright">@2025 Copyright: AI Email Writer & Extension</p>
      </div>
    </>
  );
};

export default Footer;

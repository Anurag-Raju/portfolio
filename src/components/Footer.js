import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2a2a2a"
          fill-opacity="1"
          d="M0,0L0,96L240,96L240,192L480,192L480,224L720,224L720,160L960,160L960,192L1200,192L1200,128L1440,128L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
        ></path>
      </svg>

      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-mont text-center">
            <p className="text-gray-50 pb-3">Designed and Developed By</p>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <div className="flex text-white w-full justify-between py-3">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/anurag-raju/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Anurag-Raju">
                <FaGithub />
              </a>
              <a href="https://www.gmail.com/">
                <FaMailBulk />
              </a>
            </div>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <p className="text-gray-50 my-2">Anurag</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

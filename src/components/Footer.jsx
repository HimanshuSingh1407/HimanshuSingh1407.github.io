import React from "react";

import { BsFillHeartFill } from "react-icons/bs";

import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        {" "}
        Made with <span>..</span> <BsFillHeartFill /> <span>..</span> and
        Node.js by Himanshu Singh
      </div>
    </>
  );
};

export default Footer;

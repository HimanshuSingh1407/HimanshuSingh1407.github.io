import React, { useEffect, useRef } from "react";
import Heading from "../components/Heading";

import "../styles/about.css";

import ss from "../assets/images/ss.png";

import { setValAbout } from "../context/features/navSlices/navSlices";
import { useDispatch } from "react-redux";

const About = () => {
  const refNav = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValAbout(refNav.current.offsetTop - 100));
  }, [dispatch]);

  return (
    <div id="about" class="about section">
      <Heading heading={`About`} subHeading={`a bit about me`} />
      <div ref={refNav} className="aboutContainer">
        <div className="leftContainer" id="user-detail-intro">
          <p className="writeAboutMe">
            I'm a passionate Developer, with strong administrative and
            communication skills, good attention to detail and the ability to
            write efficient code using MERN Stack. I take into consideration the
            user experience while writing reusable and efficient code.
          </p>
        </div>
        <div className="rightContainer">
          <img src={ss} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;

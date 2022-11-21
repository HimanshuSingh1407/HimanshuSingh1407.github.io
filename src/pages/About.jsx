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
    <>
      <Heading heading={`About`} subHeading={`a bit about me`} />

      <div ref={refNav} className="aboutContainer">
        <div className="leftContainer">
          <p className="writeAboutMe">
            <li>
              I'm a passionate Developer, with strong administrative and
              communication skills, good attention to detail and the ability to
              write efficient code using MERN Stack.
            </li>
            <br />
            <li>
              My interest in web development started back last year when I was
              trying to edit things on the web, that taught me a lot about HTML
              &amp; CSS.
            </li>
            <br />
            <li>
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
            </li>
            <br />
            <li>
              Fast Forwarding to today, I built a number of web applications and
              4 major projects. Learned a great deal about teamwork, leadership,
              and communication. After months of rigorous training, here I am
              looking for an opportunity as a full stack web developer.
            </li>
          </p>
        </div>
        <div className="rightContainer">
          <img src={ss} alt="img" />
        </div>
      </div>
    </>
  );
};

export default About;

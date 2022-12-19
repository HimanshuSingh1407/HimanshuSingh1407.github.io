import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/Heading";

import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsPhone,
  BsMailbox,
  BsPerson,
} from "react-icons/bs";

import { BiMessageRounded } from "react-icons/bi";

// import { motion } from "framer-motion";

import { setValContact } from "../context/features/navSlices/navSlices.js";

import { useDispatch } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

import "../styles/contact.css";

const Contact = () => {
  // const pageState = useSelector((state) => state.navReducer);
  const dispatch = useDispatch();
  const refNav = useRef();
  // console.log(pageState);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // setFormState({...state, [name]:value});
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hi");
  };

  useEffect(() => {
    dispatch(setValContact(refNav.current.offsetTop ));
  }, [dispatch]);

  return (
    <>
      <Heading heading={`Contact`} subHeading={`get in touch`} />

      <div ref={refNav} className="contactContainer">
        <address className="contactLeft">
          <div>
            <span>
              {" "}
              <a href="tel:+918764140115">Mobile - 7905181521</a>{" "}
            </span>
          </div>
          <div>
            <span>
              <a href="mailto:singh.himanshu1407@gmail.com">
                Email - singh.himanshu1407@gmail.com{" "}
              </a>
            </span>
          </div>
          <div>
            <span>Address - India, Lucknow(UP) 226028</span>
          </div>

          <div>
            <span>
              <a
                href="https://www.linkedin.com/in/himanshu-singh-8aba59146/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsTwitter />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-singh-8aba59146/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsLinkedin />{" "}
              </a>
              <a
                href="https://github.com/HimanshuSingh1407"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub />{" "}
              </a>
            </span>
          </div>
        </address>

        <div className="contactRight">
          <h2>Fill the contact</h2>

          <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
            <span>
              <BsPerson />{" "}
              <input
                required
                maxLength={18}
                name="name"
                type="text"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => handleChange(e)}
              />
            </span>
            <span>
              <BsMailbox />{" "}
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={(e) => handleChange(e)}
              />
            </span>
            <span>
              <BsPhone />{" "}
              <input
                required
                name="number"
                type="number"
                placeholder="Mobile Number"
                value={formState.number}
                onChange={(e) => handleChange(e)}
              />
            </span>
            <span>
              <BiMessageRounded />{" "}
              <textarea
                name="message"
                placeholder="Any suggestion... any message."
                cols="30"
                rows="3"
                value={formState.message}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </span>

            <input className="submitBtn" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

// whileHover={{
//   scale: [1, 1.2, 1.2, 1, 1],
//   borderRadius: ["0%", "0%", "50%", "50%", "0%"],

//   transition: {
//     duration: 2,
//     ease: "easeInOut",
//     times: [0, 0.2, 0.5, 0.8, 1],
//     repeat: Infinity,
//     repeatDelay: 2,
//   }
// }}
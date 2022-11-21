import React, {  useEffect , useRef} from "react";
import Heading from "../components/Heading";

import techStackArr from "../assets/data/techStackArr.js";

import "../styles/techStack.css";

import { motion } from "framer-motion";
import { setValSkill } from "../context/features/navSlices/navSlices";
import { useDispatch  } from "react-redux";
// import { useDispatch , useSelector } from "react-redux";

const TechStack = () => {
  // const [state, setState] = useState(false);

const refNav = useRef();
// const pageState = useSelector(state => state.navReducer)
const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(setValSkill(refNav.current.offsetTop - 100));
  },[dispatch])

  return (
    <>
      <Heading heading={`Skill`} subHeading={`what i know`} />

      <div  ref={refNav} className="techStackContainer">
        {techStackArr.map((el, ind) => {
          return (
            <motion.div
              className="cardTech"
              key={ind}
              whileHover={{
                scale: [1, 1.2, 1.2, 1, 1],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],

                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 2,
                },
                
              }}
            >
              <motion.img src={el.img} alt="" />
              <motion.h3>{el.name} </motion.h3>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default TechStack;

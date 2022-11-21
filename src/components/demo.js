import React, { useRef } from "react";

import { div } from "react-router-dom";


import { BiMenu, BiX } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";

import "../styles/navbar.css";
import { useEffect } from "react";
import { useState } from "react";

import {useSelector } from 'react-redux'


function getWindowSize() {
  const innerWidth = window.innerWidth;
  return innerWidth;
}
function getWindowPageYOffset() {
  const pageYOffset = window.pageYOffset;
  return pageYOffset;
}

const Navbar = () => {
  
 
  // const pageState = useSelector(state=> state.navReducer)

const ref = useRef();
const upBtn = useRef();
  const [menu, setMenu] = useState(true);

  const [navColor , setNavColor] = useState("none")

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [offSet,setOffSet] = useState(getWindowPageYOffset());

  const handleCloseMenu = () => {
    setMenu(!menu);
  };


  const handleUpBtn=()=>{
    window.scrollTo({top: 0,  behavior: 'smooth' });
    // console.log(offSet);
  }


  useEffect(() => {
    
    function handleWindowPageYOffset() {
      setOffSet(getWindowPageYOffset());

      if(offSet > 300){

          setNavColor("#fff");
      }

      if(offSet <= 300){
        setNavColor("transparent");
      }

      // console.log(upBtn)
    }
    function handleWindowResize() {
      setWindowSize(getWindowSize());

    }
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleWindowPageYOffset);
 

 

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize,offSet ]);

  return (
    <>

      <nav  style={{backgroundColor:`${navColor}`}} ref={ref} className="navbarMainContainer">
        <section id="one">
          <div className="maindiv" to={`/`} >
           
           Vaibhav Joshi
          </div>
        </section>

        <div className="navbarMainResponse">
          {windowSize < 800 ? (
            <section>
              {menu ? (
                <span onClick={() => setMenu(!menu)}>
                  {" "}
                  <BiMenu />
                </span>
              ) : (
                <span onClick={() => setMenu(!menu)}>
                  {" "}
                  <BiX />
                </span>
              )}
            </section>
          ) : (
            <>
              <section id="two">
                <div className="maindiv">
                  {" "}
                  <span>Home</span>
                </div>
                <div className="maindiv">
                  {" "}
                  <span>About</span> 
                </div>
                <div  className="maindiv">
                  Project
                </div>
                <div  className="maindiv">
                  Technology
                </div>
                <div    className="maindiv">
                  Contact
                </div>


              </section>
             
            </>
          )}
        </div>
      </nav>

      {!menu && windowSize < 800 ? (
        <div className="menuSmallPage">
          <section id="two">
            <div onClick={() => handleCloseMenu()} className="maindiv">
              {" "}
              <span>Home</span>
            </div>
            <div  onClick={() => handleCloseMenu()} className="maindiv">
              {" "}
              <span>About</span> 
            </div>
            <div
              onClick={() => handleCloseMenu()}
            
              className="maindiv"
            >
              Project
            </div>
            <div
              onClick={() => handleCloseMenu()}
              className="maindiv"
            >
              Technology
            </div>
            <div
              onClick={() => handleCloseMenu()}
            className="maindiv"
            >
            Contact
            </div>
          </section>
         
        </div>
      ) : null}



        <button  ref={upBtn} id="upBtn" onClick={handleUpBtn} >
         <BsArrowUp/>
        </button>



    </>
  );
};

export default Navbar;

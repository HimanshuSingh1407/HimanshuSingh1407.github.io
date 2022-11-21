import React, { useRef } from "react";

import { BiMenu, BiX } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";

import "../styles/navbar.css";
import { useEffect } from "react";
import { useState } from "react";

import { useSelector } from "react-redux";

function getWindowSize() {
  const innerWidth = window.innerWidth;
  return innerWidth;
}
function getWindowPageYOffset() {
  const pageYOffset = window.pageYOffset;
  return pageYOffset;
}

const Navbar = () => {
  const pageState = useSelector((state) => state.navReducer);

  const ref = useRef();
  const upBtn = useRef();
  const [menu, setMenu] = useState(true);

  const [navColor, setNavColor] = useState("none");

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [offSet, setOffSet] = useState(getWindowPageYOffset());

  const handleCloseMenu = (e) => {
    const { id } = e.target;

    switch (id) {
      case "homeNav":
        window.scrollTo({ top: pageState.home, behavior: "smooth" });
        break;
      case "aboutNav":
        window.scrollTo({ top: pageState.about, behavior: "smooth" });
        break;
      case "projectNav":
        window.scrollTo({ top: pageState.project, behavior: "smooth" });
        break;
      case "skillNav":
        window.scrollTo({ top: pageState.skill, behavior: "smooth" });
        break;
      case "contactNav":
        window.scrollTo({ top: pageState.contact, behavior: "smooth" });
        break;
      default:
        break;
    }

    setMenu(!menu);
  };

  const handleUpBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log(offSet);
  };

  useEffect(() => {
    function handleWindowPageYOffset() {
      setOffSet(getWindowPageYOffset());

      if (offSet > 300) {
        setNavColor("#fff");
      }

      if (offSet <= 300) {
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
  }, [windowSize, offSet]);

  return (
    <>
      <nav
        style={{ backgroundColor: `${navColor}` }}
        ref={ref}
        className="navbarMainContainer"
      >
        <section id="one">
          <div className="maindiv">Himanshu Singh</div>
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
                <div
                  onClick={() =>
                    window.scrollTo({ top: pageState.home, behavior: "smooth" })
                  }
                  className="maindiv"
                >
                  {" "}
                  <span>Home</span>
                </div>
                <div
                  onClick={() =>
                    window.scrollTo({
                      top: pageState.about,
                      behavior: "smooth",
                    })
                  }
                  className="maindiv"
                >
                  {" "}
                  <span>About</span>
                </div>
                <div
                  onClick={() =>
                    window.scrollTo({
                      top: pageState.project,
                      behavior: "smooth",
                    })
                  }
                  className="maindiv"
                >
                  Project
                </div>
                <div
                  onClick={() =>
                    window.scrollTo({
                      top: pageState.skill,
                      behavior: "smooth",
                    })
                  }
                  className="maindiv"
                >
                  Technology
                </div>
                <div
                  onClick={() =>
                    window.scrollTo({
                      top: pageState.contact,
                      behavior: "smooth",
                    })
                  }
                  className="maindiv"
                >
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
            <div
              id="homeNav"
              onClick={(e) => handleCloseMenu(e)}
              className="maindiv"
            >
              {" "}
              <span>Home</span>
            </div>
            <div
              id="aboutNav"
              onClick={(e) => handleCloseMenu(e)}
              className="maindiv"
            >
              {" "}
              <span>About</span>
            </div>
            <div
              onClick={(e) => handleCloseMenu(e)}
              id="projectNav"
              className="maindiv"
            >
              Project
            </div>
            <div
              onClick={(e) => handleCloseMenu(e)}
              id="skillNav"
              className="maindiv"
            >
              Technology
            </div>
            <div
              onClick={(e) => handleCloseMenu(e)}
              className="maindiv"
              id="contactNav"
            >
              Contact
            </div>
          </section>
        </div>
      ) : null}

      <button ref={upBtn} id="upBtn" onClick={handleUpBtn}>
        <BsArrowUp />
      </button>
    </>
  );
};

export default Navbar;

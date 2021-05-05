import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { loggedIn, logout } from "../../api";

const Header = props => {
  const isLoggedIn = loggedIn();

  const menu = useRef(null);
  const menuToggle = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const handleMenuClose = e => {
      const path = e.path || (e.composedPath && e.composedPath());
      let check = false;

      for (let i = 0; i < path.length; i++) {
        const element = path[i];
        if (element === menuToggle.current) check = true;
      }

      !check && setMenuOpen(false);
    };

    const handleScroll = e => {
      window.scrollY > 0 && setScrolled(true);
      window.scrollY === 0 && setScrolled(false);
      handleMenuClose(e);
    };

    window.addEventListener("scroll", handleScroll);

    document.addEventListener("click", handleMenuClose);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleMenuClose);
    };
  }, []);

  useEffect(() => {
    setActive(window.location.pathname);
  });

  return (
    <div className={`nav-header ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo blue">
        <img
          src={
            scrolled
              ? "images/logo/logo_transparent_blue.png"
              : "images/logo/logo_transparent_white.png"
          }
          alt=""
        />
      </Link>

      <div ref={menu} className={menuOpen ? "open" : ""}>
        <Link className={active === "/" ? "active-tab" : "non-active"} to="/">
          Home
        </Link>

        <Link
          to="/team"
          className={active === "/team" ? "active-tab" : "non-active"}
        >
          About Us
        </Link>

        <Link
          to="/contact"
          className={active === "/contact" ? "active-tab" : "non-active"}
        >
          Contact
        </Link>

        {/* <Link
          to="/faq"
          className={active === "/faq" ? "active-tab" : "non-active"}
        >
          FAQ
        </Link> */}

        {isLoggedIn && (
          <Link
            className={
              active === "/dashboard"
                ? "active-tab low-scale try"
                : "non-active low-scale try"
            }
            to="/dashboard"
          >
            Dashboard
          </Link>
        )}

        {!isLoggedIn && (
          <Fragment>
            <Link
              className={active === "/login" ? "active-tab" : "non-active"}
              to={"/login"}
            >
              Login
            </Link>
            <Link className="try" to="/form">
              Try it
            </Link>
          </Fragment>
        )}
      </div>
      <div>
        <a
          className="menu-toggle"
          ref={menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        ></a>
      </div>
    </div>
  );
};

export const HeaderBackground = ({
  marginTop = "-50px",
  absolute,
  nobackground
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="header-background"
    style={{
      position: absolute ? "absolute" : "relative",
      top: 0,
      left: 0,
      zIndex: "100",
      backgroundColor: nobackground ? "transparent" : "rgb(248, 248, 248)",
      marginTop
    }}
  >
    <path
      fill="#317efa"
      fill-opacity="1"
      d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,186.7C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
);

export default Header;

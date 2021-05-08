import React, { useState,useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav-avatar"
        src="data:image/jpeg;base64,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"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Navbar;

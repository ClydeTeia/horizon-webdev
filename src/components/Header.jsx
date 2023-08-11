import React from "react";
import "./Header.css";

// eslint-disable-next-line react/prop-types
function Header({ setPage }) {
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <div onClick={() => handlePageChange("homepage")} id="logo"></div>
        <button onClick={() => handlePageChange("homepage")} id="title">
          Horizon
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <button>Products</button>
            <button>Pricing</button>
            <button onClick={() => handlePageChange("aboutus")}>
              About us
            </button>
            <button>Contact</button>
            <button>Blog</button>
            <button>Support</button>
            <button>FAQs</button>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <button id="signin-btn">Sign in</button>
        <button id="login-btn">Log in</button>
      </div>
    </div>
  );
}

export default Header;

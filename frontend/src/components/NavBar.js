import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <b>Software System International (PVT) LTD</b>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i
                class="fa fa-home"
                aria-hidden="true"
                style={{ marginLeft: "400px" }}
              ></i>{" "}
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" className="nav-link">
              <i
                class="fa fa-sign-in"
                aria-hidden="true"
                style={{ marginLeft: "50px" }}
              ></i>{" "}
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className="nav-link">
              <i
                class="fa fa-user"
                aria-hidden="true"
                style={{ marginLeft: "50px" }}
              ></i>{" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

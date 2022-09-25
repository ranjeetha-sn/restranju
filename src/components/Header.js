import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div id="preloader"></div>

      <div class="progress-wrap cursor-pointer">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <nav class="navbar navbar-expand-lg">
        <div class="logo-wrapper valign">
          <div class="logo">
            <Link to="/">
              <img src="img/ARTLOOKLOGO.png" class="logo-img" alt="" />
              <h2>
                <span>Concept Artist</span>
              </h2>
            </Link>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span class="icon-bar">
            <i class="ti-line-double"></i>
          </span>{" "}
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              {" "}
              <span class="nav-link">
                {" "}
                Services <i class="ti-angle-down"></i>
              </span>
              <ul class="dropdown-menu last">
                <li class="dropdown-item">
                  <Link to="/services">MURALS</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services2">3D SCULPTURES</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services3">FOUNTAINS</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services4">CUSTOMIZED PLANTER BOXES</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services5">CUSTOMIZED SEATERS</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services6">WALL AND CANVAS PAINTINGS</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services7">BRASS DOORS</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services8">INTERIOR WALL TEXTURES</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/services9">LANDSCAPING</Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              {" "}
              <span class="nav-link">
                {" "}
                Projects <i class="ti-angle-down"></i>
              </span>
              <ul class="dropdown-menu last">
                <li class="dropdown-item">
                  <Link to="/projects">Projects 01</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/projects2">Projects 02</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/projects3">Projects 03</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/projects4">Projects 04</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/project-gallery">Project Gallery</Link>
                </li>
                <li class="dropdown-item">
                  <Link to="/project-page">Project Page</Link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

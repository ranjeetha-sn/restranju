import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact/contact";

import ProjectA from "./pages/Projects/projectA";
import ProjectB from "./pages/Projects/projectB";
import ProjectC from "./pages/Projects/projectC";
import ProjectD from "./pages/Projects/projectD";
import ProjectE from "./pages/Projects/projectE";
import ProjectF from "./pages/Projects/projectF";
import Murals from "./pages/Services/murals";
import CanvasPaintaing from "./pages/Services/canvasPaintaing";
function App() {
  return (
    <>
      <BrowserRouter>
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
              <a href="/">
                <img src="img/ARTLOOKLOGO.png" class="logo-img" alt="" />
                <h2>
                  <span>Concept Artist</span>
                </h2>
              </a>
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
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/About">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                {" "}
                <span class="nav-link">
                  {" "}
                  Services <i class="ti-angle-down"></i>
                </span>
                <ul class="dropdown-menu last">
                  <li class="dropdown-item">
                    <a href="/Murals">MURALS</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/Sculptures">3D SCULPTURES</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/Fountains">FOUNTAINS</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/PlanterBoxes">CUSTOMIZED PLANTER BOXES</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/CustomizedSeaters">CUSTOMIZED SEATERS</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/Paintings">WALL AND CANVAS PAINTINGS</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/BrassDoors">BRASS DOORS</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/WallTextures">INTERIOR WALL TEXTURES</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/Landscaping">LANDSCAPING</a>
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
                    <a href="/ProjectA">Project A</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/ProjectB">Project B</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/ProjectC">Project C</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/ProjectD">Project D</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/ProjectE">Project E</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/ProjectF">Project F</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/ProjectA" element={<ProjectA />}></Route>
          <Route path="/ProjectB" element={<ProjectB />}></Route>
          <Route path="/ProjectC" element={<ProjectC />}></Route>
          <Route path="/ProjectD" element={<ProjectD />}></Route>
          <Route path="/ProjectE" element={<ProjectE />}></Route>
          <Route path="/ProjectF" element={<ProjectF />}></Route>

          <Route path="/Murals" element={<Murals />}></Route>
          <Route path="/Sculptures" element={<ProjectF />}></Route>
          <Route path="/Fountains" element={<ProjectF />}></Route>
          <Route path="/PlanterBoxes" element={<ProjectF />}></Route>
          <Route path="/CustomizedSeaters" element={<ProjectF />}></Route>
          <Route path="/Paintings" element={<CanvasPaintaing />}></Route>
          <Route path="/BrassDoors" element={<ProjectF />}></Route>
          <Route path="/WallTextures" element={<ProjectF />}></Route>
          <Route path="/Landscaping" element={<ProjectF />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Header from "../../components/Header";
import Footer from "../Footer";

import { Route, Routes } from "react-router-dom";
import About from "../About";
export default function Home() {
  return (
    <>
      <header class="header slider-fade">
        <div class="owl-carousel owl-theme">
          <div
            class="text-right item bg-img"
            data-overlay-dark="3"
            data-background="img/slider/1.jpg"
          >
            <div class="v-middle caption mt-30">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 offset-md-5">
                    <h1>Innovate Design in ART</h1>
                    <p>A design isn't finished until someone is using it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-right item bg-img"
            data-overlay-dark="4"
            data-background="img/slider/2.jpg"
          >
            <div class="v-middle caption mt-30">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 offset-md-5">
                    <h1>Innovate Design in ART</h1>
                    <p>A design isn't finished until someone is using it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-corner"></div>
        <div class="hero-corner3"></div>

        <div class="left-panel">
          <ul class="social-left clearfix">
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918807529019"
              >
                <i class="fa fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ti-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ti-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ti-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div class="content-wrapper">
        <section class="content-lines-wrapper">
          <div class="content-lines-inner">
            <div class="content-lines"></div>
          </div>
        </section>

        <section class="about section-padding">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 mb-30 animate-box"
                data-animate-effect="fadeInUp"
              >
                <h2 class="section-title">
                  About <span>ART LOOK</span>
                </h2>
                <p>
                  Architecture viverra tristique justo duis vitae diam neque
                  nivamus aestan ateuene artines aringianu atelit finibus
                  viverra nec lacus. Nedana theme erodino setlie suscipe no
                  curabit tristique.
                </p>
                <p>
                  Design inilla duiman at elit finibus viverra nec a lacus themo
                  the drudea seneoice misuscipit non sagie the fermen.
                </p>
                <p>
                  Planner inilla duiman at elit finibus viverra nec a lacus
                  themo the drudea seneoice misuscipit non sagie the fermen.
                  Viverra tristique jusio the ivite dianne onen nivami acsestion
                  augue artine.
                </p>
              </div>
              <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
                <div class="about-img">
                  <div class="img">
                    {" "}
                    <img src="img/about.jpg" class="img-fluid" alt="" />{" "}
                  </div>
                  <div class="about-img-2 about-buro">Designed By Heart</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="projects section-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="section-title">
                  Our <span>Projects</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="owl-carousel owl-theme">
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/1.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="cotton-house.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="cotton-house.html">Cotton House</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="cotton-house.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/2.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="armada-center.html">Exterior</a>
                      </h6>
                      <h5>
                        <a href="armada-center.html">Armada Center</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="armada-center.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/3.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="stonya-villa.html">Urban</a>
                      </h6>
                      <h5>
                        <a href="stonya-villa.html">Stonya Villa</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="stonya-villa.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/4.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="prime-hotel.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="prime-hotel.html">Prime Hotel</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="prime-hotel.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/5.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="prime-hotel.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="prime-hotel.html">Prime Hotel</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="prime-hotel.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/6.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="prime-hotel.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="prime-hotel.html">Prime Hotel</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="prime-hotel.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/7.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="prime-hotel.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="prime-hotel.html">Prime Hotel</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="prime-hotel.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/8.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="prime-hotel.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="prime-hotel.html">Prime Hotel</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="prime-hotel.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position-re o-hidden">
                      {" "}
                      <img src="img/projects/9.jpg" alt="" />{" "}
                    </div>
                    <div class="con">
                      <h6>
                        <a href="prime-hotel.html">Interior</a>
                      </h6>
                      <h5>
                        <a href="prime-hotel.html">Prime Hotel</a>
                      </h5>
                      <div class="line"></div>{" "}
                      <a href="prime-hotel.html">
                        <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="services section-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="section-title">
                  Our <span>Services</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="item">
                  <a href="architecture.html">
                    {" "}
                    <img src="img/icons/murals.png" alt="" />
                    <h5>MURALS</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">01</div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <a href="interior-design.html">
                    {" "}
                    <img src="img/icons/sculpture.png" alt="" />
                    <h5>3D SCULPTURES</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">02</div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <a href="urban-design.html">
                    {" "}
                    <img src="img/icons/fountains.png" alt="" />
                    <h5>FOUNTAINS</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">03</div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="item">
                  <a href="architecture.html">
                    {" "}
                    <img src="img/icons/planterbox.png" alt="" />
                    <h5>CUSTOMIZED PLANTER BOXES</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">04</div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <a href="interior-design.html">
                    {" "}
                    <img src="img/icons/seater.png" alt="" />
                    <h5>CUSTOMIZED SEATERS</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">05</div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <a href="urban-design.html">
                    {" "}
                    <img src="img/icons/canvas.png" alt="" />
                    <h5>WALL AND CANVAS PAINTINGS</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">06</div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="item">
                  <a href="architecture.html">
                    {" "}
                    <img src="img/icons/ddoors.png" alt="" />
                    <h5>BRASS DOORS</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">07</div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <a href="interior-design.html">
                    {" "}
                    <img src="img/icons/wall.png" alt="" />
                    <h5>INTERIOR WALL TEXTURES</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">08</div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <a href="urban-design.html">
                    {" "}
                    <img src="img/icons/la.png" alt="" />
                    <h5>LANDSCAPING</h5>
                    <div class="line"></div>
                    <p>
                      Architecture bibendum eros eget lacus the vulputate sit
                      amet vehicuta nibhen ulicera in the vitae miss.
                    </p>
                    <div class="numb">09</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="testimonials">
          <div
            class="background bg-img bg-fixed section-padding pb-0"
            data-background="img/banner2.jpg"
            data-overlay-dark="3"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="vid-area">
                    <div class="vid-icon">
                      <a
                        class="play-button vid"
                        href="https://youtu.be/RziCmLzpFNY"
                      >
                        <svg class="circle-fill">
                          <circle
                            cx="43"
                            cy="43"
                            r="39"
                            stroke="#fff"
                            stroke-width=".5"
                          ></circle>
                        </svg>
                        <svg class="circle-track">
                          <circle
                            cx="43"
                            cy="43"
                            r="39"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                          ></circle>
                        </svg>{" "}
                        <span class="polygon">
                          <i class="ti-control-play"></i>
                        </span>{" "}
                      </a>
                    </div>
                    <div class="cont mt-15 mb-30">
                      <h5>View promo video</h5>
                    </div>
                  </div>
                </div>

                <div class="col-md-5 offset-md-1">
                  <div
                    class="testimonials-box animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    <div class="head-box">
                      <h4>What Client's Say?</h4>
                    </div>
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        {" "}
                        <span class="quote">
                          <img src="img/quot.png" alt="" />
                        </span>
                        <p>
                          Architect dapibus augue metus the nec feugiat erat
                          hendrerit nec. Duis ve ante the lemon sanleo nec
                          feugiat erat hendrerit necuis ve ante.
                        </p>
                        <div class="info">
                          <div class="author-img">
                            {" "}
                            <img src="img/team/1.jpg" alt="" />{" "}
                          </div>
                          <div class="cont">
                            <h6>Jason Brown</h6> <span>Crowne Plaza Owner</span>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        {" "}
                        <span class="quote">
                          <img src="img/quot.png" alt="" />
                        </span>
                        <p>
                          Interior dapibus augue metus the nec feugiat erat
                          hendrerit nec. Duis ve ante the lemon sanleo nec
                          feugiat erat hendrerit necuis ve ante.
                        </p>
                        <div class="info">
                          <div class="author-img">
                            {" "}
                            <img src="img/team/2.jpg" alt="" />{" "}
                          </div>
                          <div class="cont">
                            <h6>Emily White</h6> <span>Armada Owner</span>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        {" "}
                        <span class="quote">
                          <img src="img/quot.png" alt="" />
                        </span>
                        <p>
                          Urban dapibus augue metus the nec feugiat erat
                          hendrerit nec. Duis ve ante the lemon sanleo nec
                          feugiat erat hendrerit necuis ve ante.
                        </p>
                        <div class="info">
                          <div class="author-img">
                            {" "}
                            <img src="img/team/4.jpg" alt="" />{" "}
                          </div>
                          <div class="cont">
                            <h6>Jesica Smith</h6> <span>Alsa Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="clients">
          <div class="container">
            <div class="row">
              <div class="col-md-7 owl-carousel owl-theme">
                <div class="clients-logo">
                  <a href="#0">
                    <img src="img/clients/1.png" alt="" />
                  </a>
                </div>
                <div class="clients-logo">
                  <a href="#0">
                    <img src="img/clients/2.png" alt="" />
                  </a>
                </div>
                <div class="clients-logo">
                  <a href="#0">
                    <img src="img/clients/3.png" alt="" />
                  </a>
                </div>
                <div class="clients-logo">
                  <a href="#0">
                    <img src="img/clients/4.png" alt="" />
                  </a>
                </div>
                <div class="clients-logo">
                  <a href="#0">
                    <img src="img/clients/5.png" alt="" />
                  </a>
                </div>
                <div class="clients-logo">
                  <a href="#0">
                    <img src="img/clients/6.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

import React from "react";
import Footer from "../Footer";

export default function CanvasPaintaing() {
  return (
    <>
      <div class="content-wrapper">
        <section class="content-lines-wrapper">
          <div class="content-lines-inner">
            <div class="content-lines"></div>
          </div>
        </section>

        <section
          class="banner-header banner-img valign bg-img bg-fixed"
          data-overlay-darkgray="5"
          data-background="img/banner.jpg"
        >
          <div class="left-panel"></div>
        </section>

        <section class="section-padding2">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="section-title2">Wall & Canvas Paintings</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p>
                  Architecture non lorem ac erat suscipit bibendum. Nulla
                  facilisi sedeuter nunc volutpat molli sapien veconseyer
                  turpeutionyer masin libero sempe. Fusceler mollis augue sit
                  amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.
                </p>
                <p>
                  Villa gravida eros ut turpis interdum ornare. Interdum et
                  malesu they adamale fames ac anteipsun pimsinefaucibus
                  urabitur arcu site feugiat in volutpat.
                </p>
                <div class="row mb-30">
                  <div class="col-md-6 gallery-item">
                    <a
                      href="img/services/9.jpg"
                      title="Architecture"
                      class="img-zoom"
                    >
                      <div class="gallery-box">
                        <div class="gallery-img">
                          {" "}
                          <img
                            src="img/services/9.jpg"
                            class="img-fluid mx-auto d-block"
                            alt="Architecture"
                          />{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 gallery-item">
                    <a
                      href="img/services/10.jpg"
                      title="Architecture"
                      class="img-zoom"
                    >
                      <div class="gallery-box">
                        <div class="gallery-img">
                          {" "}
                          <img
                            src="img/services/10.jpg"
                            class="img-fluid mx-auto d-block"
                            alt="Architecture"
                          />{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-12 gallery-item">
                    <a
                      href="img/services/11.jpg"
                      title="Architecture"
                      class="img-zoom"
                    >
                      <div class="gallery-box">
                        <div class="gallery-img">
                          {" "}
                          <img
                            src="img/services/11.jpg"
                            class="img-fluid mx-auto d-block"
                            alt="Architecture"
                          />{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 sidebar-side">
                <aside class="sidebar blog-sidebar">
                  <div class="sidebar-widget services">
                    <div class="widget-inner">
                      <div class="sidebar-title">
                        <h4>All Services</h4>
                      </div>
                      <ul>
                        <li>
                          <a href="/Murals">Murals</a>
                        </li>
                        <li>
                          <a href="/Sculptures">3D Sculptures</a>
                        </li>
                        <li>
                          <a href="/Fountains">Fountains</a>
                        </li>
                        <li>
                          <a href="/PlanterBoxes">Customized Planter Boxes</a>
                        </li>
                        <li>
                          <a href="/CustomizedSeaters">Customized Seaters</a>
                        </li>
                        <li class="active">
                          <a href="/Paintings">Wall and Canvas Paintings</a>
                        </li>

                        <li>
                          <a href="/BrassDoors">Brass Doors</a>
                        </li>

                        <li>
                          <a href="/WallTextures">Interior Wall Textures</a>
                        </li>

                        <li>
                          <a href="/Landscaping">Landscaping</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

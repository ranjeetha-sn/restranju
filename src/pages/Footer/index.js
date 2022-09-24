import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="main-footer dark">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-30">
              <div class="item fotcont">
                <div class="fothead">
                  <h6>Phone</h6>
                </div>
                <p>+91 8951778201</p>
              </div>
            </div>
            <div class="col-md-4 mb-30">
              <div class="item fotcont">
                <div class="fothead">
                  <h6>Email</h6>
                </div>
                <p>rajathart@gmail.com</p>
              </div>
            </div>
            <div class="col-md-4 mb-30">
              <div class="item fotcont">
                <div class="fothead">
                  <h6>Our Address</h6>
                </div>
                <p>Banashankri, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="text-left">
                  <p>© 2022 ArtLook. All right reserved.</p>
                </div>
              </div>
              <div class="col-md-4 abot">
                <div class="social-icon">
                  <a href="">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=918807529019"
                  >
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <p class="right">
                  <a target="_blank" href="#">
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

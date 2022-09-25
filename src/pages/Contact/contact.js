import React from "react";
import Footer from "../Footer";

export default function Contact() {
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
              <div class="col-md-12 animate-box" data-animate-effect="fadeInUp">
                <h2 class="section-title">
                  Contact <span>Us</span>
                </h2>
              </div>
            </div>
            <div class="row mb-90">
              <div
                class="col-md-4 mb-30 animate-box"
                data-animate-effect="fadeInUp"
              >
                <p>
                  <b>Bauen Architecture Firm</b>
                </p>
                <p>
                  Our firm nisl sodales sit amet sapien idea placerat sodales
                  orcite. Vivamus ne miss rhoncus felis bauen architecture.
                </p>
                <p>
                  <b>VAT :</b> USA002323065B06
                </p>
              </div>
              <div
                class="col-md-4 mb-30 animate-box"
                data-animate-effect="fadeInUp"
              >
                <p>
                  <b>Contact Details</b>
                </p>
                <p>
                  <b>Phone :</b> +1 203-123-0606
                </p>
                <p>
                  <b>Email :</b> architecture@bauen.com
                </p>
                <p>
                  <b>Address :</b> 24 King St, Charleston, 29401 USA
                </p>
              </div>
              <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
                <p>
                  <b>Contact Form</b>
                </p>
                <form
                  method="post"
                  class="contact__form"
                  action="https://duruthemes.com/demo/html/bauen/multipage-dark/mail.php"
                >
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="alert alert-success contact__msg"
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 form-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Your Number *"
                        required
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject *"
                        required
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message *"
                        required
                      ></textarea>
                    </div>
                    <div class="col-md-12">
                      <input name="submit" type="submit" value="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="row">
              <div
                class="col-md-12 mb-30 animate-box"
                data-animate-effect="fadeInUp"
              ></div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

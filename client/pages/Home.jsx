import React from "react";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import InstitutionMap from "../components/InstitutionMap.jsx";
export default function Home() {
  return (
    <>
      <div>
        {/* ***** Main Banner Area Start ***** */}
        <InstitutionMap />
        <section
          className="section main-banner"
          id="top"
          data-section="section1"
        >
          <img
            src="assets/images/Blue Futuristic Technology Presentation (1).jpg"
            alt="Banner Image"
            id="bg-image"
          />
          <div className="video-overlay header-text">
            <div className="caption">
              <h2>
                <em>Bridge </em> the Gap
              </h2>
              <h6>Discover, Learn and Grow</h6>
              <br />
              <div className="main-button">
                <div className="scroll-to-section">
                  <a href="#section2">Discover more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="features-post">
                  <div className="features-content">
                    <div className="content-show">
                      <Link to="/digital-skills">
                        <h4>
                          <i className="fa fa-pencil" />
                          Digital skills{" "}
                        </h4>
                      </Link>
                    </div>
                    <div className="content-hide">
                      <p>
                        Welcome to our digital skills hub! Explore and choose
                        the skills that align with your goals.{" "}
                      </p>
                      <p className="hidden-sm">
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet.
                      </p>
                      <div className="scroll-to-section">
                        <a href="#section2">Basic skills</a>
                        <br />
                        <a href="#section3">Advanced skills</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="features-post second-features">
                  <div className="features-content">
                    <div className="content-show">
                      <Link to="/institutions">
                        <h4>
                          <i className="fa fa-graduation-cap" />
                          Institutions
                        </h4>
                      </Link>
                    </div>
                    <div className="content-hide">
                      <p>
                        Finding the right institution to develop your digital
                        skills is essential for your growth and success.Here's a
                        list of carefully selected institutions offering a wide
                        range of training programs.
                      </p>
                      <p className="hidden-sm">
                        Here's a list of carefully selected institutions
                        offering a wide range of training programs, from basic
                        to advanced levels.
                      </p>
                      <div className="scroll-to-section">
                        <a href="#section3">Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="features-post third-features">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>
                        <i className="fa fa-book" />
                        Brief description
                      </h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        {" "}
                        Our goal is to make it easy for people to see what's out
                        there and find the perfect training to boost their
                        digital skills. We'll show you where to go and what each
                        place offers, so you can pick the training that suits
                        you best and level up your digital game!
                      </p>
                      <p className="hidden-sm">
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet.
                      </p>
                      <div className="scroll-to-section">
                        <a href="#section4">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
         */}
        <section className="section courses" data-section="section4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Choose Your Course</h2>
                </div>
              </div>
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <img src="assets/images/courses-01.jpg" alt="Course #1" />
                  <div className="down-content">
                    <h4>Digital Marketing</h4>
                    <p>
                      You can get free images and videos for your websites by
                      visiting Unsplash, Pixabay, and Pexels.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-01.png" alt="Author 1" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-02.jpg" alt="Course #2" />
                  <div className="down-content">
                    <h4>Business World</h4>
                    <p>
                      Quisque cursus augue ut velit dictum, quis volutpat enim
                      blandit. Maecenas a lectus ac ipsum porta.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-02.png" alt="Author 2" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-03.jpg" alt="Course #3" />
                  <div className="down-content">
                    <h4>Media Technology</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus
                      pretium nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-03.png" alt="Author 3" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-04.jpg" alt="Course #4" />
                  <div className="down-content">
                    <h4>Communications</h4>
                    <p>
                      Download free images and videos for your websites by
                      visiting Unsplash, Pixabay, and Pexels.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-04.png" alt="Author 4" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-05.jpg" alt />
                  <div className="down-content">
                    <h4>Business Ethics</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus
                      pretium nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-05.png" alt />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-01.jpg" alt />
                  <div className="down-content">
                    <h4>Photography</h4>
                    <p>
                      Quisque cursus augue ut velit dictum, quis volutpat enim
                      blandit. Maecenas a lectus ac ipsum porta.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-01.png" alt />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-02.jpg" alt />
                  <div className="down-content">
                    <h4>Web Development</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus
                      pretium nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-02.png" alt />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-03.jpg" alt />
                  <div className="down-content">
                    <h4>Learn HTML CSS</h4>
                    <p>
                      You can get free images and videos for your websites by
                      visiting Unsplash, Pixabay, and Pexels.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-03.png" alt />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-04.jpg" alt />
                  <div className="down-content">
                    <h4>Social Media</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus
                      pretium nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-04.png" alt />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-05.jpg" alt />
                  <div className="down-content">
                    <h4>Digital Arts</h4>
                    <p>
                      Quisque cursus augue ut velit dictum, quis volutpat enim
                      blandit. Maecenas a lectus ac ipsum porta.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-05.png" alt />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-01.jpg" alt />
                  <div className="down-content">
                    <h4>Media Streaming</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus
                      pretium nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-01.png" alt />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
 
*/}
        <section className="section contact" data-section="section6">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Let’s Keep In Touch</h2>
                </div>
              </div>
              <div className="col-md-6">
                {/* Do you need a working HTML contact-form script?
          	
              Please visit https://templatemo.com/contact page */}
                <form id="contact" action method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          className="form-control"
                          id="message"
                          placeholder="Your message..."
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div id="map">
                  <iframe
                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="422px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <i className="fa fa-copyright" /> Copyright 2020 by Grad
                  School | Design:{" "}
                  <a
                    href="https://templatemo.com"
                    rel="sponsored"
                    target="_parent"
                  >
                    TemplateMo
                  </a>
                  <br />
                  Distributed By:{" "}
                  <a
                    href="https://themewagon.com"
                    rel="sponsored"
                    target="_blank"
                  >
                    ThemeWagon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

import React from 'react'
import Header from '../components/Header.jsx'
import { Link } from 'react-router-dom';
import  Card  from '../components/Card.course.jsx';
export default function Home() {
  return (
    <>
      
  <div>
  {/* ***** Main Banner Area Start ***** */}
  <section className="section main-banner" id="top" data-section="section1">
    <img src="assets/images/Blue Futuristic Technology Presentation (1).jpg" alt="Banner Image" id="bg-image" />
    <div className="video-overlay header-text">
      <div className="caption">
        <h2><em>Bridge </em> the Gap</h2>
        <h6>Discover, Learn and Grow</h6><br />
        <div className="main-button">
          <div className="scroll-to-section"><a href="#section2">Discover more</a></div>
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
                <Link to="/digital-skills"><h4><i className="fa fa-pencil" />Digital skills </h4></Link>
              </div>
              <div className="content-hide">
                <p>Welcome to our digital skills hub! Explore and choose the skills that align with your goals. </p>
                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div className="scroll-to-section"> 
                  <a href="#section2">Basic skills</a><br />
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
               <Link to="/institutions"><h4><i className="fa fa-graduation-cap" />Institutions</h4></Link> 
              </div>
              <div className="content-hide">
                <p>Finding the right institution to develop your digital skills is essential for your growth and success.Here's a list of carefully selected institutions offering a wide range of training programs.</p>
                <p className="hidden-sm">Here's a list of carefully selected institutions offering a wide range of training programs, from basic to advanced levels.</p>
                <div className="scroll-to-section"><a href="#section3">Details</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="features-post third-features">
            <div className="features-content">
              <div className="content-show">
                <h4><i className="fa fa-book" />Brief description</h4>
              </div>
              <div className="content-hide">
                <p> Our goal is to make it easy for people to see what's out there and find the perfect training to boost their digital skills. We'll show you where to go and what each place offers, so you can pick the training that suits you best and level up your digital game!</p>
                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div className="scroll-to-section"><a href="#section4">Read More</a></div>
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
        <div >
          <div className="flex flex-row justify-between items-center">
          <Card 
      title='Cloud computing'
      imageUrl="../images/cloud-computing.jpg" 
      body='
      The delivery of various services over the internet, including storage, computing power, and applications. It allows users to access and use technology resources on demand, without needing to manage physical hardware or infrastructure. Cloud computing offers flexibility, scalability, and cost-efficiency, enabling individuals and businesses to utilize powerful computing resources from remote data centers. Examples include services like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.'
      />
      <Card 
      title='Artificial intelligence'
      imageUrl="../images/ai.jpg"
      body='The simulation of human intelligence by machines, enabling them to learn, reason, and make decisions. AI includes technologies like machine learning, natural language processing, and robotics. It powers applications ranging from virtual assistants to autonomous vehicles. AI aims to automate tasks, enhance decision-making, and create smarter systems.'
      />
      <Card 
      title='Digital marketing'
      imageUrl="../images/digital marketing.jpg"
      body='Promoting products or services using digital channels such as social media, email, and search engines to reach and engage with potential customers.'
      />
      <Card 
      title='Mobile application'
      imageUrl="../images/mobile application.jpg"
      body='Software designed to run on mobile devices such as smartphones and tablets, offering various functionalities and services to users.'
      />
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
                  <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="button">Send Message Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div id="map">
            <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="422px" frameBorder={0} style={{border: 0}} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p><i className="fa fa-copyright" /> Copyright 2024 by bridge the gap  
      
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}
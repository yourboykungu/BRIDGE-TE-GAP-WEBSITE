import { Link } from "react-router-dom";
import InstitutionMap from "../components/InstitutionMap.jsx";
import Card from "../components/Card.course.jsx";
export default function Home() {
  return (
    <>

      <div>
        {/* ***** Main Banner Area Start ***** */}
      
        <section
          className="section main-banner"
          id="top"
          data-section="section1"
        >
          <img
            src="assets/images/Blue Futuristic Technology Presentation (1).jpg"
            alt="Banner Image"
            id="bg-image"
            className="w-full h-auto max-h-[740px] object-cover"
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
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-0">
  <div className="grid grid-cols-3 gap-3 px-4 ">
    <div className="flex justify-center">
    <Link to="/digital-skills">
      <button className="rounded-lg bg-blue-950 px-28 py-12 text-white hover:bg-[#ffc107] focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-900">
      <h4>
              <i className="fa fa-pencil" />
              Digital skills
            </h4>
            </button>
            </Link>
    </div>
    
    <div className="flex justify-center">
       <Link to="/institutions">
      <button className="rounded-lg bg-blue-950 px-28 py-12 text-white hover:bg-[#ffc107] focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-900">
      <h4>
        <i className="fa fa-graduation-cap" />
         Institutions
       </h4>
      </button>
      </Link>
    </div>


    <div className="flex justify-center">
    <a href="https://www.coursera.org/certificates" target="_blank" rel="noopener noreferrer">
      <button className="rounded-lg bg-blue-950 px-24 py-12 text-white hover:bg-[#ffc107] focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-900">
      <h4>
           <i className="fa fa-book" />
             Online Certifications
      </h4>
      </button>
    </a>
    </div>
    </div>
    </div>
    
       {/*} <section className="features container row-cols-3 gx-3">
          <div >
            <div>
              <div>
                <div className="features-post">
                  <div className="features-content">
                    
                      <Link to="/digital-skills">
                        <h4>
                          <i className="fa fa-pencil" />
                          Digital skills{" "}
                        </h4>
                      </Link>
                    
                    
                  </div>
                </div>
              </div>
              <div>
                <div className="features-post second-features row-cols-3 gx-4 mx-4">
                  <div className="features-content">
                    <div className="content-show">
                      <Link to="/institutions">
                        <h4>
                          <i className="fa fa-graduation-cap" />
                          Institutions
                        </h4>
                      </Link>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div>
                <div className="features-post third-features">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>
                        <i className="fa fa-book" />
                        Brief description
                      </h4>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       */} 
        </section>
        
        {/* ***** Main Banner Area End ***** */}
        {/*
         */}
        <section className="section courses" data-section="section4">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Choose Your Course</h2>
                </div>
                 
              </div>
              <div className="flex justify-center m-0">
  <div className="grid grid-cols-3 gap-3 p-0 ">
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Digital marketing</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Programming</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Mobile App development</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Graphic design</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Data analytics</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Oracle development</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Cloud computing</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Web development</button>
    </div>
    <div className="flex justify-center">
      <button className="flex-1 rounded-lg bg-blue-950 px-24 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">Programming</button>
    </div>
  </div>
</div>

              <div >
          <div className="grid grid-cols-4 gap-4 my-8 w-100 h-25 p-2 mx-4">
        <div className="w-48 h-20">
        <Card 
        title='Cloud Computing'
         subtitle='alxafrica'
        imageUrl="../images/cloud-computing.jpg" 
        body='
        The delivery of various services over the internet, including storage, computing power, and applications. It allows users to access and use technology resources on demand, without needing to manage physical hardware or infrastructure. Cloud computing offers flexibility, scalability, and cost-efficiency, enabling individuals and businesses to utilize powerful computing resources from remote data centers. Examples include services like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.'
         url='https://www.alxafrica.com/programme/aws-cloud-computing/'
        />
        </div>
        <Card 
        title='Artificial intelligence'
        subtitle='Ai Kenya'
        imageUrl="../images/ai.jpg"
        body='The simulation of human intelligence by machines, enabling them to learn, reason, and make decisions. AI includes technologies like machine learning, natural language processing, and robotics. It powers applications ranging from virtual assistants to autonomous vehicles. AI aims to automate tasks, enhance decision-making, and create smarter systems.'
         url='https://kenya.ai/learning/'
        />
        <Card 
        title='DataScience'
         subtitle='Strathmore'
        imageUrl="../images/data analyst.jpg"
        body='Promoting products or services using digital channels such as social media, email, and search engines to reach and engage with potential customers.'
         url='https://strathmore.edu/?s=data+analytics'
        />
        <Card
        title='Computer Science'
         subtitle='Jomo Kenyatta University of Agriculture and Technology'
        imageUrl="../images/compsc.jpg"
        body='Software designed to run on mobile devices such as smartphones and tablets, offering various functionalities and services to users.'
         url='http://website.jkuat.ac.ke/college/copas/?page_id=17353'
        />
        <Card 
        title='Computer Technology'
         subtitle='Jomo Kenyatta University of Agriculture and Technology'
        imageUrl="../images/compt.jpg" 
        body='
        The delivery of various services over the internet, including storage, computing power, and applications. It allows users to access and use technology resources on demand, without needing to manage physical hardware or infrastructure. Cloud computing offers flexibility, scalability, and cost-efficiency, enabling individuals and businesses to utilize powerful computing resources from remote data centers. Examples include services like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.'
        url='http://website.jkuat.ac.ke/college/copas/?page_id=17355#:~:text=The%20course%20is%20designed%20to,found%20in%20few%20other%20courses.'
       />
        <Card 
        title='Cyber security'
         subtitle='Moringa School'
        imageUrl="../images/cyb.jpg"
        body='The simulation of human intelligence by machines, enabling them to learn, reason, and make decisions. AI includes technologies like machine learning, natural language processing, and robotics. It powers applications ranging from virtual assistants to autonomous vehicles. AI aims to automate tasks, enhance decision-making, and create smarter systems.'
         url='https://moringaschool.com/courses/cybersecurity-prep/'
        />
        <Card 
        title='Internet of Things'
         subtitle='Computer Pride'
        imageUrl="../images/iot2.jpg"
        body='Promoting products or services using digital channels such as social media, email, and search engines to reach and engage with potential customers.'
        url='https://computer-pride.co.ke/courses/internet-of-things/'
       />
        <Card
        title='Web Development'
         subtitle='eMobilis'
        imageUrl="../images/web.jpg"
        body='Software designed to run on mobile devices such as smartphones and tablets, offering various functionalities and services to users.'
        url='https://www.emobilis.ac.ke/courses'
       />
          </div>
        </div>
      </div>
    </div>
    </section>
    {/*/ 
    */}
              
{/*               
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
        </section> */}
       
        <section className="section contact py-1" data-section="section6">
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="col-md-12 ">
                <div className="section-heading mt-2 ">
                  <h2>View map of institutions</h2>
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
              <div className="section map-section h-25 w-100">
          <InstitutionMap />
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
                  <i className="fa fa-copyright" /> Copyright 2024
              
                 
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

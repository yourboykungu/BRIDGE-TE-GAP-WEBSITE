import Card from "../components/Card.jsx";
import Holder from "../images/apple.jpg";
import Cloud from "../images/cloud-computing.jpg";
import Category from "../components/Category.jsx";
export default function Course() {
  return (
    <div className=" min-h-screen w-full flex flex-row gap-2 mt-20 pt-2">
      <div className="bg-white  w-48 rounded-lg mx-2">
        <h2 className="text-lg m-1 p-1">filter by :</h2>
        <div className="flex flex-col border-t-2  border-slate-200">
            <Category title="Cloud computing"/>
            <Category title="Web design and developent"/>
            <Category title="Artificial intelligence"/>
            <Category title="Digital marketing"/>
            <Category title="Mobile application"/>
            <Category title="Cyber security"/>
            <Category title="Oracle database"/>
            <Category title="data analyst"/>
            <Category title="UI/UX"/>
            <Category title="Machine learning"/>
            <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3">view more</button>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg ">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">digital skills</h2>
        <div className="flex flex-wrap gap-2 border-t-2  border-slate-200  items-center p-4" >
      <Card 
      title='Cloud computing'
      imageUrl="../images/cloud-computing.jpg" 
      body='
      The delivery of various services over the internet, including storage, computing power, and applications. It allows users to access and use technology resources on demand, without needing to manage physical hardware or infrastructure. Cloud computing offers flexibility, scalability, and cost-efficiency, enabling individuals and businesses to utilize powerful computing resources from remote data centers. Examples include services like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.'
      className='border'/>
      <Card 
      title='Artificial intelligence'
      imageUrl="../images/ai.jpg"
      body='The simulation of human intelligence by machines, enabling them to learn, reason, and make decisions. AI includes technologies like machine learning, natural language processing, and robotics. It powers applications ranging from virtual assistants to autonomous vehicles. AI aims to automate tasks, enhance decision-making, and create smarter systems.'
      className='border'/>
      <Card 
      title='Digital marketing'
      imageUrl="../images/digital marketing.jpg"
      body='Promoting products or services using digital channels such as social media, email, and search engines to reach and engage with potential customers.'
      className='border'/>
      <Card 
      title='Mobile application'
      imageUrl="../images/mobile application.jpg"
      body='Software designed to run on mobile devices such as smartphones and tablets, offering various functionalities and services to users.'
      className='border'/>
      <Card 
      title='Cyber security'
      imageUrl="../images/Cyber-security.jpg"
      body='Protecting computer systems, networks, and data from unauthorized access, attacks, and damage to ensure confidentiality, integrity, and availability.'
      className='border'/>
      <Card 
      title='Oracle database'
      imageUrl="../images/Oracle database.jpg"
      body='A relational database management system developed by Oracle Corporation, widely used for storing, managing, and retrieving data in various applications.'
      className='border'/>
      <Card 
      title='Data analyst'
      imageUrl="../images/data analyst.jpg"
      body='Professionals who collect, analyze, and interpret data to provide insights and support decision-making processes in businesses and organizations.'
      className='border'/>
      <Card 
      title='UI/UX'
      imageUrl="../images/ui.jpg"
      body='User Interface (UI) design focuses on the visual elements and interaction patterns of digital products, while User Experience (UX) design ensures a seamless and satisfying experience for users interacting with those products.'
      className='border'/>
      <Card 
      title='Machine learning'
      imageUrl="../images/Machine learning.jpg"
      body=' A field of study that combines machine learning algorithms with statistical techniques to analyze and make predictions on large datasets.'
      className='border'/>
      <Card 
      title='Web design and developent'
      imageUrl="../images/web design.jpg"
      body='The process of creating and maintaining websites. It encompasses a variety of skills and disciplines, including web graphic design, interface design, user experience design, and search engine optimization. Web design focuses on the visual and aesthetic aspects of a website, ensuring it is user-friendly and visually appealing. Web development, on the other hand, involves coding and programming to bring the design to life, ensuring the website functions correctly and efficiently. Together, web design and development aim to create effective, engaging, and accessible websites that meet the needs of users and businesses.'
      className='border'/>
        </div>
      </div>
    </div>
  )
}

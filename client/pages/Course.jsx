import React, { useState } from 'react';
import Card from "../components/Card.course.jsx";
import Category from "../components/Category.jsx";


// Sample card data
const cardsData = [
  {
    title: 'Cloud computing',
    imageUrl: "../images/cloud-computing.jpg",
    body: 'The delivery of various services over the internet...'
  },
  {
    title: 'Artificial intelligence',
    imageUrl: "../images/ai.jpg",
    body: 'The simulation of human intelligence by machines...'
  },
  {
    title: 'Digital marketing',
    imageUrl: "../images/digital marketing.jpg",
    body: 'Promoting products or services using digital channels...'
  },
  {
    title: 'Mobile application',
    imageUrl: "../images/mobile application.jpg",
    body: 'Software designed to run on mobile devices...'
  },
  {
    title: 'Cyber security',
    imageUrl: "../images/Cyber-security.jpg",
    body: 'Protecting computer systems, networks, and data...'
  },
  {
    title: 'Oracle database',
    imageUrl: "../images/Oracle database.jpg",
    body: 'A relational database management system developed by Oracle Corporation...'
  },
  {
    title: 'Data analyst',
    imageUrl: "../images/data analyst.jpg",
    body: 'Professionals who collect, analyze, and interpret data...'
  },
  {
    title: 'UI/UX',
    imageUrl: "../images/ui.jpg",
    body: 'User Interface (UI) design focuses on the visual elements...'
  },
  {
    title: 'Machine learning',
    imageUrl: "../images/Machine learning.jpg",
    body: 'A field of study that combines machine learning algorithms...'
  },
  {
    title: 'Web design and development',
    imageUrl: "../images/web design.jpg",
    body: 'The process of creating and maintaining websites...'
  }
];

export default function Course() {
  // State to keep track of checked categories
  const [checkedCategories, setCheckedCategories] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (category, isChecked) => {
    setCheckedCategories(prev =>
      isChecked ? [...prev, category] : prev.filter(c => c !== category)
    );
  };

  // Filter cards based on checked categories
  const filteredCards = checkedCategories.length > 0
    ? cardsData.filter(card => checkedCategories.includes(card.title))
    : cardsData;

  return (
    <div className="min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white w-48 rounded-lg mx-2">
        <h2 className="text-lg m-1 p-1">Filter by:</h2>
        <div className="flex flex-col border-t-2 border-slate-200">
          {cardsData.map(card => (
            <Category
              key={card.title}
              title={card.title}
              onCheckboxChange={(isChecked) => handleCheckboxChange(card.title, isChecked)}
            />
          ))}
          <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3">View more</button>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">Digital skills</h2>
        <div className="flex flex-wrap gap-2 border-t-2 border-slate-200 items-center p-4">
          {filteredCards.map(card => (
            <Card
              key={card.title}
              title={card.title}
              imageUrl={card.imageUrl}
              body={card.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

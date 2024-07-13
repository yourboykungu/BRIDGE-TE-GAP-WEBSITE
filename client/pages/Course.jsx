import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from "../components/Card.course.jsx";
import Category from "../components/Category.jsx";

export default function Course() {
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [initialCards, setInitialCards] = useState([]); // To keep all cards
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const names = searchParams.getAll('name');
    setCheckedCategories(names);
    fetchData(names.length > 0 ? names : null);
  }, [location]);

  const fetchData = (categories) => {
    let url = new URL("http://localhost:3000/api/courses");
    if (categories) {
      categories.forEach(category => url.searchParams.append("name", category));
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCards(data);
        if (!categories) {
          setInitialCards(data); // Save all cards when there's no filter
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleCheckboxChange = (category, isChecked) => {
    const updatedCategories = isChecked 
      ? [...checkedCategories, category]
      : checkedCategories.filter(c => c !== category);

    const searchParams = new URLSearchParams(location.search);
    searchParams.delete('name');
    updatedCategories.forEach(category => searchParams.append('name', category));
    navigate({ search: searchParams.toString() });
    setCheckedCategories(updatedCategories);
  };

  return (
    <div className="min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white w-48 h-fit rounded-lg mx-2">
        <h2 className="text-lg m-1 p-1">Filter by:</h2>
        <div className="flex flex-col border-t-2 border-slate-200">
          {initialCards.map((card, index) => (
            <Category
              title={card.name}
              onCheckboxChange={(isChecked) => handleCheckboxChange(card.name, isChecked)}
              checked={checkedCategories.includes(card.name)}
            />
          ))}
          <div>
            <button className="bg-black text-white py-1 px-5 rounded-lg m-3">View more</button>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">Digital skills</h2>
        <div className="flex flex-wrap gap-2 border-t-2 border-slate-200 items-center p-4">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <Card
                title={card.name}
                imageUrl={card.imageUrl}
                body={card.body}
              />
            ))
          ) : (
            <p>No courses found</p>
          )}
        </div>
      </div>
    </div>
  );
}

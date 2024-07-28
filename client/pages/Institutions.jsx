import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from "../components/Card.institution.jsx";

export default function Institutions() {
  const [selectedInstitutionType, setSelectedInstitutionType] = useState('');
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const institutionType = searchParams.get('institutionType') || '';
    setSelectedInstitutionType(institutionType);

    // Fetch data from the backend
    fetchData(institutionType);
  }, [location]);

  const fetchData = (institutionType) => {
    const url = institutionType 
      ? `http://localhost:3000/api/institutions?institutionType=${institutionType}` 
      : `http://localhost:3000/api/institutions`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); // Debug log
        setCards(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleCheckboxChange = (institutionType) => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('institutionType') === institutionType) {
      searchParams.delete('institutionType');
    } else {
      searchParams.set('institutionType', institutionType);
    }
    navigate({ search: searchParams.toString() });
  };

  return (
    <div className="min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white w-48 rounded-lg mx-2 h-fit pb-4">
        <h2 className="text-lg capitalize font-semibold m-1 p-1">institution Category :</h2>
        <div className="flex flex-col border-t-2 border-slate-200">
          <div className='flex flex-col p-2'>
            <label className='flex flex-row gap-2'>
              <input
                type="checkbox"
                checked={selectedInstitutionType === 'University'}
                onChange={() => handleCheckboxChange('University')}
              />
              Universities
            </label>
            <label className='flex flex-row gap-2'>
              <input
                type="checkbox"
                checked={selectedInstitutionType === 'private'}
                onChange={() => handleCheckboxChange('private')}
              />
              Private Institutions
            </label>
            <label className='flex flex-row gap-2'>
              <input
                type="checkbox"
                checked={selectedInstitutionType === 'TVET'}
                onChange={() => handleCheckboxChange('TVET')}
              />
              TVET
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">institutions </h2>
        <div className="flex flex-wrap gap-2 border-t-2 border-slate-200 items-center p-4">
          {Array.isArray(cards) && cards.length > 0 ? (
            cards.map((card, index) => (
              <Card
                key={index}
                title={card.name}
                imageUrl={card.imageUrl}
                type={card.type}
                Url={card.websiteUrl}
              />
            ))
          ) : (
            <p>No institutions found</p>
          )}
        </div>
      </div>
    </div>
  );
}

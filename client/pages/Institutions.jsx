import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from "../components/Card.institution.jsx";
import Category from "../components/Category.jsx";

export default function Institutions() {
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSelectedType(searchParams.get('type') || '');
  }, [location]);

  const handleCheckboxChange = (type) => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('type') === type) {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    navigate({ search: searchParams.toString() });
  };

  const filterCards = (cards) => {
    if (!selectedType) return cards;
    return cards.filter(card => card.type === selectedType);
  };

  const cards = [
    { title: 'JKUAT', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'university' },
    { title: 'Agmond international Limited', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'private' },
    { title: 'Emobilis', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'private' },
    { title: 'don bosco tech', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'private' },
    { title: 'tinker education', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'private' },
    { title: 'aldai technical training institute', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'TVET' },
    { title: 'computer pride', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'private' },
    { title: 'wote ttc', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'TVET' },
    { title: 'kaiboi national polytechnic', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'TVET' },
    { title: 'Kenya institute of professional studies', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'TVET' },
    { title: 'matili technical', imageUrl: 'https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc', type: 'TVET' },
    { title: 'mount kenya university', imageUrl:' https://imgs.search.brave.com/-OYF-cKrZ6hp-hVomVuoldb0CfhH-nrtJ4CNxH8NlyQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2YzL01L/VV9Mb2dvLmpwZy8y/MjBweC1NS1VfTG9n/by5qcGc', type: 'university' },
    { title: 'gretsa university', imageUrl:'https://imgs.search.brave.com/DCgsMPHDsHoPHhLAXXYQKAFeVyeDvSzv1-KTj7Tj2_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXRz/dG9yYWdlLXR1a28u/YWthbWFpemVkLm5l/dC9pbWFnZXMvNjNj/YmE1NTZhM2JjODJj/OS5qcGc', type: 'university' },
    { title: 'rhema institute', imageUrl: 'data:image/jpeg;base64,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', type: 'private' },
    { title: 'petanns institution of business studies', imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmSkIblyviBg3JtC8D__gCveBCmHewhgJUkBqQGeLY_dnl9dEYXrmU1mO_InHtAutjNc&usqp=CAU', type: 'TVET' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white w-48 rounded-lg mx-2 h-fit pb-4">
        <h2 className="text-lg capitalize font-semibold m-1 p-1">institution Category :</h2>
        <div className="flex flex-col border-t-2 border-slate-200">
          
          <div className='flex flex-col p-2'>
            <label className='flex flex-row gap-2'>
              <input
                type="checkbox"
                checked={selectedType === 'university'}
                onChange={() => handleCheckboxChange('university')}
              />
              Universities
            </label>
            <label className='flex flex-row gap-2'>
              <input
                type="checkbox"
                checked={selectedType === 'private'}
                onChange={() => handleCheckboxChange('private')}
              />
              Private Institutions
            </label>
            <label className='flex flex-row gap-2'a>
              <input
                type="checkbox"
                checked={selectedType === 'TVET'}
                onChange={() => handleCheckboxChange('TVET')}
              />
              TVET
            </label>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">institutions </h2>
        <div className="flex flex-wrap gap-2 border-t-2 border-slate-200 items-center p-4">
          {filterCards(cards).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              type={card.type}
              Url={card.Url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

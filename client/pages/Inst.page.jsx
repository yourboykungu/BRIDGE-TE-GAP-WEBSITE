import React from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  const img = "https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc";

  return (
    <div>
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url('${img}')` }}>
        <h1 className="p-4 text-white">Jomo Kenyatta University of Agriculture and Technology</h1>
      </div>
      <div className="p-4">
        <p className="mb-4 text-lg">
          Jomo Kenyatta University of Agriculture and Technology (JKUAT) is a leading public university in Kenya, renowned for its focus on agriculture, engineering, technology, and enterprise development. Established in 1994, JKUAT offers a wide range of undergraduate and postgraduate programs designed to address the dynamic needs of society. The university emphasizes practical learning, research, and innovation, aiming to produce graduates who contribute to sustainable development both locally and globally.
        </p>
        <p className='mb-3 text-xl font-semibold'>courses offered include:</p>
        <ul className='flex flex-col gap-2 flex-wrap h-40'>
          <li className='w-48 py-2 text-center bg-white'>Agricultural Science</li>
          <li className='w-48 py-2 text-center bg-white'>Computer Science</li>
          <li className='w-48 py-2 text-center bg-white'>Engineering</li>
          <li className='w-48 py-2 text-center bg-white'>Information Technology</li>
          <li className='w-48 py-2 text-center bg-white'>Architecture</li>
          <li className='w-48 py-2 text-center bg-white'>Medical Science</li>
        </ul>
        <p className='text-lg'>for more information visit <Link to='https://www.jkuat.ac.ke/'>their website</Link></p>
      </div>
    </div>
  );
}

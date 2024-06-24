import React, { useState } from 'react';

export default function Category({ title, onCheckboxChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    if (onCheckboxChange) {
      onCheckboxChange(newChecked);
    }
  };

  

  return (
    <div>
      <div className="flex flex-row gap-2 m-1 p-1">
        <input
          type="checkbox"
          checked={isChecked} 
          onChange={handleChange}
        />
        <label htmlFor="" className="capitalize m-0">{title}</label>
      </div>
    </div>
  );
}

// components/Category.jsx

import React, { useState, useEffect } from "react";

export default function Category({ title, value, onCategoryChange }) {
  console.log("Rendering Category component with title:", title, "and value:", value);

  const [checked, setChecked] = useState(false);
  console.log("Checked: ", checked)

  const handleChange = () => {
    console.log("Handling category change for title:", title, "and value:", value);
    const newChecked = !checked; // Toggle the checked state
    console.log("New checked state:", newChecked);
    setChecked(newChecked); // Update the checked state
    console.log("Notifying parent component about category change");
    onCategoryChange(value, newChecked); // Notify parent component about category change
  };

  useEffect(() => {
    console.log("Resetting checked state when title or value props change");
    // Reset checked state when title or value props change
    setChecked(false);
  }, [title, value]);

  return (
    <div>
      <div className="flex flex-row gap-2 m-1 p-1">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          id={title}
          value={value}
        />
        <label htmlFor={title} className="capitalize m-0">
          {title}
        </label>
      </div>
    </div>
  );
}


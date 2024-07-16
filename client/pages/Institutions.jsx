import React, { useState, useEffect } from "react";
import Card from "../components/Card.course.jsx";
import { useGetInstitutions } from "../api/InstitutionApi.js";

export default function Institutions() {
  const { institutions, isLoading, error, refetch, isRefetching } =
    useGetInstitutions();

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;

    setSelectedCategories((prevCategories) => {
      if (checked && !prevCategories.includes(value)) {
        return [...prevCategories, value];
      } else {
        return prevCategories.filter((cat) => cat !== value);
      }
    });
  };

  useEffect(() => {
    refetch(selectedCategories); // Trigger refetch whenever selectedCategories changes
  }, [selectedCategories, refetch]);

  if (isLoading || isRefetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(institutions) || institutions.length === 0) {
    return <div>No institutions found.</div>;
  }

  return (
    <div className="min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white w-48 rounded-lg mx-2">
        <h2 className="text-lg m-1 p-1">Filter by:</h2>
        <form className="flex flex-col border-t-2 border-slate-200">
          <label className="flex items-center m-2">
            <input
              type="checkbox"
              value="university"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("university")}
            />
            <span className="ml-2">Universities</span>
          </label>
          <label className="flex items-center m-2">
            <input
              type="checkbox"
              value="private"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("private")}
            />
            <span className="ml-2">Private Institutions</span>
          </label>
          <label className="flex items-center m-2">
            <input
              type="checkbox"
              value="tvet"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("tvet")}
            />
            <span className="ml-2">TVET</span>
          </label>
        </form>
        <div>
          <button className="bg-black text-white py-3 px-5 rounded-lg m-3">
            View More
          </button>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">
          Institutions
        </h2>
        <div className="flex flex-wrap gap-2 border-t-2 border-slate-200 items-center p-4">
          {institutions
            .filter((institution) => {
              if (selectedCategories.length === 0) {
                return true; // No filters selected, show all
              } else {
                return selectedCategories.includes(institution.category);
              }
            })
            .map((institution) => (
              <Card
                key={institution._id}
                title={institution.fullName}
                imageUrl={institution.imageUrl}
                body={institution.description}
                Url={institution.websiteUrl}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

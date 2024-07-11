import React from 'react';
import Card from '../components/Card.course.jsx';
import Category from '../components/Category.jsx';
import { useGetCourse } from '../api/CourseApi.js';

export default function Course() {
  const { courses, isCoursesLoading } = useGetCourse();

  return (
    <div className="min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white w-48 rounded-lg mx-2">
        <h2 className="text-lg m-1 p-1">filter by :</h2>
        <div className="flex flex-col border-t-2 border-slate-200">
          <Category title="Cloud computing" />
          <Category title="Web design and development" />
          <Category title="Artificial intelligence" />
          <Category title="Digital marketing" />
          <Category title="Mobile application" />
          <Category title="Cyber security" />
          <Category title="Oracle database" />
          <Category title="Data analyst" />
          <Category title="UI/UX" />
          <Category title="Machine learning" />
          <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3">
              view more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">
          digital skills
        </h2>
        <div className="flex flex-wrap gap-2 border-t-2 border-slate-200 items-center p-4">
          {/* Map through courses and create Card components */}
          {isCoursesLoading ? (
            <div>Loading...</div>
          ) : (
            courses.map(course => (
              <Card
                key={course._id}
                title={course.name}
                imageUrl={course.imageUrl}
                body={course.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

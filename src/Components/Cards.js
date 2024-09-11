import React, { useState } from 'react';
import Card from './Card'; // Ensure the correct path to the Card component

function Cards({ courses, category }) { // Destructured courses and category from props
  const [likedCourses, setLikedCourses] = useState([]);

  // Returns a list of all courses from the received API response
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      // Return specific category data
      return courses[category] || [];
    }
  };

  // Call getCourses to populate allCourses
  const allCourses = getCourses();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
      {allCourses.map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
      ))}
    </div>
  );
}

export default Cards;

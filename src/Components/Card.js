import React from 'react';
import { FcLike ,FcLikePlaceholder } from 'react-icons/fc'; // Corrected import
import { toast } from 'react-toastify'; // Import toast

const Card = ({ course, likedCourses, setLikedCourses }) => { // Destructured course, likedCourses, and setLikedCourses props

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // Already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed"); // Corrected toast warning
    } else {
      // Not liked yet
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // Non-empty
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfully");
    }
  }

  return (
    <div className="w-[300px] bg-gray-800 text-white rounded-md overflow-hidden shadow-lg relative">
      <div className="relative">
        <img src={course.image.url} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute right-2 bottom-2">
          <button onClick={clickHandler} className="flex items-center justify-center bg-pink-300 hover:bg-pink-400 text-white p-2 rounded-full transition duration-300">
            {
              likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem"/>
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg text-white font-semibold leading-6">{course.title}</p>
        <p className="text-sm text-gray-400">
          {
          course.description.length>100 ? (course.description.substr(0,100) +"....") :(course.description)
          }
          </p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
const CourseCard = ({ course }) => {
  return (
    <div className="border rounded shadow p-4 bg-white">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold">{course.title}</h3>
      <p className="text-gray-600 mt-1">{course.description}</p>
      <p className="text-sm mt-2 text-blue-600">Instructor: {course.instructor}</p>
      <p className="text-sm text-purple-600 flex gap-2 items-center mt-1"><FaClock /> {course.duration}</p>
      <button className='text-white bg-black mt-2 w-24 h-10 hover:bg-blue-600'>  
         <Link to={`/course/${course._id}`}>
        Enroll Now
      </Link>  </button> 
    </div>
  );
};

export default CourseCard;

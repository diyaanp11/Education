import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineRecycling } from "react-icons/md";
const dummyCourses = [
  {
    _id: "1",
    title: "Introduction to Web Development",
    category: "Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is designed for complete beginners who want to get started with building websites from scratch.",
    instructor: "John Doe",
    rating: 4.8,
    reviews: 234,
    students: 1240,
    lastUpdated: "May 2025",
    duration: "10 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: [
      "The core foundations of HTML to structure web pages",
      "CSS styling techniques to make your websites beautiful",
      "JavaScript fundamentals to add interactivity",
      "Responsive design principles for all devices",
      "Best practices and industry standards",
      "How to deploy your website to the internet",
    ],
    curriculum: {
      "Getting Started": [
        { title: "Course Introduction", duration: "10 min" },
        { title: "Setting Up Your Development Environment", duration: "15 min" },
        { title: "Understanding Web Development", duration: "20 min" }
      ],
      "HTML Basics": [
        { title: "Introduction to HTML", duration: "25 min" },
        { title: "HTML Document Structure", duration: "30 min" },
        { title: "HTML Elements and Attributes", duration: "35 min" },
        { title: "Creating Your First Webpage", duration: "40 min" }
      ],
      "CSS Fundamentals": [
        { title: "Introduction to CSS", duration: "25 min" },
        { title: "CSS Selectors", duration: "30 min" },
        { title: "CSS Box Model", duration: "25 min" },
        { title: "Styling Your Webpage", duration: "45 min" }
      ]
    }
},
     {
    _id: "2",
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    description: "Understand the fundamentals of machine learning including supervised and unsupervised learning, models, and evaluation.",
    instructor: "Jane Smith",
    rating: 4.7,
    reviews: 192,
    students: 980,
    lastUpdated: "May 2025",
    duration: "15 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["Understand core ML concepts", "Explore popular algorithms", "Use Python and Scikit-learn", "Train and evaluate models", "Real-world case studies"],
    curriculum: {
      "Introduction to ML": [
        { title: "What is Machine Learning?", duration: "20 min" },
        { title: "Applications of ML", duration: "25 min" }
      ],
      "Supervised Learning": [
        { title: "Classification Models", duration: "40 min" },
        { title: "Regression Analysis", duration: "35 min" }
      ]
    }
  },
  {
    _id: "3",
    title: "UX/UI Design Principles",
    category: "Design",
    description: "Master the fundamentals of user experience and interface design.",
    instructor: "Mike Johnson",
    rating: 4.6,
    reviews: 150,
    students: 750,
    lastUpdated: "May 2025",
    duration: "12 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["UX fundamentals", "UI patterns", "Prototyping", "User testing"],
    curriculum: {
      "UX Basics": [
        { title: "What is UX Design?", duration: "20 min" },
        { title: "Design Thinking", duration: "25 min" }
      ],
      "UI Design": [
        { title: "Color & Typography", duration: "30 min" },
        { title: "Wireframes", duration: "35 min" }
      ]
    }
  },
  {
    _id: "4",
    title: "Advanced JavaScript Patterns",
    category: "Programming",
    description: "Explore advanced JavaScript concepts and best practices.",
    instructor: "Emily Chen",
    rating: 4.9,
    reviews: 210,
    students: 1020,
    lastUpdated: "May 2025",
    duration: "18 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["Closures & Scope", "Async patterns", "Module design", "Memory management"],
    curriculum: {
      "JS Mastery": [
        { title: "Advanced Functions", duration: "45 min" },
        { title: "Asynchronous JavaScript", duration: "50 min" }
      ],
      "Design Patterns": [
        { title: "Module Pattern", duration: "35 min" },
        { title: "Observer Pattern", duration: "40 min" }
      ]
    }
  },
  {
    _id: "5",
    title: "Python for Data Analysis",
    category: "Data Science",
    description: "Analyze data using Python libraries like Pandas and NumPy.",
    instructor: "David Wilson",
    rating: 4.7,
    reviews: 185,
    students: 890,
    lastUpdated: "May 2025",
    duration: "14 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["Data wrangling", "Pandas basics", "Numpy operations", "Real-world datasets"],
    curriculum: {
      "Pandas": [
        { title: "Intro to Pandas", duration: "30 min" },
        { title: "DataFrames", duration: "40 min" }
      ],
      "NumPy": [
        { title: "Numpy Arrays", duration: "35 min" },
        { title: "Statistical Analysis", duration: "45 min" }
      ]
    }
  },
  {
    _id: "6",
    title: "React.js for Beginners",
    category: "Web Development",
    description: "Get started with React.js and build your first web app.",
    instructor: "Alex Johnson",
    rating: 4.6,
    reviews: 160,
    students: 800,
    lastUpdated: "May 2025",
    duration: "12 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["JSX & Components", "State & Props", "React Hooks", "Mini Projects"],
    curriculum: {
      "Getting Started": [
        { title: "Create React App", duration: "20 min" },
        { title: "JSX Basics", duration: "25 min" }
      ],
      "React Core": [
        { title: "State & Props", duration: "30 min" },
        { title: "useEffect & useState", duration: "35 min" }
      ]
    }
  },
  {
    _id: "7",
    title: "Graphic Design Masterclass",
    category: "Design",
    description: "Learn graphic design tools and principles for digital media.",
    instructor: "Sarah Brown",
    rating: 4.8,
    reviews: 200,
    students: 950,
    lastUpdated: "May 2025",
    duration: "16 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["Design theory", "Color and typography", "Layout & composition", "Practical projects"],
    curriculum: {
      "Fundamentals": [
        { title: "Design Basics", duration: "30 min" },
        { title: "Typography & Color", duration: "35 min" }
      ],
      "Tools": [
        { title: "Photoshop Basics", duration: "45 min" },
        { title: "Illustrator Basics", duration: "50 min" }
      ]
    }
  },
  {
    _id: "8",
    title: "Full Stack Web Development",
    category: "Web Development",
    description: "Master frontend and backend development with this complete course.",
    instructor: "Chris Davis",
    rating: 4.9,
    reviews: 250,
    students: 1100,
    lastUpdated: "May 2025",
    duration: "30 hours",
    language: "English",
    access: "Yes",
    mobile: "Yes",
    certificate: "Yes",
    image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
    overview: ["Frontend with React", "Backend with Node.js", "MongoDB", "Authentication & deployment"],
    curriculum: {
      "Frontend": [
        { title: "React Components", duration: "30 min" },
        { title: "Routing & State", duration: "40 min" }
      ],
      "Backend": [
        { title: "Express.js Basics", duration: "35 min" },
        { title: "MongoDB & Mongoose", duration: "45 min" }
      ]
    }
  }
];
  

const CourseDetail = () => {
  const { id } = useParams();
  const course = dummyCourses.find((c) => c._id === id);

  if (!course) return <div className="text-center py-10">Course not found.</div>;

  return (
    <div className="mx-8 md:mx-24 my-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
          <p className="text-sm text-purple-600 font-semibold">{course.category}</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">{course.title}</h1>
          <p className="text-gray-600 mt-4">{course.description}</p>
          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p className='flex gap-1 items-center'><FaStar />{course.rating} <span className="text-gray-400">({course.reviews} reviews)</span>
            </p>
            <p className='flex gap-2 items-center'><BsPersonFill />{course.students} students enrolled</p>
            <p className='flex gap-2 items-center'><MdOutlineRecycling />Last updated {course.lastUpdated}</p>
            <p>Created by <span className="font-semibold text-black">{course.instructor}</span></p>
          </div>

          <h3 className="mt-8 font-bold text-lg">Course Overview</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {course.overview.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-8 font-bold text-lg">Course Curriculum</h3>
          {Object.entries(course.curriculum).map(([section, lectures]) => (
            <div key={section} className="mt-4">
              <h4 className="font-semibold text-md text-blue-600">{section}</h4>
              <ul className="ml-4 list-disc text-sm text-gray-700">
                {lectures.map((lec, idx) => (
                  <li key={idx}>{lec.title} - {lec.duration}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 bg-gray-100 p-6 rounded shadow">
          <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded" />
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Enroll Now
          </button>

          <div className="text-sm mt-4 space-y-1 text-gray-800">
            <p>Duration: {course.duration}</p>
            <p>Language: {course.language}</p>
            <p>Full Lifetime Access: {course.access}</p>
            <p>Access on Mobile: {course.mobile}</p>
            <p>Certificate: {course.certificate}</p>
          </div>

          <button className="mt-4 text-blue-600 hover:underline font-medium">
            Add to Wishlist
          </button>

          <div className="mt-8">
            <h4 className="font-bold text-lg">Instructor</h4>
            <p className="mt-1 text-sm text-gray-700">
              <span className="font-semibold">{course.instructor}</span><br />
              Senior Web Developer | 10+ Years Experience
            </p>
            <p className="text-sm text-gray-500 mt-2">
              John has been developing websites for over 10 years and has worked with companies like Google, Facebook, and Amazon. He is passionate about teaching and has helped thousands of students start their web development journey.
            </p>
            <button className="mt-2 text-blue-600 hover:underline text-sm">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

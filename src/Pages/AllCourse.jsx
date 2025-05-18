        import React, { useEffect, useState } from 'react';
        import axios from 'axios';
        import CourseCard from '../Pages/CourseCard';
        import FilterSidebar from '../Components/FliterSidebar';
        const AllCourse = () => {
        const [courses, setCourses] = useState([]);
        const [selectedCategories, setSelectedCategories] = useState([]);
        const allCategories = [...new Set(courses.map(course => course.title.split(' ')[0]))];
        const [priceRange, setPriceRange] = useState(100);
               

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setPriceRange(100);
  };

 
  const filteredCourses = courses.filter((course) => {
    const courseCategory = course.title.split(' ')[0]; 
    const coursePrice = parseFloat(course.price.replace('$', ''));

    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(courseCategory);
    const matchPrice = coursePrice <= priceRange;

    return matchCategory && matchPrice;
  });
        useEffect(() => {
            setCourses([
            {
                _id: "1",
                title: "Intro to Web Development",
                description: "Learn the basics of HTML, CSS, and JavaScript.",
                instructor: "John Doe",
                duration: "10 hours",
                price: "$49.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "2",
                title: "Machine Learning Fundamentals",
                description: "Build a strong foundation in machine learning.",
                instructor: "Jane Smith",
                duration: "15 hours",
                price: "$69.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "3",
                title: "UX/UI Design Principles",
                description: "Master the fundamentals of user experience and interface design.",
                instructor: "Mike Johnson",
                duration: "12 hours",
                price: "$59.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "4",
                title: "Advanced JavaScript Patterns",
                description: "Explore advanced JavaScript concepts and best practices.",
                instructor: "Emily Chen",
                duration: "18 hours",
                price: "$79.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "5",
                title: "Python for Data Analysis",
                description: "Analyze data using Python libraries like Pandas and NumPy.",
                instructor: "David Wilson",
                duration: "14 hours",
                price: "$59.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "6",
                title: "React.js for Beginners",
                description: "Get started with React.js and build your first web app.",
                instructor: "Alex Johnson",
                duration: "12 hours",
                price: "$49.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "7",
                title: "Graphic Design Masterclass",
                description: "Learn graphic design tools and principles for digital media.",
                instructor: "Sarah Brown",
                duration: "16 hours",
                price: "$69.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            },
            {
                _id: "8",
                title: "Full Stack Web Development",
                description: "Master frontend and backend development with this complete course.",
                instructor: "Chris Davis",
                duration: "30 hours",
                price: "$89.99",
                image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg"
            }
            ]);
        }, []);
        
       
        return (
            <div className='mt-7'>
            <div className='bg-gradient-to-r from-blue-500 to-purple-500 h-36'>
            <div className='mx-24'>
            <p className='font-bold text-4xl text-white'>Explore Our Courses</p>
                <p className='font-medium text-white mt-4'>Browse our comprehensive collection of courses designed to help you master new skills,</p>
                <p className='font-medium text-white  mt-1'>advance your career, and achieve your learning goals.</p>
            </div>
            </div>
        <div className='flex mx-24 mt-10 gap-5'>
        <div>
        <FilterSidebar
          categories={allCategories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          onReset={handleReset}
        />
         </div>
     
            <div className='grid grid-cols-3 gap-6 '>
                {courses.map(course => (
                <CourseCard key={course._id} course={course} />
                ))}
            </div>
            </div>
            </div>
    )
    }

        export default AllCourse;

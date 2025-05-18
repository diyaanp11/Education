    import React from 'react';
    import { Link } from 'react-router-dom';

        const AboutUs = () => { 
            return ( 
            <div className="mx-24 my-12"> 
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1> 
            <p className="text-lg text-gray-700 mb-4"> Welcome to StudyFlow Courses! We're passionate about making learning accessible, engaging, and effective for everyone. Our platform offers a wide range of expert-led courses in web development, data science, design, programming, and more. </p> 
            <p className="text-lg text-gray-700 mb-4"> Whether you're a beginner or looking to sharpen your skills, our carefully crafted curriculum and experienced instructors are here to help you succeed. Learn at your own pace, earn certificates, and join a community of enthusiastic learners. </p> 
            <p className="text-lg text-gray-700"> Start your journey today with StudyFlow — where education meets inspiration. </p>
            <div className='flex gap-5 justify-center mt-5'>
    <Link to="https://www.facebook.com/share/1CMG5HsX1Z/">
        <button className='font-medium bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 text-white rounded hover:from-blue-800 hover:to-purple-800 cursor-pointer'>
        Connect on Facebook
        </button>
    </Link>
    <Link to="https://github.com/diyaanp11">
    <button className='font-medium bg-gradient-to-r from-blue-800 to-purple-800 py-2 px-5 text-white rounded hover:from-blue-500 hover:to-purple-500 cursor-pointer'>
       Connect on Git Hub
    </button>
    </Link>
    </div>
            </div> 
            ); 
        };

        export default AboutUs;
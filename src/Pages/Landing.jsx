  import study from '../Pages/study.jpeg'
  import React from 'react'
  import { Link } from 'react-router-dom'
  import { MdOutlineCode } from "react-icons/md";
  import { AiOutlineMobile } from "react-icons/ai";
  import { AiOutlinePieChart } from "react-icons/ai";
  import { AiOutlineUser } from "react-icons/ai";
  import { AiOutlineLineChart } from "react-icons/ai";
  import { AiOutlineCamera } from "react-icons/ai";
  const Landing = () => {
    const categories = [
      {
        title: 'Web Development',
        icon: <MdOutlineCode size={32} />,
        count: 125,
      },
      {
        title: 'Data Science',
        icon: <AiOutlinePieChart size={32} />,
        count: 98,
      },
      {
        title: 'Design',
        icon: <AiOutlineMobile size={32} />,
        count: 85,
      },
      {
        title: 'Business',
        icon: <AiOutlineUser size={32} />,
        count: 110,
      },
      {
        title: 'Marketing',
        icon: <AiOutlineLineChart size={32} />,
        count: 72,
      },
      {
        title: 'Photography',
        icon: <AiOutlineCamera size={32} />,
        count: 63,
      },
    ];
    return (
      <div>
          <div className='bg-pink-50 h-150 flex justify-between '>
              <div className='mx-24 mt-24'>
                  <h1 className='font-bold text-6xl'>Unlock Your Potential with <span className='bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-transparent bg-clip-text'>Expert-Led</span> Courses</h1>
                  <p className='font-medium mt-8 text-gray-600'>Discover thousands of courses across various domains taught by industry experts and advance your career with in-demand skills.</p>
                  <div className='flex gap-4 mt-8'>
                  <button className='font-medium bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 text-white rounded hover:from-blue-800 hover:to-purple-800 pointor-cursor'>Explore Courses</button>
                  <button className='font-medium bg-white hover:bg-gray-200 rounded py-2 px-5 pointor-cursor'>View Categories</button>
                  </div>
                  <div className='mt-8 w-12 flex justify-between gap-24'>
                      <div> <p className='text-3xl text-blue-500 font-bold' >1,200+</p>
                          <p className='px-3 mt-1'>Courses</p> </div>
                      <div> <p className='text-3xl text-purple-500 font-bold' >25,000+</p>
                      <p className='px-4 mt-1'>Students</p></div>
                      <div><p className='text-3xl text-blue-500 font-bold' >120+</p>
                      <p className='mt-1'>Instructors</p></div>
                      <div><p className='text-3xl text-blue-500 font-bold px-3' >25+</p>
                      <p className='mt-1'>Categories</p></div>
                  </div>
              </div>
              <div className='mx-24 mt-24'>
                <img src={study} alt="study" className='w-280 h-110 rounded' />
              </div>
          </div>
          <div className='mt-3 flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl'>Browse by Category</p>
            <p className='font-light mt-3'>Explore courses by your area of interest and find the perfect match for your learning</p>
            <p className='font-light'>goals</p>
          </div>
          <Link to='/courses'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-10 mt-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-200 mb-8"
        >
          <div className="rounded-full bg-indigo-100 text-indigo-500 p-3 mb-3">
            {category.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
            {category.title}
          </h3>
          <p className="text-sm text-gray-600 text-center">{category.count} courses</p>
        </div>
      ))}
    </div>
          </Link>
          <div className='bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl text-white mt-5'>Start Learning Today</p>
            <p className='font-light mt-3 text-white'>Join thousands of students who are already advancing their careers with our courses</p>
            <Link to='/signup'><button className='px-3 py-3 bg-white text-purple-600 rounded mt-5 mb-10 cursor-pointer'>Get started</button></Link>
          </div>
          {/* Ending part */}
          <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding and Description */}
        <div className="mb-6 md:mb-0">
          <div className="text-xl font-bold mb-2">Education</div>
          <p className="text-sm leading-relaxed">
            The leading platform for online education and skill development.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Categories</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Web Development
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Data Science
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Design
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Business
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">About</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Instructors
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Legal</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-100 text-sm">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 EduLearn. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1CMG5HsX1Z/" className="hover:text-gray-100">
              Facebook
            </a>
            <a href="https://x.com/Diyaanp11?t=fG73viU1ZOjNipyv9299kg&s=08 " className="hover:text-gray-100">
              Twitter
            </a>
            <a href="https://www.instagram.com/diya.np_11/profilecard/?igsh=MW4xZGRvOXR5cHg1aA==" className="hover:text-gray-100">
              Instagram
            </a>
            <a href="https://github.com/diyaanp11" className="hover:text-gray-100">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
      </div>
    )
  }

  export default Landing
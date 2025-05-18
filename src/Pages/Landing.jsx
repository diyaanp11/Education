import study from '../Pages/study.jpeg'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
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
    </div>
  )
}

export default Landing
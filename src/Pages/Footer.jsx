import React from 'react'

const Footer = () => {
  return (
    <div className="border-t border-gray-700 bg-black py-4 mt-7 bottom-0 w-full">
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
  )
}

export default Footer
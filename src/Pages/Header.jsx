    import React, { useContext } from 'react';
    import { Link } from 'react-router-dom';
    import { AuthContext } from '../Context/AuthContext';

    const Header = () => {
        const { token, logout } = useContext(AuthContext);
        const isLoggedIn = !!token;
    return (
        <header className='sticky h-8 mb-4'>
        <div className='flex items-center justify-between mx-24 mt-3'>
        <div className='flex items-center gap-4'>
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"><span className="text-white font-bold text-lg pointor-cursor">ED</span></div>
            <p className='bg-clip-text font-bold  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent'>Education</p>
        <ul className='flex items-center gap-4'> <li className='text-gray-600 hover:text-black font-medium'><Link to='/courses'>All Courses</Link></li>
            <li className='text-gray-600 hover:text-black font-medium'><Link to='/category'>Categories</Link></li>
            <li className='text-gray-600 hover:text-black font-medium'><Link to='/aboutus'>About US</Link></li>
            </ul>
        </div>
        <div className='flex gap-8'>
            <button className='font-medium hover:bg-gray-200 rounded py-2 px-3 cursor-pointer'><Link to='/login'>Login</Link></button>
            <button className='font-medium bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-2 text-white rounded hover:from-blue-800 hover:to-purple-800 cursor-pointer'><Link to='/signup'>Sign Up</Link></button>
        </div>
        </div>
            </header>   
    );
    };

    export default Header;

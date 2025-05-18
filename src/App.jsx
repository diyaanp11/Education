import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Header from './Pages/Header'; 
import AllCourse from './Pages/AllCourse';
import CourseDetail from './Pages/CourseDetail';
import AllCategories from './Pages/AllCategories';
import AboutUs from './Pages/AboutUs'
const AppContent = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/login', '/signup'];

  return (
    <div>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={<Landing />}> </Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/courses' element={<AllCourse />}></Route>
        <Route path='/course/:id' element={<CourseDetail/>}></Route>
        <Route path='/category' element={<AllCategories/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

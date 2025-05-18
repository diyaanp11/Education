import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Landing from './Landing';

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const loginUser = async(values)=>{
    try{
      const response =  await axios.post("https://blog-hqx2.onrender.com/user/login", values)
   toast.success("Login Successfully")
   const token = response.data.token
   const user = response.data.user
   login(token, user)
   navigate("/")
        }
        catch (error){
            toast.error("Login Unsuccessful")
        }
    }
  return (
   <div>
    <div className='flex flex-col justify-center items-center mt-40'>
        <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"><span class="text-white font-bold text-lg">ED</span></div>
            <h3 className='font-bold text-3xl mt-3'>Sign in to your account</h3>
            <p className='text-gray-600'>or <a href="/signup" className='text-blue-500 hover:text-blue-900'> create an account </a></p>
        </div>
        <div></div>
    <div>
    <Formik initialValues={{
            email:'',password:''
        }}
        validationSchema={
            Yup.object({
                email: Yup.string().email().required("Email name is required"),
                password: Yup.string().min(6,"Atleast 6 charcters").required("password is required")
            })
        }
        onSubmit={(values) =>{
           loginUser(values)
        }}
        >
    <Form className='flex flex-col gap-y-5 w-110 mt-5 mx-auto border-black p-6 rounded shadow-md '>
    
        <label htmlFor='email' className='font-bold mt-3'>Email</label>
        <Field name="email" type="email" placeholder="Enter your Email" className='border-black w-full border rounded px-2 py-1'/>
        <ErrorMessage name='email'  component="div" className="text-red-600 text-sm"/>
    
        <label htmlFor='password' className='flex justify-between font-bold'>Password <span className='text-blue-400 hover:text-blue-800 font-bold'><Link to='/'>Forget your password?</Link></span></label>
        <Field name="password" type="text" placeholder="Enter the password" className='border-black w-full border rounded px-2 py-1'/>
        <ErrorMessage name='password' component="div" className="text-red-600 text-sm"/>
       <div className='flex items-center'> <Field id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"></Field>
       <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label></div>
        <ToastContainer/>
        <button type='submit' className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 text-white py-2 mx-auto h-10 w-full text-bold rounded"
    >Sign in</button>
    </Form>
        </Formik>
    </div>
   </div>
  )
}

export default Login
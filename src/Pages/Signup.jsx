import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";

const Signup = () => {
    const postFormData = async(values)=>{
        try{
            await axios.post("https://blog-1rng.onrender.com/signup", values)
       toast.success("User Registered Successfully")
       console.log(success);
            }
            
            catch (error){
                toast.error("User Register Unsuccessfully")
                console.log(error);
            }
        }
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-24'>
        <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"><span class="text-white font-bold text-lg">ED</span></div>
            <h3 className='font-bold text-3xl mt-3'>Create your account</h3>
            <p className='text-gray-600'>or <a href="/login" className='text-blue-500 hover:text-blue-900'>sign in to your account</a></p>
        </div>
        <div>
        <Formik initialValues={{
        name:'',email:'',password:'',confirmpassword:''
    }}
    validationSchema={  
        Yup.object({
            name: Yup.string().min(3,"Minimum 3 charcters").required("Full name is required"),
            email: Yup.string().email().required("Email name is required"),
            password: Yup.string().min(6,"Atleast 6 charcters").required("password is required"),
            confirmpassword: Yup.string().min(6,"Atleast 6 charcters").required("Confirm password is required")
        })
    }
    onSubmit={(values) =>{
       postFormData(values)
    }}
    >
<Form className='flex flex-col gap-y-5 w-110  mx-auto border-black p-6 rounded shadow-md mt-5'>
    <label htmlFor='name' className='font-bold'>Full Name</label>   
    <Field name="name" type="text" placeholder="Enter your full name" className='border-black w-full border px-2 py-1'/>
    <ErrorMessage name='name'  component="div" className="text-red-600 text-sm"/>

    <label htmlFor='email'>Email</label>
    <Field name="email" type="email" placeholder="Enter your email" className='border-black w-full border  px-2 py-1'/>
    <ErrorMessage name='email'  component="div" className="text-red-600 text-sm"/>

    <label htmlFor='password'>Password</label>
    <Field name="password" type="text" placeholder="Create a password" className='border-black w-full border px-2 py-1'/>
    <ErrorMessage name='password' component="div" className="text-red-600 text-sm"/>

    <label htmlFor='password'>Confirm Password</label>
    <Field name="password" type="text" placeholder="Confirm your password" className='border-black w-full border px-2 py-1'/>
    <ToastContainer/>
    <button type='submit' className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 text-white py-2 mx-auto h-10 w-full text-bold rounded"
    >Create account</button>
</Form>
    </Formik>
        </div>
    </div>
  )
}

export default Signup
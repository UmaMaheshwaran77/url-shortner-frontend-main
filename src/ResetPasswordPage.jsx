
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useFormik } from 'formik';

function ResetPasswordPage({ match }) {

     // Make a request to your backend to reset the password
     const token = match.params.token;
  
    const formik = useFormik(
        {
            initialValues: {
               password :"",
               confirmPassword:""
            }, validate: (values) => {
                let errors = {}
               
               if(values.password == "")
               {
errors.password ="Please enter password"
               }
               if(values.confirmPassword == "")
               {
errors.confirmPassword ="Please enter correct Password"
               }
                return errors;
            },
            onSubmit: async (values) => {
                try {
                    const response = await axios.put(`https://url-shortner-task-2.onrender.com/reset-password/${token}`,values);
                   alert("password reseted successfully!!");

                } catch(error) {
                    console.log("error",error);
                    alert("Something went wrong. Please try again later.");

                }

                // console.log(values)
                formik.handleReset();
            }
        }
    );
  
     
     
  
      
     
  

  return (
    <div>
    <h1>Reset Your Password</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="password">New Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        
        onChange={formik.handleChange}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        
        onChange={formik.handleChange}
        required
      />

      <button type="submit">Reset Password</button>
    </form>
  </div>
  )
}

export default ResetPasswordPage
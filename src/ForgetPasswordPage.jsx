import React from 'react';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';


function ForgetPasswordPage() {

    const formik = useFormik(
        {
            initialValues: {
                emailId :"",
            }, validate: (values) => {
                let errors = {}
               
               if(values.emailId == "")
               {
errors.emailId ="Please enter emailId"
               }
                return errors;
            },
            onSubmit: async (values) => {
                try {
                     await axios.post("https://url-shortner-task-2.onrender.com/forget-password",values);
                   alert("Password Reset Link has be send to your mail !!")

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
  
    <div className="container">

 
    <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                   
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                    <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                        and we'll send you a link to reset your password!</p>
                                </div>
                                <form className="user" onSubmit={formik.handleSubmit}>
                                    <div className="form-group">
                                        <input type="email"
                                         className="form-control form-control-user"
                                            id="exampleInputEmail" 
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            name="emailId"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}/>
                                                   {/* {(formik.getFieldMeta("emailId").touched && formik.errors.emailId)
                                                    ? <span style={{ color: "red" }}>{formik.errors.emailId}</span> : null} */}

                                    </div>
                                    <button  type='submit' 
                                    className="btn btn-primary btn-user btn-block"
                                   >
                                        Reset Password
                                    </button>
                                </form>
                                <hr/>
                                <div className="text-center">
                                    <a className="small" href="register.html">Create an Account!</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="login.html">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

  )
}

export default ForgetPasswordPage
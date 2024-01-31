import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

function LoginPage() {
const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            // here we get the form values by same name and intially empty

            emailId: "",
            password: "",
            confirmPassword: ""

        },
        validate: (values) => {

            //validation take place here for every input box based on the conditions it will through error
            // if error occur it will update on object and submit button not work 
            //no error error then only form procced to submit

            let errors = {}

            if (!values.emailId) {
                errors.emailId = "Required *"
            }

            if (!values.password) {
                errors.password = "Required *"
            }

            return errors;
        },
        onSubmit: async (values) => {

            //on submit it will proceess the data and create a object in api

            try {
                const authorData = await axios.post("https://url-shortner-task-2.onrender.com/users/login", values);
                localStorage.setItem("token",authorData.data.token);
                alert("Logined successfully !");
                navigate("/portal/create-link");
                formik.handleReset();
                console.log(authorData.data);
            } catch (error) {
                console.log("error", error.response);
                if (error.response.status === 401) {
                    alert("User already exists. Change data to register.");
                } else {
                    alert("Something went wrong");
                }
            }

        }
    })



    return (

        <div class="container">


            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">

                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" onSubmit={formik.handleSubmit}>
                                            <div class="form-group">
                                                <input type="email"
                                                    class="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    name="emailId"
                                                    onClick={formik.handleChange}
                                                    onBlur={formik.handleBlur} />

                                                {(formik.getFieldMeta("emailId").touched && formik.errors.emailId)
                                                    ? <span style={{ color: "red" }}>{formik.errors.emailId}</span> : null}


                                            </div>
                                            <div class="form-group">
                                                <input type="password"
                                                    class="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                    name="password"
                                                    onClick={formik.handleChange}
                                                    onBlur={formik.handleBlur} />

                                                {(formik.getFieldMeta("password").touched && formik.errors.password)
                                                    ? <span style={{ color: "red" }}>{formik.errors.password}</span> : null}


                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type='submit' href="index.html" class="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr />
                                            <a href="index.html" class="btn btn-google btn-danger btn-user btn-block">
                                                <i class="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" class="btn btn-facebook btn-warning btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div class="text-center">
                                            <Link class="small" to={"/forget-password"} >Forgot Password?</Link>
                                        </div>
                                        <div class="text-center">
                                            <a class="small" href="register.html">Create an Account!</a>
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

export default LoginPage
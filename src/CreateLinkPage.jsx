import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CreateLinkPage() {

  const [linkDetail, setDetail] = useState([]);

  const formik = useFormik({
    initialValues: {
      // here we get the form values by same name and intially empty

      longUrl: ""

    },
    validate: (values) => {

      //validation take place here for every input box based on the conditions it will through error
      // if error occur it will update on object and submit button not work 
      //no error error then only form procced to submit

      let errors = {}

      if (!values.longUrl) {
        errors.longUrl = "Required *"
      }



      return errors;
    },
    onSubmit: async (values) => {

      //on submit it will proceess the data and create a object in api

      try {
        const createLink = await axios.post("https://url-shortner-task-2.onrender.com/urlShort/create-link", values, {
          headers: {
            "authorization": localStorage.getItem("token")
          }
        });
        // setDetail(createLink);
        // console.log("Response from server:", createLink.data);
       
        alert("Link Created successfully !");
        // navigate("/portal/create-link");
        formik.handleReset();
        // console.log(authorData.data);
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


const getDta = async()=>{

  const linkData = await  axios.get("https://url-shortner-task-2.onrender.com/urlShort/link");
  console.log(linkData.data)
  setDetail( linkData.data);

}

useEffect(()=>{
getDta()
},[])

  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-lg-12'>
          <h2 className='heading'>Create a short Link</h2>

        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>

          <h3>Shorten a long link</h3>
          <form onSubmit={formik.handleSubmit}>
            <label>Paste a long URL </label>
            <div class="input-group mb-3">
              <input type="text" class="form-control"
                placeholder="https://long url..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                name="longUrl"
                onChange={formik.handleChange} />
              {
                formik.getFieldMeta("longUrl").touched && formik.errors.longUrl ?
                  <span style={{ color: "red" }}> {formik.errors.longUrl}</span> : null
              }

              <div class="input-group-append">
                <button type='submit' className='btn btn-primary'>get short url</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='row'>

    {   linkDetail.map((link,index)=>{
      return  <div class="card" style={{ width: "18rem" }} key={index}>
          <div class="card-body">
            <h5 class="card-title">Short Link is Ready ❗</h5>
            <Link to={link.longUrl}  target="_blank">    {`https://sts/${link.shortUrl}`}</Link>
            <p class="card-text">Long Link : {link.longUrl}</p>
  
          </div>
        </div>
      })
   
    }
</div>
    </div>
  )
}

export default CreateLinkPage

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import "./Enquiry.css";

const Enquiry = () => {

  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data);
    setSuccessMsg("Details Sent Successfully.");
    reset();
  }

  return (
  
    <div className="wrapped form-control">
      <h3 className='title'>Enquiry</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {successMsg && <p className='success-msg'>{successMsg}</p>}
        <div className="enquiryForm">

        <div>
          <label>Email Address:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email-Id."
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/

            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className='errorMsg'> Email is required.</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className='errorMsg'> Email is not valid.</p>
          )}
          </div>
          <div>
          <label>Contact No. :</label>
          <input
            type="number"
            name="number"
            placeholder="Enter Phone Number."
            {...register("number", {
              required: true,
              maxLength: 10,

            })}
          />
          {errors.number && errors.number.type === 'required'  && (
            <p className='errorMsg'>Contact number is required.</p>
          )}
          {errors.number && errors.number.type === ' maxLength' && (
            <p className='errorMsg'>Contact number is not valid.</p>
          )}
         </div>
          <div>
          <label>Products :</label>
          <textarea
            name="description"
            placeholder="Kindly add products list here..."
            {...register("description",{
              required: true
            })}
          />
          {errors.description && errors.description.type === "required" && (
            <p className='errorMsg'> Description is required.</p>
          )}
          </div>
          <div className='quantity-div'>
          <label>Product Quantity :</label>
          <input className='quantity-input'
          type='number'
            name="quantity"
            {...register("quantity")}
          />
          </div>
         
           <div className='button-class'>
         
          <button className="primary" type="submit">Send</button>
        </div>
        </div>
      </form>
    </div>
    
  );
};

export default Enquiry;

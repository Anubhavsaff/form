import React, { useState } from 'react'
import Swal from "sweetalert2";
const Task = () => {
const [form,setForm]=useState([]);
const [user,setUser]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  DOB:"",
  phonenumber:"",
  gender:""
});

const handelChange=(e)=>{
const {name,value} =e.target;
setUser((data)=>{
  return{...data , [name]:value}
})}

const submitform=(e)=>{
  e.preventDefault();
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const { firstname, lastname, email, password,DOB, phonenumber, gender } =
      user;
    if (
      firstname &&
      lastname &&
      regex.test(email) === true &&
      password &&
      phonenumber &&
      DOB &&
      gender
    ) {
      console.log(user);
      setForm([...form, user]);
    } else {
      Swal.fire({
        title: "Please Fill All Fields Properly",
        text: "Please Enter valid email"
      });
    }
  };
    return (
    <>
    <div className='flex justify-center'>
    <div className='  grid shadow-2xl rounded-xl w-80 h-40-50 px-16 py-10'>
    <h1>Registration Form</h1>
<form onSubmit={(e)=> submitform(e)} >
  <h1>Firstname:</h1>
  <input type="text" name='firstname' placeholder="Enter your firstname" className='rounded border-2 mb-2 border-gray-200 bg-opacity-50 focus:ring-2 focus:border-indigo-600 focus:bg-white focus:ring-indigo-200 outline-none' onChange={handelChange}></input><br/>
  <h2>Lastname:</h2>
  <input type="text" name='lastname' placeholder="Enter your lstname" className='rounded border-2 mb-2 border-gray-200 bg-opacity-50 focus:ring-2 focus:border-indigo-600 focus:bg-white focus:ring-indigo-200 outline-none'  onChange={handelChange}></input><br/>
  <h3>Email:</h3>
  <input type="email" name='email' placeholder="Enter your email" className='border-2 mb-2 border-gray-200 bg-opacity-50 focus:ring-2 focus:border-indigo-600 focus:bg-white focus:ring-indigo-200 outline-none'  onChange={handelChange}></input><br/>
  <h4>Password:</h4>
  <input type="password" name='password' placeholder="Enter your email" className='border-2 mb-2 border-gray-200 bg-opacity-50 focus:ring-2 focus:border-indigo-600 focus:bg-white focus:ring-indigo-200 outline-none'  onChange={handelChange}></input><br/>
  <h5>Date of Birth:</h5>
  <input type="text" name='DOB' placeholder="DD/MM/YY" className='border-2 mb-2 border-gray-200 bg-opacity-50 focus:ring-2 focus:border-indigo-600 focus:bg-white focus:ring-indigo-200 outline-none'  onChange={handelChange}></input><br/>
   <h7>Phone Number:</h7><br/>
  <input type="number" name='phonenumber' placeholder="Enter tour number" className='border-2 mb-2 border-gray-200 bg-opacity-50 focus:ring-2 focus:border-indigo-600 focus:bg-white focus:ring-indigo-200 outline-none'  onChange={handelChange}></input><br></br>
  Gender:
    <input type="radio" value="male" name="gender"   onChange={handelChange}></input>
  Male
   <input type="radio" value="female" name="gender"   onChange={handelChange}></input>
  Female
  <input type="radio" value="otehr" name="gender"   onChange={handelChange}></input>
  Other<br/>
  <button onClick={submitform} className="border-2 ml-16 mt-3 bg-indigo-500 hover:bg-indigo-600 px-2 rounded ">Submit</button>
</form>
</div>
</div>
<div>
  {form?.map((value,index)=>{
    return(
      <>
       <div className="mt-4 grid justify-center" key={index}>
                <h1 className="text-2xl">Your Details</h1>
                <p> firstname : {value.firstname}</p>
                <div> lastname : {value.lastname}</div>
                <div>email : {value.email}</div>
                <div>password : {value.password}</div>
                <div> Date Of Birth : {value.DOB}</div>
                <div> Phone Number : {value.Phonenumber}</div>
                <div> Gender : {value.gender}</div>
                <hr />
              </div>
      </>
    )
  })}
</div>
    </>
  
    
  )
}

export default Task;

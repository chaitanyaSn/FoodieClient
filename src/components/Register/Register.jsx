import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler =async (e) => {
    e.preventDefault();
    
    try {
       const res= await axios.post('http://localhost:8080/api/register',data);
       if(res.status===201){
        toast.success('successfully register')
        navigate('/login')
       }else{
        toast.error('unable to register')
       }
    } catch (error) {
        toast.error('unable to register')
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={onChangeHandler}
                    placeholder="Enter your name"
                    required
                  />
                  <div className="form-text">Please enter your name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    placeholder="Enter your email"
                    required
                  />
                  <div className="form-text">Please enter your email.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                    placeholder="Enter your password"
                    required
                    minLength="6"
                  />
                  <div className="form-text">
                    Password must be at least 6 characters long.
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                  <div id="formFeedback" className="mt-3"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

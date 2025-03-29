import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const LoginPage = () => {
  const { setToken ,loadCartData} = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/api/login", data);
      if (res.status === 200) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        toast.success("Successfully logged in");
        await loadCartData(res.data.token)
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                    autoComplete="email"
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
                    autoComplete="current-password"
                  />
                  <div className="form-text">
                    Password must be at least 6 characters long.
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
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

export default LoginPage;

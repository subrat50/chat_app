import React from "react";
import { useState } from "react";
 import { ToastContainer, toast } from "react-toastify";
 import  axios  from "axios";
 import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
   

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const fetchData = async () => {
      const dataa=await axios.post("http://localhost:5000/login",login).then((res)=>{
        console.log("du", res.data);
        if(res.status===200){
          navigate("/home",{state:login.email});
        }
      }).catch((err)=>{
        console.log(err.messgae)
      })
    }
    fetchData()
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 ">
          <div
            className="card shadow"
            style={{ width: "26rem", height: "20rem", marginTop: "12rem" }}
          >
            <h4 className="text-center" style={{ marginTop: "14px" }}>
              Enter Your Email Address
            </h4>

            <div
              className="mb-3 d-flex "
              style={{ textAlign: "center", marginTop: "23px" }}
            >
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ marginRight: "6px", marginLeft: "13px" }}
              >
                Email:
              </label>
              <input
                type="email"
                className="email"
                id="exampleInputEmail1"
                placeholder="Enter your Email"
                name="email"
                value={login.email}
                onChange={handleChange}
              />
            </div>
            <div
              className="mb-3 d-flex "
              style={{ textAlign: "center", marginTop: "23px" }}
            >
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ marginRight: "6px", marginLeft: "13px" }}
              >
                Password:
              </label>
              <input
                type="password"
                className="email"
                id="exampleInputEmail1"
                placeholder="Enter your password"
                name="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-primary submit_btn"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <img src="assest/message_image.avif" className="message_image" />
        </div>
      </div>
    </div>
  );
}

export default Login;

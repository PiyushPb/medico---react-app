import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/authContext";
import { HashLoader } from "react-spinners";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    console.log(formData);
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      console.log(result, "Login data");

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          role: result.role,
          token: result.token,
        },
      });

      console.log(result.data, "Login data");

      setLoading(false);
      toast.success(result.message);

      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
        Hello <span className="text-primaryColor">Welcome</span> Back 👋👋
      </h3>
      <form className="py-4 md:py-0" onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="email"
            placeholder="someone@google.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Type your password here!"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            required
          />
        </div>
        <div className="mt-0">
          <button className="btn w-full rounded-lg">
            {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
          </button>
        </div>
        <p className="mt-5 text-textColor text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-primaryColor font-medium ml-1">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

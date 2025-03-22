import React, { useState } from "react";
import Logo from "../../assets/funalogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ Just import toast

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);

      const response = await axios.post(
        "https://api.baronsandqueens.com/api/admin/auth/login",
        formDataToSend,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      );

      if (response.data.status) {
        localStorage.setItem("accessToken", response.data.data.access_token);
        localStorage.setItem("refreshToken", response.data.data.refresh_token);
        localStorage.setItem("userData", JSON.stringify(response.data.data.admin));
        console.log(response.data.data.access_token)

        // ✅ Show success toast before navigating
        toast.success("Logged in successfully");
        setTimeout(() =>{
          navigate("/");
        }, 4000)
      }
    } catch (err) {
      const errorMessage = axios.isAxiosError(err)
        ? err.response?.data?.message || "An error occurred during login"
        : "An unexpected error occurred";

      // ✅ Show error toast
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#F9FBFC]">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={Logo} alt="Logo" />
        <p className="lg:text-[1.5rem] font-[600]">Login to your Funa account</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="bg-white w-[24rem] rounded-lg p-6 flex flex-col gap-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-[14px] font-[500]">Email</label>
            <input
              name="email"
              onChange={handleChange}
              className="border-[1px] rounded-lg p-1 w-full"
              type="email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="text-[14px] font-[500]">Password</label>
            <input
              name="password"
              onChange={handleChange}
              className="border-[1px] rounded-lg p-1 w-full"
              type={showPassword ? "text" : "password"}
              required
            />
            {showPassword ? (
              <FaRegEye onClick={() => setShowPassword(false)} className="absolute top-8 right-2 cursor-pointer" />
            ) : (
              <FaRegEyeSlash onClick={() => setShowPassword(true)} className="absolute top-8 right-2 cursor-pointer" />
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right text-red-500 text-[.7rem] underline font-bold">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#2C8CFB] font-[500] text-center p-2 px-6 text-white w-full rounded-[14px]"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
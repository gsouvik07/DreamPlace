import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/api/login`,
        {
          email,
          password,
        }
      );
      toast.success("Login successful");
      setAuth({
        ...auth,
        user: res.data?.user,
        token: res.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate(location.state || "/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 pt-10 pb-10 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-400">Sign in to your DreamPlace account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-slate-600 rounded"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Keep me signed in
              </span>
            </label>
            <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

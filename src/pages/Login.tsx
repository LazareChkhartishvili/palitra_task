import { useState } from "react";
import { loginUser } from "../services/authService";

import { useNavigate } from "react-router-dom";

import loginImage from "../assets/login_img.png";
import "./login.scss";
import type { LoginPayload } from "../types/auth";

const Login = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(formData);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data)); // ← ინახავს იუზერის ინფორმაციას
      setError("");
      navigate("/products"); // ← გადააქვს products გვერდზე
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="form-section">
        <h1>WELCOME BACK</h1>
        <p className="subtitle">Welcome back! Please enter your details.</p>

        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="**********"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>

        <button className="sign-in" onClick={handleLogin}>
          Sign in
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p className="signup">
          Don’t have an account? <span>Sign up for free!</span>
        </p>
      </div>
      <div className="illustration-section">
        <img src={loginImage} alt="login illustration" />
      </div>
    </div>
  );
};

export default Login;

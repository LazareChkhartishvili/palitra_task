import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import type { LoginPayload } from "../types/auth";

import "../styles/login.scss";

const Login = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [, setToken] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/products");
    }
  }, [navigate]);

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
      localStorage.setItem("user", JSON.stringify(data));
      setError("");
      navigate("/products");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
    }
  };

  return (
    <div className="login-page">
      <section className="login-page__form-section">
        <div className="login-page__form-wrapper">
          <h1 className="login-page__title">WELCOME BACK</h1>
          <p className="login-page__subtitle">
            Welcome back! Please enter your details.
          </p>

          <form
            className="login-page__form"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="login-page__field">
              <label htmlFor="username" className="login-page__label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="login-page__input"
                placeholder="Enter your username"
                autoComplete="username"
              />
            </div>

            <div className="login-page__field">
              <label htmlFor="password" className="login-page__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login-page__input"
                placeholder="************"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="login-page__error" style={{ color: "red" }}>
                {error}
              </p>
            )}

            <div className="login-page__options">
              <label className="login-page__checkbox-label">
                <input type="checkbox" className="login-page__checkbox" />
                <span className="custom-checkbox"></span>
                <span>Remember me</span>
              </label>
              <a href="#" className="login-page__forgot">
                Forgot password
              </a>
            </div>

            <button type="submit" className="login-page__submit-btn">
              Sign in
            </button>
          </form>

          <div className="login-page__footer">
            <span>Don't have an account?</span>
            <a href="#" className="login-page__signup-link">
              Sign up to free!
            </a>
          </div>
        </div>
      </section>

      <section className="login-page__image-section">
        <div className="login-page__image-bg"></div>
      </section>
    </div>
  );
};

export default Login;

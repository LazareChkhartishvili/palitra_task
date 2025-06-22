import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import type { LoginPayload } from "../types/auth";
import toast from "react-hot-toast";
import "../styles/login.scss";
import UserForm from "../components/UserForm";

const Login = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/products");
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      setError("");
      navigate("/products");
      toast.success("მოგესალმებით, დალოგინდით წარმატებით!");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("შეცდომა დალოგინებისას");
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

          {/* Form */}
          <UserForm
            formData={formData}
            error={error}
            handleChange={handleChange}
            handleLogin={handleLogin}
          />

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

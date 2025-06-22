import "../styles/login.scss";
import UserForm from "../components/UserForm";

import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { formData, error, handleChange, handleLogin } = useAuth();

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

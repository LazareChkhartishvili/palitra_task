import type { UserFormProps } from "../types/auth";

const UserForm = ({
  error,
  handleChange,
  handleLogin,
  formData,
}: UserFormProps) => {
  return (
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
  );
};

export default UserForm;

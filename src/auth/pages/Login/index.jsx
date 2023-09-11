import React from "react";
import "./login.css";
import { useToggleEye } from "../../hooks/useToggleEye";
import { useLoginForm } from "../../hooks/useLoginForm";

export const Login = () => {
  const { passwordVisible, togglePasswordVisibility } = useToggleEye();
  const {
    Email,
    Password,
    handleChangeInput,
    setEmail,
    setPassword,
    handleLogin,
  } = useLoginForm();
  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={Email}
            name="email"
            placeholder="Email"
            onChange={handleChangeInput(setEmail)}
            required={Email}
          />
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={Password}
              onChange={handleChangeInput(setPassword)}
              required={Password}
            />
            <div className="container-icon" onClick={togglePasswordVisibility}>
              <svg
                className="password-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>
          </div>

          <button className=" btn-singIn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

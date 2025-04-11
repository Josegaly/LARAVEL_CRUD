
import api from "../api/axios";
import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import './LoginForm.css'; // Fichier CSS séparé

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await api.post("/login", { email, password });
  
        // Stocker le token
        localStorage.setItem("token", response.data.token);
  
        // Rediriger vers le dashboard ou autre
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
        alert("Échec de la connexion");
      }
    };
//   const { 
//     onSignIn = () => {},
//     onForgotPassword = () => {},
//     onCreateAccount = () => {}
//   } = props;

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


  return (
    <div className="login-container">
      <h1 className="login-title">React with me</h1>
      <p className="login-subtitle">Sign in React</p>
      
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          
          <div className="form-actions">
            <button
              className="signin-button"
              type="submit"
            //   onClick={onSignIn}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      
      <div className="create-account-box">
        
        <button 
          className="create-account-link"
        //   onClick={onCreateAccount}
        >
          Create an account
        </button>
        <span className="create-account-text">.</span>
      </div>
    </div>
  );
};

export default LoginForm;
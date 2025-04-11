import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const registerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '' // Ajout du champ date de naissance
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Vérification basique des champs
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    // Redirection vers la page de bienvenue avec les données
    navigate('/bienvenue', { state: formData });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">React with Me</h1>
      <p className="login-subtitle">Sign in</p>
      
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <div className="form-group">
            <label className="form-label" htmlFor="nom">
              Nom
            </label>
            <input
              className="form-input"
              id="nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Prénom */}
          

          {/* Champ Date de Naissance */}
          

          {/* Champ Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Champ Mot de passe */}
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Confirmation mot de passe */}
          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form-input"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-actions">
            <button
              className="signin-button"
              type="submit"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default registerForm;
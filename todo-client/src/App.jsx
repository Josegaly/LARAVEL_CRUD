
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import WelcomePage from './pages/login';
// import LoginForm from './pages/register';
// import Dashboard from './pages/dashboard';

// function App() {
//   return (
//     <Router>
//       {/* Conteneur principal qui garantit le centrage */}
//       <div className="app-root">
//         <Routes>
//           <Route path="/register" element={<registerForm />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<LoginForm />} />
//           <Route path="/login" element={<WelcomePage />} />
//           <Route path="*" element={<LoginForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import WelcomePage from './pages/login';  // Page de connexion
import PrivateRoute from './pages/PrivateRoute'; // Route privée
import RegisterForm from './pages/register'; // Page d'inscription
import Dashboard from './pages/dashboard';   // Tableau de bord
import LoginForm from './pages/login';  // Formulaire de connexion (si différent de WelcomePage)

function App() {
  return (
    <Router>
      {/* <div className="app-root"> */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>  
      {/* </div> */}
    </Router>
  );
}

export default App;

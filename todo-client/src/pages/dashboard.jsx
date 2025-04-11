import React from 'react';

import { useNavigate } from 'react-router-dom';
  const Dashboard = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('auth_token');
      navigate('/login');
    };
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de bord</h1>

        {/* Section Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Utilisateurs connectés</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">42</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Utilisateurs enregistrés</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">1 234</p>
          </div>
        </div>

        {/* Section Logs et Historique */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Log de connexion</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-600">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3">Date</th>
                    <th className="p-3">Utilisateur</th>
                    <th className="p-3">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">10/04/2025 14:32</td>
                    <td className="p-3">jean.dupont</td>
                    <td className="p-3 text-green-600">Succès</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">10/04/2025 14:30</td>
                    <td className="p-3">marie.leroy</td>
                    <td className="p-3 text-red-600">Échec</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Historique</h2>
            <ul className="space-y-3">
              <li className="text-gray-600">10/04/2025 14:00 - Nouvel utilisateur enregistré : paul.martin</li>
              <li className="text-gray-600">10/04/2025 13:45 - Déconnexion : sophie.durand</li>
              <li className="text-gray-600">10/04/2025 13:30 - Mise à jour profil : lucie.petit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
// import React, { createContext, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';

// import FirstP from './components/FirstPage';
// import WelcomePage from './components/WelcomePage'; // Assurez-vous que l'importation est là
// import Profile from './components/Profile'; // Assurez-vous que l'importation est là

// // Créer le contexte d'authentification
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // État pour stocker les informations de l'utilisateur

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthProvider> {/* Enveloppez les routes avec AuthProvider */}
//       <Router>
//         <Routes>
//           <Route path="/" element={<FirstP />} />
//           <Route path="/welcomePage" element={<WelcomePage />} />
//           <Route path="/Profile" element={<Profile />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   </React.StrictMode>
// );



import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import FirstP from './components/FirstPage'; // Assurez-vous que le chemin est correct
import WelcomePage from './components/WelcomePage'; // Assurez-vous que le chemin est correct
import Profile from './components/Profile'; // Assurez-vous que le chemin est correct

// Créer le contexte d'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État pour stocker les informations de l'utilisateur

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FirstP />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);








 // <React.StrictMode>
  //   <BrowserRouter>
  //   <FirstP/>
    
    
  //   </BrowserRouter>
  //         {/* <Route path="/" element={<LoginForm />} />
  //         <Route path="/register" element={<RegisterForm />} />
  //         <Route path="/login" element={<LoginForm />} />
  //         <Route path="/welcomePage" element={<WelcomePage />} /> */}
  //       {/* <Profile/>
  //       <Sidebar/> */}
        
  // </React.StrictMode>
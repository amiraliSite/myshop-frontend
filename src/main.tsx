import './utils/axiosInterceptor';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import Login from './componets/Login';
import './index.css';


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />


        <Route path="/" element={<App />} />


        <Route path="/user-dashboard" element={<App />} />


        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
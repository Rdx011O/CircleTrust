import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useEffect } from 'react';

import './index.css';

// Protected Route wrapper component
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Redirects logged in users away from auth pages
function PublicRoute({ children }) {
  const { user } = useAuth();

  if (user) {
    // Redirect to the web-app
    window.location.href = 'http://localhost:3000'; // Replace port 3000 with your actual web-app port
    return null;
  }

  return children;
}

function AppRoutes() {
  const RedirectToWebApp = () => {
    useEffect(() => {
      window.location.href = 'http://localhost:3000';
    }, []);
    return null;
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <Home />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Import Pages
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import EventPage from './pages/EventPage/EventPage';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage';
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  // Handle login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar or Menu */}
        <nav>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          )}
        </nav>

        {/* Main Content */}
        <Routes> {/* Switch is replaced with Routes */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/event/:eventId" element={<EventDetailsPage />} />

          {/* Redirect to login page if no match */}
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/components/RegisterSection.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/RegisterSection.css'; 

const RegisterSection: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }

    // Giả lập đăng ký thành công
    console.log('Đăng ký thành công:', { username, email });
    alert('Đăng ký thành công!');
    navigate('/login'); // Điều hướng sau đăng ký
  };

  return (
    <div className="login-section">
      <h2>REGISTER</h2>
      <p>
        Create an account to track orders, save favorites, and more!
      </p>

      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        {/* Username */}
        <div className="input-group">
          <label htmlFor="reg-username">Username</label>
          <input
            type="text"
            id="reg-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Choose a username"
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="reg-password">Password</label>
          <input
            type="password"
            id="reg-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter a password"
          />
        </div>

        {/* Confirm Password */}
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Re-enter your password"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="login-btn">REGISTER</button>

        {/* Link về login */}
        <p style={{ color: 'black' }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterSection;

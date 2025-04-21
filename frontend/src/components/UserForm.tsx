// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import '../styles/UserForm.css';
import { User, UserInput } from '../types/User';

type Props = {
  initialData?: User;
  onSubmit: (user: UserInput | User) => void;
  onCancel: () => void;
};

const UserForm: React.FC<Props> = ({ initialData, onSubmit, onCancel }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (initialData) {
      setUsername(initialData.username || '');
      setEmail(initialData.email || '');
      setPhone(initialData.phone || '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!initialData && password !== confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }

    const userData = initialData
      ? { id: initialData.id, username, email, phone }
      : { username, email, phone, password };

    onSubmit(userData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h3>{initialData ? 'Chỉnh sửa người dùng' : 'Thêm người dùng'}</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Tên tài khoản"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Địa chỉ email"
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Số điện thoại"
        />
      </div>

      {!initialData && (
        <>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Mật khẩu"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Xác nhận mật khẩu"
            />
          </div>
        </>
      )}

      <div className="form-actions">
        <button type="submit" className="btn-save">
          {initialData ? 'Lưu' : 'Thêm'}
        </button>
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Huỷ
        </button>
      </div>
    </form>
  );
};

export default UserForm;

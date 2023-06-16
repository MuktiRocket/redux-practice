import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginApi } from '../redux/actions/loginAction';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      password,
    };
    LoginApi(data, dispatch);
    if (user) {
      navigate("/dashboard")
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ width: '50%', marginBottom: '10px' }}
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="password"
          style={{ width: '50%', marginBottom: '10px' }}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" style={{ width: '100px' }}>
          LoginPage
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

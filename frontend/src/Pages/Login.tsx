import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [userType, setUserType] = useState<'government' | 'customer'>('government');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful, navigate to the dashboard
        navigate('/dashboard');
      } else {
        // Set an error message if the login wasn't successful
        setErrorMessage(response.data.detail || 'Login failed');
      }
    } catch (error: any) {
      if (error.response) {
        // Set error message if an error occurred
        setErrorMessage(error.response.data.detail || 'Login failed');
      } else {
        setErrorMessage('An error occurred while logging in.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen">
      {/* Selection for User Type */}
      <div className="flex justify-center mt-6 mb-4">
        <label className="mr-6">
          <input
            type="radio"
            name="userType"
            value="government"
            checked={userType === 'government'}
            onChange={() => setUserType('government')}
            className="mr-2"
          />
          Government Official
        </label>

        <label>
          <input
            type="radio"
            name="userType"
            value="customer"
            checked={userType === 'customer'}
            onChange={() => setUserType('customer')}
            className="mr-2"
          />
          Customer
        </label>
      </div>

      {/* Login Form */}
      {userType === 'government' && (
        <div className="w-full max-w-md p-10 mt-5 border-2 border-blue-500 rounded-md shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                E-mail ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your E-mail Address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

            <button
              type="submit"
              className="w-full py-2 mt-7 mb-6 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              LOG IN
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

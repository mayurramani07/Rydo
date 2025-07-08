import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [CaptainData, setCaptainData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <div className="mb-5 text-black text-2xl font-bold">Rydo Captain</div>

        <form onSubmit={submitHandler}>
          <h3 className='text-lg mb-2 font-medium'>Enter your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg mb-2 font-medium'>Enter your Password</h3>
          <input 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='Enter your password'
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-lg'
          >
            Captain Login
          </button>
        </form>

        <p className='text-center mt-3'>
          Not a captain?{' '}
          <Link to='/login' className='text-blue-600'>
            User Login Here
          </Link>
        </p>

        <p className='text-center mt-60'>
          New Captain?{' '}
          <Link to='/captain-signup' className='text-blue-600'>
            Sign up as Captain
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainLogin;

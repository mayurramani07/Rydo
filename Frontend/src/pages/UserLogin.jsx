import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({})

  const submitHandler = (e)=> {
    e.preventDefault();
    setUserData ({
      email:email,
      password:password,
    })
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <div className="mb-5 text-black text-2xl font-bold">Rydo</div>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
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
            Login
          </button>
        </form>

        <p className='text-center mt-3'>
          New Here?{' '}
          <Link to='/signup' className='text-blue-600'>
            Create a new account
          </Link>
        </p>
      </div>

      <div>
        <Link to = '/captain-login'
          className='bg-[#111] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

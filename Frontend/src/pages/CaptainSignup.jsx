import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      firstName,
      lastName,
      email,
      password,
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <div className="mb-5 text-black text-2xl font-bold">Rydo Captain</div>

        <form onSubmit={submitHandler}>
          <h3 className='text-lg mb-2 font-medium'>Enter Your Name</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              placeholder='First Name'
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              placeholder='Last Name'
            />
          </div>

          <h3 className='text-lg mb-2 font-medium'>Enter Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='captain@example.com'
          />

          <h3 className='text-lg mb-2 font-medium'>Create a Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Create a secure password'
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-lg'
          >
            Sign Up as Captain
          </button>
        </form>

        <p className='text-center mt-3'>
          Already a captain?{' '}
          <Link to='/captain-login' className='text-blue-600'>
            Login here
          </Link>
        </p>
      </div>

      <div>
        <Link to='/login'
          className='bg-[#111] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'
        >
          Go back to User Login
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;

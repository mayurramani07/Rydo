import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        navigate('/home2');
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please check your network or backend.");
    }
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <div className="mb-5 text-black text-2xl font-bold">Rydo</div>

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
            placeholder='email@example.com'
          />

          <h3 className='text-lg mb-2 font-medium'>Create a Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Choose a strong password'
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-lg'
          >
            SignUp
          </button>
        </form>

        <p className='text-center mt-3'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-600'>
            Login here
          </Link>
        </p>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='bg-[#111] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;

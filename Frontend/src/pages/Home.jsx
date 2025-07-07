import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')`,
      }}
    >
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-opacity-60">
        <div className="ml-6 text-black text-2xl font-bold ">
          Rydo
        </div>

        <div className="bg-white py-7 px-4">
          <h2 className="text-3xl font-bold text-center">Get Started with Rydo</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

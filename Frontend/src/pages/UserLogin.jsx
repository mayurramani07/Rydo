import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
        <div>
            <div className="mb-15 text-black text-2xl font-bold ">
          Rydo
        </div>
        <form>
            <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
            <input 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com'>
            </input>
            <h3 className='text-lg mb-2 font-medium'>Enter your Password</h3>
            <input 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='Enter your password'>
            </input>
    <button
    className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>  

        </form>
        </div>
        <div>
            <button
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            >Sign in as Captain</button>
        </div>
    </div>

  )
}

export default UserLogin
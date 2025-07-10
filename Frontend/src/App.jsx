import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home2 from './pages/Home2'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<UserLogin />} /> 
        <Route path='/signup' element={<UserSignup />} /> 
        <Route path='/captain-login' element={<CaptainLogin />} /> 
        <Route path='/captain-signup' element={<CaptainSignup />} /> 
        <Route path='/Home2' element={
          <UserProtectWrapper>
            <Home2/>
          </UserProtectWrapper>
          
          } /> 

          <Route path = '/user/logout' element={ <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
          } />

      </Routes>

    </div>
  )
}

export default App
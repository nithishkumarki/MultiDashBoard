import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginSignUp from './Pages/LoginSignUp/LoginSignUp'
import DashBoard from './Pages/DashBoard/DashBoard'

const App = () => {
  return (
    <div>
      <BrowserRouter>

         <Routes>
          <Route path='/' element={<LoginSignUp/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
         </Routes>
         
      </BrowserRouter>

   </div>
  )
}

export default App
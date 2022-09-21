import React from 'react'
import ReactDOM from 'react-dom/client'
import  {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './index.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import App from './App'
import Products from './components/Products'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path='/home' element={<App/>} />
        <Route path='/product/:id' element={<Products/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<h3>Error 404</h3>} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)


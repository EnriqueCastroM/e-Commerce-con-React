import React from 'react'
import {Link} from "react-router-dom"

const OptionsNavbar = () => {
  return (
    <div className="links-container">
                
                <Link to={'/signin'} >
                  Login
                </Link>
                
                <Link to={'/signup'}>
                  
                </Link>

            </div>
  )
}

export default OptionsNavbar
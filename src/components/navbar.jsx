import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OptionsNavbar from './OptionsNavbar'


const Navbar = ({handleInput,search}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [product, setProduct] = useState([]);
    

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <>
            <div className='nav'>
                <Link to={'/home'} >
                    <div className='icon-container'>
                       
                    </div>
                    <div className="title-container">
                        <h1>E-Commerce con React</h1>
                    </div>
                </Link>
                <div className={`right-container ${navbarOpen ? "showMenu" : ""}`}>
                    <div className="search-container" >
                        <form action="/">

                            <input value={search} onChange={handleInput} type="text" placeholder='Buscar..' name="search" />

                        </form>
                    </div>
                    <OptionsNavbar />
                </div>
                <i className="menu-toggle fas fa-bars" onClick={handleToggle}></i>
            </div>
        </>
    )
}

export default Navbar
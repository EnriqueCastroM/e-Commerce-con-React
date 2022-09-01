import './App.css';
import Products from './components/products';
import Product from './components/product';
import NavBar from './components/navbar';
import React from 'react';
import {useState, useEffect} from 'react'


import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";


function App() {

 

  return (
    
    <div className="App">
    <Products/>
    </div>
  );
}

export default App;

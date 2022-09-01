import * as React from 'react';
import {useState, useEffect} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './product';
import axios from 'axios';
import NavBar from './navbar';

   
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 

export default function Products() {
//setear los hooks useState
const [ items, setItems ] = useState([])
const [tablaItems, setTablaItems] = useState([])
const [ search, setSearch ] = useState("")   

//función para traer los datos de la API
const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item'

const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setItems(data)
    setTablaItems(data)
  }

 //función de búsqueda
const searcher = (value) => {
    console.log(value)  
    setSearch(value)
    filter(value)
} 

const filter= (terminoBusqueda)=>{
 const results = !search ? items : tablaItems.filter((dato)=> dato?.product_name?.toLowerCase().includes(search?.toLocaleLowerCase()))
  setItems(results)
}

//  //metodo de filtrado 2   
//  const results = !search ? items : items.filter((dato)=> dato?.product_name?.toLowerCase().includes(search?.toLocaleLowerCase()))

 useEffect( ()=> {
  showData()
}, [])

  return (
       
    
      <Box sx={{ flexGrow: 1 }}>
      
        <NavBar searcher={searcher} search={search}/>      
       
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { items.map( (item) => (
                  <Grid item xs={2} sm={4} md={4} key={item._id}>
                  <Product item={item}/>
                  </Grid>                    
                ))}
         
      </Grid>
      </Box>
      
              
            
    
  );
}





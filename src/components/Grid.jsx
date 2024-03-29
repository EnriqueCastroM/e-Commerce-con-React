import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from './Item'
import Pagination from './Pagination'
import { trackPromise } from 'react-promise-tracker';
import "../grid.css";
import LoadingIndicator from './LoadingIndicator';

const Grid = ({search}) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [option, setOption] = useState("all");
  const [dataItem, setData] = useState([]);
  const [itemsxPagina, setItemsxPagina] = useState(12);

  const filter = items.filter((dato) =>  dato.product_name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    trackPromise(
      getItems().then(item => {
        const itemsFiltrados = item
          .filter(item => item.image)
          .filter(item => item.image.includes(".jpg") || item.image.includes(".png"));
        setItems(shuffle(itemsFiltrados));
        setData(itemsFiltrados); //Guardamos la información obtenida para no tener que llamar a la API muchas veces, solo una vez
      })
    )
  }, []);

  useEffect(() => {
    console.log(option == "news");
    if (option == "news") {
      const dates = items.slice();
      let sort_date = dates.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }).reverse();
      // Definimos que solo se vean los 10 más nuevos y reseteamos los demás valores
      setPage(0);
      setItems(sort_date);
      setItemsxPagina(12);
    }
    else{
      // Reseteamos los demás valores para que se vean todos
      setPage(0);
      setItems(shuffle(dataItem));
      setItemsxPagina(12);
    }
  }, [option]);

  //Hace un mezclado random del array
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  const getItems = () => {
    const promise = new Promise((resolve, reject) => {
      const url = `https://json-server-jwt-production.up.railway.app/items`;
      resolve(axios.get(url).then(
        response => response.data
      ))
    });
    return promise;
  }

  const changePage = (num) => {
    return setPage(num);
  }

  const handleOption = opc => {
    setOption(opc);
  }

  return (
    <>
      <div className="body-grid">
      <LoadingIndicator />
        <div className="grid-container">
          {
            
            !search ?items.slice(page, page + itemsxPagina)
            .map(item => (
              <Item key={item._id} data={item} />
            )) : filter.map(item => (
              <Item key={item._id} data={item} />
            )) 
            

          }
        </div>
        <div className="options-container">
          <button className={`all ${option == "all" ? "selected" : ""}`} onClick={() => handleOption("all")}></button>
          <br />
          <button className={`news ${option == "news" ? "selected" : ""}`} onClick={() => handleOption("news")}></button>
        </div>
       
        
        {
          // Se va mostrar la paginación solo si se elige la opción de Todos los Productos
          option == "all" ? <Pagination changePage={changePage} items={items} itemsPerPage={itemsxPagina} /> : ""
        }
      </div>
    </>
  )
}

export default Grid
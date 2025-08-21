import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerts } from '../functions';

const ShowProducts = () => {
    const url='http://api-products.run';
    const[products,setProducts]= useState([]);
    const [id,setId]= useState('');
    const [nombre,setNombre]= useState('');
    const [descripcion,setDescripcion]= useState('');
    const [precio,setPrecio]= useState('');
    const [operacion,setOperacion]= useState('');
    const [titulo,setTitulo]= useState('');

    useEffect( () => {
        getProducts();
    },[]);

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }



  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-md-4 offset-md-4'>
                <div className='d-grid mx-auto'>
                    <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts '>
                        <i className='fa-solid fa-circle-plus'></i> Añadir
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr><th>#</th><th>PRODUCTO</th><th>DESCRIPCION</th><th>PRECIO</th></tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {products.map((product,i)=>(
                                <tr key={product.id}>
                                    <td>{(i+1)}</td>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>${new Intl.NumberFormat('es-mx').format(product.precio)}</td>
                                    <td>
                                        <button className='btn btn-warning'>
                                            <i className='fa-solid fa-edit'></i>
                                        </button>
                                        &nbsp;
                                        <button className='btn btn-danger'>
                                            <i className='fa-solid fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
      <div className='modal fade'>
        
      </div>
   </div>
   )};

export default ShowProducts

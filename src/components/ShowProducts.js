import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerts } from '../functions';

const ShowProducts = () => {
    const url='http://api-products.run';
    const[products,setProducts]= useState([]);
    const [id,setId]= useState('');
    const [name,setName]= useState('');
    const [description,setDescription]= useState('');
    const [price,setPrice]= useState('');
    const [operation,setOperation]= useState('');
    const [title,setTitle]= useState('');

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
                    <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                        <i className='fa-solid fa-circle-plus'></i> Añadir
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-8 offset-md-2'>
                <table className='table table-bordered'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map( (product,index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                        <i className='fa-solid fa-edit'></i>
                                    </button>
                                    &nbsp;&nbsp;
                                    <button className='btn btn-danger'>
                                        <i className='fa-solid fa-trash'></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      <div id='modalProducts' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header bg-dark'>
                    <h5 className='modal-title text-white'>{title}</h5>
                    <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className='modal-body'>
                    <form>
                        <input type='hidden' id='id' value={id}/>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input type='text' id='name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Descripción</label>
                            <input type='text' id='description' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Precio</label>
                            <input type='number' id='price' className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-primary'>
                        Guardar
                    </button>
                    <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
      </div>
   </div>
   )};

export default ShowProducts

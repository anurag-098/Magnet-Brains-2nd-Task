import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
const AllProduct = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/getProducts")
      .then((res) => setProducts(res.data.data));
  }, []);

  
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
            <div class="container-fluid">
                <Link to={'/'} className="navbar-brand">E-com App</Link>
                <button> <Link style={{display:'flex',alignItems:'center'}} to={'/cart'}>Cart <ShoppingCartIcon style={{fontSize:'20px',marginLeft:'5px'}}/></Link>   </button>
        </div>
</nav>
        
        <h1 style={{marginBottom:'1.25rem', marginTop:'1.25rem'}}>Products</h1>   
       
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px',width:'80%',margin:'0 auto'}}>
        {products&&products.map((product) => (
          <Product key={product.id} product={product}  />
        ))}
        </div>
       
      
    </div>
  );
};

export default AllProduct;
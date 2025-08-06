import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../Redux/CartSlice';
import NavBar from '../Router/NavBar'
import Footer from '../Router/Footer'
import '../Contents/Bottle.css'
const Bottles1 = () => {

    const cartProduct = useSelector((state) => state.mycart)

    const dispatch = useDispatch()

    const addCart = (product) => {
        dispatch(addToCart(product))
    }

    const deleteCart = (product) => {
        dispatch(deleteFromCart(product))
    }

    const[bottle, setBottle]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:4000/allproduct`).then((res)=>res.json()).then((data)=>{
            if(Array.isArray(data)){
                setBottle(data)}
        })
    })

   
    
    return (
        <div >
            <NavBar></NavBar>
            <section className='container' style={{ color: "black" }}>
  <h1>Bottles</h1>
  <h5>Haven't found your emotional support water bottle yet? Browse water bottles that fit your needs here.</h5>

 
  <div className="row">
    <div className="col-12 product-grid">
      {bottle.slice(0, 14).map((product, index) => (
        <div key={product._id || index} className="product-card">
          <Link style={{ textDecoration: 'none', color: "black" }}>
            <div className="product-image">
              <img src={product.image} width={250} alt={`bottle-${index}`} />
            </div>
            <h4>{product.title}</h4>
            <h6>{product.ds}</h6>
            <h6>{product.price}</h6>
          </Link>
          {cartProduct.find((item) => item._id === product._id) ? (
            <button className="btn-remove" onClick={() => deleteCart(product)}>Added to Cart</button>
          ) : (
            <button className="btn-add" onClick={() => addCart(product)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  </div>

  <h2>Accessories</h2>
  <div className="row">
    <div className="col-12 product-grid">
      {bottle.slice(5).map((product, index) => (
        <div key={product._id || index + 5} className="product-card">
          <Link style={{ textDecoration: 'none', color: "black" }}>
            <div className="product-image">
              <img src={product.image} width={250} alt={`bottle-`} />
            </div>
            <h4>{product.title}</h4>
            <h6>{product.ds}</h6>
            <h6>{product.price}</h6>
          </Link>
          {cartProduct.find((item) => item._id === product._id) ? (
            <button className="btn-remove" onClick={() => deleteCart(product)}>Added to Cart</button>
          ) : (
            <button className="btn-add" onClick={() => addCart(product)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

            <Footer />
        </div>
    )
}

export default Bottles1

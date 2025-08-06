import NavBar from '../Router/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../Router/Footer'
import '../Contents/Access.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../Redux/CartSlice'
import { useEffect, useState } from 'react'

const Bottles = () => {
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
            fetch(`http://localhost:4000/shopall`).then((res)=>res.json()).then((data)=>{
                if(Array.isArray(data)){
                    setBottle(data)}
            })
        })

    
   
    return (
        <div>
            <NavBar />

            <section className='container' style={{ color: "black" }}>
                <div className="container" style={{ margin: "20px" }}>
                    <h1 style={{ textAlign: "left" }}>Shop all</h1>

                    <h5 style={{ textAlign: "left" }}>Discover a world of brilliant hydration.</h5>
                    <div className="row " style={{ textAlign: "center" }}>
                        <div className="product-grid">
                            {bottle.slice(0,10).map((product,index) => (
                                <div key={product._id || index} className="product-card">
                                    <Link style={{ textDecoration: "none", color: "black" }}>
                                        <div className="product-image">
                                            <img src={product.image} width={300} alt="bottle" />
                                        </div>
                                        <h4>{product.title}</h4>
                                        <div>{product.price}</div>
                                        <div>{product.ds}</div>
                                    </Link>
                                    {cartProduct.find((item) => item._id === product._id) ? (
                                    <button className="btn-remove" onClick={() => deleteCart(product)}>
                                        Added to Cart
                                    </button>
                                ) : (
                                    <button className="btn-add" onClick={() => addCart(product)}>
                                        Add to Cart
                                    </button>
                                )}
                                </div>
                            ))}
                            
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            <section className='container' style={{ color: "black" }}>
                <div className="container" style={{ margin: "20px" }}>
                    <h1 style={{ textAlign: "left" }}>Accessories</h1>

                    <div className="row " style={{ textAlign: "center" }}>
                        <div className="product-grid">
                            {bottle.slice(10).map((product,index) => (
                                <div key={product._id || index} className="product-card">
                                    <Link style={{ textDecoration: "none", color: "black" }}>
                                        <div className="product-image">
                                            <img src={product.image} width={300} alt="bottle" />
                                        </div>
                                        <h4>{product.title}</h4>
                                        <div>{product.price}</div>
                                        <div>{product.ds}</div>
                                    </Link>
                                    {cartProduct.find((item) => item._id === product._id) ? (
                                    <button className="btn-remove" onClick={() => deleteCart(product)}>
                                        Added to Cart
                                    </button>
                                ) : (
                                    <button className="btn-add" onClick={() => addCart(product)}>
                                        Add to Cart
                                    </button>
                                )}
                                </div>
                            ))}
                            
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Bottles;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import pitcher from '../Images/PAMB190A.png';
// import pitcher1 from '../Images/PNAMB190B.webp';
// import access1 from '../Images/access1.webp';
// import access2 from '../Images/access11.webp';
import NavBar from '../Router/NavBar';
import Footer from '../Router/Footer';
import '../Contents/Pitchers.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../Redux/CartSlice';
const Pitchers = () => {
    const cartProduct = useSelector((state) => state.mycart)

    const dispatch = useDispatch()

    const addCart = (product) => {                                                                  
        dispatch(addToCart(product))
    }

    const deleteCart = (product) => {
        dispatch(deleteFromCart(product))
    }

    const [pitchers,setPitchers]= useState([])
    

     useEffect(()=>{
            fetch(`http://localhost:4000/pitcher`).then((res)=>res.json()).then((data)=>{
                if(Array.isArray(data)){
                    setPitchers(data)
                  }
            })
        })
  // const pitchers= [
  //   {
  //     id: 1,
  //     img: pitcher,
  //     title: "LARQ pitcher PureVis",
  //     inform: "Granite White 23 oz 34 oz",
  //     inform1: "Hydration tracking, Self cleaning, Filtration",
  //     price: "$114"
  //   },
  //   {
  //     id: 2,
  //     img: pitcher1,
  //     title: "LARQ Pitcher",
  //     inform: "Granite White 23 oz 34 oz",
  //     inform1: "Hydration tracking, Self cleaning, Filtration",
  //     price: "$114"
  //   }
  // ];
  // const Access = [
  //   {
  //     id: 3,
  //     img: access1,
  //     title: "LARQ Pitcher",
  //     inform: "Granite White 23 oz 34 oz",
  //     inform1: "Hydration tracking, Self cleaning, Filtration",
  //     price: "$114"
  //   },
  //   {
  //     id: 4,
  //     img: access2,
  //     title: "LARQ Pitcher",
  //     inform: "Granite White 23 oz 34 oz",
  //     inform1: "Hydration tracking, Self cleaning, Filtration",
  //     price: "$114"
  //   }
  // ]

  return (
    <div>
      <NavBar></NavBar>

      <section className='container text-dark'>
        <h1>Pitchers</h1>
        <h6>
          If you're not filtering your tap water before drinking, you might want to think twice!
          Remove lead, chlorine, and more for improved taste and health.
        </h6>
       <div className='product-grid'>
          {pitchers.slice(0,2).map((product,index) => (
            <div key={product._id || index} className='product-card'>
              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <div className='product-image'>
                  <img src={product.image} width={300} alt={product.title} />
                </div>
                <h4 className="px-3 mt-2 text-center">{product.title}</h4>
                <div className="px-3 text-center">{product.ds}</div>
                <div className="px-3 text-center">{product.price}</div>
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

{/* <div className='container'>
        <h1>Accessories</h1>
        <h6 style={{textAlign:"left"}}>Customize your on-the-go hydration with accessories.</h6>
        <div className='grid-container'>
          {Access.map((product) => (
            <div key={product.id} className='card-box'>
              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <div className='image-box'>
                  <img src={product.img} width={300} alt={product.title} />
                </div>
                <h4 className="px-3 mt-2 text-center">{product.title}</h4>
                <div className="px-3 text-center">{product.inform}</div>
                <div className="px-3 text-center">{product.inform1}</div>
                <div className="px-3 text-center">{product.price}</div>
              </Link>
              {cartProduct.find((item) => item.id === product.id) ? (
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
</div> */}
      </section>
      <section className='container text-dark'>
        <h1>Accessories</h1>
        
       <div className='product-grid'>
          {pitchers.slice(2).map((product,index) => (
            <div key={product._id || index} className='product-card'>
              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <div className='product-image'>
                  <img src={product.image} width={300} alt={product.title} />
                </div>
                <h4 className="px-3 mt-2 text-center">{product.title}</h4>
                <div className="px-3 text-center">{product.ds}</div>
                <div className="px-3 text-center">{product.price}</div>
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


      </section>
      <Footer></Footer>
    </div>
  );
};

export default Pitchers;

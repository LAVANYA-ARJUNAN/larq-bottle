import React, { useEffect, useState } from 'react';
import '../admin/update.css';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const Shopupdate = () => {
  const { id } = useParams();
  const [productDatab, setProductDatab] = useState({
    image: "",
    title: "",
    ds: "",
    price: "",
  });
  useEffect(() => {
    fetch(`http://localhost:4000/shopone/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDatab(data));
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const ds = form.ds.value;
    const price = form.price.value;

    const productObj = {
      image,
      title,
      ds,
      price,
    };
    console.log(productObj);
    fetch(`http://localhost:4000/shopUpdate/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("bottles updates successfully");
        setTimeout(() => {
          window.location.href = "/shops";
        }, 1500); 
      });
  };


  return (
    <div className="update-container" style={{margin:"0px"}}>     
    <Nav/>
      <h1 id="head">Form Update</h1>
      <form className="update-form" onSubmit={handleUpdate}>
        <label value="title">Title</label>
        <input type="text" name="title" id='title' className="form-control input-field" defaultValue={productDatab.title} />

        <label value="image">Image</label>
        <input type="text" name="image" id='image' className="form-control input-field" defaultValue={productDatab.image}/>

        <label value="price">Price</label>
        <input type="text" name="price" id='price' className="form-control input-field" defaultValue={productDatab.price}/>
        <label value="ds">Description</label>
        <input type="text" name="ds" id='ds' className="form-control input-field" defaultValue={productDatab.ds}/>

        <button type="submit" className="submit-btn">Update</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Shopupdate

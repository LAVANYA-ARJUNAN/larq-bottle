import React from 'react';
import '../admin/update.css';
import Nav from './Nav';
import { toast, ToastContainer } from 'react-toastify';


const UploadShop = () => {
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const file = form.image.files[0]; // Local file
    const imageLink = form.imageLink.value; // Image URL
    const title = form.title.value;
    const ds = form.ds.value;
    const price = form.price.value;

    if (!title || !ds || !price || (!file && !imageLink)) {
      toast.warn("Fill all the fields including either image or link");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("ds", ds);
    formData.append("price", price);
    formData.append("quantity", 1);

    if (file) {
      formData.append("image", file); // local upload
    } else {
      formData.append("imageLink", imageLink); // image link
    }

    fetch("http://localhost:4000/shop", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Product Added Successfully");
        form.reset();
        setTimeout(() => {
          window.location.href = "/shops";
        }, 1500);
      });
  };

  return (
    <div className="update-container" style={{ margin: "0px" }}>
      <Nav />
      <h1 id="head">Form Upload</h1>
      <form className="update-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Title</label>
        <input type="text" name="title" className="form-control input-field" />

        <label>Upload Image (Local)</label>
        <input type="file" name="image" accept="image/*" className="form-control input-field" />

        <label>Or Paste Image URL</label>
        <input type="text" name="imageLink" placeholder="http://..." className="form-control input-field" />

        <label>Price</label>
        <input type="text" name="price" className="form-control input-field" />

        <label>Description</label>
        <input type="text" name="ds" className="form-control input-field" />

        <button type="submit" className="submit-btn">Upload</button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default UploadShop

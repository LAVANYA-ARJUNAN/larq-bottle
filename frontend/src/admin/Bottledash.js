import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import pic from '../Images/access1.webp';
import '../admin/Dashboard.css'
const Bottledash = () => {
    const [newItem, setNewItem] = useState([]);
    
      useEffect(() => {
        fetch(`http://localhost:4000/allproduct`,)
          .then((res) => res.json())
          .then((data) => setNewItem(data));
      }, []);

      const deletePro = (id) => {
          fetch(`http://localhost:4000/onedelete/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              toast.warning("Deleted successfully");
              setNewItem((prevItems) => prevItems.filter((item) => item._id !== id));
            });
        };
        const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    return imagePath.startsWith('/uploads/')
      ? `http://localhost:4000${imagePath}` 
      : imagePath; 
  };
  return (
    <div>
<button style={{backgroundColor:"black",position:"absolute",right:"10px"}}><Link to='/upload' style={{textDecoration:"none",color:"white"}}>Create</Link></button>

      <div className='dashboard-container'>
      <div className="sidebar">
              <div id="dash">
                <img src={pic} width={100} alt="logo"/>
              </div>
              <ul>
                <li><Link to="/bottles">Bottles</Link></li>
                <li><Link to="/pitcher">Pitchers</Link></li>
                <li><Link to="/shops">Shop all</Link></li>
                <li><Link to="/login">Logout</Link></li>
              </ul>
            </div>
           
      <table
        className='table'
        border={'1px'}
        style={{
          borderCollapse: "collapse",
          color: "black",
          width: "80%",
          marginLeft: "260px",
          marginRight: "10px",
          marginTop:"35px",
        }}
      >
        <thead >
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {newItem.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>
                <img src={getImageUrl(item.image)} alt='' width={100} />
              </td>
              <td>{item.price}</td>
              <td>{item.ds}</td>
              <td>
                <Link to={`/update/${item._id}`} style={{padding:"5px"}}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deletePro(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
    </div>
  )
}

export default Bottledash

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const Update = () => {
    const [data, setData] = useState({});
    const nav = useNavigate();
    
    const {id}= useParams();  
  useEffect(() => {
    axios.get(`http://localhost:3001/posts`)
      .then((res) => {setData(res.data);})
      .catch((err) => console.log(err));
  },[id]);

  const handleSubmit =(e)=> {
    e.preventDefault();
    axios.put(`http://localhost:3001/posts/${id}`, data)
      .then(() => {alert("yes");
        nav("/home"); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
       
          <label>Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data,title: e.target.value })}
            
            />
       
        
          <label>Content</label>
          <input
            value={data.content}
            onChange={(e) => setData({ ...data,content: e.target.value })}
            
            />
        
    <button type="submit" className="btn btn-success">Update</button>
      </form>
    </>
  );
};

export default Update;

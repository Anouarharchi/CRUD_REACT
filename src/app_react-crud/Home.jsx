import  { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Home(){
    const [data,setData] = useState([])
    useEffect(()=>{
axios.get('http://localhost:3001/posts')
.then(res =>{
    setData(res.data)
    console.log(res.data,"res,data")
})
.catch(err=> console.log(err,"err"))

    },[])
    console.log(data,"data")
    const nav = useNavigate()
    const EDIT = (id)=>{
        nav(`/update/${id}`)
    }
    const ADD =()=>{
        nav("/create")
    }
    const Delete=(id)=>{
        axios.delete(`http://localhost:3001/posts/${id}`)
        .then(()=>{
            setData(data.filter(post => post.id !== id))
        })
        .catch(err=>console.log(err))
    }
    return(
        <>
        <p>Home</p>
        <button className='btn btn-primary' onClick={ADD}>Create</button>
        <div className="container mt-5">
  <table className="table table-striped table-bordered table-hover text-center">
    <thead className="thead-dark">
      <tr>
        <th style={{ width: "10%" }}>ID</th>
        <th style={{ width: "40%" }}>Title</th>
        <th style={{ width: "30%" }}>Content</th>
        <th style={{ width: "20%" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((v) => (
        <tr key={v.id}>
          <td>{v.id}</td>
          <td>{v.title}</td>
          <td>{v.content}</td>
          <td>
            <button className="btn btn-danger me-2" onClick={() => Delete(v.id)}>
              DELETE
            </button>
            <button className="btn btn-success" onClick={() => EDIT(v.id)}>
              UPDATE
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </>
    )
}

export default Home ;
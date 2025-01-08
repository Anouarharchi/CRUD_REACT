import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
function Create(){
    const [title,setTitel] = useState("")
    const [content,setContent] = useState("")
    const nav = useNavigate();

    const HandlSubmit =(e)=>{
        e.preventDefault()
            axios.post("http://localhost:3001/posts",{title,content})
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err.data));
            setContent("")
            setTitel("")
            nav("/"); 


    }
    const back = useNavigate()
    const HOME =()=>{
        back("/")
    }
        return(
            <>
            <button className='btn btn-primary' onClick={HOME}>BACK</button>
            <div className="container mt-5">
            <h2 className="mb-4">Creation  Form</h2>
            <form onSubmit={HandlSubmit}>
            <div className="mb-3">

                <label className="form-label">TITEL</label><br/>
                <input className="form-control"
                type="text"
                placeholder="Titel"
                value={title}
                onChange={(e)=>setTitel(e.target.value)}
                /><br/>
                </div>
                <div className="mb-3">

                <label className="form-label">CONTENT</label><br/>
                <input className="form-control"
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                /><br/>
                </div>
                <button className="btn btn-primary " type="submit">Create</button>
            </form>
            </div>
            </>
    )
}

export default Create ;
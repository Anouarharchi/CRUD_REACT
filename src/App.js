//import :
// import Hello from "./react_exemples/Hello";
import React from "react";
import {BrowserRouter , Routes ,Route, Router}from 'react-router-dom'
import Home from "./app_react-crud/Home";
import Create from "./app_react-crud/create";
import Read from "./app_react-crud/read";
import Update from "./app_react-crud/update";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>
{/* component: */}
{/* <Hello/> */}
<BrowserRouter>
<Router basename="/CRUD_REACT">

<Routes >
  <Route path="/" element={<Home/>}></Route>
  <Route path="/create" element={<Create/>}></Route>
  <Route path="/update/:id" element={<Update/>}></Route>
  <Route path="/read/:id" element={<Read/>}></Route>
</Routes>
</Router>
</BrowserRouter>
</>
  );
}

export default App;

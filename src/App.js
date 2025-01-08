import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
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
      <BrowserRouter > 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

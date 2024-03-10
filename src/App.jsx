import React from "react";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./Pages/ContactForm";
import NavBar from "./Pages/NavBar";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route index="/" element={<Dashboard />} />
    <Route path="home" element={<Dashboard />} />
    <Route path="contact" element={<ContactForm/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

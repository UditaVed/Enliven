import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Blog/Blog";
import Navbar from "./components/Navbar";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Lawyer from "./Lawyer/Lawyer";
import NGO from "./NGO/NGO";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-serif">
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route exact path="/" element={<Hero />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/ngo" element={<NGO/>}></Route>
          <Route path="/lawyer" element={<Lawyer/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

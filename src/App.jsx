import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Blog/Blog";
import Navbar from "./components/Navbar";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Lawyer from "./Lawyer/Lawyer";
import NGO from "./NGO/NGO";
import Faqhome from "./Faqpage/Faqhome";
import New from "./Faqpage/New"; // Corrected import path
import Reply from "./Faqpage/Reply"; // Corrected import path

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-serif">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/question" element={<Faqhome />} />
          <Route path="/new" element={<New />} />
          <Route path="/view/:id" element={<Reply />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

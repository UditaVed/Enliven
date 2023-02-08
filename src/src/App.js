import "./App.css";
import Legal from "./components/legal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Legal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

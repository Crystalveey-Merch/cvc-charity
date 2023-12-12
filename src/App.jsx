import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";
import { Home, SupportUs } from "./Pages";
import "./App.css";
import { useState } from "react";

function App() {
  const [isFixed, setIsFixed] = useState(false);
  return (
    <div>
      <Header isFixed={isFixed} setIsFixed={setIsFixed} />
      <div className={` ${isFixed ? "mt-44" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support-us" element={<SupportUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

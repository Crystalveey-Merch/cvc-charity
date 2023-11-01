import { Routes, Route } from "react-router-dom";
import { Header } from "./Components";
import { Home } from "./Pages";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Header } from "./Components";
import { Home } from "./Pages";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

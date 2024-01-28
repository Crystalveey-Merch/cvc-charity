import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";
import { Home, SupportUs, OurWorkAndImpact } from "./Pages";
import { Contact } from "./Pages/Contact";
import { Contact2 } from "./Pages/Contact2";
import { Donate, Volunteer } from "./Pages/support-us";
import "./App.css";
import { useState } from "react";
import { SubscribeSec } from "./Components/HomeComps/SubscribeSec";

function App() {
  const [isFixed, setIsFixed] = useState(false);
  return (
    <div>
      <Header isFixed={isFixed} setIsFixed={setIsFixed} />
      <div className={` ${isFixed ? "mt-44" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/support-us/donate" element={<Donate />} />
          <Route path="/support-us/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/our-work-and-impact" element={<OurWorkAndImpact />} />
        </Routes>
      </div>
      <SubscribeSec />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      <h1>Paradise Nursery</h1>
      <button onClick={handleGetStarted}>Get Started</button>

      {showProducts && (
        <div>
          <h2>Featured Plants</h2>
          <ul>
            <li>Fiddle Leaf Fig</li>
            <li>Snake Plant</li>
            <li>Peace Lily</li>
          </ul>
        </div>
      )}

      <AboutUs />
    </div>
  );
}

export default App;


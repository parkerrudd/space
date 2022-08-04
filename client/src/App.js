import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NASA from "./components/NASA";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NASA />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;

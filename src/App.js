import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ThankYouPage from "./components/ThankyouPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you/:productName" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;

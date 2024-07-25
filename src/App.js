import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AppLayout from "./Components/AppLayout";
import Contact from "./Contact";

function App({ children }) {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Routes>
            <Route element={<Home />} path="/home" />
            <Route element={<Contact/>} path="/contact" />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;

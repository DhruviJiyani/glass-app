import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AppLayout from "./Components/AppLayout";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./Components/AppLayout/NotFound";
import Work from "./Work";

function App({ children }) {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="/home" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<About />} path="/about" />
            <Route element={<NotFound />} path="*" />
            <Route element={<Work />} path="/work" />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;

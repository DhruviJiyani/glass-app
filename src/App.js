import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AppLayout from "./Components/AppLayout";

function App({ children }) {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Routes>
            <Route element={<Home />} path="/home" />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;

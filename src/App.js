import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/AppLayout/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Header/>} path="/header" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

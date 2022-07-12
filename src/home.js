import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from "./Components/Page2";
import Homepage from "./Components/HomePage";

import "./styles.css";

function home() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" exact element={<Homepage />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}
export default home;

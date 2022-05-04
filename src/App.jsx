import React from 'react';
import RoutesComponent from "src/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer/>

      <RoutesComponent/>
    </Router>
  );
}

export default App;

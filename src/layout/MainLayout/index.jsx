import React from 'react';
import './style.scss';
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function MainLayout() {

  return (
    <>
      <Header />
        <div className="container">
          <Outlet />
        </div>
      <Footer />
    </>
  )
}

export default MainLayout;
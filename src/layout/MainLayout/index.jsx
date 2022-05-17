import React from 'react';
import './style.scss';

import { Outlet } from "react-router-dom";

import Header from "src/components/Header";
import Footer from "src/components/Footer";


function MainLayout() {

  return (
    <>
      <Header />
        <div className="container">
          <div className="main_content">
            <Outlet />
          </div>
        </div>
      <Footer />
    </>
  )
}

export default MainLayout;
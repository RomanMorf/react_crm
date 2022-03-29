import './style.scss';
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function MainLayout({auth}) {

  if (!auth) {
    return <Navigate to='/auth/login' replace />
  }

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
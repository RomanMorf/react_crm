import React from 'react';
import './style.scss';

import Promo from 'src/components/Landing/Promo';
import Footer from 'src/components/Landing/Footer';

function LandingPage() {
  return (
    <div className='landing'>
      <Promo />
      <Footer />
    </div>
  )
}

export default LandingPage;
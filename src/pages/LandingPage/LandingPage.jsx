import React, { useEffect, useState } from 'react';
import './style.scss';

import Promo from 'src/components/Landing/Promo';
import Footer from 'src/components/Landing/Footer';
import Cards from 'src/components/Landing/Cards';
import Delivery from 'src/components/Landing/Delivery';
import OurServices from 'src/components/Landing/OurServices';
import AboutUs from 'src/components/Landing/AboutUs';
import Contacts from 'src/components/Landing/Contacts';
import Navigate from 'src/components/Landing/Navigate';

function LandingPage() {
  const [links, setLinks] = useState([])

  const createMenuLinks = () => {
    const nodeLinks = document.getElementsByTagName('section')
    let linksArr = []

    for (let i = 0; i < nodeLinks.length; i++) {

      if (nodeLinks[i].id.length) {
        linksArr.push({
          title: `${nodeLinks[i].attributes.name.nodeValue}`,
          url: `#${nodeLinks[i].id}`,
        })
      }
    }

    setLinks(linksArr)
  }

  useEffect(() => {
    createMenuLinks()
  }, []);

  return (
    <div className='landing'>
      <Promo>
        <Navigate links={links}/>
      </Promo>
      <section id='about-us' name="О нас">
        <AboutUs />
      </section>
      <section>
        <Cards />
      </section>
      <section id='process' name="Процесс покупки">
        <Delivery />
      </section>
      <section id='our-services' name="Услуги">
        <OurServices />
      </section>
      <section id='contact-us' name="Обратная связь">
        <Contacts/>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage;
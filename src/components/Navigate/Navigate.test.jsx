import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render, screen } from '@testing-library/react';

import Navigate from '.'
import { links } from 'src/assets/menuLinks/links'

describe('Check <Navigate /> component', () => {

  it('Render Navigate without craching', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Navigate  />} />
        </Routes>
      </Router>
    )

  });

  it('All links correct render', () => {
    const container = render(
      <Router>
        <Routes>
          <Route path="/" element={<Navigate  />} />
        </Routes>
      </Router>
    )

    links.forEach( link => {
      const item = screen.getByText(link.name)
      const itemAttr = item.getAttribute('href')
      
      expect(item).toBeInTheDocument()
      expect(itemAttr).toEqual(link.path)
    })
  });

});


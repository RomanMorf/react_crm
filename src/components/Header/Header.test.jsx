import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from 'src/store';

import Header from './Header'

describe('Check <Header /> component', () => {
  it('Render Header without craching', () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Header  />} />
          </Routes>
        </Router>
      </Provider>
    )
  });

  it('Render LogOut button', () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Header  />} />
          </Routes>
        </Router>
      </Provider>
    )

    const btn = screen.getByText('Log out')

    expect(btn).toBeInTheDocument()
  });

});



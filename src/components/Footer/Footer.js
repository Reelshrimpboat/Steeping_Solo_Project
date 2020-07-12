import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    <p className="footerText">&copy; Cam Neely
    &emsp; &emsp;
      <Link to="/about">
        About This App
      </Link>
    </p>
  </footer>
);

export default Footer;

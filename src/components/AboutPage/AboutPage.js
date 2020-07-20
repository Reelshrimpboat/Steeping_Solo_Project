import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Welcome to Steeper an app made to help you brew the perfect cup of tea!
        This app can record, review and rate your favorite (or least favorite) teas, and lets you have quick access to any teas you currently own.
      </p>
    </div>
  </div>
);

export default AboutPage;

import React from 'react';
import ReactDOM from 'react-dom';
import {offers} from './mocks/offers.js';

import {App} from './components/app/app.jsx';
import {MapSection} from './components/map/map.jsx';

const init = () => {
  ReactDOM.render(
      <App offers={offers} />,
      document.querySelector(`#root`)
  );

  ReactDOM.render(<MapSection offers={offers} />, document.querySelector(`#map`));
};

init();
